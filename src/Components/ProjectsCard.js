import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  cardStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexdirection: 'column',
    '@media(maxwidth: 200)' : {
        flexdirection: 'column',
    }
  },
  cardData: {
    width: 300,
  },
  description: {
    height: 100,
  },
  media: {
    height: 300,
  },
  button: {
    left: 10,
  },
  github: {
    padding: 20,
  },
});

const cardDatas = [{
  id: 1,
  image: './assets/PAMO.png',
  title: 'PAMO',
  nameOfProject: 'PAMO',
  description: 'Mobile application created in Kotlin',
  button: 'https://github.com/pszczechowski/PAMO'
},
{
  id: 2,
  image: './assets/NeuralNetworks.png',
  title: 'PYTHON',
  nameOfProject: 'Neural Networks',
  description: 'Machine Learning in Python: Iris Classification',
  button: 'https://github.com/pszczechowski/NeuralNetworks'
},];


export default function ProjectCard() {
  const classes = useStyles();
  return (
    <div id='projects' className={classes.cardStyle}>
      {cardDatas.map((cardData) => (
        <div className={classes.cardData}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={cardData.image}
              title={cardData.title}
            />
            <CardContent>
              <Typography className={classes.nameOfProject} gutterBottom variant="h5" component="h2">
                {cardData.nameOfProject}
              </Typography>
              <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                {cardData.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} href={cardData.button} target="_blank" size="small" color="primary">
                Visit
        </Button>
              <FontAwesomeIcon className="github" icon={["fab", "github"]} />
            </CardActions>
          </Card></div>
      ))}
    </div>
  );
}
