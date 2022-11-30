import { useAuth0 } from "@auth0/auth0-react";

export const ProfilePage = () => {
  const { user } = useAuth0();
  console.log(user);

  return <p>hello.</p>;
};
