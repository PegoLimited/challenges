import { Button } from "rsuite";
import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      screen_hint: "signup",
    });
  };

  return (
    <Button appearance="primary" onClick={handleSignUp}>
      Sign Up
    </Button>
  );
};
