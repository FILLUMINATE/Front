import Layout from "../layout/Layout";
import Text from "../components/common/Text";
import styled from "styled-components";

function Project() {
  return (
    <Layout>
      <Container>
        <Text $fontType={"H1Bold"}>프로젝트</Text>
        <TypicalProjects>
          <Text $fontType={"H2Bold"}>대표 프로젝트</Text>
        </TypicalProjects>
      </Container>
    </Layout>
  );
}
export default Project;

const Container = styled.div`
  padding: 8.5rem 7.5rem 15rem 7.5rem;
`
const TypicalProjects = styled.div`
  margin-top: 2rem;
`