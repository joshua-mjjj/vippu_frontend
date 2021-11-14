import React, { useState } from 'react';
import { Redirect } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import PaymentIcon from '@material-ui/icons/Payment';
import Divider from '@material-ui/core/Divider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Sidebar(props) {
  const classes = useStyles();

   const [go_to_dash, setGo_to_dash] = useState(false);
   const [go_to_apnt, setGo_to_apnt] = useState(false);
   const [go_to_notf, setGo_to_notf] = useState(false);
   const [go_to_payments, setGo_to_payments] = useState(false);
       if(go_to_dash){
        return <Redirect to="/dashboard" />;
       }
       if(go_to_apnt){
        return <Redirect to="/appointments" />;
       }
       if(go_to_notf){
        return <Redirect to="/notifications" />;
       }       
       if(go_to_payments){
        return <Redirect to="/payments" />;
       }
       
    const useStyles = makeStyles((theme) => ({
      topList:{
        paddingTop: '0',
      },
    }));

    return (
       <div>
      <Divider />
      <List className={classes.topList}>
          <ListItem onClick={(e) => setGo_to_dash(true)} selected button>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem onClick={(e) => setGo_to_apnt(true)} button>
            <ListItemIcon><EventIcon /></ListItemIcon>
            <ListItemText primary="Appointments" />
          </ListItem>
          <ListItem onClick={(e) => setGo_to_notf(true)} button>
            <ListItemIcon><NotificationsIcon /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
      </List>
      <Divider />
      <List>
      <ListItem button>
            <ListItemIcon><PaymentIcon /></ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem onClick={(e) => setGo_to_payments(true)} button>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
      </List>
    </div>
    );
}