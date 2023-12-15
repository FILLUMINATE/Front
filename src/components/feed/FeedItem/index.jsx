import styled from "styled-components";
import Text from "../../common/Text";
import color from "../../../styles/color";

export default function FeedItem({ title, date }) {
  return (
    <Box>
      <Text $fontType={"H3Bold"}>{title}제목</Text>
      <Text $fontType={"SubHeadBold"} style={{ color: `${color.gray400}` }}>
        {date}날짜
      </Text>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
