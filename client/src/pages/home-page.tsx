import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

export const HomePage = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const handleLogin = async () => await loginWithRedirect();
  const handleSignUp = async () => await loginWithRedirect({ creen_hint: "signup" });

  return (
    <Container>
      {isAuthenticated ? (
        <p>Welcome, {user?.name} </p>
      ) : (
        <span>
          <a onClick={handleLogin}>Login</a>or<a onClick={handleSignUp}>Sign Up</a> to proceed
        </span>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  & a {
    display: inline-block;
    margin: 0 4px;
    cursor: pointer;
  }
`;
