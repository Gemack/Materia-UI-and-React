import { makeStyles, Container } from "@material-ui/core";
import Feed from "./Feed";
import img1 from "../../Static/lagos.jpg";
import img2 from "../../Static/lagos ct2.jpg";
import img3 from "../../Static/Berlin.jpg";
import img4 from "../../Static/londonC.jpg";
import img5 from "../../Static/rural.jpg";
import img6 from "../../Static/dubaia.jpg";
import img7 from "../../Static/Abuja.jpg";
import img8 from "../../Static/rivers.jpg";
import img9 from "../../Static/benu.jpg";
import img10 from "../../Static/cap town.jpg";
import img11 from "../../Static/Hk.jpg";
import img12 from "../../Static/paris.jpg";
import img13 from "../../Static/New York.jpg";
import img14 from "../../Static/Johannesburg.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "6rem",
  },
}));

const Feeds = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Feed img={img1} title="Lagos" />
      <Feed img={img2} title="Owerri" />
      <Feed img={img3} title="Berlin" />
      <Feed img={img4} title="London" />
      <Feed img={img5} title="Kabba" />
      <Feed img={img6} title="Dubai" />
      <Feed img={img7} title="Abuja" />
      <Feed img={img8} title="Port Hacourt" />
      <Feed img={img9} title="Ibadan" />
      <Feed img={img10} title="Cap Town" />
      <Feed img={img11} title="Hong kong" />
      <Feed img={img12} title="Paris" />
      <Feed img={img13} title="New York" />
      <Feed img={img14} title="Johannesburg" />
    </Container>
  );
};

export default Feeds;
