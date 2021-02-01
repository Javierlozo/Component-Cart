import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sideContainer: {
    width: "25%",
    height: "80vh",
    padding: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    overflow: "scroll",
    border: "1px solid black",
  },
  popularContainer: {
    height: "50%",
    margin: theme.spacing(3),
  },
  friendContainer: {
    height: "50%",
    margin: theme.spacing(3),
  },
}));

export default styles;
