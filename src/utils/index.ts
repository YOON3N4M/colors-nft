import { colorsArr } from "@/constants/colors";
import { ArrangedColor, ColorWithNumbering, Filter } from "@/types/color";
import { ColorDocument } from "@/types/document";

// data/json에 있는 컬러 어레인지 함수
export function arrangeColorArray(colorArr: ColorWithNumbering[]) {
  const arranged = colorArr.map((color) => {
    const numbering = color[0];
    const lightness = numbering.substring(0, 2);
    const hue = numbering.substring(3, 5);
    const saturation = numbering.substring(5, 7);
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
      saturation,
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
    if (filter === "saturation") {
      return color.saturation === level;
    }
  });
  // console.log(filteredColor);
  return filteredColor;
}

export function suffleIndex(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0부터 i까지의 랜덤한 인덱스 선택
    [array[i], array[j]] = [array[j], array[i]]; // 요소 교환
  }
  return array;
}

export function isDark(lightness: string) {
  if (lightness === "11" || lightness === "12") {
    return false;
  } else {
    return true;
  }
}

export function calculateTimeDiffer(unixTime: number) {
  const currentTime = new Date().getTime();
  const timeDiffetSec = Math.abs((unixTime - currentTime) / 1000);

  return timeDiffetSec;
}

export function calculateRemainingTime(
  baseTime: number,
  targetTimeDifferMin: number
) {
  const targetUnixTime = baseTime + targetTimeDifferMin * 60 * 1000;
  const remainingTime = calculateTimeDiffer(targetUnixTime);

  return Math.round(remainingTime);
}

export function pickColors(numberings: string[]) {
  const arrangedColorList = arrangeColorArray(colorsArr);

  const result: ArrangedColor[] = [];

  numberings.forEach((numbering) => {
    const filtered = arrangedColorList.filter(
      (color) => color.numbering === numbering
    );
    result.push(filtered[0]);
  });

  return result;
}

export function sortByPurchaseCount(colorDocuments: ColorDocument[]) {
  colorDocuments.sort((a, b) => b.purchaseCount - a.purchaseCount);

  return colorDocuments;
}
