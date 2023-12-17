import styled from "styled-components";
import { font } from "../../../styles/font";
import color from "../../../styles/color";

function Button({
  $fontType,
  value,
  onClick,
  placeholder,
  fontType,
  style,
  children,
}) {
  return (
    <StyledButton
      $fontType={$fontType}
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      fontType={fontType}
      style={style}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  padding: 1.3rem 3rem;
  border: 2px solid ${color.gray200};
  border-radius: 1.25rem;
  background-color: white;
  ${font.SubHead};
  &:hover,
  &:focus {
    cursor: pointer;
    transition: 0.3s ease;
    background-color: ${color.gray200};
  }
`;
