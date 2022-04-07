import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ImageAvatars from './LogoSearchPage';

const useStyles = makeStyles((theme) => ({
  nonDisplay: {
    [theme.breakpoints.down('800')]: {
      display: 'none !important'
    }
  },
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)',
    backgroundColor: '#101F33'
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1440px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('800')]: {
      display: 'none'
    }
  },
  logo: {
    maxWidth: '10rem'
  },
  signin: {
    background: 'inherit',
    color: '#FF5722',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    transition: 'color 0.3s ease-in',
    '&:hover': {
      background: 'none',
      color: '#FF3D00!important'
    },
    '&:active': {
      background: 'none!important',
      color: '#FF3D00!important',
      boxShadow: 'none!important'
    }
  },
  login: {
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    [theme.breakpoints.down('800')]: {
      width: '82px',
      display: 'none'
    }
  },
  popper: {
    maxWidth: 500,
    zIndex: 1100
  },
  helpDropDown: {
    //color: '#4B0082',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('800')]: {
      // display: 'none'
      position: 'absolute',
      flexDirection: 'column-reverse',
      top: '72px',
      left: '80px',
      width: '107px'
    },
    [theme.breakpoints.down('550')]: {
      left: '70px'
    }
  },

  link: {
    marginRight: '18px',
    fontFamily: 'Dosis',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#222222',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'color 0.3s ease-in',
    [theme.breakpoints.down('800')]: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px',
      width: '100%',
      background: '#383F45',
      color: 'white',
      position: 'relative'
    },
    '&::first-child': {
      fontWeight: '700',
      marginRight: '28px',
      [theme.breakpoints.down('800')]: {
        marginRight: '0px'
      }
    },
    '&::before': {
      [theme.breakpoints.down('800')]: {
        content: "''",
        width: '100%',
        height: '2px',
        bottom: 0,
        background: 'white',
        display: 'block',
        position: 'absolute'
      }
    },
    '&:first-child': {
      '&::before': {
        [theme.breakpoints.down('800')]: {
          display: 'none'
        }
      }
    },
    '&:hover': {
      color: '#FF5722'
    }
  },
  burger: {
    border: 'none',
    background: 'none',
    padding: 0,
    marginLeft: '25px',
    marginRight: '15px',
    cursore: 'pointer',
    borderRadius: '50%',
    outline: 'none',
    maxHeight: '24px',
    overflow: 'hidden',
    transition: 'background 0.3s ease-in',
    '&:hover': {
      background: 'fff'
      // opacity: '0.5'
    },
    '&:hover .makeStyles-links-11': {
      background: 'fff'
      // opacity: '0.5'
    },
    [theme.breakpoints.up('800')]: {
      display: 'none'
    }
  },
  buy: {
    [theme.breakpoints.down('800')]: {
      marginRight: 'auto'
    }
  }
}));

const GuestNavBar = () => {
  const classes = useStyles();
  // const [showLinks, setShowLinks] = React.useState(false)

  // const redirect_login = (e) => {
  //   window.location.href = '/login'
  // }

  const redirect = (e) => {
    window.location.href = '/';
  };

  console.log("Navbar re-rendering...")

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} color="transparent" className={classes.appBar}>
        <div className={classes.container}>
          <Toolbar>
            <ImageAvatars />
            <Typography variant="h6" className={classes.title}></Typography>
            {/* <Chip className={classes.login} onClick={redirect_signup} label="HRIMS" variant="outlined" />*/}
            <a href="/" onClick={redirect} className={classes.login}>
              HUMAN RESOURCE MANAGEMENT INFORMATION SYSTEM
            </a>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
}

export default React.memo(GuestNavBar)