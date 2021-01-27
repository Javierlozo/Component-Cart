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
  },
  sideContainer: {
    width: "25%",
    height: "80vh",
    marginTop: "4vh",
    marginLeft: "3vw",
    overflow: "scroll",
  },
  popularContainer: {
    height: "40%",
    marginTop: "3vh",
    marginBottom: "2vh"
  },
  friendContainer: {
    height: "40%",
    marginTop: "3vh",
    marginBottom: "2vh"
  }
}))

export default styles