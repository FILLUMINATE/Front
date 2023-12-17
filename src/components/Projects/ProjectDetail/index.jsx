import styled from "styled-components";
import Text from "../../components/common/Text";
import { useParams } from "react-router-dom";
import Layout from "../../../layout/Layout";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <div style={{ width: "100%" }}>
            <Text $fontType={"H1"}>프로젝트</Text>
            id: {id}
          </div>
          <FeedBox>
            <LeftFeedBox>
              <Text $fontType={"H2"}>이번 주 마중물 수업</Text>
              <Text $fontType={""}>2023. 10. 07. (토)</Text>
              <Text
                $fontType={"Body1"}
                style={{
                  fontStyle: "nomal",
                  wordWrap: "break-word",
                }}
              >
                dkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdkdk
              </Text>
            </LeftFeedBox>

            <RightFeedBox>
              <img
                src="/images/Icon/Arrow-up.svg"
                alt="피드"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </RightFeedBox>
          </FeedBox>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default ProjectDetail;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem 0;
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

const RightFeedBox = styled.div`
  max-width: 50%;
  width: 50rem;
  height: 19rem;
  background-color: red;
  border-radius: 1.25rem;
`;
