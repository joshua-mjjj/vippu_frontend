import * as React from 'react';
import { connect } from 'react-redux';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

import { logout } from '../actions/auth.js';

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)'
  }
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3
};

function Navigator(props) {
  const { ...other } = props;
  // console.log(props.auth)

  const [battallion_one, setBattalionOne] = React.useState(false);
  const [battallion_two, setBattalionTwo] = React.useState(false);
  const [battallion_three, setBattalionThree] = React.useState(false);
  const [battallion_four, setBattalionFour] = React.useState(false);
  const [battallion_five, setBattalionFive] = React.useState(false);
  const [battallion_six, setBattalionSix] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [dashboard, setDashboard] = React.useState(true);

  const categories = [
      {
        id: 
          props.auth.user !== null
            ? `${props.auth.user.first_name} ${props.auth.user.last_name}`
            : null,
        children: [
          {
            id: 'VIPPU Admin Home',
            icon: <AccountCircleIcon />,
            active: dashboard
          },
          {
            id: 'Battalion One',
            icon: <StorageIcon />,
            active: battallion_one
          },
          { 
            id: 'Battalion Two', 
            icon: <StorageIcon />,
            active: battallion_two
          },
          { 
            id: 'Battalion Three', 
            icon: <StorageIcon />,
            active: battallion_three
          },
          { 
            id: 'Battalion Four', 
            icon: <StorageIcon />,
            active: battallion_four
          },
          { 
            id: 'Battalion Five', 
            icon: <StorageIcon />,
            active: battallion_five
          },
          { 
            id: 'Battalion Six', 
            icon: <StorageIcon />,
            active: battallion_six
          },
          // {
          //   id: 'Deleted Employees',
          //   icon: <SettingsInputComponentIcon />
          // }
        ]
      },
      {
        id: 'Account',
        children: [
          { 
            id: 'Profile', 
            icon: <SettingsIcon />,
            active: profile
          },
         //  { id: 'Logout', icon: <TimerIcon /> },
         // { id: 'Test Lab', icon: <PhonelinkSetupIcon /> }
        ]
      }
    ];

  const redirect = (child) => {
    if (child === 'Battalion One') {
      setBattalionOne(true)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(false)
      setBattalionFive(false)
      setBattalionSix(false)
      setDashboard(false);
      setProfile(false)
    }else if(child === 'VIPPU Admin Home'){
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(false)
      setBattalionFive(false)
      setBattalionSix(false)
      setDashboard(true);
      setProfile(false)
    }else if (child === 'Battalion Two') {
      setBattalionOne(false)
      setBattalionTwo(true)
      setBattalionThree(false)
      setBattalionFour(false)
      setBattalionFive(false)
      setBattalionSix(false)
      setDashboard(false);
      setProfile(false)
    } else if (child === 'Battalion Three') {
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(true)
      setBattalionFour(false)
      setBattalionFive(false)
      setDashboard(false);
      setBattalionSix(false)
      setProfile(false)
    } else if (child === 'Battalion Four') {
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(true)
      setBattalionFive(false)
      setDashboard(false);
      setBattalionSix(false)
      setProfile(false)
    } else if (child === 'Battalion Five') {
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(false)
      setBattalionFive(true)
      setDashboard(false);
      setBattalionSix(false)
      setProfile(false)
    } else if (child === 'Battalion Six') {
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(false)
      setDashboard(false);
      setBattalionFive(false)
      setBattalionSix(true)
      setProfile(false)
    } else if (child === 'Profile') {
      setBattalionOne(false)
      setBattalionTwo(false)
      setBattalionThree(false)
      setBattalionFour(false)
      setDashboard(false);
      setBattalionFive(false)
      setBattalionSix(false)
      setProfile(true)
    }else if (child === 'Logout') {
      props.logout();
      window.location.href = '/';
      return;
    }

    props.routing_info(child);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          VIPPU | VIS
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Administrator Dashboard</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton onClick={() => redirect(childId)} selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors
});

export default connect(mapStateToProps, { logout })(Navigator);