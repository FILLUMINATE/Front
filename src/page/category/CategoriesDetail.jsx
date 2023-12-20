import styled from "styled-components";
import Text from "../../components/common/Text";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { categoriesData } from "../../mocks/Categories";
import color from "../../styles/color";

function CategoriesDetail() {
  const { id } = useParams();
  const category = categoriesData[id];

  // 네이버 지도 링크 URL

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <div style={{ width: "100%" }}>
            <Text $fontType={"H1Bold"}>대표작품</Text>
          </div>
          <FeedBox>
            <LeftFeedBox>
              <Text $fontType={"H2Bold"}>{category.itemName}</Text>
              <Text $fontType={"SubHeadBold"}>{category.subTitle}</Text>
              {category.hashTag && (
                <Text
                  $fontType={"Body1"}
                  style={{
                    color: `${color.hashTag}`,
                  }}
                >
                  {category.hashTag}
                </Text>
              )}
              {category.description && (
                <Text
                  $fontType={"Body1"}
                  style={{
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  {category.description}
                </Text>
              )}
              {category.creator && (
                <Row>
                  <Text $fontType={"Body1"}>작가</Text>
                  <Text $fontType={"Body1"} style={{ fontWeight: "700" }}>
                    {category.creator}
                  </Text>
                </Row>
              )}
              {category.about && (
                <Row>
                  <Text $fontType={"Body1"}>경력</Text>
                  <Text $fontType={"Body1"} style={{ fontWeight: "700" }}>
                    {category.about}
                  </Text>
                </Row>
              )}
            </LeftFeedBox>

            {category.img && (
              <RightFeedBox
                src={`${process.env.REACT_APP_API_URL}/image/${category.img}`}
              ></RightFeedBox>
            )}
          </FeedBox>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default CategoriesDetail;

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

const FeedBox = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
`;

const LeftFeedBox = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightFeedBox = styled.img`
  max-width: 50%;
  width: 50rem;
  height: 19rem;
  border-radius: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.12rem;
`;
