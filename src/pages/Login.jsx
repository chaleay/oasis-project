import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LogoHeader = styled.h1`
  text-align: center;
  text-shadow: 6px 2px 10px rgba(207, 207, 155, 0.89);
  font-size: 4rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <LogoHeader>Solace</LogoHeader>
      <Heading as="h4">Log in</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
