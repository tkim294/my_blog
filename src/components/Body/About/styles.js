import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    color: "#FBF6F5",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "25px",
    },
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // paddingRight: "0.5%",
    marginTop: "9%",
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  image: {
    borderRadius: "50%",
    width: '500px',
    height: '500px',
    [theme.breakpoints.down("md")]: {
      width: '400px',
      height: '400px',
    },
    [theme.breakpoints.down("sm")]: {
      width: '300px',
      height: '300px',
    },
  },
  bioContainer: {
    marginTop: "8%",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    marginBottom: "2%",
    color: "#98A6AD",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2%",
    alignItems: "center",
  },
  socialMedia: {
    display: "flex",
    marginTop: "5%",
    width: "35%",
    justifyContent: "space-between",
  },
  button: {
    color: "white",
  },
  courses: {
    marginTop: "5%",
    color: "#98A6AD",
  },
  listContainer: {
    marginTop: "2%",
    color: "#DCDCDC",
  },
  list: {
    lineHeight: "140%",
  },
  courseEduContainer: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  education: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5%",
    color: "#98A6AD",
    marginLeft: "25%",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      width: "100%",
    },
  },
  school: {
    color: "white",
    marginTop: "5%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "row",
  },
  edu: {
    fontSize: "0.9em",
    marginLeft: "4%",
  },
  subtitle: {
    fontSize: "0.8em",
    marginTop: "3%",
    marginLeft: "18%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1%",
      marginBottom: "20px",
      marginLeft: "13%",
    },
  },
}));
