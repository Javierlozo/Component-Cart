import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homePage: {
    display: "flex",
    height: "94vh",
    backgroundColor: theme.palette.primary.background,
    color: theme.palette.primary.font,
  },
}));

export default useStyles;
