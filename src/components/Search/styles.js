import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  searchContainer: {
    backgroundColor: theme.palette.primary.main,
    width: 450,
    height: 200,
    margin: "2vw auto 2vw auto",
    display: "flex",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "2px 2px 8px #333333",
  },
  inputWrapper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "24vw",
  },
  inputs: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
  },
  sortLabel: {
    color: theme.palette.secondary.font,
  },
}));

export default styles;
