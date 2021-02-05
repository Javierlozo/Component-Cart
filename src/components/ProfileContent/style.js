import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileContent: {
    height: "80vh",
    backgroundColor: theme.palette.primary.background,
    display: "flex",
  },
  left: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: `1px solid ${theme.palette.primary.accent}`,
  },
}));

export default useStyles;
