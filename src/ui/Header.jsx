import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

// const StyledP = styled.p`
//   font-weight: 600;
// `;

export default function Header() {
  return (
    <StyledHeader>
      {/* <StyledP>Demo</StyledP> */}
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
