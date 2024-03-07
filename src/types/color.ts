export type Color = {
  name: string;
  hex: string;
};

export type ColorWithNumbering = [string, Color];

export interface ArrangedColor extends Color {
  numbering: string;
  displayName: string;
  hue: string;
  lightness: string;
}

export type Filter = "hue" | "lightness";
