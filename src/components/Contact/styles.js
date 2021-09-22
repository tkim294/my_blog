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
  infoContainer: {
    marginTop: "5vh",
    width: "50%",
  },
  textField: {
    color: "white",
  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2E8BC0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E6E6FA",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#2E8BC0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#E6E6FA",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#2E8BC0",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#E6E6FA",
    },
  },
  button: {
    marginTop: "1vh",
    color: "#E0B0FF",
    border: "solid 1px #E0B0FF",
    "&:hover": {
      color: "white",
      backgroundColor: "#E0B0FF",
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
