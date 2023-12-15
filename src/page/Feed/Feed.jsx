import styled from "styled-components";
import Text from "../../components/common/Text";
import color from "../../styles/color";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import FeedItem from "../../components/feed/FeedItem";

function Feed() {
  const gottenData = [1, 2, 3, 4, 5] || [];

  return (
    <Layout>
      <Container>
        <Text $fontType={"H1"}>EEDA의 피드</Text>
        <FeedContainer>
          {/* 반복 */}
          {gottenData.map((data) => (
            <StyledLink to={data.id}>
              <FeedItem {...data} />
            </StyledLink>
          ))}
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

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
`;
