import styled from "styled-components";
import Link from "next/link";

function Header(props) {
  return <HeaderWrapper>
    <TextWrapper>
      <HeaderText>
        Hiya, I'm <LessStrong>narashini</LessStrong>
      </HeaderText>
      <p>Owner @ <strong><ClickableLink
        href={"https://donutmc.xyz"}>Donut Community</ClickableLink></strong></p>
      <p>Founder @ <strong><ClickableLink
        href={"https://milkcarton.digital"}>Milk Services</ClickableLink></strong></p>
    </TextWrapper>
  </HeaderWrapper>
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200%;
  height: 100vh;
  background: url(/img/header_background.jpg);
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  left: 0;
  width: 100%;
`

const HeaderText = styled.p`
  font-size: 90px;
  line-height: 100px;

  @media(max-width: 400px) {
    flex-direction: column;
    font-size: 65px;
    line-height: 65px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  @media(min-width: 1000px) {
    padding-left: 20px;
  }
`

const LessStrong = styled.strong`
  font-weight: 600;
`

const CrossThrough = styled.span`
  text-decoration: line-through;
`

const ClickableLink = styled(Link)`
  cursor: pointer;
`
