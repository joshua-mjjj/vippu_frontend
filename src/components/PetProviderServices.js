import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PetProviderServices(props) {
  const classes = useStyles();
  let services;
  if(props.services){
    services = props.services
  }
  return (
    <div className={classes.root}>
    {props.services ?  (
        services.map((service, idx) => (
          <List key={idx} component="nav" aria-label="Services">
                {service.service.name} {service.price}$ {service.rate.name}
          </List>
       ))
      ) : 
  ''}
     
    </div>
  );
}
