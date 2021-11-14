import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Alert from "@material-ui/lab/Alert";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { MuiPickersUtilsProvider, DatePicker, KeyboardDatePicker } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import Collapse from '@material-ui/core/Collapse';
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { create_payment_method, clear_error, get_payment_method, create_payment_method_first, clear_state_payment } from "../actions/form";
import { create_payout } from "../actions/booking";
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Select from "@material-ui/core/Select";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from "@material-ui/core/MenuItem";
import Spinner from '../assets/home_load.gif';

import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import discover from 'payment-icons/min/flat/discover.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import jcb from 'payment-icons/min/flat/jcb.svg';
import unionpay from 'payment-icons/min/flat/unionpay.svg';

import NumberFormat from 'react-number-format';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    marginBottom: theme.spacing(4),
  },
  margin: {
      padding: theme.spacing(2)
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall_:{
    fontSize: '13px',
    width: '500px',
    height: '30px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  formHeader:{
    margin: theme.spacing(2, 'auto', 4),
    textAlign: 'center',
  },
  formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  formLabel_:{
      fontSize: '14x',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '400',
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(3),
  },
  formGroupLabel:{
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '600',
      marginBottom: theme.spacing(2),
  },
  formGroup:{
      marginBottom: theme.spacing(3),
  },
  formGroupProfileSection:{
      marginTop: theme.spacing(2),
  },
  svg_image : {
    height: '35px',
    width: '35px',
    paddingTop: theme.spacing(2.5),
  },
  equalize: {
    paddingTop: theme.spacing(2.5),
  }
}));

function PaymentBankAccounts(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  
  const payment_methods = props.payment_methods;
  // console.log(payment_methods)
  const len = payment_methods.length;
  // console.log(len)

  const [account_number, setAccount_number] = React.useState(null);
  const [routing_number, setRouting_number] = React.useState(null);
  // const [holder_name, setHolder_name] = React.useState("");
  // const [holder_type, setHolder_type] = React.useState("");
  const [disable, setDisable] = React.useState(true);

  const [open, setOpen] = React.useState(true);

  const saving_details = () => { 
      console.log(account_number);    
      console.log(routing_number)
      if(account_number !== null && routing_number !== null){
      	props.create_payout(account_number, routing_number)
      }else{
        // 
      }
     props.fetch_again();
     setDisable(true)
     clearState()
     setTimeout(() => {
     	  props.fetch_again();
          // const route = "payment"
          // localStorage.setItem("routing_to", route);
          // window.location.href = "/dashboard";
    }, 3000)
  };

  const clearState = () => {
    setAccount_number("");
    setRouting_number("");
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if(account_number && routing_number ){
      setDisable(false) 
    }    
  }, [account_number, routing_number]);

  let alert;
  // if (props.error.msg.data) {
  //   let msg = props.error.msg.data.non_field_errors;
  //   alert = (
  //     <div className="alerts">
  //       <Alert severity="error">{msg}</Alert>
  //     </div>
  //   );
  // }
  if (props.errors.msg.non_field_errors) {
    let msg = props.errors.msg.non_field_errors;
    // console.log(msg)
    alert = (
      <div className="alerts">{msg}</div>
    );
  }

  if (props.messages.notify_timeout !== null) {
    alert = (
      <div className="alerts">{props.messages.notify_timeout}</div>
    )
  }

  return (
      <Paper elevation={0}>
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="Bank Accounts">
                  <Tab label="Bank Account" {...a11yProps(0)} />
                </Tabs>
            </AppBar>
            <FormLabel component="label" className={classes.formLabel_}>Your earnings will be deposited into this bank account.</FormLabel> <br />
           <TabPanel value={value} index={0}>
              {/* Code to connect to Stripe goes here */}
              <Grid container spacing={1}>
                 <Grid item xs={12} md={12} sm={12}> 
                  <Grid sm={false} container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <FormLabel component="label" className={classes.formLabel}>Account number</FormLabel> <br />
                    </Grid>
                    {/*<Grid item>
                       <img src={visa} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={mastercard} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={discover} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={diners} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={jcb} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={unionpay} className={classes.svg_image} alt="Logo" />
                    </Grid>*/}
                </Grid>
                   <NumberFormat 
                       format="#############" 
                       placeholder="Your account number"
                       customInput={Input}
                       value={account_number}
                       disableUnderline
                       style={{ 'width' : '1050px' }}
                       className={classes.inputSmall} 
                       onChange={(e) => setAccount_number(e.target.value)}
                     />
                  </Grid>

                  <Grid item xs={12} md={12} sm={12}> 
                  <Grid sm={false} container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <FormLabel component="label" className={classes.formLabel}>Routing number</FormLabel> <br />
                    </Grid>
                   {/* <Grid item>
                       <img src={visa} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={mastercard} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={discover} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={diners} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={jcb} className={classes.svg_image} alt="Logo" />
                    </Grid>
                    <Grid item>
                       <img src={unionpay} className={classes.svg_image} alt="Logo" />
                    </Grid>*/}
                </Grid>
                   <NumberFormat 
                       format="#############" 
                       placeholder="Your routing number"
                       customInput={Input}
                       value={routing_number}
                       disableUnderline
                       style={{ 'width' : '1050px' }}
                       className={classes.inputSmall} 
                       onChange={(e) => setRouting_number(e.target.value)}
                     />
                  </Grid>
                
                <Grid item xs={12}><br/>
                  <Button
                    disabled={disable}
                    variant="contained"
                    style={{maxWidth: '160px', maxHeight: '35px', minWidth: '160px', minHeight: '35px'}}
                    color="primary"
                    onClick={saving_details}
                    className={classes.button}
                    startIcon={<AddCircleRoundedIcon />}
                  >
                    {"Add"} {
                          props.booking.loading_payout === true ? (
                            <div style={{
                               marginLeft:'10px',
                               marginTop: '5px'
                          }}>
                            <img src={Spinner} alt="" height="25px" width="25px" /> 
                         </div>) : null
                    }
                  </Button>
                </Grid>
               {/* {
                  props.errors.msg.non_field_errors ? 
                  (
                  <Grid item xs={12}>
                    <Collapse in={open}>
                      <Alert
                        severity="error"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                              props.clear_error()
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }>
                         <div className={classes.message}>{alert}</div>
                      </Alert>
                  </Collapse>
                 </Grid>
                  ): null
                }*/}
                {
                  props.messages.notify_timeout ? 
                  (
                  <Grid item xs={6}>
                    <Collapse in={open}>
                      <Alert
                        severity="success"
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setOpen(false);
                              props.clear_error()
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }>
                         <div className={classes.message}>{alert}</div>
                      </Alert>
                  </Collapse>
                 </Grid>
                  ): null
                }
              </Grid>
            </TabPanel>
        </div>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  booking: state.booking,
  user: state.auth.user,
  messages: state.messages,
  errors: state.errors,
  all_services: state.services.admin_services
});

export default connect(mapStateToProps, { 
   create_payment_method, 
   get_payment_method, 
   create_payment_method_first, 
   clear_state_payment,
   create_payout,
   clear_error
 })(PaymentBankAccounts);

