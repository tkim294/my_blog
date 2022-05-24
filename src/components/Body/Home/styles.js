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
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.6em",
    },
  },
  imageDiv: {
    marginTop: "6vh",
  },
  image: {
    width: theme.spacing(40),
    height: theme.spacing(40),
  },
  description: {
    marginTop: "4vh",
  },
  welcome: {
    fontSize: "30px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  descript: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));
