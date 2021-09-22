import { AppBar, Toolbar, IconButton, Container } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";

import useStyles from "./styles";
import resumePdf from "../../resume/resume.pdf";

const Header = () => {
  const classes = useStyles();
  const [currButton, setCurrButton] = useState(null);
  const history = useHistory();

  const handleClick = (name, id) => {
    setCurrButton(id);
    history.push("/" + name);
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        {/* <Container maxWidth="xl" className={classes.container}> */}
        <IconButton
          style={
            currButton === 0
              ? {
                  backgroundColor: "#767676",
                  color: "rgba(123, 239, 178, 1)",
                }
              : { backgroundColor: "", color: "" }
          }
          disableRipple
          className={classes.items}
          variant="h6"
          onClick={() => handleClick("home", 0)}
        >
          Home
        </IconButton>
        <IconButton
          style={
            currButton === 1
              ? {
                  backgroundColor: "#767676",
                  color: "rgba(123, 239, 178, 1)",
                }
              : { backgroundColor: "", color: "" }
          }
          disableRipple
          className={classes.items}
          variant="h6"
          onClick={() => handleClick("web", 1)}
        >
          Projects
        </IconButton>
        <IconButton
          style={
            currButton === 2
              ? {
                  backgroundColor: "#767676",
                  color: "rgba(123, 239, 178, 1)",
                }
              : { backgroundColor: "", color: "" }
          }
          disableRipple
          className={classes.items}
          variant="h6"
          onClick={() => handleClick("about", 2)}
        >
          About
        </IconButton>
        <IconButton
          style={
            currButton === 3
              ? {
                  backgroundColor: "#767676",
                  color: "rgba(123, 239, 178, 1)",
                }
              : { backgroundColor: "", color: "" }
          }
          disableRipple
          className={classes.items}
          variant="h6"
        >
          <a className={classes.link} target="_blank" href={resumePdf}>
            Resume
          </a>
        </IconButton>
        <IconButton
          style={
            currButton === 4
              ? {
                  backgroundColor: "#767676",
                  color: "rgba(123, 239, 178, 1)",
                }
              : { backgroundColor: "", color: "" }
          }
          disableRipple
          className={classes.items}
          variant="h6"
          onClick={() => handleClick("contact", 4)}
        >
          Contact
        </IconButton>
        {/* </Container> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
