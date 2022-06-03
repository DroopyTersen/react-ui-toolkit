import { setupStories } from "../_storybook/storybook.utils";
import { ColorConfig, ColorPalette, ColorPaletteProps } from "./ColorPalette";

const storyConfig = {
  title: "Design System",
  component: ColorPalette,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<ColorPaletteProps>(ColorPalette);

const THEME_COLORS: ColorConfig[] = [
  {
    color: "bg-primary",
    text: "light",
  },
  {
    color: "bg-secondary",
    text: "light",
  },
  {
    color: "bg-body",
    text: "dark",
  },
  {
    color: "bg-success",
    text: "light",
  },
  {
    color: "bg-info",
    text: "light",
  },
  {
    color: "bg-warning",
    text: "dark",
  },
  {
    color: "bg-danger",
    text: "light",
  },
  {
    color: "bg-dark",
    text: "light",
  },
  {
    color: "bg-light",
    text: "dark",
  },
];
export const BackgroundColors = createStory({
  colors: THEME_COLORS,
});

const OPACITY_COLORS: ColorConfig[] = [
  {
    color: "bg-primary",
    text: "light",
  },
  {
    color: "bg-primary bg-opacity-75",
    text: "light",
  },
  {
    color: "bg-primary bg-opacity-50",
    text: "dark",
  },
  {
    color: "bg-primary bg-opacity-25",
    text: "dark",
  },
  {
    color: "bg-primary bg-opacity-10",
    text: "dark",
  },
];
export const BackgroundOpacity = createStory({
  colors: OPACITY_COLORS,
  className: "bg-white",
});
export default storyConfig;
