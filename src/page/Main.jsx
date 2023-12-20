import { Pagination } from "@mui/material";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useState } from "react";
import Text from "../components/common/Text";
import { Link } from "react-router-dom";
import color from "../styles/color";
import { useQuery } from "react-query";
import { getImgPath, getNotices } from "../api/feed/api";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NoticeItem from "../components/main/NoticeItem";

function Main() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { data: allNotices } = useQuery({
    queryKey: ["notices"],
    queryFn: () => getNotices(),
  });

  const notices = allNotices ? allNotices.slice(0, 5) : null;

  const ITEMS_PER_PAGE = 1;
  const LAST_PAGE = notices ? Math.ceil(notices.length / ITEMS_PER_PAGE) : 0;

  const [page, setPage] = useState(1);
  const [data, setData] = useState(
    notices ? notices.slice(0, ITEMS_PER_PAGE) : []
  );

  const handlePage = (event, value) => {
    setPage(value);
    const start = ITEMS_PER_PAGE * (value - 1);
    const end = value === LAST_PAGE ? undefined : ITEMS_PER_PAGE * value;
    setData(notices.slice(start, end));
  };

  return (
    <Layout>
      <Container>
        <VideoBox>
          <Logo src="/images/Logo.svg" />
        </VideoBox>
        <FeedContainer>
          <TopFeedBox>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img src="/images/Icon/Megaphone.svg" alt="피드" />
              <Text $fontType={"H3Bold"}>EEDA 피드</Text>
            </div>
            <StyledLink
              to="/feed"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Text $fontType={"SubHeadBold"}>더보기</Text>
              <img src="/images/Icon/Arrow-up.svg" alt="피드" />
            </StyledLink>
          </TopFeedBox>
          {data.map((notice, idx) => (
            <NoticeItem key={idx} notice={notice} />
          ))}
          <PaginationContainer>
            <Pagination
              count={LAST_PAGE}
              defaultPage={1}
              boundaryCount={2}
              size="large"
              onChange={handlePage}
            />
          </PaginationContainer>
        </FeedContainer>
      </Container>
    </Layout>
  );
}
export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoBox = styled.div`
  width: 100%;
  height: 52.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.1); */
  background: url("/images/MainPage.svg");
`;

const FeedContainer = styled.div`
  width: 94rem;
  max-width: 75%;
  margin: 10rem 0 15rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const TopFeedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
  margin: 0 0 1.5rem;
`;

const Logo = styled.img`
  width: 23rem;
  height: 15rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 0;
`;
