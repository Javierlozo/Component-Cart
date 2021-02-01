import "./App.css";
import React from "react";

import TopNavbar from "./components/TopNavbar";
import SideNav from "./components/SideNav";
import Search from "./components/Search";
import Footer from "./components/Footer";

import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { light, dark } from "./Theme/theme";

function App() {
  const [userTheme, setUserTheme] = React.useState(true);
  const theme = createMuiTheme(userTheme ? dark : light);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Router will go here - Components will be factored into Views/Pages and removed here */}
        <TopNavbar setUserTheme={setUserTheme} userTheme={userTheme} />
        <div className="mainTopContent">
          <SideNav />
          <Search />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
