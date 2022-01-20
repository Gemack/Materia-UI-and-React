import { makeStyles, Container, Typography } from "@material-ui/core";
import {
  ContactSupport,
  Mail,
  Chat,
  CheckBox,
  Person,
  Apartment,
  Settings,
  Backup,
  Archive,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 0,
    paddingTop: "6rem",
    background: "rgb(1, 253, 0)",
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      background: "white",
      color: "#555",
      border: "1px solid whitesmoke",
      height: "100vh",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "1.4rem",
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: "1rem",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
      color: "rgb(0, 255, 0)",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    transition: "all 1s",
    "&:hover": {
      color: "rgb(1, 253, 0)",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Apartment className={classes.icon} />
        <Typography className={classes.text}>Apartments</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Personels</Typography>
      </div>
      <div className={classes.item}>
        <Mail className={classes.icon} />
        <Typography className={classes.text}>Mail</Typography>
      </div>
      <div className={classes.item}>
        <Chat className={classes.icon} />
        <Typography className={classes.text}>Chats</Typography>
      </div>
      <div className={classes.item}>
        <CheckBox className={classes.icon} />
        <Typography className={classes.text}>Completed</Typography>
      </div>
      <div className={classes.item}>
        <ContactSupport className={classes.icon} />
        <Typography className={classes.text}>Surports</Typography>
      </div>
      <div className={classes.item}>
        <Archive className={classes.icon} />
        <Typography className={classes.text}>Archive</Typography>
      </div>
      <div className={classes.item}>
        <Backup className={classes.icon} />
        <Typography className={classes.text}>Backups</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
