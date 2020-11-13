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
