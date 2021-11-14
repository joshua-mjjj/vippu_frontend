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

import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import discover from 'payment-icons/min/flat/discover.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import jcb from 'payment-icons/min/flat/jcb.svg';
import unionpay from 'payment-icons/min/flat/unionpay.svg';
import { useDispatch } from "react-redux";
import { 
  delete_payment_method, 
  get_payment_method, 
  set_primary,
  clear_error 
} from "../actions/form.js";
import { get_payouts } from "../actions/booking";
import { returnError} from "../actions/errors.js";
import { createMessage} from "../actions/messages.js";

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
  },
  text: {
    marginLeft: theme.spacing(3),
  },
  button: {
    backgroundColor: '#FF3D00!important',
    float: 'right',
    margin: theme.spacing(0, 0, 1),
  },
  submitButton: {
    backgroundColor: "#663399",
    marginLeft: theme.spacing(2),
    float: 'right',
  },
   svg_image : {
    height: '45px',
    width: '45px'
  },
  titleBlock: {
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '25px',
    color: 'black',
  },
  titleBlock_: {
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '15px',
    color: 'black',
  }
}));

function PaymentsViewList(props) {
  const [expanded, setExpanded] = React.useState("");
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [updateid, setUpdateid] = React.useState("");
  const [bool, setBool] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const payment_methods = props.payment_methods;
  // console.log(payment_methods)
  // console.log(payment_methods)
  const len = payment_methods.length;
  // sorting them
  if(len > 0){
      payment_methods.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const setting_primary = (id, value) => {
    const new_value = !value
    let set_id;
    const check = payment_methods.filter((payment) => payment.is_primary === bool);
    console.log(check)
    if(check.length >= 1){
       set_id =  check[0].id;
    }

    if(check.length === 1 && (id !== set_id)){
       setError(true)
      // window.scrollTo(0, 0);
       // console.log("can not have more than two PCs")
       scroll.scrollTo(450);
       setOpen(true)
    } 
    if(check.length === 1 && (id === set_id)) {
      props.set_primary(id, new_value)
       // console.log("you have a primary card and you want to change its status")
      setError(false)
      props.fetch_again();
    } 
    if(check.length === 0){
      props.set_primary(id, new_value)
      // console.log("setting a primary card")
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
   if (props.messages.notify_timeout !== null && props.booking.payouts_data === null) {
    scroll.scrollTo();
    alert = (
      <div className="alerts">{props.messages.notify_timeout}</div>
    );
  }

  if (props.error.msg.length >= 1) {
    let msg = props.error.msg;
    // console.log(msg)
    alert = (
      <div className="alerts">{msg}</div>
    );
  }
  
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(returnError(null, null));
  //   dispatch(createMessage(null));
  // }, []);

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
           props.messages.notify_timeout ?  // temporary..
            (
              <Grid item xs={8}>
                {
                  props.messages.notify_timeout === "Card Deleted Successfully." ? ( 
                    <Grid item xs={8}>
                      <Alert
                        severity="success"
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
                 </Grid>): (<Grid item xs={8}>
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
           </Grid>)
                }
              </Grid>
            ): null
          }
          {
             props.error.msg.length >= 1 ? 
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
    <div className={classes.parentDiv}>

      <span className={classes.titleBlock}>Your Payment information</span>
      {
        len > 0 ? 
        (
          <div>
           {payment_methods.slice(0, len).map((payment_method) => (
              <Accordion
                className={classes.accordion}
                key={payment_method.id}
                square
                expanded
                onChange={handleChange(`panel${payment_method.id}`)}
              >
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
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
                  </AccordionSummary>

                <AccordionDetails>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                    <Grid item sm={4}>
                        <TextField
                          id="last4"
                          label="Card ending with"
                          value={payment_method.last4}
                          className={classes.line}
                          InputProps={{ classes: { underline: classes.underline } }}
                        />
                      </Grid>
                      <Grid item sm={3}>
                        <TextField
                          id="exp_month"
                          label="Expiration month"
                          type="text"
                          value={payment_method.exp_month}
                          className={classes.line}
                          InputProps={{ classes: { underline: classes.underline } }}
                        />
                      </Grid>
                      <Grid item sm={3}>
                        <TextField
                          id="exp_year"
                          label="Expiration year"
                          value={payment_method.exp_year}
                          className={classes.line}
                          InputProps={{ classes: { underline: classes.underline } }}
                        />
                      </Grid>
                      <Grid item sm={2}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={payment_method.is_primary}
                              defaultValue={payment_method.is_primary}
                              onChange={(e) => setting_primary(payment_method.id, payment_method.is_primary)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                          }
                          label="Primary"
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
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
                        <Button
                            variant="contained"
                            //disabled={disabl_}
                            color="secondary"
                            style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                            onClick={(e) => delete_payment_method(payment_method.id)}
                            className={classes.button}
                          >
                          {"Delete"}
                          </Button>
                      </Grid> 
                    </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        ) : (<div><span className={classes.titleBlock_}>No cards added yet.</span></div>)
      }  
    </div>
  </Paper>
  );
}

const mapStateToProps = (state) => ({
  error: state.errors,
  form: state.forms,
  booking: state.booking,
  user: state.auth.user,
  messages: state.messages,
  results: state.services.results,
  all_services: state.services.admin_services,
});
export default connect(mapStateToProps, {
  delete_payment_method, 
  get_payment_method, 
  set_primary,
  clear_error
})(PaymentsViewList);
