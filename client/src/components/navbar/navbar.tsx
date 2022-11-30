import { useAuth0 } from "@auth0/auth0-react";
import { Navbar as SuiteNavbar, Nav } from "rsuite";
import { AuthButtons } from "./auth-buttons";
import { UserMenu } from "./user-menu";
import { NavLinks } from "./navlinks";
import { ThemeSwitcher } from "./theme-switcher";
import { NavLink } from "./navlink";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { Brand } = SuiteNavbar;

  return (
    <SuiteNavbar style={{ padding: "0 3rem" }}>
      <Brand as={NavLink} to="/stories/top">
        <strong style={{ color: "#3498ff" }}>HACKER NEWS</strong>
      </Brand>
      {isAuthenticated && <NavLinks />}
      <Nav pullRight>
        <ThemeSwitcher />
      </Nav>
      <Nav pullRight>{isAuthenticated ? <UserMenu /> : <AuthButtons />}</Nav>
    </SuiteNavbar>
  );
};
