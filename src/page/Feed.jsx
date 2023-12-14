import Layout from "../layout/Layout";
import styled from "styled-components";
import Text from "../components/common/Text";
import color from "../styles/color";

function Feed() {
  const gottenData = [1, 2, 3, 4, 5] || [];

  return (
    <Layout>
      <Container>
        <Text $fontType={"H1"}>EEDA의 피드</Text>
        <FeedContainer>
          {/* 반복 */}
          <FeedBox>
            <Text $fontType={"H3"}>이번 주 마중물 수업</Text>
            <Text $fontType={"SubHead"} style={{ color: `${color.gray400}` }}>
              2023. 10. 07. (토)
            </Text>
          </FeedBox>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default Feed;

const Container = styled.div`
  min-width: max-content;
  box-sizing: border-box;
  width: 100%;
  padding: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeedContainer = styled.div`
  margin: 3rem 0 0;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const FeedBox = styled.div`
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
