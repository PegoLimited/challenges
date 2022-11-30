import { withAuthenticationRequired } from "@auth0/auth0-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProtectedRoute = ({ component }: any) => {
  const Component = withAuthenticationRequired(component);
  return <Component />;
};
