export default function createElement(
  tag: string,
  props: object = {},
  ...children: HTMLElement[]
) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (isEventHandler(key)) {
      element.addEventListener(extractEventName(key), value);
    } else {
      element.setAttribute(key, value.toString());
    }
  });

  children.forEach((child) => {
    element.appendChild(
      !!child.nodeType ? document.createTextNode(child.toString()) : child
    );
  });

  return element;
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
