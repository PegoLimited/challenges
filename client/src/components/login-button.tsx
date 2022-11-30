import { Button } from "rsuite";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  return (
    <Button appearance="ghost" onClick={handleLogin}>
      Sign In
    </Button>
  );
};
