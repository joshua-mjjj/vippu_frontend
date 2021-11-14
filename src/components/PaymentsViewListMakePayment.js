import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Divider from '@material-ui/core/Divider';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import discover from 'payment-icons/min/flat/discover.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import jcb from 'payment-icons/min/flat/jcb.svg';
import unionpay from 'payment-icons/min/flat/unionpay.svg';

import { delete_payment_method, get_payment_method, set_primary, clear_error, backgroundcheck_payment } from "../actions/form.js";
import { createMessage } from "../actions/messages"; 
import Spinner from '../assets/home_load.gif';
import { useDispatch } from "react-redux";
import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

const Accordion = withStyles((theme) => ({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },

  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  paper: {
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
  serviceTitle: {
    marginBottom: theme.spacing(1),
    color: "black",
  },
  parentDiv: {
    margin: theme.spacing(3),
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
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
  helpText2: {
    paddingTop: theme.spacing(2),
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "blue",
  },
  accordion:{
    margin: theme.spacing(1, 0),
    width: "500px",
    borderRadius: "2px",
  },
  text: {
    marginLeft: theme.spacing(3),
  },
  button: {
    backgroundColor: "#b53f3fbd",
    float: 'right',
    margin: theme.spacing(0, 0, 1),
  },
  submitButton: {
    marginLeft: theme.spacing(2),
    float: 'left',
    marginTop: theme.spacing(2),
  },
   svg_image : {
    height: '35px',
    width: '35px'
  },
  checkbox: {
    paddingLeft: theme.spacing(4),
  },
  amount : {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  }
}));

function PaymentsViewList(props) {
  const [expanded, setExpanded] = React.useState("");
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [updateid, setUpdateid] = React.useState("");
  const [bool, setBool] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [payment_load, setPayment_load] = React.useState(false);
  const [status_load, setStatus] = React.useState(false);
  const [load_id, setloadID] = React.useState(null);
  const classes = useStyles();

  const payment_methods = props.payment_methods;
  // sorting them
  payment_methods.sort((a, b) => (a.id > b.id) ? 1 : -1)
  const len = payment_methods.length;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const setting_primary = (id, value) => {
    setloadID(id);
    console.log("Changing card status...")
    setPayment_load(false)
    setStatus(true)
    const new_value = !value
    let set_id;
    const check = payment_methods.filter((payment) => payment.is_primary === bool);
    if(check.length >= 1){
       set_id =  check[0].id;
    }

    if(check.length === 1 && (id !== set_id)){
       setError(true)
       //window.scrollTo(0, 0);
       scroll.scrollToTop();
       setOpen(true)
       props.primary_error(true)
    } 
    if(check.length === 1 && (id === set_id)) {
      props.set_primary(id, new_value)
      // console.log("condition 2")
      setError(false)
      props.fetch_again();
    }
    if(check.length === 0){
      props.set_primary(id, new_value)
      // console.log("condition 3")
      setError(false)
      props.fetch_again();
    }

    // props.set_primary(id, new_value)
    // props.fetch_again();
    
  }

  const delete_payment_method = (id) => {
       props.delete_payment_method(id);
       props.fetch_again();
  };
  const dispatch = useDispatch(); 

  // Method handling / Initiating background check sterling payment
  const handleSubmit_payment = () => {
    setPayment_load(true)
    setStatus(false)
    console.log("Making load true...")
    const user_id = props.user.id;
    const service = 1;             // service defaults to 1, says the backend engineer because its one service
    const status  = "pending"
    let primary_id;
    const card = payment_methods.filter((payment) => payment.is_primary === bool);
    // console.log(card.length)
    if(card.length !== 0){
      primary_id =  card[0].id;
    // console.log(primary_id)
    // console.log(user_id)
           // console.log(props.user.date_of_birth)
            function getAge(birthDateString) {
            var today = new Date();
            var birthDate = new Date(birthDateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        if(getAge(`${props.user.date_of_birth}`) >= 18) {
            //console.log("You have 18 or more years old!");
            props.backgroundcheck_payment(service, primary_id, user_id, status)
        }else {
            //console.log("You are less than 18 old");
            dispatch(
              createMessage("Background check is only eligible for pet providers older than 18!")
            );
        }
      }else{
        dispatch(
              createMessage("Please make sure you have a primary card in order to make payment.")
            );
      }
     // setPayment_load(false)
  }

   let alert;
   let error_message;
   if (props.messages.notify_timeout !== null) {
    alert = (
      <div className="alerts">{props.messages.notify_timeout}</div>
    );
  }
   if (props.error.msg.user) {
    let msg = props.error.msg.user;
    // console.log(msg)
    if(msg.length > 1 && msg[0].code === "400#unsupported-product"){
       msg = "We're sorry, our screening service is currenlty unavailable. Please try again later."
    }
    error_message = (
      <div className="alerts">{msg}</div>
    );
  }
  // if (props.error.msg.user.length > 1) {
  //   let msg = props.error.msg.user[0];
  //   console.log(msg)
  //   error_message = (
  //     <div className="alerts">{msg}</div>
  //   );
  // }
  return (
   <Paper elevation={0} className={classes.paper} >
        {error ? (
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
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {"You can not have more than one primary card, please uncheck the current primary card then make any of your choice primary."}
              </Alert>
            </Collapse>
          ) : (
            ""
          )}
         {
           props.messages.notify_timeout ? 
            (
            <Grid item xs={12}>
                <Alert
                  severity="info"
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
    <div className={classes.parentDiv}>
     <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>CARD DETAILS</Typography>
       </AccordionSummary><br />
      {payment_methods.slice(0, len).map((payment_method) => (
        <Accordion
          className={classes.accordion}
          key={payment_method.id}
          square
          expanded
          onChange={handleChange(`panel${payment_method.id}`)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Checkbox 
             checked={payment_method.is_primary}
             defaultValue={payment_method.is_primary}
             // onClick={(e) => console.log("Clicked")} 
             onChange={(e) => setting_primary(payment_method.id, payment_method.is_primary)}
             color="primary" 
             icon={<CircleUnchecked />}
             checkedIcon={<CircleChecked />}

             />
             {
                payment_method.brand === "visa" ? (  <img src={visa} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
             {
                payment_method.brand === "mastercard" ? (  <img src={mastercard} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
             {
                payment_method.brand === "discover" ? (  <img src={discover} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
             {
                payment_method.brand === "diners" ? (  <img src={diners} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
             {
                payment_method.brand === "jcb" ? (  <img src={jcb} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
             {
                payment_method.brand === "unionpay" ? (  <img src={unionpay} className={classes.svg_image} alt="Logo" /> ) : ("")
             }
           {/*<img src={visa} className={classes.svg_image} alt="Logo" /> */} 
             <FormControlLabel
                className={classes.checkbox}
                value="end"
                control={
                  <div></div>
                 // <Checkbox onClick={(e) => console.log("Clicked")} color="primary" />
                }
                label={payment_method.brand + "  " + " **** **** **** " + payment_method.last4 }
                labelPlacement="end"
              />

              {
                props.form.isLoading === true && status_load === true && load_id === payment_method.id ? (
                  <div style={{
                   // alignItems:'center',
                   // justifyContent:'center'
                   marginLeft:'10px',
                   marginTop: '5px'
                }}>
                  <img src={Spinner} alt="" height="25px" width="25px" /> 
               </div>) : null
              }

             </AccordionSummary>

                    {/* <Button
                      variant="contained"
                      //disabled={disabl_}
                      color="primary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      onClick={handleSubmit_update}
                      className={classes.submitButton}
                    >
                    {"Update"}
                  </Button> */}
         <Divider />        
        </Accordion>
      ))}
       <br />

        {props.error.msg.user ? (
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
                }
              >   
                <div>{error_message}</div>
              </Alert>
          ) : (
            ""
          )}

       {/*props.error.msg === "Background check is only supported for US Citizens" ? (
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
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {"Background check is only supported for US Citizens"}
              </Alert>
            </Collapse>
          ) : (
            ""
          )}
        {/*props.error.status === 400 && props.error.msg !== "Background check is only supported for US Citizens"? (
             <Collapse in={open}>
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                {"Sorry, we were unable to contact Sterling at the moment"}
              </Alert>
            </Collapse>
          ) : (
            ""
          )*/}
       <div className={classes.margin}>
        <Typography className={classes.amount} >Amount</Typography>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AttachMoneyIcon />
          </Grid>
          <Grid item>
             <TextField
                id="outlined-size-small"
                value="    25.00"
                
                size="small"
              />
          </Grid>
        </Grid>

         <Button
            variant="outlined"
            color="primary"
            //disabled={disabl_}
            style={{maxWidth: '160px', maxHeight: '35px', minWidth: '160px', minHeight: '35px'}}
            onClick={handleSubmit_payment}
            className={classes.submitButton}
          >
          {"Pay now"}
          {
            props.form.isLoading === true && payment_load === true ? (
              <div style={{
               // alignItems:'center',
               // justifyContent:'center'
               marginLeft:'10px',
               marginTop: '5px'
            }}>
              <img src={Spinner} alt="" height="25px" width="25px" /> 
           </div>) : null
          }
        </Button>
      </div>
  

    </div>
  </Paper>
  );
}

const mapStateToProps = (state) => ({
  error: state.errors,
  messages: state.messages,
  form: state.forms,
  user: state.auth.user,
  results: state.services.results,
  all_services: state.services.admin_services,
});
export default connect(mapStateToProps, {
  delete_payment_method, get_payment_method, clear_error, set_primary, backgroundcheck_payment
})(PaymentsViewList);
