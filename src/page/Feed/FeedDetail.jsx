import styled from "styled-components";
import Text from "../../components/common/Text";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { useQuery } from "react-query";
import { getFeed, getImgPath } from "../../api/feed/api";

function FeedDetail() {
  const { id } = useParams();

  const { data: feed } = useQuery({
    queryKey: ["feed"],
    queryFn: () => getFeed(id),
  });

  const {
    data: imgPath,
    error,
    isError,
  } = useQuery(["imgPath", id], () => getImgPath(id));

  if (isError) {
    console.error(error);
  }

  return (
    <Layout>
      <Container>
        <FeedContainer>
          <div style={{ width: "100%" }}>
            <Text $fontType={"H1Bold"}>EEDA의 피드</Text>
          </div>

          <FeedBox>
            <LeftFeedBox>
              <Text $fontType={"H2Bold"}>{feed?.title}</Text>
              <Text $fontType={"SubHeadBold"}>{feed?.period}</Text>
              <Text
                $fontType={"Body1"}
                style={{
                  fontStyle: "nomal",
                  wordWrap: "break-word",
                }}
              >
                {feed?.description}
              </Text>
            </LeftFeedBox>

            {imgPath?.imgLink && (
              <RightFeedBox>
                <img
                  src={`${process.env.REACT_APP_API_URL}/image/${imgPath?.imgLink}`}
                  alt="피드"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1.25rem",
                  }}
                />
              </RightFeedBox>
            )}
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
  margin: 10rem 0 0;
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
  max-width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightFeedBox = styled.div`
  max-width: 50%;
  width: 50rem;
  height: 25rem;
  border-radius: 1.25rem;
`;
