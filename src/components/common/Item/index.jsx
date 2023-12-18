import Text from "../../common/Text/index";
import styled from "styled-components";
import color from "../../../styles/color";

function Item({ img, title, period, hashtag, anotherInfo, isExhibition }) {
  return (
    <Container>
      <ImgBox src={img} alt={title} />
      <ContentBox>
        <ItemInfoBox>
          <Text $fontType={"H3Bold"}>{title}</Text>
          <Text $fontType={"SubHeadBold"} color={color.gray400}>
            {period}
          </Text>
          <Text $fontType={"SubHead"} color={color.hashtag}>
            {hashtag}
          </Text>
        </ItemInfoBox>
        <PlaceTextBox>
          {isExhibition ? (
            <>
              <Text $fontType={"SubHeadBold"}>{anotherInfo}</Text>
            </>
          ) : (
            <>
              <Text $fontType={"SubHead"}>지원</Text>
              <Text $fontType={"SubHeadBold"}> {anotherInfo}</Text>
            </>
          )}
        </PlaceTextBox>
      </ContentBox>
    </Container>
  );
}
export default Item;

const Container = styled.div`
  padding: 1.8rem 2.7rem;

  display: flex;
  gap: 3.3rem;
  margin: 2rem 0;

  background-color: white;
  border-radius: 1.25rem;
  border: 1px solid ${color.gray200};

  &:hover {
    cursor: pointer;
    background-color: ${color.gray50};
    transition: 0.3s ease;
  }
`;

const ImgBox = styled.img`
  width: 23.3rem;
  height: 13.8rem;
  border-radius: 1.25rem;
`;

const ContentBox = styled.div`
  height: 13rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemInfoBox = styled(ContentBox)``;

const PlaceTextBox = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 1.1rem;
`;
