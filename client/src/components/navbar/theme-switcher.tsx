import { Nav, IconButton } from "rsuite";
import { switchTheme } from "@/redux/theme-slice";
import { Sun, Moon } from "@styled-icons/bootstrap";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import styled from "styled-components";

export const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  const setTheme = () => {
    dispatch(switchTheme({ value: theme === "dark" ? "light" : "dark" }));
  };

  return (
    <Nav.Item style={{ padding: 10 }}>
      <IconButton
        icon={theme === "dark" ? <StyledSunIcon /> : <StyledMoonIcon />}
        onClick={setTheme}
      />
    </Nav.Item>
  );
};

const StyledMoonIcon = styled(Moon)`
  height: 10px;
`;
const StyledSunIcon = styled(Sun)`
  height: 10px;
`;
