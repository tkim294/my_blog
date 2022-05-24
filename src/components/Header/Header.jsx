import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

import useStyles from "./styles";
import resumePdf from "../../resume/resume.pdf";

const Header = () => {
  const classes = useStyles();
  const [currButton, setCurrButton] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 959 ? setIsMobile(true) : setIsMobile(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const handleClick = (name, id) => {
    setCurrButton(id);
    history.push("/" + name);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const desktopMenuItems = (
    <Toolbar className={classes.toolBar}>
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
        variant='h6'
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
        variant='h6'
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
        variant='h6'
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
        variant='h6'
      >
        <a className={classes.link} target='_blank' href={resumePdf}>
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
        variant='h6'
        onClick={() => handleClick("contact", 4)}
      >
        Contact
      </IconButton>
    </Toolbar>
  );

  const mobileMenuItems = (
    <Drawer
      anchor="top"
      open={drawerOpen}
      className={classes.drawer}
      onClose={() => setDrawerOpen(false)}
      // onClick={setDrawerOpen(false)}
      // onKeyDown={setDrawerOpen(false)}
    >
      <Toolbar className={classes.toolBar}>
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
          variant='h6'
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
          variant='h6'
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
          variant='h6'
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
          variant='h6'
        >
          <a className={classes.link} target='_blank' href={resumePdf}>
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
          variant='h6'
          onClick={() => handleClick("contact", 4)}
        >
          Contact
        </IconButton>
      </Toolbar>
    </Drawer>
  );

  return (
    <AppBar className={classes.appBar}>
      {!isMobile && desktopMenuItems}
      {isMobile && mobileMenuItems}
      {isMobile && (
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          style={{ marginLeft: "10px" }}
          onClick={openDrawer}
        >
          <MenuIcon />
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
            style={{ marginLeft: "10px" }}
          >
            Menu
          </Typography>
        </IconButton>
      )}
    </AppBar>
  );
};

export default Header;
