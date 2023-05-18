export function titleGenerator(title?: string) {
  if (title) {
    document.title = `Boozt PLP | ${title}`;
  } else {
    document.title = 'Boozt PLP';
  }
}
