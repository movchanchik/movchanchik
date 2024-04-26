import stylex from "@stylexjs/stylex";
import { colors } from "./variables.stylex";

export const layout = stylex.create({
  container: {
    color: colors.primaryText,
    backgroundColor: colors.background
  },
});
