
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ErrorLoadPage from "./Components/Body/ErrorLoadPage/ErrorLoadPage";
import Main from "./Components/Body/Main";
import InitialLoadPage from "./Components/Body/NotLoadedPage/InitialLoadPage";
import Header from "./Components/Header/Header";
import InputComponents from "./Components/SearchBar/InputComponents";
import { Page } from "./Components/Styles/component-styles";
import { GlobalStyles } from "./Components/Styles/globalstyle";
import { lightTheme, darkTheme } from "./Components/Styles/Themes"

function App() {

  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [searchUser, setsearchUser] = useState('');
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false);



  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} className="App">
      <GlobalStyles />
      <Page>

        <Header themeToggler={themeToggler} theme={theme} />

        <InputComponents setsearchUser={setsearchUser} setLoaded={setLoaded} setFailed={setFailed} />
        {!loaded && !failed && <InitialLoadPage />}
        {loaded && !failed && < Main searchUser={searchUser} />}
        {failed && loaded && <ErrorLoadPage />}
      </Page>

    </ThemeProvider>
  );
}

export default App;
