import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Grid, TextField, Avatar, Chip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";

import useStyles from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ links, setLinks }) {
  const [open, setOpen] = React.useState(false);
  const [linkValue, setLinkValue] = React.useState(undefined);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addLink = () => {
    setLinks((links) => [...links, linkValue]);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className={classes.dialogContent}
          >
            <Grid container spacing={3}>
              <Grid item lg={6}>
                <div className={classes.avatarBox}>
                  <Avatar style={{ height: 150, width: 150 }} />
                </div>
              </Grid>
              <Grid item lg={6}>
                <div className={classes.editNames}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Display name"
                  />
                  <TextField fullWidth variant="outlined" label="Handle" />
                </div>
              </Grid>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="About"
                  multiline
                  rows="4"
                />
              </Grid>
              <Grid item lg={6} className={classes.addLinkContainer}>
                <TextField
                  label="Add a link url"
                  onChange={(e) => setLinkValue(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <AddIcon
                          className={classes.addLinkIcon}
                          onClick={() => addLink()}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label={linkValue ? null : "Links"}
                  multiline
                  rows="4"
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
