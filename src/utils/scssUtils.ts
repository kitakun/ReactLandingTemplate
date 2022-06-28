const PREFIX = "--";

export function getScssConstant(name: string) {
  let bodyStyles = window.getComputedStyle(document.body);
  return bodyStyles.getPropertyValue(PREFIX + name);
}
