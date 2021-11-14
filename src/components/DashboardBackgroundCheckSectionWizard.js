import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { countryList, stateList } from "../actions/lists";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { screening } from "../actions/auth.js";
import DashboardBackgroundCheckChoosePaymentWizard from './DashboardBackgroundCheckChoosePaymentWizard';
import PaymentMethodListBackCheck from './PaymentMethodListBackCheck'
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link } from "react-router-dom";
import FormHelperText from "@material-ui/core/FormHelperText";

import { loadUser } from "../actions/auth.js";
import { useDispatch } from "react-redux";
import { sendUserData, start_check, get_payment_method, clear_error } from "../actions/form";
import Icon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  imageSelector: {
    fontSize: "8rem",
  },
  line: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    width: "100%",
    borderRadius: "10px",
    paddingLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    "& > label": {
      paddingLeft: theme.spacing(2),
    },
  },
  helpText: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  explanationText: {
    height: "auto",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    fontSize: '13px',
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
  },
  selectEmpty: {
    float: "left",
    width: "100%",
    borderRadius: "10px",
    height: "auto!important",
    "& > label": {
      paddingLeft: theme.spacing(1),
    },
  },
  addRowButton: {
    marginTop: theme.spacing(2),
  },
  selectFormControl: {
    width: "100%",
  },
  serviceTitle: {
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    marginBottom: theme.spacing(2),
  },
  dropzone: {
    marginTop: theme.spacing(4),
  },
  checkText: {
    marginTop: theme.spacing(1),
    color: "black",
  },
  submit: {
    margin: theme.spacing(4, 0, 1),
    height: "2.5rem",
    backgroundColor: '#FF3D00!important',
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
    //float: 'right',
  },
  submit_: {
    margin: theme.spacing(4, 0, 1),
    height: "2.5rem",
    backgroundColor: "green",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
    //float: 'right',
  },
  submitt_: {
     margin: theme.spacing(4, 0, 1),
     height: "2.5rem",
     backgroundColor: "red",
     [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
     },
    //float: 'right',
  },
  gridSubsection: {
    marginBottom: theme.spacing(1),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  formLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    marginBottom: theme.spacing(1),
  },
  formArea:{
    marginTop: theme.spacing(2),
  },
  paymentDivider:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  inputSelect:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    width: '100%',
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
}));

