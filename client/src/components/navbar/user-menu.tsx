import { useAuth0 } from "@auth0/auth0-react";
import { Stack, Nav } from "rsuite";
import { UserInfo } from "@rsuite/icons";
import { NavLink } from "./navlink";
import { useState } from "react";
import { ProfileDrawer } from "@/components/navbar/profile-drawer";
import ExitIcon from "@rsuite/icons/Exit";
import DocPassIcon from "@rsuite/icons/DocPass";

export const UserMenu = () => {
  const { logout, user } = useAuth0();
  const [isProfileDrawerOpen, setProfileDrawerOpen] = useState<boolean>(false);

  const handleLogout = () => logout();
  const handleProfileDrawer = () => setProfileDrawerOpen(true);

  return (
    <Stack spacing={2}>
      <ProfileDrawer open={isProfileDrawerOpen} setOpen={setProfileDrawerOpen} user={user} />
      <p>
        <strong>Welcome, </strong> {user?.name}
      </p>
      <Nav.Menu title="" placement="bottomEnd">
        <Nav.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as </p>
          <strong>{user?.nickname}</strong>
        </Nav.Item>
        <Nav.Item divider />
        <Nav.Item icon={<UserInfo />} onClick={handleProfileDrawer}>
          Your profile
        </Nav.Item>
        <Nav.Item icon={<DocPassIcon />} as={NavLink} to="/favorites">
          Your favourites
        </Nav.Item>
        <Nav.Item divider />
        <Nav.Item as={"a"} icon={<ExitIcon />} onClick={handleLogout}>
          Sign out
        </Nav.Item>
      </Nav.Menu>
    </Stack>
  );
};
