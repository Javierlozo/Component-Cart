import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    height: "20vh",
    backgroundColor: theme.palette.secondary.background,
    color: theme.palette.primary.font,
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
