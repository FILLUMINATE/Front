import styled from "styled-components";
import { font } from "../../../styles/font";
import color from "../../../styles/color";

function Input({
  $fontType,
  value,
  onChange,
  placeholder,
  fontType,
  style,
  ...props
}) {
  return (
    <StyledInput
      $fontType={$fontType}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      fontType={fontType}
      style={style}
      {...props}
    />
  );
}

export default Input;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  align-items: center;
  outline: none;
  border-radius: 1.25rem;
  border: 2px solid ${color.gray400};
  ${font.SubHead}

  &::placeholder {
    color: ${color.gray600};
  }

  &:focus {
    border-color: ${color.gray600};
    transition: 0.3s ease;
  }
`;
