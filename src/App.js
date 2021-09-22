import React from "react";
import { Container, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Body/Home/Home";
import "./App.css";
import Web from "./components/Body/Web/Web";
import About from "./components/Body/About/About";
import Resume from "./resume/resume.pdf";
import Contact from "./components/Contact/Contact";

const App = () => {
  const bodyTheme = createMuiTheme({
    typography: {
      fontFamily: ["Antic", "Roboto"].join(","),
    },
  });

  return (
    <BrowserRouter>
      <Container disableGutters maxWidth="xl">
        <Header />
        <ThemeProvider theme={bodyTheme}>
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/home" />} />
            <Route path="/home" exact component={Home} />
            <Route path="/web" exact component={Web} />
            <Route path="/about" exact component={About} />
            {/* <Route path="/resume" exact component={Resume} /> */}
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </ThemeProvider>
      </Container>
    </BrowserRouter>
  );
};

export default App;
