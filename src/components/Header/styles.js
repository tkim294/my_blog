import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    background: "#434343",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
  toolBar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    marginLeft: "25px",
    color: "white",
    fontSize: "1.2em",
    borderRadius: "0",
    "&:hover": {
      backgroundColor: "#767676",
      color: "rgba(123, 239, 178, 1)",
    },
    "&:active": {
      backgroundColor: "#767676",
    },
  },
  container: {
    display: "flex",
  },
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "#767676",
      color: "rgba(123, 239, 178, 1)",
    },
  },
}));
