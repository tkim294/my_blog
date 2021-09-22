import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#343434",
    color: "#FBF6F5",
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    fontFamily: "Source Sans Pro",
  },
  name: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.2em",
    },
  },
  title: {
    justifyContent: "center",
    marginTop: "5%",
  },
  title1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9em",
    },
  },
  imageDiv: {
    marginTop: "6vh",
  },
  image: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  description: {
    marginTop: "4vh",
  },
  welcome: {
    fontSize: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1em",
    },
  },
  descript: {
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
}));
