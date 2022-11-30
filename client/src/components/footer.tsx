import { Navbar, Stack } from "rsuite";

export const Footer = () => {
  return (
    <Navbar
      style={{
        padding: "1rem 0",
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: 56,
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        <p>Hacker News Ⓒ 2022</p>
      </Stack>
    </Navbar>
  );
};
