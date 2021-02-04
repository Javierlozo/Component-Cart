import React from "react";

import { ThemeProvider, darken } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { light, dark } from "./Theme/theme";

import TopNavbar from "./components/TopNavbar/index";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import Footer from "./components/Footer/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [userTheme, setUserTheme] = React.useState(true);
  const theme = createMuiTheme(userTheme ? light : dark);

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeProvider theme={theme}>
          <TopNavbar setUserTheme={setUserTheme} userTheme={userTheme} />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
