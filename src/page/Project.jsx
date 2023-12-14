import Layout from "../layout/Layout";
import Text from "../components/common/Text";
import styled from "styled-components";
import Item from "../components/common/Item";
import SmallItem from "../components/Projects/SmallItem";
import { typicalProjectData, projectData } from "../mocks/projectData";

function Project() {
  return (
    <Layout>
      <Container>
        <Text $fontType={"H1Bold"}>프로젝트</Text>
        <TypicalProjects>
          <Text $fontType={"H2Bold"}>대표 프로젝트</Text>

          {typicalProjectData.map((item, index) => (
            <Item
              key={index}
              imgUrl={item.imgUrl}
              itemName={item.itemName}
              subTitle={item.subTitle}
              hashTag={item.hashTag}
              anotherInfo={item.anotherInfo}
              isProject={item.isProject}
            />
          ))}
          
        </TypicalProjects>

        <ProjectItems>
          <Text $fontType={"H2Bold"}>전체 프로젝트</Text>
            {projectData.map((item, index) => (
              <SmallItem
                itemName={item.itemName}
                subTitle={item.subTitle}
                anotherInfo={item.anotherInfo}
              />
            ))}
        </ProjectItems>
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
const ProjectItems = styled.div`
  display: grid;
  row-gap: 1.8rem;
  column-gap: 2.5rem;
`