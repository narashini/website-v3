import styled, { ThemeContext } from "styled-components";
import ActiveLink from "./ActiveLink";
import PropsTheme from "../styles/theme/PropsTheme";
import DarkTheme from "../styles/theme/impl/DarkTheme";
import { useContext } from "react";
import { Moon, Sun } from "react-feather";
import { ThemeToggleContext } from "./context/ThemeToggleContext";
import Link from "next/link";


function Navbar(props) {
  const themeContext = useContext(ThemeContext);
  const themeToggleContext = useContext(ThemeToggleContext);
  const currentURL = "http://localhost:3000/";

  const links = [
    {
      name: "Home",
      href: `${currentURL}`,
    },
    {
      name: "GitHub",
      href: "https://github.com/narashini",
    },
    {
      name: "Telegram",
      href: "https://t.me/narashinidev",
    },
  ];

  const getLogoPath = () => {
    return themeContext === DarkTheme
      ? "prosavage-logo-dark.svg"
      : "prosavage-logo-light.svg";
  };

  return (
    <Wrapper>
      <Item>
        {links.map((link) => (
          <LinkWrapper key={link.href}>
            <ActiveLink href={link.href}>{link.name}</ActiveLink>
          </LinkWrapper>
        ))}
      </Item>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 75px;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  /* background: ${(props: PropsTheme) => props.theme.background}; */
  background: transparent;
  backdrop-filter: blur(5px);

  padding: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.div`
  padding: 0 10px;
`;

const ClickableThemeContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
