import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileContent: {
    height: "100vh",
    backgroundColor: theme.palette.primary.background,
    display: "flex",
  },
  feed: {
    width: "50%",
    borderRight: "1px solid green",
  },
}));

export default useStyles;
