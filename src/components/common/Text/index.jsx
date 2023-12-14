import styled from "styled-components";
import { font } from "../../../styles/font";

function Text({ children, $fontType, tag, style }) {
  return (
    <StyledText $fontType={$fontType} as={tag} style={{ ...style }}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.span`
  ${({ $fontType }) => font[$fontType]};
`;
