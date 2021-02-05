import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileContent: {
    height: "94vh",
    backgroundColor: theme.palette.primary.background,
    display: "flex",
  },
  feed: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRight: `1px solid ${theme.palette.primary.accent}`,
    overflowY: "scroll",
  },
  tempPost: {
    height: 200,
    width: 300,
    border: "1px solid black",
    margin: theme.spacing(2),
  },
}));

export default useStyles;
