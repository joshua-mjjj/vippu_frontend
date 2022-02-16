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
// import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PageviewIcon from '@mui/icons-material/Pageview';
// import PublicIcon from '@mui/icons-material/Public';
// import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import StorageIcon from '@mui/icons-material/Storage';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
// import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

import { logout } from '../../actions/auth.js';

function Navigator(props) {
  const { ...other } = props;

  const [dashboard, setDashboard] = React.useState(true);
  const [battallion_data, setBattallion_data] = React.useState(false);
  const [new_entry, setNew_entry] = React.useState(false);
  const [find_employee, setFind_employee] = React.useState(false);
  const [profile, setProfile] = React.useState(false);

  let categories;
  // console.log(props.auth.user.top_level_incharge)
  if (props.auth.user.lower_level_incharge === true) {
    categories = [
      {
        id:
          props.auth.user !== null
            ? `${props.auth.user.first_name} ${props.auth.user.last_name}`
            : null,
        children: [
          {
            id: 'Dashboard',
            icon: <AccountCircleIcon />,
            active: dashboard
          },
          // {  // Battalion second in charges do not have access to the entire battalion list.
          //   id: 'New entry',
          //   icon: <AddBoxIcon />,
          //   active: new_entry,
          // },
          {
            id: 'Find employee',
            icon: <PageviewIcon />,
            active: find_employee
          },
          {
            id: 'Generate report', // using the same variables, jus changing the view
            icon: <StorageIcon />,
            active: battallion_data
          }
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
          { id: 'Logout', icon: <LogoutIcon /> }
        ]
      }
    ];
  } else {
    categories = [
      {
        id:
          props.auth.user !== null
            ? `${props.auth.user.first_name} ${props.auth.user.last_name}`
            : null,
        children: [
          {
            id: 'Dashboard',
            icon: <AccountCircleIcon />,
            active: dashboard
          },
          {
            id: 'Battalion data',
            icon: <StorageIcon />,
            active: battallion_data
          },
          {
            id: 'New entry',
            icon: <AddBoxIcon />,
            active: new_entry
          },
          {
            id: 'Find employee',
            icon: <PageviewIcon />,
            active: find_employee
          }
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
          { id: 'Logout', icon: <LogoutIcon /> }
        ]
      }
    ];
  }

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
    py: 3,
    px: 3
  };

  const redirect = (child) => {
    if (child === 'Dashboard') {
      setDashboard(true);
      setBattallion_data(false);
      setNew_entry(false);
      setFind_employee(false);
      setProfile(false);
    } else if (child === 'Battalion data' || child === 'Generate report') {
      setBattallion_data(true);
      setDashboard(false);
      setNew_entry(false);
      setFind_employee(false);
      setProfile(false);
    } else if (child === 'New entry') {
      setNew_entry(true);
      setDashboard(false);
      setBattallion_data(false);
      setFind_employee(false);
      setProfile(false);
    } else if (child === 'Find employee') {
      setFind_employee(true);
      setDashboard(false);
      setBattallion_data(false);
      setNew_entry(false);
      setProfile(false);
    } else if (child === 'Profile') {
      setProfile(true);
      setDashboard(false);
      setBattallion_data(false);
      setNew_entry(false);
      setFind_employee(false);
    } else if (child === 'Logout') {
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
          <ListItemText>Battalion Six</ListItemText>
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
