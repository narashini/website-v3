import styled from "styled-components";
import Project from "./Project";
import { GitBranch, GitCommit, GitHub, GitMerge, GitPullRequest } from "react-feather";
import Carousel from "./Carousel";

function ProjectSection(props) {

   
    return <Wrapper>
        <Header>Projects</Header>
        <p>goofy ahh website takes a few seconds to load</p>
        <Container>
            <Project
                key={"website-v3"}
                user={"narashini"}
                project={"website-v3"}
                social={[]}
            />
        </Container>
    </Wrapper>
}

export default ProjectSection;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Header = styled.p`
  font-weight: normal;
  font-size: 50px;
  line-height: 85px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 50px;
`