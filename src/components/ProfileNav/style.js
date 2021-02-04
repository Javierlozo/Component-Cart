import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  profileNav: {
    height: 100,
    position: "sticky",
    top: "0px",
    borderBottom: `2px solid ${theme.palette.primary.accent}`,
    backgroundColor: theme.palette.secondary.background,
  },
  tabs: {
    paddingTop: theme.spacing(2),
    color: theme.palette.primary.font,
  },
}));

export default useStyles;
