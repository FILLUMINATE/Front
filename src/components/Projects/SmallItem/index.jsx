import Text from "../../common/Text/index";
import styled from "styled-components";
import color from "../../../styles/color";

function Item({ itemName, subTitle, place }) {
  return (
    <Container>
        <Text $fontType={"H3Bold"}>{itemName}</Text>
        <Text $fontType={"SubHeadBold"} color={color.gray400}>{subTitle}</Text>
        <PlaceTextBox>
                <Text $fontType={"SubHead"}>지원</Text>
                <Text $fontType={"SubHeadBold"}>{place}</Text>
        </PlaceTextBox>
    </Container>
  );
}
export default Item;

const Container = styled.div`
  width: 50%;
  padding: 1.8rem 2.7rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;

  background-color: white;
  border-radius: 1.25rem;
  border: 1px solid ${color.gray200};

  &:hover {
    cursor: pointer;
    background-color: ${color.gray50};
    transition: 0.3s ease;
  }
`

// const ItemInfoBox = styled.div`
//   height: 13rem;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `

const PlaceTextBox = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 1.1rem;
`;