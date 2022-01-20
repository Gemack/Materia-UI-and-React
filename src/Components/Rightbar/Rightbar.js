import {
  makeStyles,
  Container,
  Typography,
  Avatar,
  ImageList,
  ImageListItem,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import avt1 from "../../Static/avatar (1).jpg";
import avt2 from "../../Static/avatar (2).jpg";
import avt3 from "../../Static/avatar (3).jpg";
import img1 from "../../Static/img-g (1).jpg";
import img2 from "../../Static/img-g (2).jpg";
import img3 from "../../Static/img-g (3).jpg";
import img4 from "../../Static/img-g (4).jpg";
import img5 from "../../Static/img-g (5).jpg";
import img6 from "../../Static/img-g (6).jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "6rem",
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: "1.5rem",
    textTransform: "uppercase",
    color: "rgb(0,255,0)",
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Colleague</Typography>
      <AvatarGroup max={4} style={{ marginBottom: "2rem" }}>
        <Avatar src={avt1} alt="Lady" />
        <Avatar src={avt2} alt="bovi" />
        <Avatar src={avt3} alt="lion" />
        <Avatar alt="lion" />
      </AvatarGroup>
      <Typography className={classes.title}>Iconic </Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={2}>
        <ImageListItem>
          <img src={img1} alt="galary" />
        </ImageListItem>
        <ImageListItem>
          <img src={img2} alt="galary" />
        </ImageListItem>
        <ImageListItem>
          <img src={img3} alt="galary" />
        </ImageListItem>
        <ImageListItem>
          <img src={img4} alt="galary" />
        </ImageListItem>
        <ImageListItem>
          <img src={img5} alt="galary" />
        </ImageListItem>
        <ImageListItem>
          <img src={img6} alt="galary" />
        </ImageListItem>
      </ImageList>
    </Container>
  );
};

export default Rightbar;
