import styled from "styled-components";
import Text from "../../components/common/Text";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout";
import FeedItem from "../../components/feed/FeedItem";
import { useQuery } from "react-query";
import { getFeeds } from "../../api/feed/api";
import Button from "../../components/common/Button";
import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";


function Feed() {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const { data: feeds } = useQuery({
    queryKey: ["feeds"],
    queryFn: () => getFeeds(),
  });

  return (
    <Layout>
      <Container>
        <Row>
          <Text $fontType={"H1Bold"}>EEDA의 피드</Text>
          {isLoggedIn && 
            <Link to={'/feed/write'}>
              <Button>피드 작성</Button>
            </Link>
          }
        </Row>
        <FeedContainer>
          {feeds &&
            feeds.map((feed, idx) => (
              <StyledLink to={`/feed/${feed.boardId}`} key={idx}>
                <FeedItem {...feed} />
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

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
