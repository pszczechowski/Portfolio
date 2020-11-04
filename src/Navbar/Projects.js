import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
;

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto'
  },
  media: {
    height: 250,
  },
  button: {
    left: 10,
  },
  github: {
    padding: 20,
  }
});

export default function Projects() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={process.env.PUBLIC_URL + '/assets/PAMO.png'}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Android quiz
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Mobile App created in Java with framework Kotlin
          </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href={'https://github.com/pszczechowski/PAMO'} target="_blank" size="small" color="primary">
          Visit
        </Button>
        <FontAwesomeIcon className="github" icon={["fab", "github"]} />
      </CardActions>
    </Card>
  );
}