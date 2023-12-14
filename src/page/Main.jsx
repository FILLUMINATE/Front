import { Pagination } from "@mui/material";
import Layout from "../layout/Layout";
import styled from "styled-components";
import { useState } from "react";
import Text from "../components/common/Text";
import { Link } from "react-router-dom";
import color from "../styles/color";

function Main() {
  const gottenData = [1, 2, 3, 4, 5] || [];
  const ITEMS_PER_PAGE = 1;
  const LAST_PAGE = Math.ceil(gottenData.length / ITEMS_PER_PAGE);

  const [page, setPage] = useState(1);
  const [data, setData] = useState(gottenData.slice(0, ITEMS_PER_PAGE));

  const handlePage = (event, value) => {
    setPage(value);
    const start = ITEMS_PER_PAGE * (value - 1);
    const end = value === LAST_PAGE ? undefined : ITEMS_PER_PAGE * value;
    setData(gottenData.slice(start, end));
  };

  return (
    <Layout>
      <Container>
        <VideoBox>
          <Logo src="images/Logo.svg" />
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
              <img src="images/Icon/Megaphone.svg" alt="피드" />
              <Text $fontType={"H3Bold"}>EEDA의 피드</Text>
            </div>
            <StyledLink
              to="/feed"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Text $fontType={"SubHead"}>더보기</Text>
              <img src="images/Icon/Arrow-up.svg" alt="피드" />
            </StyledLink>
          </TopFeedBox>
          <FeedBox>
            <LeftFeedBox>
              <TopFeedBox style={{ padding: "0", margin: "0", width: "100%" }}>
                <Text $fontType={"SubHead"}>이번 주 마중물 수업</Text>
                <Text $fontType={""}>2023. 10. 07. (토)</Text>
              </TopFeedBox>
              <div
                style={{
                  border: `1px solid ${color.gray200}`,
                  width: "100%",
                }}
              ></div>
              <div style={{ width: "100%" }}>
                <Text $fontType={"Body1"} style={{ fontStyle: "nomal" }}>
                  dkdk{data}
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
  height: 57rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
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

const FeedBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 4rem;
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

const RightFeedBox = styled.div`
  width: 50rem;
  height: 19rem;
  background-color: red;
`;
