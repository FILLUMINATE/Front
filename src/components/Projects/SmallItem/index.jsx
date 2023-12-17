import Text from "../../common/Text/index";
import styled from "styled-components";
import color from "../../../styles/color";

function SmallItem({ itemName, subTitle, anotherInfo }) {
  return (
    <Container>
        <ItemInfoBox>
            <Text $fontType={"H3Bold"}>{itemName}</Text>
            <Text $fontType={"SubHeadBold"} color={color.gray400}>{subTitle}</Text>
        </ItemInfoBox>
        <PlaceTextBox>
            <Text $fontType={"SubHead"}>지원</Text>
            <Text $fontType={"SubHeadBold"}>{anotherInfo}</Text>
        </PlaceTextBox>
    </Container>
  );
}
export default SmallItem;

const Container = styled.div`
  padding: 1.8rem 2.7rem;
  width: calc('100% - 1.8rem');

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  background-color: white;
  border-radius: 1.25rem;
  border: 1px solid ${color.gray200};

  &:hover {
    cursor: pointer;
    background-color: ${color.gray50};
    transition: 0.3s ease;
  }
`

const ItemInfoBox = styled.div`
    height: 8.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const PlaceTextBox = styled.div`
  justify-self: flex-end;
  display: flex;
  gap: 1.1rem;
`;