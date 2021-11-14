import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Link } from "react-router-dom";

import MenuList from '@material-ui/core/MenuList';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ListItemAvatar } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    marginTop: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginTop: '64px',
    backgroundColor: '#fafafa',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    marginTop: '64px',
  },
  content: {
    flexGrow: 1,
    marginTop: '30px'
  },
  ul:{
    width: '100%',
  },
  text: {
    color: 'grey',
    marginBottom: '6px',
    'fontSize':'50px'
  }
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#FF3D00!important',
  },
  
}))(LinearProgress);


function DashboardProfileCompleteness(props) {
    const { window } = props;
    const classes = useStyles();

    const pecent = (props.user.profile_completedness).toFixed(0);
    
  return (
    <div>
    <div className={classes.root}>
        <CssBaseline />
        {
          pecent === "100" ? (null) : 
          (
            <main className={classes.content}>
              <Typography className={classes.text} >Profile Complete Progress</Typography>
              <Typography className={classes.text} >Hey you have completed {pecent}% of your profile, please complete your profile <Link to="/wizard" style={{ 'textDecoration': 'none', 'color': '#FF3D00'}} >here</Link></Typography>
              <BorderLinearProgress variant="determinate" value={props.user.profile_completedness} />
            </main>
          )
        }
    </div>
</div>
  );
}

  
  const mapStateToProps = state => ({
    auth: state.auth,
    error: state.errors,
    form: state.forms,
    user: state.auth.user,
  });
  
  export default connect(mapStateToProps, null)(DashboardProfileCompleteness);