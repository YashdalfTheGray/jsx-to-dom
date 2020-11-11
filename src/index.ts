export type FunctionalComponent = (
  props: object,
  ...children: HTMLElement[]
) => HTMLElement;

export default function createElement(
  tag: string | FunctionalComponent,
  props: object = {},
  ...children: HTMLElement[]
) {
  if (typeof tag === 'function') {
    return tag(props, ...children);
  }

  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (isEventHandler(key)) {
      element.addEventListener(extractEventName(key), value);
    } else {
      element.setAttribute(key, value.toString());
    }
  });

  children.forEach((child) => appendChildHelper(element, child));

  return element;
}

export function createFragment(_: object = {}, ...children: HTMLElement[]) {
  return children;
}

function appendChildHelper(
  parent: HTMLElement,
  children: string | HTMLElement | HTMLElement[]
) {
  if (Array.isArray(children)) {
    children.forEach((child) => appendChildHelper(parent, child));
  } else {
    parent.appendChild(
      typeof children === 'string'
        ? document.createTextNode(children)
        : children
    );
  }
}

export function isEventHandler(propName: string, windowObj = window) {
  return propName.startsWith('on') && propName.toLowerCase() in windowObj;
}

export function extractEventName(propName: string) {
  return propName.split('n')[1].toLowerCase();
}
