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

  return element;
}

export function isEventHandler(propName: string, windowObj = window) {
  return propName.startsWith('on') && propName.toLowerCase() in windowObj;
}

export function extractEventName(propName: string) {
  return propName.split('n')[1].toLowerCase();
}
