import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { check_user_type, loadUser } from '../actions/auth.js';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../assets/police.png';
import { Box } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import GuestNavBar from '../components/GuestNavBar';
import Spinner from '../components/Spinner';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    [theme.breakpoints.down('800')]: {
      alignItems: 'flex-start'
    }
  },
  rootGrid: {
    margin: '80px 0',
    padding: '33px 0',
    borderRadius: '10px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('800')]: {
      padding: '36px 0 60px 0',
      maxWidth: '347px',
      margin: '80px 0 0'
    }
  },
  image: {
    margin: theme.spacing(3, 1, 0),
    backgroundColor: 'inherit',
    width: '70px',
    height: '55px'
  },
  paper: {
    // margin: theme.spacing(4, 8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '367px',
    position: 'relative',
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(8, 'auto')
    },
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 'auto'),
      maxWidth: '367px'
    },
    [theme.breakpoints.down('800')]: {
      padding: '0 25.5px',
      margin: '0'
    }
  },
  decor: {
    position: 'absolute',
    bottom: '-41px',
    right: '-28%',
    zIndex: -1,
    [theme.breakpoints.down('1260')]: {
      maxWidth: '93px',
      bottom: '-65px',
      right: '2%'
    }
  },
  avatar: {
    margin: theme.spacing(1, 1, 0),
    backgroundColor: 'inherit',
    width: '70px',
    height: '75px',
    '& img': {
      width: '56px',
      height: '55.5px'
    }
  },
  logo: {
    cursor: 'pointer',
    width: '52px',
    height: '72px'
  },
  title: {
    marginBottom: '3px',
    fontFamily: 'Dosis',
    fontWeight: 800,
    fontSize: '40px',
    // lineHeight: '58px',
    color: '#383F45',
    [theme.breakpoints.down('800')]: {
      fontSize: '33px',
      lineHeight: '42px'
    }
  },
  form: {
    width: '308px', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1)
    }
  },
  buttonWrap: {
    position: 'relative'
    // pointerEvents: 'none'
  },
  iconFacebook: {
    position: 'absolute',
    top: '50%',
    left: '16.83px',
    transform: 'translateY(-50%)'
  },
  iconGoogle: {
    position: 'absolute',
    top: '51%',
    left: '16.83px',
    transform: 'translateY(-50%)'
  },
  google: {
    margin: theme.spacing(1, 0, 1),
    width: '100%',
    background: '#346CF0!important',
    opacity: '1!important',
    height: '56px!important',
    color: '#ffffff !important',
    cursor: 'pointer!important',
    transitions: 'background 0.5s ease-in',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: theme.spacing(1, 'auto')
    },
    '&:active': {
      background: 'rgb(116 141 199)!important'
    },
    '& span': {
      width: '100%',
      fontWeight: 'bold!important',
      fontSize: '19px!important',
      fontFamily: 'Dosis',
      textAlign: 'right!important',
      paddingRight: '25%!important'
    }
  },
  or: {
    margin: '5px 0',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
    color: '#000000',
    textAlign: 'center'
  },
  input: {
    margin: theme.spacing(1, 0, 1),
    borderRadius: '5px',
    '& input': {
      padding: '20px 42px 16px 14px'
    },
    '& label': {
      top: '8px',
      color: 'black'
    },
    '&:first-child': {
      marginTop: '10px'
    }
  },
  formControl: {
    width: '100%',
    marginTop: '29px'
  },
  formLabel: {
    marginBottom: '18px',
    textAlign: 'center',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
    color: '#000000'
  },
  rulles: {
    textAlign: 'left',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.4px',
    color: '#383F45',
    '& a': {
      color: '#327287',
      textDecoration: 'none'
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: '56px',
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0)
    }
  },
  already: {
    marginTop: '61px',
    textAlign: 'left',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.4px',
    color: '#383F45',
    justifyContent: 'center'
  },
  alreadyText: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '0.4px',
    color: '#000000',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      fontFamily: 'Dosis',
      color: '#327287',
      fontWeight: '600',
      textDecoration: 'none',
      fontSize: '18px',
      lineHeight: '22px'
    },
    '& span': {
      color: '#327287',
      textDecoration: 'none',
      cursore: 'pointer'
    }
  },
  radioWrap: {
    margin: '0 auto',
    marginBottom: '37px',
    border: '1px solid #B5B5B5'
  },
  radioButton: {
    minWidth: '155px',
    [theme.breakpoints.down('800')]: {
      minWidth: '142px'
    }
  },
  signWrap: {
    margin: '0 auto',
    marginTop: '15px',
    maxWidth: '328px',
    [theme.breakpoints.down('800')]: {
      marginTop: '0px'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  social: {
    margin: theme.spacing(3, 0, 2)
  },
  paper2: {
    margin: theme.spacing(8, 16),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },
  body2: {
    lineHeight: '1.5',
    color: '#444444'
  },
  message: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  },
  checkbox: {
    fontSize: '11px',
    '& > *': {
      fontSize: '11px'
    }
  },
  typeOfAccount: {
    marginTop: theme.spacing(1)
  },
  fogot: {
    fontWeight: '600',
    fontSize: '18px',
    // lineHeight: '16px',
    color: '#156981',
    fontFamily: 'Dosis',
    textAlign: 'center',
    width: '100%',
    display: 'inline-block'
    // marginBottom: '54px',
  }
}));

