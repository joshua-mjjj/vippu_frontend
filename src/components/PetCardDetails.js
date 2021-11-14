import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footprint from "../assets/logo_placeholder_transparent_grey.png";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
});

export default function PetCardDetails(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          More details about {props.pet.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         <span style={{     
          	fontSize: '16px',
		    fontFamily: 'Dosis',
		    fontWeight: 'bold',
		    color: '#23286G' }}>Age: </span> {" "} {props.pet.age}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
           <span style={{     
          	fontSize: '16px',
		    fontFamily: 'Dosis',
		    fontWeight: 'bold',
		    color: '#23286G' }}>Gender: </span> {" "} {props.pet.gender}
        </Typography>
         <Typography className={classes.pos} color="textSecondary">
           <span style={{     
          	fontSize: '16px',
		    fontFamily: 'Dosis',
		    fontWeight: 'bold',
		    color: '#23286G' }}>Color: </span> {" "} {props.pet.color}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <span style={{     
          	fontSize: '16px',
		    fontFamily: 'Dosis',
		    fontWeight: 'bold',
		    color: '#23286G' }}>Breed: </span> {" "} {props.pet.breed}
        </Typography>
      </CardContent>
    </Card>
  );
}
