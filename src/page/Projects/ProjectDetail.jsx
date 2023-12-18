import styled from "styled-components";
import Text from "../../components/common/Text";
import { Link, useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { projectData } from "../../mocks/projectData";
import color from "../../styles/color";
import { getProjectById } from "../../api/projects/api";
import { useQuery } from "react-query";
import { UserContext } from "../../context/UserContext";

function ProjectDetail() {
  const { id } = useParams();
  // const project = projectData[id];

  const { data: project } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(id),
  });

  const labAddress = project?.address;

  // 네이버 지도 링크 URL
  const naverMapUrl = `https://map.naver.com/?query=${encodeURIComponent(
    labAddress
  )}`;

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <div style={{ width: "100%" }}>
            <Text $fontType={"H1Bold"}>프로젝트</Text>
          </div>
          <FeedBox>
            <LeftFeedBox>
              <Text $fontType={"H2Bold"}>{project?.title}</Text>
              <Text $fontType={"SubHeadBold"}>{project?.period}</Text>
              {project?.hashtag && (
                <Text
                  $fontType={"Body1"}
                  style={{
                    color: `${color.hashtag}`,
                  }}
                >
                  {project?.hashtag}
                </Text>
              )}
              {project?.description && (
                <Text
                  $fontType={"Body1"}
                  style={{
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  {project?.description}
                </Text>
              )}
              {project?.support && (
                <Row>
                  <Text $fontType={"Body1"}>지원</Text>
                  <Text $fontType={"Body1"} style={{ fontWeight: "700" }}>
                    {project?.support}
                  </Text>
                </Row>
              )}
              {project?.address && (
                <Row>
                  <Text $fontType={"Body1"}>작업실</Text>
                  <StyledLink
                    to={`${naverMapUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Text $fontType={"Body1"} style={{ fontWeight: "700" }}>
                      {project?.address}
                    </Text>
                  </StyledLink>
                </Row>
              )}
            </LeftFeedBox>

            {project?.imgUrl && (
              <RightFeedBox>
                <img
                  src={`${project?.imgUrl}`}
                  alt="피드"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </RightFeedBox>
            )}
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

const RightFeedBox = styled.div`
  max-width: 50%;
  width: 50rem;
  height: 19rem;
  border-radius: 1.25rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.12rem;
`;

const StyledLink = styled(Link)`
  color: black;
`;
