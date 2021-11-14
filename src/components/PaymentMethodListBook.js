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
import { create_payment_method, get_payment_method, clear_error, create_payment_method_first, clear_state_payment } from "../actions/form";
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

import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;


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
    padding: '45px 92px 44px 107px',
    marginBottom: theme.spacing(0),
  },

    paper: {
    // padding: '15px ',
    width: '100%',
    background: 'white',
    minHeight: '150px',
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down("768")]: {
      maxWidth: '375px',
      margin: '0 ',
      padding: '45px '
    },
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
  },
  button:{
    marginLeft: '60px',
    marginTop: '5px',
    alignItems: 'center',
    color: '#FF3D00',
    justifyContent: 'center',
    backgroundColor: '#fff!important',
    border: '1.5px solid #FF3D00',
    borderRadius: '50px',
    "&:hover": {
         backgroundColor: '#F0FFF0!important',
        }
  },
  button_:{
    alignItems: 'center',
    color: '#FF3D00',
    float: 'left',
    justifyContent: 'center',
    backgroundColor: '#fff!important',
    border: '1.5px solid #FF3D00',
    borderRadius: '50px',
  },
  buttonForm: {
    marginTop: '20px',
    marginBottom: '38px',
    display: 'block',
    width: '100%',
    padding: '10.5px 0',
    background: '#fff',
    borderRadius: '10px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#FFFFFF',
    margin: '0 auto',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #BDBDBD',
    borderRadius: '10px',
    textAlign: 'center',
    letterSpacing: '0.15px',
    color: '#156981',
    transition: 'background 0.4s',
    [theme.breakpoints.down("680")]: {
      marginTop: '20px',
      marginBottom: '40px',
    },
    "&:hover": {
      backgroundColor: "#cce5e7"
    }
  }
}));

