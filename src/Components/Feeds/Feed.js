import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "1rem",
  },
  media: {
    height: "250px",
  },
  Button: {
    color: "black",
    margin: "0.2rem 0.3rem",
    transition: "all 1s",
    "&:hover": {
      background: "rgb(0,255,0)",
      color: "whitesmoke",
    },
  },
}));

const Feed = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {props.title}
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            exercitationem molestias velit illo modi at blanditiis expedita ea
            doloribus aut illum, veritatis, itaque neque sint similique
            reprehenderit quae vel ipsa ab officia laborum ad dolorem incidunt!
            Fugit expedita eum cupiditate nisi eos necessitatibus dolore dolores
            consequuntur ea, repellendus deleniti. Facilis? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Harum exercitationem
            molestias velit illo modi at blanditiis expedita ea doloribus aut
            illum, veritatis, itaque neque sint similique reprehenderit quae vel
            ipsa ab officia laborum ad dolorem incidunt! Fugit expedita eum
            cupiditate nisi eos necessitatibus dolore dolores consequuntur ea,
            repellendus deleniti. Facilis?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      <Button className={classes.Button}>EXPLORE</Button>
      <Button className={classes.Button}>SHARE</Button>
    </Card>
  );
};

export default Feed;
