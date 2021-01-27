import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  searchContainer:{
    backgroundColor: "#659DBD",
    width: "30vw",
    height: "20vh",
    margin: "2vw auto 2vw auto",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "2px 2px 8px #333333"
  },
  inputWrapper: {
    marginTop: "2vh",
    marginBottom: "2vh",
    width: "24vw"
  },
  inputs: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "10px"
  }
}));

export default styles