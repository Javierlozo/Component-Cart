import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileEdit: {
    height: "80%",
    width: "80%",
    backgroundColor: theme.palette.secondary.background,
  },
  dialogContent: {
    height: 550,
    width: 550,
    flexGrow: 1,
  },
  avatarBox: {
    height: 200,
    backgroundColor: theme.palette.secondary.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  editNames: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  addLinkContainer: {
    display: "flex",
  },
  addLinkIcon: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

export default useStyles;
