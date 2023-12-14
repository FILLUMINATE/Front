import Layout from "../layout/Layout";
import styled from "styled-components";
import Text from "../components/common/Text";
import color from "../styles/color";
import { useParams } from "react-router-dom";

function FeedDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <div style={{ width: "100%" }}>
            <Text $fontType={"H1"}>EEDA의 피드</Text>
            id: {id}
          </div>
          <FeedBox>
            <LeftFeedBox>
              <Text $fontType={"H2"}>이번 주 마중물 수업</Text>
              <Text $fontType={""}>2023. 10. 07. (토)</Text>

              <div style={{ width: "100%" }}>
                <Text $fontType={"Body1"} style={{ fontStyle: "nomal" }}>
                  dkdk
                </Text>
              </div>
            </LeftFeedBox>
            <RightFeedBox>
              <img
                src="images/Icon/Arrow-up.svg"
                alt="피드"
                style={{ width: "100%", height: "100%" }}
              />
            </RightFeedBox>
          </FeedBox>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default FeedDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0 15rem;
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
  justify-content: space-between;
  box-sizing: border-box;
  gap: 2rem;
`;

const LeftFeedBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopFeedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 0 1.5rem;
`;

const RightFeedBox = styled.div`
  width: 50rem;
  height: 19rem;
  background-color: red;
  border-radius: 1.25rem;
`;
