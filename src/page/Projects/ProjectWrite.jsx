import styled from "styled-components";
import Text from "../../components/common/Text";
import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useState } from "react";
import color from "../../styles/color";
import font from "../../styles/font";
import Button from "../../components/common/Button";
import { useProjectMutation } from "../../api/projects/mutation";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function ProjectWrite() {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mutation = useProjectMutation();
  const [selectedImage, setSelectedImage] = useState();

  const [formValues, setFormValues] = useState({
    title: "",
    period: "",
    description: "",
    hashtag: "",
    supprt: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    try {
      const formData = new FormData();
      const fileField = document.querySelector('input[type="file"]');

      formData.append("img", fileField.files[0]);
      formData.append("title", formValues.title);
      formData.append("period", formValues.period);
      formData.append("description", formValues.description);
      formData.append("hashtag", formValues.hashtag);
      formData.append("support", formValues.support);
      formData.append("address", formValues.address);

      mutation.mutate(formData);
      navigate("/");
    } catch (error) {
      alert("프로젝트를 추가하지 못 했습니다.");
      console.log(error);
    }
  };

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <Text $fontType={"H1"} style={{ width: "100%" }}>
            프로젝트 게시글 작성
          </Text>
          <Input
            name="title"
            placeholder={"제목"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
          <Input
            name="period"
            placeholder={"기간"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
          <Input
            name="address"
            placeholder={"주소"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
          <Input
            name="hashtag"
            placeholder={"해시태그"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
          <Input
            name="support"
            placeholder={"지원"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
          <TextArea
            name="description"
            placeholder={"설명"}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
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
            <Button>취소</Button>
            <Button onClick={handleSubmit}>등록</Button>
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