function BackgroundCheckSection(props) {
  const classes = useStyles();
  const [buttonClicked, isButtonClicked] = useState(false);
  const [showSSN, setShowSSN] = useState(false);
  const [status, setStatus] = useState(true);
  const check_bool = localStorage.getItem(`background_status_${props.user.id}`);
 

  const handleClickShowSSN = () => setShowSSN(!showSSN);

  let user_id;
  if (props.user !== null && props.user !== undefined) {
    user_id = props.user.id;
  }

  function handleClick() {
    isButtonClicked(true);
  }


  const dispatch = useDispatch();

  function sendReq(data, user_id) {
    const timer = setTimeout(() => {
      dispatch(sendUserData(data, user_id));
    }, 2000);

    return timer;
  }

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();
  }, []);

  const redirect_payments = () => {
    const route = "payment"
    localStorage.setItem("routing_to", route);
    window.location.href = "/dashboard";
  };
  
  const redirect_name = () => {
    const num = "0"
    var stage = parseInt(num);
    localStorage.setItem(`stage_value_${props.user.id}`, stage); 
    window.location.href = "/wizard";
  };

  const redirect_ssn = () => {
    const num = "2"
    var stage = parseInt(num);
    localStorage.setItem(`stage_value_${props.user.id}`, stage); 
    window.location.href = "/wizard";
  };

  const redirect_contact = () => {
    const num = "1"
    var stage = parseInt(num);
    localStorage.setItem(`stage_value_${props.user.id}`, stage); 
    window.location.href = "/wizard";
  };

  // const redirect_state = () => {
  //   const num = "1"
  //   var stage = parseInt(num);
  //   localStorage.setItem(`stage_value_${props.user.id}`, stage); 
  //   window.location.href = "/wizard";
  // };

  // payments zone
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  // pop up
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleSubmit = (e) => {
    console.log(props.user.id)
    if(props.user.id){
       props.start_check(props.user.id)
    }
  }

  React.useEffect(() => {
     props.get_payment_method();
  }, []);

  let results = null;
  if (props.payment_methods !== undefined && props.payment_methods !== null){
      results = props.payment_methods;
  }

  const fetch_again = (e) => {
     props.get_payment_method();
     props.get_payment_method();
  }

  const handleClose = () => {
    setOpen(false);
    // clear state so that the notification in the pop up component doesn't stick on the UI
    // if(error){}  // its also good practise to clear that exact error, but here we are clearing the entire error state
    props.clear_error();
  };


 // const [status, setStatus] = useState(false);
  // React.useEffect(() => {
  //   if(check_bool !== null)
  //     //console.log("hereeeeeeeeeee")
  //     console.log(check_bool)
  // }, [status]);

  const [error_fname, setError_fname] = React.useState(false);
  const [error_lname, setError_lname] = React.useState(false);
  const [error_ssn, setError_ssn] = React.useState(false);
  const [error_dob, setError_dob] = React.useState(false);
  const [error_address, setError_address] = React.useState(false);
  const [error_city, setError_city] = React.useState(false);
  const [error_state, setError_state] = React.useState(false);
  const [error_country, setError_country] = React.useState(false);
  const [error_zipcode, setError_zipcode] = React.useState(false);

  React.useEffect(() => {
    if(props.form.isLoading === true){
      props.get_payment_method();
      props.loadUser();
    }
  }, [props.form.isLoading]);

   React.useEffect(() => {
    if(props.user.first_name === ""){
      setError_fname(true)
    }
    if(props.user.last_name === ""){
      setError_lname(true)
    }
    if(props.user.ssn === null){
      setError_ssn(true)
    }
    if(props.user.date_of_birth === null){
      setError_dob(true)
    }
    if(props.user.address_line_1 === null){
      setError_address(true)
    }
    if(props.user.city === ""){
      setError_city(true)
    }
    if(props.user.state === ""){
      setError_state(true)
    }
    if(props.user.country === ""){
      setError_country(true)
    }
    if(props.user.zipcode === null){
      setError_zipcode(true)
    }
   // console.log(props.user.first_name)
    if( 
        props.user.first_name !== "" &&
        props.user.last_name !== "" &&
        props.user.ssn !== "" &&
        props.user.date_of_birth !== "" &&
        props.user.address_line_1 !== "" &&
        props.user.city !== "" &&
        props.user.state !== "" &&
        props.user.country !== "" &&
        props.user.zipcode !== "" 
    ){
      setStatus(false)
     // console.log("not disabled")
    }
    if( 
        props.user.first_name === "" ||
        props.user.last_name === "" ||
        props.user.ssn === null ||
        props.user.date_of_birth === null ||
        props.user.address_line_1 === null ||
        props.user.city === "" ||
        props.user.state === "" ||
        props.user.country === "" ||
        props.user.zipcode === null ){
           setStatus(true)
     // console.log("disabled")
    }

  }, [props.user.first_name,props.user.last_name,props.user.ssn,props.user.date_of_birth,
      props.user.address_line_1,props.user.city,props.user.state,props.user.country,
      props.user.zipcode]);

   const [ show_not, setShow_not ] = useState("");
   const [open_, setOpen_] = React.useState(true);
   const [notification, setNotification] = React.useState(true);
   const [state_date_of_birth, setDate_state] = React.useState(localStorage.getItem(`dob_edit_${props.user.id}`));
   // console.log(state_date_of_birth)

   
   const show_error = (value) => {
      // console.log(value);
      // console.log(show_not);
      setShow_not(value)
    }
  const set_notification = () => {
     setOpen_(false);
     setShow_not("")
  }

  const handleSSNNumber = (text) => {
      // remove all non-dash and non-numerals
      var val = text.replace(/[^\d-]/g, '');

      // add the first dash if number from the second group appear
      val = val.replace(/^(\d{3})-?(\d{1,2})/, '$1-$2');

      // add the second dash if numbers from the third group appear
      val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, '$1-$2-$3');

      // remove misplaced dashes
      val = val.split('').filter((val, idx) => {
        return val !== '-' || idx === 3 || idx === 6;
      }).join('');

      // enforce max length
      return val.substring(0, 11);
    }
  
  const [value, setValue] = useState(props.user.ssn ? handleSSNNumber(props.user.ssn) : null);


  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={classes.explanationText}>
                  Pet owners are more likely to work with you if a background
                  check has been conducted on you. We use Sterling: a third
                  party for this service.
                  {/* We shall add an icon and a link to Sterling here  */}
                </Typography>
                <Typography className={classes.explanationText}>
                  Sterling, which carries out the background check, charges a fee in order to cover costs 
                  related to retrieving information on their applicants. 
                </Typography>
                
                  <div className={classes.formArea}>
                    <Typography className={classes.serviceTitle}>
                      Please Enter the following Data
                    </Typography>

                    <Collapse in={notification}>
                      <Alert
                        severity="info"
                        icon={false}
                        action={
                          <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                              setNotification(false);
                            }}
                          >
                            <CloseIcon fontSize="inherit" />
                          </IconButton>
                        }
                      >
                        <span> You can edit this information from the previous steps.
                               Click the back button to make changes to any steps before 
                               selecting the finish option. If payment fails, please delete 
                               the <Link style={{ 'textDecoration': 'none', 'color': '#FF3D00'}}><span onClick={redirect_payments} >failed card </span></Link> 
                               and add another card.</span>
                      </Alert>
                    </Collapse>

                    <form noValidate>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>First Name</FormLabel>
                            <Input
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="First Name"
                              disableUnderline
                              name="first_name"
                              autoComplete="new-password"
                              //onChange={(e) => setFirstName(e.target.value)}
                              value={props.user.first_name}
                              required
                            />
                            {error_fname === true ? (
                                <FormHelperText error>
                                  Please provide a valid <Link style={{'color': 'red'}}><span onClick={redirect_name} >first name</span></Link> . 
                                </FormHelperText>
                              ) : (
                                ""
                            )}
                          </Grid>
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>Last Name</FormLabel>
                            <Input
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="Last Name"
                              disableUnderline
                              name="last_name"
                              size="small"
                              required
                              fullWidth
                              //onChange={(e) => setLastName(e.target.value)}
                              value={props.user.last_name}
                              autoComplete="new-password"
                              i
                              autoFocus
                            />
                             {error_lname === true ? (
                                <FormHelperText error>
                                  Please provide a valid <Link style={{'color': 'red'}}><span onClick={redirect_name} >last name</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>Social Security Number</FormLabel>
                            <TextField
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="Social Security Number"
                              disableUnderline
                              //onChange={(e) => setSocial_number(e.target.value)}
                              value={value}
                              required
                              type={showSSN ? "text" : "password"}
                              variant="standard"
                              id="ssn"
                              //label="Social Security Number"
                              name="ssn"
                              autoComplete="new-password"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="Toggle password visibility"
                                      onClick={handleClickShowSSN}
                                    >
                                      {showSSN ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                                disableUnderline: true
                              }}
                            />
                             {error_ssn === true ? (
                                <FormHelperText error>
                                  <Link style={{'color': 'red'}}><span onClick={redirect_ssn} >SSN</span></Link> is required to run background check.
                                </FormHelperText>
                              ) : (
                                ""
                            )}
                          </Grid>
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>Date Of Birth</FormLabel>
                            <Input
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="Date Of Birth"
                              disableUnderline
                              //onChange={(e) => setDob(e.target.value)}
                              required
                              id="dob"
                              label="Date Of Birth"
                              name="dob"
                              autoComplete="new-password"
                              // type="date"
                              // placeholder="2000-01-01"
                              value={props.user.date_of_birth}                            
                            />
                             {error_dob === true ? (
                                <FormHelperText error>
                                 <Link style={{'color': 'red'}}><span onClick={redirect_name} >Date of birth</span></Link> is required to run background check
                                </FormHelperText>
                              ) : (
                                ""
                             )}
                            {state_date_of_birth === "false" ? (
                                <FormHelperText>
                                  Please make sure you have the right  <Link style={{'color': 'grey'}}><span onClick={redirect_name} >date of birth </span></Link> 
                                </FormHelperText>
                              ) : (
                                ""
                             )}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>Address Line 1</FormLabel>
                            <Input
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="Address Line 1"
                              disableUnderline
                              //onChange={(e) => setAddress_Line1(e.target.value)}
                              id="line"
                              label="Address Line 1"
                              name="addressLine"
                              autoComplete="new-password"
                              placeholder="Physical Address *"
                              required
                              value={props.user.address_line_1}
                            />
                            {error_address === true ? (
                                <FormHelperText error>
                                  Please provide an <Link style={{'color': 'red'}}><span onClick={redirect_contact} >address</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                            )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormLabel component="label" className={classes.formLabel}>City</FormLabel>
                            <Input 
                              id="city" 
                              //onChange={(e) => setCity(e.target.value)}  
                              value={props.user.city} 
                              disableUnderline 
                              fullWidth 
                              placeholder="City" 
                              inputProps={{ 'aria-label': 'description' }} 
                              autoComplete="new-password" className={classes.inputSmall}/>
                              {error_city === true ? (
                                <FormHelperText error>
                                  Please provide your <Link style={{'color': 'red'}}><span onClick={redirect_contact} >city</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormLabel component="label" className={classes.formLabel}>State</FormLabel>
                            <FormControl className={classes.selectFormControl}>
                              <Select
                                name="state"
                                autoComplete="new-password"
                                disableUnderline
                                value={props.user.state}
                                //onChange={(e) => setState(e.target.value)}
                                displayEmpty
                                className={classes.inputSelect}
                                inputProps={{ "aria-label": "Select State" }}
                              >
                                {stateList != null ? (
                                  stateList.map((state, i) => (
                                    <MenuItem key={i} value={state.name}>
                                      {state.name}
                                    </MenuItem>
                                  ))
                                ) : (
                                  <MenuItem value="Seattle">Seattle</MenuItem>
                                )}
                              </Select>
                              {error_state === true ? (
                                <FormHelperText error>
                                  Please provide your <Link style={{'color': 'red'}}><span onClick={redirect_contact} >state</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormLabel component="label" className={classes.formLabel}>Country</FormLabel>
                            <FormControl className={classes.selectFormControl}>
                              <Select
                                autoComplete="new-password"
                                name="country"
                                disableUnderline
                                value={props.user.country}
                                //onChange={(e) => setCountry(e.target.value)}
                                displayEmpty
                                className={classes.inputSelect}
                                inputProps={{ "aria-label": "Select Country" }}
                              >
                                {countryList != null ? (
                                  countryList.map((country, i) => (
                                    <MenuItem key={i} value={country.country_name}>
                                      {country.country_name}
                                    </MenuItem>
                                  ))
                                ) : (
                                  <MenuItem value="United States">
                                    United States
                                  </MenuItem>
                                )}
                              </Select>
                              {error_country === true ? (
                                <FormHelperText error>
                                  Please provide your <Link style={{'color': 'red'}}><span onClick={redirect_contact} >country</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                               )}
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid
                          container
                          spacing={2}
                          className={classes.gridSubsection}
                        >
                          <Grid item xs={6}>
                            <FormLabel component="label" className={classes.formLabel}>Zip/postal code</FormLabel>
                            <Input
                              className={classes.inputSmall}
                              fullWidth
                              placeholder="Zip/postal Code"
                              //onChange={(e) => setZipcode(e.target.value)}
                              disableUnderline 
                              id="line"
                              name="regionCode"
                              autoComplete="new-password"
                              label="Region Code"
                              required
                              value={props.user.zipcode}
                            />
                             {error_zipcode === true ? (
                                <FormHelperText error>
                                  Please provide your <Link style={{'color': 'red'}}><span onClick={redirect_contact} >zipcode</span></Link>.
                                </FormHelperText>
                              ) : (
                                ""
                             )}
                          </Grid>
                        </Grid>
                      </Grid>
                      {
                       props.user.background_check_status === "pending" && props.user.background_check_complete === false ? ( 
                          <Button
                            // type="submit"
                            disabled={status}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            //onClick={handleSubmit}
                            onClick={handleClickOpen('paper')}
                          >
                            {"Start Background check"}
                          </Button>) : ("")
                      }

                      {
                        props.user.background_check_status === "started" && props.user.background_check_complete === false ? ( 
                          <Button
                            disabled
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            //onClick={handleSubmit}
                          >
                            {"Background check pending..."}
                          </Button>) : ("")
                      }

                       {
                          props.user.background_check_status === "passed" && props.user.background_check_complete === true ? ( 
                             <Button
                                // type="submit"
                                // disabled={true}
                                variant="contained"
                                color="primary"
                                className={classes.submit_}
                                onClick={(e) => (window.location.href = "/wizard")}
                                endIcon={<Icon></Icon>}
                                //onClick={handleClickOpen('paper')}
                              >
                                {"Background check cleared"}
                             </Button>) : ("")
                          }
                       {
                        props.user.background_check_status === "failed" && props.user.background_check_complete === true ? ( 
                           <Button
                              // type="submit"
                              // disabled={true}
                              variant="contained"
                              color="primary"
                              className={classes.submitt_}
                              onClick={(e) => (window.location.href = "/wizard")}
                              endIcon={<CancelIcon></CancelIcon>}
                              //onClick={handleClickOpen('paper')}
                            >
                              {"Background check not cleared"}
                           </Button>) : ("")
                        }  


                      <div>
                       {/*<Button onClick={handleClickOpen('paper')}>Start Background Check</Button>*/} 
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          scroll={scroll}
                          aria-labelledby="scroll-dialog-title"
                          aria-describedby="scroll-dialog-description"
                        >
                          <DialogTitle id="scroll-dialog-title">Background check payment.</DialogTitle>
                          
                          {/*show_not === true ? (
                               <Collapse in={open_}>
                                <Alert
                                  severity="error"
                                  action={
                                    <IconButton
                                      aria-label="close"
                                      color="inherit"
                                      size="small"
                                      onClick={set_notification}
                                    >
                                      <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                  }
                                >
                                  {"You can not have more than one primary card!"}
                                </Alert>
                              </Collapse>
                            ) : (
                              ""
                            )*/}
                          <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                              id="scroll-dialog-description"
                              ref={descriptionElementRef}
                              tabIndex={-1}
                            >
                            <div>
                              <DashboardBackgroundCheckChoosePaymentWizard primary_error={show_error} new_form={true} payment_methods={results} fetch_again={fetch_again}/>  
                            </div>
                              {/*[...new Array(50)]
                                .map(
                                  () => `Cras mattis consectetur purus sit amet fermentum.
                                          Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                )
                                .join('\n')*/}
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
 
                             <Button onClick={handleClose} color="primary">
                              Close
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                       {/*<Button
                        // type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                      >
                        {"Start Background check"}
                      </Button>
                    <br />
                      <Divider className={classes.paymentDivider}/>
                      <Typography className={classes.explanationText}>
                        Sterling, which carries out the background check, charges a fee in order to cover costs 
                        related to retrieving information on their applicants. Connect your card in order to
                        pay this cost
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                      >
                        {"Make Payment"}
                      </Button>
                      <Divider className={classes.paymentDivider}/> */}
                    </form>
                  </div>
                
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  screeningResults: state.screening.results,
  beingProcessed: state.screening.beingProcessed,
  user: state.auth.user,
  payment_methods: state.services.payment_methods,
  form: state.forms,
});

export default connect(mapStateToProps, {
  screening,
  loadUser,
  sendUserData,
  start_check,
  get_payment_method,
  clear_error
})(BackgroundCheckSection);
