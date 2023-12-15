import Layout from "../layout/Layout";
import styled from "styled-components";
import Text from "../components/common/Text";
import Pro from "../components/img/image 8.png";

function Categories() {
  return (
    <Layout>
      <Container>
        <Process>
          <Text $fontType={"H2Bold"}>작업과정</Text>
          <img src={Pro} alt="이미지" />
          <p>
            엄마가 물고기를 낳았어 작품의 <b>작업과정</b>에 대한것이에요. <br />
            엄마와 아이가 광안리 바닷가에서 플러깅을 함께하는 활동을 이어가면서
            폭우때는 쉬어가는 센스도 보였습니다.
            <br />
            그러다보니 간헐적인 모임이었어요.
            <br />
            활동을 마무리하면서 데이터 플로깅을 함께하는 10명의 물고기들에겐
            해양정원 간식을 드려요.
            <br />
            비가 미친듯이 쏟아져서 당일 취소되었던 적도 있고. 행사때문에 너무
            많은 쓰레기를 만나 어찌할 바를 몰랐던 적도 있었어요.
            <br />
            큰 사고 없어 무탈하게 프로젝트를 마무리하게 되어 감사하는
            마음이에요.
            <br />
          </p>
        </Process>
        <BoxContainer>
          
        </BoxContainer>
      </Container>
    </Layout>
  );
}
export default Categories;

const Container = styled.div`
  margin: 79px 163px;
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`