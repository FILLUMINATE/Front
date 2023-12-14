import Text from "../../common/Text/index";
import styled from "styled-components";
import color from "../../../styles/color";

function Item({imgUrl, itemName, subTitle, hashTag, place}) {
  return (
    <Container>
      <ImgBox src={imgUrl} alt={itemName} />
      <ContentBox>
        <Text $fontType={"H3Bold"}>{itemName}</Text>
        <Text $fontType={"SubHead"}>{subTitle}</Text>
        <Text $fontType={"SubHead"}>{hashTag}</Text>
        <PlaceTextBox>
          <Text $fontType={"SubHead"}>{place}</Text>
        </PlaceTextBox>
      </ContentBox>
    </Container>
  );
}
export default Item;

const Container = styled.div`
  padding: 1.8rem 2.7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3.3rem;
`

const ImgBox = styled.img`
  width: 23.3rem;
  height: 13.8rem;
  border-radius: 1.25rem;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const PlaceTextBox = styled.div`
  align-self: flex-end;
`;