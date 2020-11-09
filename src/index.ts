export function createElement(
  tag: string,
  props: object = {},
  ...children: HTMLElement[]
) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (key.startsWith('on') && key.toLowerCase() in window) {
      element.addEventListener(key.split('n')[1].toLowerCase(), value);
    } else {
      element.setAttribute(key, value.toString());
    }
  });

  return element;
}
