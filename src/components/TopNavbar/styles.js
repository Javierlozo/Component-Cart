import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    zIndex: "5",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: "26px",
    fontWeight: "600",
    color: theme.palette.secondary.font,
  },
  linkGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: theme.spacing(3),
  },
  link: {
    cursor: "pointer",
    color: theme.palette.primary.background,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default styles;
