import React, { useState } from "react";
import { Container, Typography, Button, ButtonGroup } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";

import useStyles from "./styles";

const Web = () => {
  const data = [
    {
      title: "Memories App",
      description:
        "A web app which is a simpler version of blog. Can share memories with photos. Using MERN Stack",
      href: "https://github.com/tkim294/memories_app",
      language: "All React",
    },
    {
      title: "Notify Bot",
      description:
        "A simple python program which notifies when a certain item is in stock. Use Python frameworks: webdriver and fake useragent",
      href: "https://github.com/tkim294/notify_bot",
      language: "All Python",
    },
    {
      title: "E-Commerce Web",
      description: "A shop app using commercejs and stripe for payment.",
      href: "https://github.com/tkim294/ecommerce_web",
      language: "All React",
    },
    {
      title: "iMessage Clone",
      description:
        "A messaging app using React for front end and Firebase for Backend.",
      href: "https://github.com/tkim294/iMessageClone",
      language: "All React",
    },
    {
      title: "Google Drive Clone",
      description: "Simple Cloud database using React and Firebase",
      href: "https://github.com/tkim294/google-drive-clone",
      language: "All React",
    },
  ];

  const classes = useStyles();
  const [button, setButton] = useState("");

  return (
    <Container maxWidth="xl" className={classes.container}>
      <div>
        <Typography className={classes.title} variant="h3">
          Recent Projects
        </Typography>
      </div>
      <div>
        <div className={classes.buttonGroupContainer}>
          <ButtonGroup disableRipple aria-label="outlined  button group">
            <Button
              onClick={() => setButton("All")}
              style={{
                backgroundColor:
                  button === "All" || button === "" ? "#593F35" : "#795548",
              }}
              className={classes.button}
            >
              All
            </Button>
            <Button
              onClick={() => setButton("Python")}
              style={{
                backgroundColor: button === "Python" ? "#593F35" : "#795548",
              }}
              className={classes.button}
            >
              Python
            </Button>
            <Button
              onClick={() => setButton("React")}
              style={{
                backgroundColor: button === "React" ? "#593F35" : "#795548",
              }}
              className={classes.button}
            >
              React
            </Button>
          </ButtonGroup>
        </div>
        {data.map(
          (item) =>
            item.language.includes(button) && (
              <Typography className={classes.title1} variant="h5">
                {item.title}
                <Typography variant="body1" className={classes.description}>
                  {item.description}
                </Typography>
                <div className={classes.buttonContainer}>
                  <a target="_blank" className={classes.link} href={item.href}>
                    <GitHubIcon
                      style={{
                        width: "20",
                        height: "20",
                      }}
                    />
                    <p className={classes.code}>Code</p>
                  </a>
                </div>
              </Typography>
            )
        )}
      </div>
    </Container>
  );
};

export default Web;
