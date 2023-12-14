import Layout from "../layout/Layout";
import styled from "styled-components";
import Text from "../components/common/Text";
import Title from "../components/img/title.png";

function Categories() {
  return (
    <Layout>
      <Container>
        <Process>
          <Text $fontType={"H2Bold"}>작업과정</Text>
          <img src={Title} alt="이미지" />
          <p>
            최근 <b>기후변화</b>와 <b>기후위기</b>에 대한 관심과 더불어
            일반시민들의 사회적 참여가 활발합니다. <br />
            또한 리싸이클링, 지역 커뮤니티 관련 다양한 활동들로 예술가들의
            사회적 역할이 나날이 확대되고 있습니다. <br />
            "2023 사물의 쓸모 전시회"를 통해 향후 예술가로서의 작품활동을
            지속적으로 진행하면서 <br />
            예술가의 사회적 역할에 대한 고민을 함께 하고자 합니다.
            <br />
            EEDA 대표 안혜정
          </p>
        </Process>
        <BoxContainer></BoxContainer>
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
`;
