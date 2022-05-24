import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#343434",
    color: "#FBF6F5",
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "10vh",
  },
  title1: {
    marginTop: "6vh",
  },
  link: {
    display: "flex",
    color: "#795548",
    marginLeft: "4px",
    textDecoration: "none",
    border: "1px solid #795548",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60px",
    height: "30px",
    "&:hover": {
      backgroundColor: "#795548",
      color: "white",
    },
  },
  buttonContainer: {
    display: "flex",
    marginTop: "1vh",
  },
  code: {
    fontSize: "0.5em",
  },
  buttonGroupContainer: {
    marginTop: "2vh",
    display: "flex",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#795548",
    color: "black",
    "&:focus": {
      border: "4px solid #996b5b",
    },
    "&:hover": {
      backgroundColor: "#593F35",
    },
  },
  description: {
    maxWidth: "55ch",
  },
}));
