import avatar1 from "../../Static/avater (2).jpg";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Badge,
} from "@material-ui/core";
import { Apartment, Mail, Search } from "@material-ui/icons";
import { InputBase, Avatar } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: "rgb(1, 253, 0)",
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    fontSize: "1.5rem",
    color: "blue",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    fontSize: "1rem",
    color: "blue",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    background: "rgba(245, 245, 245, 0.463)",
    transition: "all 1.5s",
    borderRadius: theme.shape.borderRadius,
    width: "35%",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.866)",
      width: "45%",
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },
  },
  input: {
    color: "rgb(1, 253, 0)",
    marginLeft: "1rem",
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: "10px",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.logoLg}>
          BONY <span style={{ color: "white", fontSize: "2.5rem" }}>UI</span>
        </Typography>
        <Typography variant="h5" className={classes.logoSm}>
          BONY <span style={{ color: "white", fontSize: "1.5rem" }}>UI</span>
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="search here.." className={classes.input} />
        </div>
        <div className={classes.icons}>
          <Badge badgeContent={4} color="primary" className={classes.badge}>
            <Apartment />
          </Badge>
          <Badge badgeContent={2} color="primary" className={classes.badge}>
            <Mail />
          </Badge>
          <Avatar alt="avatar" src={avatar1} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
