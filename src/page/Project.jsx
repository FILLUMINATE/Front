import Layout from "../layout/Layout";
import Text from "../components/common/Text";
import styled from "styled-components";
import Item from "../components/common/Item";
import SmallItem from "../components/Projects/SmallItem";
import { Link } from "react-router-dom";
import { typicalProjectData, projectData } from "../mocks/projectData";

function Project() {
  return (
    <Layout>
      <Container>
        <Text $fontType={"H1Bold"}>프로젝트</Text>
        <TypicalProjects>
          <Text $fontType={"H2Bold"}>대표 프로젝트</Text>

          {typicalProjectData.map((item, index) => (
            <StyledLink to={`/project/${index}`}>
              <Item
                key={index}
                imgUrl={item.imgUrl}
                itemName={item.itemName}
                subTitle={item.subTitle}
                hashTag={item.hashTag}
                anotherInfo={item.anotherInfo}
                isProject={item.isProject}
              />
            </StyledLink>
          ))}
          
        </TypicalProjects>

        <Text $fontType={"H2Bold"}>전체 프로젝트</Text>
        <ProjectItems>
            {projectData.map((item, index) => (
              <StyledLink to={`/project/${index}`}>
                <SmallItem
                  itemName={item.itemName}
                  subTitle={item.subTitle}
                  anotherInfo={item.anotherInfo}
                />
              </StyledLink>

            ))}
        </ProjectItems>
      </Container>
    </Layout>
  );
}
export default Project;

const Container = styled.div`
  padding: 8.5rem 7.5rem 15rem 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`
const TypicalProjects = styled.div`
  margin: 2rem 0 12rem 0;
`
const ProjectItems = styled.div`
  margin-top: 2.9rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.8rem;
  column-gap: 2.5rem;
`

const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
`