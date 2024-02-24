import { styleVariants, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../themes/sprinkles.css";
import { backgroundDefaultColors } from "../..//themes/sprinkles/colors.css";

export const tile = recipe({
  variants: {
    hasPadding: {
      true: sprinkles({ padding: "spacing3" }),
    },
    color: {
      backgroundDefault: sprinkles({
        backgroundColor: "backgroundDefault",
        color: "labelDefault",
      }),
      backgroundMagenta: sprinkles({
        backgroundColor: "backgroundMagenta",
        color: "labelMagenta",
      }),
      backgroundBlue: sprinkles({
        backgroundColor: "backgroundBlue",
        color: "labelBlue",
      }),
      backgroundGreen: sprinkles({
        backgroundColor: "backgroundGreen",
        color: "labelGreen",
      }),
      backgroundYellow: sprinkles({
        backgroundColor: "backgroundYellow",
        color: "labelYellow",
      }),
      backgroundRed: sprinkles({
        backgroundColor: "backgroundRed",
        color: "labelRed",
      }),
      backgroundGray1: sprinkles({
        backgroundColor: "backgroundGray1",
        color: "labelWhite",
      }),
      backgroundGray2: sprinkles({
        backgroundColor: "backgroundGray2",
        color: "labelWhite",
      }),
      backgroundInverted: sprinkles({
        backgroundColor: "backgroundInverted",
        color: "labelInverted",
      }),
    },
  },
});

// style inner text of a Tile
// globalStyle(`${tile({ color: "backgroundDefault" })} > *`, {
//   color: sprinkles({ color: "labelDefault" }),
// });
// globalStyle(`${tile({ color: "backgroundMagenta" })} > *`, {
//   color: sprinkles({ color: "labelMagenta" }),
// });
// globalStyle(`${tile({ color: "backgroundBlue" })} > *`, {
//   color: sprinkles({ color: "labelBlue" }),
// });
// globalStyle(`${tile({ color: "backgroundGreen" })} > *`, {
//   color: sprinkles({ color: "labelGreen" }),
// });
// globalStyle(`${tile({ color: "backgroundYellow" })} > *`, {
//   color: sprinkles({ color: "labelYellow" }),
// });
// globalStyle(`${tile({ color: "backgroundRed" })} > *`, {
//   color: sprinkles({ color: "labelRed" }),
// });
// globalStyle(`${tile({ color: "backgroundGray1" })} > *`, {
//   color: sprinkles({ color: "labelWhite" }),
// });
// globalStyle(`${tile({ color: "backgroundGray2" })} > *`, {
//   color: sprinkles({ color: "labelWhite" }),
// });
// globalStyle(`${tile({ color: "backgroundInverted" })} > *`, {
//   color: sprinkles({ color: "labelInverted" }),
// });
