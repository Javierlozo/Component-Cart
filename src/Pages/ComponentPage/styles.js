import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "80%",
    width: "80%",
    margin: "auto",
  },
  details: {
    display: "flex",
    flexDirection: "row",
    padding: "1.2em"
  },
  image: {
    height: "40%",
    width: "30%",
    left: 0,
    padding: "1.2em"
  },
  rightDetails: {
    height: "40%",
    width: "50%",
    left: 0,
    padding: "1.2em"
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "1.4vh"
  },
  buttonOutput: {
    height: "28.1vh",
    width: "95%",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "1.1vh 1.3vw 1.1vh 1.3vw",
    margin: "auto",
  }
}));

export default useStyles;
