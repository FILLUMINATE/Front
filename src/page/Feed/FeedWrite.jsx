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
import { useAddFeedMutation } from "../../api/feed/mutation";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";

function FeedWrite() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const mutation = useAddFeedMutation();

  const [formValues, setFormValues] = useState({
    title: "",
    period: "",
    description: "",
  });

  const handleInputChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const [selectedImage, setSelectedImage] = useState();
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

      mutation.mutate(formData);
      navigate("/");
    } catch (error) {
      alert("상품을 추가하지 못 했습니다.");
      console.log(error);
    }
  };

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <Text $fontType={"H1Bold"} style={{ width: "100%" }}>
            EEDA의 피드 작성
          </Text>
          <Input
            name="title"
            onChange={handleInputChange}
            placeholder={"제목"}
            style={{ width: "100%" }}
          />
          <Input
            name="period"
            onChange={handleInputChange}
            placeholder={"냘짜 (ex. 2023.12.18)"}
            style={{ width: "100%" }}
          />
          <TextArea
            name="description"
            onChange={handleInputChange}
            placeholder={"설명"}
            style={{ width: "100%" }}
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
export default FeedWrite;

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
