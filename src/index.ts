export function createElement(
  tag: string,
  props: object = {},
  ...children: HTMLElement[]
) {
  const element = document.createElement(tag);

  Object.entries(props).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}
