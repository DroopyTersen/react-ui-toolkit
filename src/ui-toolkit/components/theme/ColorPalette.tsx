import React from "react";

export type ColorConfig = {
  color: string;
  text: "light" | "dark";
};

export interface ColorPaletteProps {
  colors: ColorConfig[];
  className?: string;
}
export function ColorPalette({ colors, className = "" }: ColorPaletteProps) {
  return (
    <div className={"w-50 d-flex flex-column " + className}>
      {colors.map((c) => (
        <ColorSwatch key={c.color} {...c} />
      ))}
    </div>
  );
}

interface ColorSwatchProps extends ColorConfig {
  className?: string;
}

export function ColorSwatch({ color, text = "dark", className = "" }: ColorSwatchProps) {
  return <div className={`p-4 ${color} text-${text} ${className}`}>{color}</div>;
}
