import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileContent: {
    height: "100vh",
    backgroundColor: theme.palette.primary.background,
    display: "flex",
  },
  feed: {
    width: "80%",
    borderRight: `1px solid ${theme.palette.primary.accent}`,
  },
}));

export default useStyles;
