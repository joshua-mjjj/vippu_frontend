import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { logout } from '../actions/auth.js';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const { onDrawerToggle } = props;

  const logout = () => {
    props.logout();
    window.location.href = '/';
  };

  return (
    <React.Fragment>
      <AppBar
        // color=''
        sx={{
          backgroundColor: '#483D8B'
        }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="#"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: 'common.white',
                  '&:hover': {
                    color: 'common.white'
                  }
                }}
                rel="noopener noreferrer"
              >
                {props.auth.user !== null ? <span>{props.auth.user.username}</span> : null}
              </Link>
            </Grid>
            {/*<Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>*/}
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        sx={{
          backgroundColor: '#483D8B',
          zIndex: 0
        }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {props.auth.user.account_type === 'admin' ? <span>Admin dashboard</span> : null}
                {props.auth.user.account_type === 'in_charge' ? (
                  <span>In Charge dashboard</span>
                ) : null}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                onClick={logout}
                variant="outlined"
                color="inherit"
                size="small"
              >
                logout
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{
          backgroundColor: '#483D8B',
          zIndex: 0
        }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors
});

export default connect(mapStateToProps, {
  logout
})(Header);