function PaymentMethods(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedDate, handleDateChange] = useState(new Date());
  
  const payment_methods = props.payment_methods;
  // console.log(payment_methods)
  const len = payment_methods.length;
  // console.log(len)

  const [card_number, setCard_number] = React.useState("");
  const [exp_month, setExp_month] = React.useState("");
  const [exp_year, setExp_year] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [disable, setDisable] = React.useState(true);
  const [is_primary, setIs_primary] = React.useState(true);

  const [f_name, setF_name] = React.useState("");
  const [l_name, setL_name] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [save_card, setSavecard] = React.useState(false);

  const [bool, setBool] = React.useState(true);
  const [reload_page, setReload_page] = React.useState(true);

  const saving_details = () => { 
  	 setSavecard(true)
     // var remove_space = card_number.toString().replace(/ /g,'');
     // var card = parseInt(remove_space);
      // console.log(card_number);    
      // console.log(exp_month)
      // console.log(exp_year)
      // console.log(cvc)

    // Removing functionality of making the first card automatically primary
    // =====================================================================
     if(props.payment_methods.length === 0){
       // console.log("Its the first one")
       // console.log("Its the first one")
       // console.log(props.payment_methods.length)
       props.create_payment_method_first(card_number, exp_month, exp_year, cvc);
       props.clear_state_payment();
       props.fetch_again();
       props.fetch_again();
       clearState();
     }else {
       props.create_payment_method(card_number, exp_month, exp_year, cvc);
       props.fetch_again();
       props.fetch_again();
       clearState();
       setDisable(false)
     }
     setDisable(true)

     if(reload_page === true){
        setTimeout(() => {
          // const route = "payment"
          // localStorage.setItem("routing_to", route);
          window.location.href = "/petprovider";
        }, 5000)
     }
  };

  const clearState = () => {
    setCard_number("");
    setCvc("");
    setExp_month("");
    setExp_year("");
    setF_name("");
    setL_name("");
  }

  React.useEffect(() => {
     var stage = 0;
     var stage_ = parseInt(stage)
     const id =  localStorage.getItem('logged_in'); 
     console.log(id)
     if(id !== null && id !== undefined){
        localStorage.setItem(`booking_status_${id}`, stage_);
     }
     // else if()

     const test = payment_methods.filter((payment) => payment.is_primary === bool);
     if(test.length >= 1){
      setReload_page(false)
     }

  }, []);

   React.useEffect(() => {
     if(props.payment_methods.length > 0){
     	const cards = true
     	localStorage.setItem(`payment_methods_${props.user.id}`, cards);
     }else{
     	const cards = false
     	localStorage.setItem(`payment_methods_${props.user.id}`, cards);
     }
     const check = payment_methods.filter((payment) => payment.is_primary === bool);
     if(check.length !== 1){
     	const no_primary_card = true
     	localStorage.setItem(`no_primary_card_${props.user.id}`, no_primary_card);
     }else{
     	const no_primary_card = false
     	localStorage.setItem(`no_primary_card_${props.user.id}`, no_primary_card);
     }
  }, [props.payment_methods]); 


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [values, setValues] = React.useState("");

  React.useEffect(() => {
    if(l_name && f_name && card_number && exp_year && exp_month && cvc){
      setDisable(false) 
    }    
  }, [l_name, f_name, card_number, exp_year, exp_month, cvc]);

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
   if(props.errors.msg.length >= 1) {
      let msg = props.errors.msg;
      // console.log(msg)
      alert = (
        <div className="alerts">{msg}</div>
      );
    }

    const [show_form, setShow_form] = React.useState(false);
    const set_show_form = () => {
        setShow_form(!show_form);
        scroll.scrollToTop();
      }

  return (
    <div>
      {
        show_form === true ? 
          ( 
            <Paper elevation={0}>
              <div className={classes.root}>
                  <AppBar position="static">
                      <Tabs value={value} onChange={handleChange} aria-label="Credit/Debit Card">
                        <Tab label="Payment Information" {...a11yProps(0)} />
                      </Tabs>
                  </AppBar>
                  <TabPanel value={value} index={0}>
                    {/* Code to connect to Stripe goes here */}
                    <Grid container spacing={1}>
                     {/*<FormLabel component="label" className={classes.formLabel}>Card number</FormLabel>  
                      <Grid item sm={6}>
                        <InputAdornment position="start">
                          <PaymentIcon />
                        </InputAdornment>

                         <NumberFormat 
                           format="#### #### #### ####" 
                           placeholder="4444 5555 6666 7777"
                           className={classes.inputSmall_} 
                           onChange={(e) => console.log(e.target.value)}
                         />
                          
                      </Grid>*/}
                       <Grid item md={6} xs={12} sm={6}> 
                        <FormLabel component="label" className={classes.formLabel}>First Name</FormLabel>                 
                        <Input
                          placeholder="First name"
                          fullWidth
                          disableUnderline
                          className={classes.inputSmall}
                          fullWidth
                          value={f_name}
                          onChange={(e) => setF_name(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          }
                        />
                      </Grid>
                      <Grid item xs={12}  sm={6}> 
                        <FormLabel component="label" className={classes.formLabel}>Last Name</FormLabel>                 
                        <Input
                          placeholder="Last name"
                          fullWidth
                          disableUnderline
                          value={l_name}
                          className={classes.inputSmall}
                          fullWidth
                          onChange={(e) => setL_name(e.target.value)}
                          
                        />
                      </Grid>

                       <Grid item xs={12} md={12} sm={12}> 
                        <Grid sm={false} container spacing={1} alignItems="flex-end">
                          <Grid item>
                              <FormLabel component="label" className={classes.formLabel}>Card number</FormLabel> <br />
                          </Grid>
                          <Grid item>
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
                          </Grid>
                      </Grid>
                         <NumberFormat 
                             format="#### #### #### ####" 
                             placeholder="4444 5555 6666 7777"
                             customInput={Input}
                             value={card_number}
                             disableUnderline
                             style={{ 'width' : '651px' }}
                             className={classes.inputSmall} 
                             onChange={(e) => setCard_number(e.target.value)}
                           />
                        </Grid> 

                        <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        {/*<div  className={classes.equalize} ></div>*/}
                          <FormLabel component="label" className={classes.formLabel}>Expiry month</FormLabel>                 
                         {/*} <Input
                            onChange={(e) => setExp_month(e.target.value)}
                            fullWidth
                            value={exp_month}
                            // type="year"
                            // min="01"
                            placeholder="01"
                            disableUnderline
                            className={classes.inputSmall}
                            fullWidth
                          />*/}
                          <Select
                                onChange={(e) => setExp_month(e.target.value)}
                                disableUnderline
                                displayEmpty
                                fullWidth
                                value={exp_month}
                                className={classes.inputSmall} 
                                inputProps={{
                                    "aria-label": "Select Expiry month",
                                }}
                                >
                                <MenuItem value="01">01</MenuItem>
                                <MenuItem value="02">02</MenuItem>
                                <MenuItem value="03">03</MenuItem>
                                <MenuItem value="04">04</MenuItem>
                                <MenuItem value="05">05</MenuItem>
                                <MenuItem value="06">06</MenuItem>
                                <MenuItem value="07">07</MenuItem>
                                <MenuItem value="08">08</MenuItem>
                                <MenuItem value="09">09</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="11">11</MenuItem>
                                <MenuItem value="12">12</MenuItem>
                            </Select>
                        </MuiPickersUtilsProvider>
                      </Grid>

                      {/*<Grid item  sm={6}> 
                        <FormLabel component="label" className={classes.formLabel}>CVC</FormLabel>                 
                        <Input
                          placeholder="CVC"
                          fullWidth
                          disableUnderline
                          className={classes.inputSmall}
                          value={cvc}
                          fullWidth
                          onChange={(e) => setCvc(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start">
                              <LockOpenIcon />
                            </InputAdornment>
                          }
                        />
                      </Grid>*/}
                    
                      <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <FormLabel component="label" className={classes.formLabel}>Expiry year</FormLabel>                 
                          {/*<Input
                            onChange={(e) => setExp_year(e.target.value)}
                            fullWidth
                            value={exp_year}
                            // type="year"
                            // min="2021-01"
                            placeholder="2021"
                            disableUnderline
                            className={classes.inputSmall}
                            fullWidth
                          />*/}
                           <Select
                                onChange={(e) => setExp_year(e.target.value)}
                                disableUnderline
                                displayEmpty
                                fullWidth
                                 value={exp_year}
                                className={classes.inputSmall} 
                                inputProps={{
                                    "aria-label": "Select Expiry year",
                                }}
                                >
                                <MenuItem value="21">2021</MenuItem>
                                <MenuItem value="22">2022</MenuItem>
                                <MenuItem value="23">2023</MenuItem>
                                <MenuItem value="24">2024</MenuItem>
                                <MenuItem value="25">2025</MenuItem>
                                <MenuItem value="26">2026</MenuItem>
                                <MenuItem value="27">2027</MenuItem>
                                <MenuItem value="28">2028</MenuItem>
                                <MenuItem value="29">2029</MenuItem>
                                <MenuItem value="30">2030</MenuItem>
                                <MenuItem value="31">2031</MenuItem>
                            </Select>
                        </MuiPickersUtilsProvider>
                      </Grid>
                      <Grid item xs={12} sm={6}> 
                        <FormLabel component="label" className={classes.formLabel}>CVC</FormLabel> <br />
                         <NumberFormat 
                             format="###" 
                             placeholder="CVC"
                             customInput={Input}
                             value={cvc}
                             disableUnderline
                             style={{ 'width' : '651px' }}
                             className={classes.inputSmall} 
                             onChange={(e) => setCvc(e.target.value)}
                           />
                      </Grid>  
                      
                      <Grid item xs={12}><br/>
                        <Button
                          variant="contained"
                          disabled={disable}
                          color="secondary"
                          style={{maxWidth: '170px', maxHeight: '35px', minWidth: '170px', minHeight: '35px'}}
                          className={classes.button}
                          startIcon={<AddCircleRoundedIcon />}
                          onClick={saving_details}>
                          {"Add card"}   
                         {  props.form.isLoading === true && save_card === true? (
                                  <div style={{
                                     marginLeft:'10px',
                                     marginTop: '5px'
                                }}>
                                  <img src={Spinner} alt="" height="25px" width="25px" /> 
                               </div>
                               )  : null }
                        </Button> 
                         <Button
                                variant="outlined"
                                color="primary"
                                style={{maxWidth: '100px', maxHeight: '35px', minWidth: '100px', minHeight: '35px', float : 'right' }}
                                onClick={set_show_form}
                                className={classes.button}
                              >
                                 {"Cancel"}
                          </Button>
                      </Grid>

                      {
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
                                    props.clear_error();
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
                      {
                       props.errors.msg.length >= 1 ? 
                        (
                          <Grid item xs={12}>
                              <Alert
                                severity="error"
                                action={
                                  <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                      props.clear_error();
                                    }}
                                  >
                                    <CloseIcon fontSize="inherit" />
                                  </IconButton>
                                }>
                                 <div className={classes.message}>{alert}</div>
                              </Alert>
                         </Grid>
                        ): null
                    }
                    </Grid>
                  </TabPanel>
              </div>
          </Paper>
          ) : 
          (
            <div  className={classes.paper}>
             <Button
                variant="outlined"
                color="primary"
               style={{maxWidth: '130px', maxHeight: '35px', minWidth: '130px', minHeight: '35px' }}
                onClick={set_show_form}
                className={classes.button_}
              >
                 {"Add new +"}
          </Button>
          </div>
          )
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  user: state.auth.user,
  messages: state.messages,
  errors: state.errors,
  all_services: state.services.admin_services
});

export default connect(mapStateToProps, { 
  create_payment_method, get_payment_method, clear_error, create_payment_method_first, clear_state_payment
 })(PaymentMethods);

