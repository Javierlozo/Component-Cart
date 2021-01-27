import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontSize: "26px",
    fontWeight: "600",
  },
  linkGroup: {
    display: "flex",
    flexDirection: "row",
    marginRight: "4vw"
  },
  link: {
    cursor: "pointer",
    color: "inherit",
    marginLeft: "1.8vw",
    marginRight: "1.8vw",
  }
}))

export default styles