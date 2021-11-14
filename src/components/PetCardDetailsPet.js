import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Footprint from "../assets/logo_placeholder_transparent_grey.png";
import Chip from '@material-ui/core/Chip';
import PetCardDetails from "./PetCardDetails";
import Popover from '@material-ui/core/Popover';

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

export default function PetCardDetailsPet(props) {
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
   <span>
    <Chip 
      style={{ marginRight: '10px' }} 
      label={props.pet.name} 
      onClick={handleClick}
      icon={<img src={Footprint} height="23px" width="23px" alt=""/>}/>
       <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
         <PetCardDetails pet={props.pet} />
     </Popover>
   </span>
  );
}
