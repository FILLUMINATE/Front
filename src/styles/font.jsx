import { css } from "styled-components";

const fontGenerator = (weight, size) => css`
  font-family: "SOYOMapleBoldTTF";
  font-weight: ${weight};
  font-size: ${size}rem;
`;

export const font = {
  H1: fontGenerator(400, 2.25),
  H1Bold: fontGenerator(700, 2.25),
  H2: fontGenerator(400, 1.75),
  H2Bold: fontGenerator(700, 1.75),
  H3: fontGenerator(400, 1.375),
  H3Bold: fontGenerator(700, 1.375),
  SubHead: fontGenerator(400, 1.125),
  Body1: fontGenerator(400, 1),
  Body2: fontGenerator(400, 0.875),
  CaptionBold: fontGenerator(700, 0.75),
};

export default font;
