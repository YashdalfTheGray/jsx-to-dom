# jsx-to-dom

A Typescript library that tries to build a complete enough JSX pragma function that outputs native DOM calls when used with Babel.js.

## Usage

Make sure that when you're using this library that the `createElement` function is in module scope. Then you're also going to need the `@babel/preset-react` preset or you can use just the `@babel/plugin-transform-react-jsx` if you don't want all of the rest of the React preset from Babel.

Once installed, configuring it is fairly simple and code snippets are included below for common configurations

```json
// .babelrc
{
  "presets": [
    [
      "@babel/preset-react",
      {
        "pragma": "createElement",
        "pragmaFrag": "createFragment",
      },
    ],
  ]
}

// or

{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "createElement",
        "pragmaFrag": "createFragment",
      }
    ]
  ]
}
```

Once you have this set up with Babel, you need to import `createElement` and optionally, `createFragment` from `@yashdalfthegray/jsx-to-dom`. As a point of clarification, `createElement` is a default export while `createFragment` is not.

```tsx
import createElement, { createFragment } from '@yashdalfthegray/jsx-to-dom';

// rest of your JSX/TSX code
```

This will then transpile your JSX into just `createElement` calls which, internally, call DOM operations to render HTML. This does mean that you need to run this library in production, it is not just a build tool.

## Caveats (so far)

The main caveat to realize here is that React brings, with it, a lot of things in addition to JSX, all of the virtual DOM stuff, event handling, component creation, etc. aren't part of this package so you'll have to find some way of handling that yourself.

A more technical caveat being functional references in attributes won't work properly, you need to pass in a function constant instead. For example,

```tsx
class MyComponent {
  public render() {
    return <div onClick={this.handleClick}>Some text</div>;
  }

  handleClick = () => console.log('div was clicked');
}
```

will not work since even though the code is transpiled, the `click` event for the element will be set to the string value, `"this.handleClick"` which won't refer to anything useful.

Instead, the supported way to do this would be to inline the function, as shown,

```tsx
class MyComponent {
  public render() {
    return <div onClick={() => console.log('div was clicked')}>Some text</div>;
  }
}
```

Now, the `click` event handler will be set to a function that will do the right things.
