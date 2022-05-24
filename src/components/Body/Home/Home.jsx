import { Container, Typography, Avatar, Box } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";
import profileImage from "../../../images/profile_image.jpg";

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <div className={classes.nameContainer}>
        <Typography className={classes.name} variant="h1">
          Taehyun Kim
        </Typography>
      </div>
      <div className={classes.title}>
        <Typography variant="h6" className={classes.title1}>
          Front-end Developer 
        </Typography>
      </div>
      <div className={classes.imageDiv}>
        <Avatar
          alt="Taehyun Kim"
          className={classes.image}
          src={profileImage}
        />
      </div>
      <div className={classes.description}>
        <Typography className={classes.welcome} variant="body1">
          Welcome to my Portfolio.
        </Typography>
        <Typography className={classes.descript} variant="body2">
          <Box lineHeight={1.5} m={1}>
            I'm a graduate of University of Wisconsin Madison. I am a front-end developer.
            <br /> I am able to do programming languages including C, Java, HTML, CSS,
            Javascript, and Python. 
            <br />
            I have developed a few Shopify projects and been developing a shopify app for a order process.
            <br /> I have done some projects using JavaScript Frameworks, React
            and React Native.
          </Box>
        </Typography>
      </div>
    </Container>
  );
};

export default Home;
