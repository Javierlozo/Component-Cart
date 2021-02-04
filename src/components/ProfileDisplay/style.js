import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileDisplay: {
    width: 675,
    height: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.secondary.background,
    color: theme.palette.primary.font,
  },
}));

export default useStyles;
