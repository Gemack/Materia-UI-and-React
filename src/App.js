import Navbar from "./Components/Navbar/Navbar";
import Feeds from "./Components/Feeds/Feeds";
import Rightbar from "./Components/Rightbar/Rightbar";
import Leftbar from "./Components/Leftbar/Leftbar";
import { Grid, makeStyles } from "@material-ui/core";
import Add from "./Components/Add/Add";

const useStyle = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyle();
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeds />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
