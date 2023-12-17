"use client";
import styled from "styled-components";
import color from "../../../styles/color";
import font from "../../../styles/font";

function TextArea({ placeholder, name, value, onChange, style }) {
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      style={{ ...style }}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextArea;

const StyledTextArea = styled.textarea`
  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border-radius: 10px;
    background: ${color.gray400};
  }

  resize: none;
  ${font.SubHead};

  box-sizing: border-box;
  padding: 1rem;
  border: 2px solid ${color.gray400};
  border-radius: 20px;
  outline: none;

  &::placeholder {
    color: ${color.gray600};
  }

  &:focus {
    border-color: ${color.gray600};
    transition: 0.3s ease;
  }
`;
