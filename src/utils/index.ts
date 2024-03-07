import { ArrangedColor, ColorWithNumbering, Filter } from "@/types/color";

// data/json에 있는 컬러 어레인지 함수
export function arrangeColorArray(colorArr: ColorWithNumbering[]) {
  const arranged = colorArr.map((color) => {
    const numbering = color[0];
    const hue = numbering.substring(3, 5);
    const lightness = numbering.substring(0, 2);
    const name = color[1].name;
    const displayName = name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const hex = color[1].hex;

    return {
      numbering,
      hue,
      lightness,
      name,
      displayName,
      hex,
    } as ArrangedColor;
  });
  return arranged;
}

export function filterColor(
  arrangedColorArray: ArrangedColor[],
  filter: Filter,
  level: string
) {
  const filteredColor = arrangedColorArray.filter((color) => {
    if (filter === "hue") {
      return color.hue === level;
    }

    if (filter === "lightness") {
      return color.lightness === level;
    }
  });
  console.log(filteredColor);
  return filteredColor;
}
