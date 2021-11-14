import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { set_current_profile_id } from "../actions/results.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    '& span':{
        padding: '4px 0',
        margin: '4px 0',
    },
  },
  secondaryText: {
    display: 'inline-block',
    padding: '8px 0 4px',
  },
  rate: {
    textAlign: 'right',
    maxWidth: '5rem',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 2rem 0.5rem 0',
  },
  listBox:{
    backgroundColor: 'white',
    cursor: 'pointer',
    paddingTop: '0',
    paddingBottom: '0',
  },
  rating:{
    textAlign: 'right',
    maxWidth: '10rem',
  },
  services:{
    lineHeight: '3', 
    margin: theme.spacing(0, 1, 1, 0)
  },
  service:{
    
    marginBottom: "2px",
    padding: theme.spacing(1, 0, 0)

  },
  location:{

  },
  listItem:{
    paddingTop: '0',
    paddingBottom: '0',
  },
}));

function AlignItemsList(props) {
  const classes = useStyles();

  const openProvider = (e) => {
    props.set_current_profile_id(props.id)
   // window.location.href = `/providers/${props.id}` petprovider;
    window.location.href = `/pet_provider`;
   //  console.log(props.id)
    localStorage.setItem("profile_id", props.id);
  }
  const component = () => {
        if(props.services.length > 0){
          const ser = props.services.filter((serv) => serv.service.name === props.searchInput);
          if(ser.length > 0){
            const price = ser[0].price;
            const rate = ser[0].rate.name
            return (
              <div>
                <ListItemText className={classes.rate} primary={'$ ' + price}/>
                <ListItemText secondary={rate} className={classes.rate}/>     
              </div>
            );
          } 
        }else {
          return false
        }
      };
  console.log(props.photo)
  return (
      <List component="nav" 
        m={1} p={3} 
        className={classes.listBox}
        onClick={openProvider}>
        <ListItem alignItems="flex-start" key={props.id} className={classes.listItem}>
            <ListItemAvatar>
            <Avatar alt={props.full_name} src={props.photo} className={classes.large}/>
            </ListItemAvatar>
            <ListItemText
            primary={
                <React.Fragment>
                    <Typography
                        variant="h6"
                        component="span"
                        color="primary"
                        className={classes.secondaryText}
                        m={0.5}
                    >
                        {props.full_name}
                    </Typography>                   
                </React.Fragment>
            }
            secondary={
                <React.Fragment>
                <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                >
                  {props.description}
                </Typography>

                <Typography variant="body2" className={classes.service}>
                  <b>Services:</b>
                </Typography>
                <Typography variant="body2">
                    {props.services.map((p, i) => ( 
                        <Chip label={p.service.name} variant="outlined" disabled size="small" color="textPrimary" className={classes.services}/>
                    ))} 
                </Typography>

                <Typography variant="caption">
                  <span><LocationOnIcon style={{ fontSize: 12 }}/></span>
                  <span> {props.location}</span>
                </Typography>

                </React.Fragment>
            }
            />
           {props.rating && props.rating === "No Rating Yet" ?
              <ListItem className={classes.rating}>
                <Box component="fieldset" mb={2} borderColor="transparent">
                    <Typography component="legend"></Typography>
                    <Rating name="read-only" defaultValue="3" readOnly />
                </Box>
            </ListItem> :
            <ListItemText secondary={props.rating} className={classes.rate}/> 
          }
          <div>{component()}</div>
         
        </ListItem>
      </List>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  availability: state.forms.availability,
});

export default connect(mapStateToProps, {
    set_current_profile_id
})(AlignItemsList);