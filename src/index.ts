export function createElement(
  tag: string,
  props: object,
  ...children: HTMLElement[]
) {
  const element = document.createElement(tag);
  return element;
}
