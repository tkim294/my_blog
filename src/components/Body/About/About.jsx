import React from "react";
import { Container, Typography } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";

import useStyles from "./styles";
import profileImage from "../../../images/coding_image1.jpg";

const About = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={profileImage}
        />
        <div className={classes.info}>
          <Typography variant="h2">Taehyun Kim</Typography>
          <Typography variant="h6" style={{ color: "#98A6AD" }}>
            Software Developer
          </Typography>
          <div className={classes.socialMedia}>
            <a
              target="_blank"
              className={classes.button}
              href="https://github.com/tkim294"
            >
              <GitHubIcon style={{ width: "40", height: "40" }} />
            </a>
            <a
              target="_blank"
              className={classes.button}
              href="https://www.linkedin.com/in/taehyun-kim-260742183/"
            >
              <LinkedInIcon style={{ width: "40", height: "40" }} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.bioContainer}>
        <Typography className={classes.title} variant="h4">
          Biography
        </Typography>
        <Typography variant="body1">
          Hello! I'm Taehyun Kim, a graduate of University of Wisconsin Madison.
          I have a Bachelor of Science degree in Computer Science from
          University of Wisconsin.
          <br/>
          <br/>
          I am currently working as a frond-end developer at Spigen Inc.
          I have done a few Shopify Project using HTML, CSS, JavaScript, and Liquid.
          Also, I am currently working on creating an app for shopify production websites.
          <br />
          <br />
          In addition to my work experience, I have done some web projects using
          JavaScript Framework (React). My skills in programming are Java,
          JavaScript, C, Liquid, and JavaScripts Frameworks including React and React
          Native. I also have some experiences in developing with Linux
          Environment. In addition to programming languages, I have set up my
          database for web apps by using Firebase or MongoDB.
          <br />
          <br />I always like to challenge myself and work hard to solve
          problems. I am also eager to learn new skills and trying to learn new
          programming technologies.
        </Typography>
        <div className={classes.courseEduContainer}>
          <div className={classes.courses}>
            <Typography variant="h6">Courses Taken</Typography>
            <div className={classes.listContainer}>
              <ul className={classes.list}>
                <li>Operating System </li>
                <li>Algorithm</li>
                <li>Artificial Interlligence</li>
                <li>Computer Graphics</li>
                <li>Database Management</li>
                <li>Mobile Application </li>
              </ul>
            </div>
          </div>
          <div className={classes.education}>
            <Typography variant="h6">Education</Typography>
            <div className={classes.school}>
              <SchoolIcon />
              <Typography noWrap className={classes.edu} variant="body2">
                BS in Computer Science
              </Typography>
            </div>
            <div className={classes.subtitle}>
              <Typography variant="subtitle">
                University of Wisconsin at Madison
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
