import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      {isDarkMode ? (
        <Img src="/solace-logo-dark.png" alt="Logo" />
      ) : (
        <Img src="/solace-logo-light.png" alt="Logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
