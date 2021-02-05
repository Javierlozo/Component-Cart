import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileDisplay: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
  },
  avatarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.background,
    color: theme.palette.primary.font,
  },
  profileAvatar: {
    height: 200,
    width: 200,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  profileContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.primary.font,
    margin: theme.spacing(2),
  },
  profileAbout: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  linkContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  anchor: {
    color: "inherit",
    textDecoration: "inherit",
  },
  link: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    margin: theme.spacing(0.5),
  },
}));

export default useStyles;
