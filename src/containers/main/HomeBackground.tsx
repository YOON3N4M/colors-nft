import ColorCard from "@/components/ColorCard";
import RollingBanner from "@/components/RollingBanner";
import { arrangedColorArray } from "@/constants/colors";
import { filterColor, suffleIndex } from "@/utils";
import React from "react";

export default function HomeBackground() {
  const bgColor = "white";
  return (
    <>
      <RollingBanner bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "11")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner direction="to right" bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "14")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "15")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner direction="to right" bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "16")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "15")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner direction="to right" bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "14")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "12")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner direction="to right" bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "11")).map(
          (color, idx) => (
            <ColorCard
              color={color}
              key={`${color.lightness}-${idx}`}
              type="text"
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
      <RollingBanner bg={bgColor}>
        {suffleIndex(filterColor(arrangedColorArray, "lightness", "11")).map(
          (color, idx) => (
            <ColorCard
              key={`${color.lightness}-${idx}`}
              type="text"
              color={color}
              comma={false}
              colorText={true}
            />
          )
        )}
      </RollingBanner>
    </>
  );
}
