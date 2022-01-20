import {
  Fab,
  makeStyles,
  Tooltip,
  Modal,
  Container,
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import muiAlert from "@material-ui/lab/Alert";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 10,
    right: 10,
    background: "rgb(0,255,0)",
  },
  container: {
    width: 600,
    height: 600,
    background: "rgba(0,255,0,0.6)",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: "2rem",
  },
  item: {
    marginBottom: "1rem",
  },
  btn: {
    color: "whitesmoke",
    background: "rgb(0,255,0)",
    margin: "1rem",
  },
  btn_red: {
    color: "whitesmoke",
    background: "red",
  },
}));

function Alert(props) {
  return <muiAlert elevation={6} variant="filled" {...props} />;
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alt, setAlt] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlt(false);
  };
  return (
    <>
      <Tooltip title="review" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outliined-multiline-static"
                multiline
                rows={5}
                defaultValue="Your Review"
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: "100%" }}
              />
            </div>

            <div className={classes.item}>
              <TextField select label="visibility" value="public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Others</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Rate</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Excellent"
                  control={<Radio size="small" />}
                  label="Excellent"
                />
                <FormControlLabel
                  value="Good"
                  control={<Radio size="small" />}
                  label="Good"
                />
                <FormControlLabel
                  value="Bad"
                  control={<Radio size="small" />}
                  label="Bad"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button className={classes.btn} onClick={() => setAlt(true)}>
                SUBMIT
              </Button>
              <Button
                className={classes.btn_red}
                onClick={() => setOpen(false)}
              >
                CANCEL
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={alt}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          style={{
            background: "blue",
            padding: "1rem",
            borderRadius: "20px",
            color: "whitesmoke",
          }}
        >
          Review has been logged
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
