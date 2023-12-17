import styled from "styled-components";
import Text from "../../components/common/Text";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useState } from "react";
import color from "../../styles/color";
import font from "../../styles/font";

function ProjectWrite() {
  const [selectedImage, setSelectedImage] = useState();
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <Text $fontType={"H1"} style={{ width: "100%" }}>
            프로젝트 게시글 작성
          </Text>
          <Input placeholder={"제목"} style={{ width: "100%" }} />
          <Input placeholder={"날짜"} style={{ width: "100%" }} />
          <TextArea placeholder={"설명"} style={{ width: "100%" }} />
          <ImageUploadBox
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <img src="/images/Icon/+.svg" alt="+" />
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </ImageUploadBox>
          <ButtonBox>
            <StyledButton>취소</StyledButton>
            <StyledButton onClick={() => console.log("등록")}>
              등록
            </StyledButton>
          </ButtonBox>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default ProjectWrite;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15rem 0;
`;

const FeedContainer = styled.div`
  width: 94rem;
  max-width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const ImageUploadBox = styled.div`
  width: 100%;
  height: 35rem;
  background-color: ${color.gray500};
  border-radius: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  flex-direction: row;
  gap: 1.1rem;
`;

const StyledButton = styled.button`
  padding: 1.3rem 3rem;
  border: 1px solid ${color.gray200};
  border-radius: 1.25rem;
  background-color: white;
  ${font.SubHead};
  &:hover,
  &:focus {
    transition: 0.3s ease;
  }
`;
