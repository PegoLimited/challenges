import { Nav } from "rsuite";
import { LoginButton } from "@/components/login-button";
import { SignupButton } from "@/components/signup-button";

export const AuthButtons = () => {
  return (
    <>
      <Nav.Item>
        <LoginButton />
      </Nav.Item>
      <Nav.Item>
        <SignupButton />
      </Nav.Item>
    </>
  );
};
