import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import React, { useState } from "react";
import emailjs from "emailjs-com";

import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(info.email)) {
      alert("Please enter a valid email address");
    } else {
      if (info.name && info.email && info.message) {
        const serviceId = "service_o31hsro";
        const templateId = "template_nt1i8xy";
        const userId = "user_6HnRRRUh59MpmfKgR9uSf";

        const templateParams = {
          name: info.name,
          email: info.email,
          message: info.message,
        };

        console.log(templateParams);

        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then((response) => console.log(response))
          .then((error) => console.log(error));

        alert("Emaill has been sent. I will contact you in a few days");

        clear();
      } else {
        alert("Please fill in all fields.");
      }
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const clear = () => {
    setInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <div>
        <Typography variant="h2">Contact</Typography>
      </div>
      <div className={classes.infoContainer}>
        <Grid container spacing={1}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid xs={12} sm={12} item>
              <TextField
                className={classes.root}
                label="Name"
                placeholder="Name"
                variant="outlined"
                fullWidth
                required
                value={info.name}
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                className={classes.root}
                label="Email"
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
            </Grid>
            <Grid xs={12} sm={12} item>
              <TextField
                className={classes.root}
                label="Message"
                placeholder="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={9}
                value={info.message}
                onChange={(e) => setInfo({ ...info, message: e.target.value })}
              />
            </Grid>
            <Button className={classes.button} variant="outlined" type="submit">
              Send
            </Button>
          </form>
        </Grid>
      </div>
    </Container>
  );
};

export default Contact;