function StartPage(props) {
  const classes = useStyles();

  const [user_id, setUser_id] = useState('');
  let alert;
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(user_id)
    props.check_user_type(user_id);
  };

  if (props.auth.user_type === 'admin' || props.auth.user_type === 'in_charge') {
    return <Redirect to="/login" />;
  }
  if (props.auth.user_type === 'none') {
    alert = (
      <div className="alerts">
        <Alert severity="error">{"Your USER ID couldn't be recognised by the system."}</Alert>
      </div>
    );
  }

  if (props.error.msg) {
    let msg;
    if (props.error.msg.non_field_errors) {
      msg = props.error.msg.non_field_errors;
      alert = (
        <div className="alerts">
          <Alert severity="error">{msg}</Alert>
        </div>
      );
    }
    if (props.error.msg.data) {
      if (props.error.msg.data.non_field_errors) {
        msg = props.error.msg.data.non_field_errors;
        alert = (
          <div className="alerts">
            <Alert severity="error">{msg}</Alert>
          </div>
        );
      } else if (props.error.msg.data.email) {
        msg = `Email: ${props.error.msg.data.email}`;
        alert = (
          <div className="alerts">
            <Alert severity="error">{msg}</Alert>
          </div>
        );
      } else {
        msg = `Password: ${props.error.msg.data.password}`;
        alert = (
          <div className="alerts">
            <Alert severity="error">{msg}</Alert>
          </div>
        );
      }
    }
  }
  if (props.messages.notify_timeout !== null) {
    alert = (
      <div className="alerts">
        <Alert severity="info">{props.messages.notify_timeout}</Alert>
      </div>
    );
  }

  return (
    <Box>
      <div>
        <GuestNavBar />
      </div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          xl={4}
          component={Paper}
          elevation={6}
          square
          className={classes.rootGrid}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src={logo} alt="" onClick={(e) => (window.location.href = '/')} width="30" />
            </Avatar>
            <Typography component="h1" variant="h5" className={classes.title}>
              Welcome
            </Typography>
            <form className={classes.form} noValidate>
              <div className={classes.signWrap}>
                <Grid item xs={12}>
                  <div className={classes.message}>{alert}</div>
                </Grid>
                <TextField
                  variant="outlined"
                  className={classes.input}
                  required
                  fullWidth
                  value={user_id}
                  id="user_id"
                  label="USER ID"
                  name="user_id"
                  // autoComplete="email"
                  size="small"
                  autoFocus
                  onChange={(e) => setUser_id(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleLogin}
                >
                  {props.auth.loading_check_user_type === true ? <Spinner /> : 'Submit'}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Typography className={classes.fogot} href="/forgot_password" variant="body2">
                      Please make sure you are authorized to log into this system.
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors
});

export default connect(mapStateToProps, {
  check_user_type,
  loadUser
})(StartPage);
