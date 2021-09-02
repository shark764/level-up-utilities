export const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const humanize = (s: string): string =>
  s
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str: string) => str.toUpperCase());
