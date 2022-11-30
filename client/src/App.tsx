import { useAuth0 } from "@auth0/auth0-react";
import { AppRoutes } from "@/routes";
import { CustomProvider } from "rsuite";
import { useAppSelector } from "./redux/hooks";
import { useDispatch } from "react-redux";
import { setAlert } from "./redux/alert-slice";
import { Layout, PageLoading } from "./components";
import { useEffect } from "react";
import { switchTheme } from "./redux/theme-slice";

export const App = () => {
  const { isLoading, error } = useAuth0();
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme.value);

  // Persist user's theme preference in local storage
  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme === "dark" || selectedTheme === "light") {
      dispatch(switchTheme({ value: selectedTheme }));
    }
  }, []);

  if (error) {
    dispatch(setAlert({ type: "error", message: `Authorization error. Details:${error.message}` }));
  }

  return (
    <CustomProvider theme={theme}>
      {isLoading ? (
        <PageLoading />
      ) : (
        <Layout>
          <AppRoutes />
        </Layout>
      )}
    </CustomProvider>
  );
};
