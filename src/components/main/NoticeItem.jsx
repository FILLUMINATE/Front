import styled from "styled-components";
import Text from "../common/Text";
import { useQuery } from "react-query";
import { getImgPath } from "../../api/feed/api";
import color from "../../styles/color";

const NoticeItem = ({ notice }) => {
  const {
    data: imgPath,
    error,
    isError,
  } = useQuery(["imgPath", notice?.boardId], () => getImgPath(notice?.boardId));

  return (
    <div style={{ width: "100%" }}>
      <FeedBox>
        <LeftFeedBox>
          <TopFeedBox style={{ padding: "0", margin: "0", width: "100%" }}>
            <Text $fontType={"SubHeadBold"}>{notice?.title}</Text>
            <Text $fontType={"SubHeadBold"} style={{ fontSize: "1rem" }}>
              {notice?.period}
            </Text>
          </TopFeedBox>
          <div
            style={{ border: `1px solid ${color.gray200}`, width: "100%" }}
          ></div>
          <Text
            $fontType={"Body1"}
            style={{ fontStyle: "nomal", wordWrap: "break-word" }}
          ></Text>
        </LeftFeedBox>
        <RightFeedBox>
          {imgPath && (
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "1.25rem",
              }}
              src={`${process.env.REACT_APP_API_URL}/image/${imgPath.imgLink}`}
              alt="피드"
            />
          )}
        </RightFeedBox>
      </FeedBox>
    </div>
  );
};

export default NoticeItem;

const RightFeedBox = styled.div`
  width: 50rem;
  height: 19rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 1.25rem;
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
