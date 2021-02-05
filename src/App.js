import React from "react";

import { ThemeProvider, darken } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { light, dark } from "./Theme/theme";

import TopNavbar from "./components/TopNavbar/index";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Footer from "./components/Footer/index";
import ComponentPage from "./Pages/ComponentPage/ComponentPage"

function App() {
  const [userTheme, setUserTheme] = React.useState(true);
  const theme = createMuiTheme(userTheme ? light : dark);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ThemeProvider theme={theme}>
        <TopNavbar setUserTheme={setUserTheme} userTheme={userTheme} />
        <Home />
        {/* <Profile /> */}
        {/* <ComponentPage /> */}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
