
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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import visa from 'payment-icons/min/flat/visa.svg';
import mastercard from 'payment-icons/min/flat/mastercard.svg';
import discover from 'payment-icons/min/flat/discover.svg';
import diners from 'payment-icons/min/flat/diners.svg';
import jcb from 'payment-icons/min/flat/jcb.svg';
import unionpay from 'payment-icons/min/flat/unionpay.svg';
import FormLabel from '@material-ui/core/FormLabel';
import { useDispatch } from "react-redux";
import { 
  delete_payment_method, 
  get_payment_method, 
  set_primary,
  clear_error 
} from "../actions/form.js";
import Spinner from '../assets/home_load.gif';
import { get_payouts, delete_payout, create_schedule } from "../actions/booking";
import { returnError} from "../actions/errors.js";
import { createMessage} from "../actions/messages.js";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
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
  formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  formLabel_:{
      fontSize: '16px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '500',
      marginBottom: theme.spacing(3),
  },
  formLabel__:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '400',
      marginBottom: theme.spacing(3),
  },
  bank: {
      paddingTop:'10px'
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
}));

function PaymentBankAccountsList(props) {
  const [expanded, setExpanded] = React.useState("");
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [bool, setBool] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [status_update_save, setStatus] = React.useState("save");
  const classes = useStyles();
  
  const schedules = props.schedules
  console.log(schedules)
  React.useEffect(() => {
    if(schedules.length === 0){
       setStatus("save")
    }else{
      setStatus("update")
    }
  }, [props.schedules]);

  const bank_accounts   = props.bank_accounts;
  // console.log(payment_methods)
  const len_ = bank_accounts.length;
  // sorting them
  if(len_ > 0){
      bank_accounts.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const delete_payout_ = (id) => {
       props.delete_payout(id);
       props.fetch_again();
  };

  // schedules 
  const [occurence, setOccurence] = React.useState(schedules.length > 0 ? schedules[0].occurrence : null);
  const [weekday, setWeekDay]   = React.useState(schedules.length > 0 ? schedules[0].day_of_the_week : null);
  const [monthday, setMonthDay]  = React.useState(schedules.length > 0 ? schedules[0].day_of_the_month : null);
  const [schedule_id, setSchedule_id]  = React.useState(schedules.length > 0 ? schedules[0].id : null);
  const [notifi, setNotify]  = React.useState(null);

  const user_id = props.user.id;
  const handleCreate_schedule = () => {
    console.log(occurence)
    console.log(weekday)
    console.log(monthday)
    if(occurence && weekday && monthday && user_id){
       props.create_schedule(occurence, weekday, monthday, user_id, "create", schedule_id)
       setNotify(true)
    }
  };
  const handleUpadte_schedule = () => {
    if(occurence && weekday && monthday && user_id && schedule_id){
       props.create_schedule(occurence, weekday, monthday, user_id, "update", schedule_id)
       setNotify(true)
    }
  };


   if (props.messages.notify_schedule !== null) {
	   // scroll.scrollTo(250);
	    alert = (
	      <div className="alerts">{props.messages.notify_schedule}</div>
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
          <Grid item>
             {/* <FormLabel component="label" className={classes.formLabel}>Bank Account Details</FormLabel> 
              <FormLabel component="label" className={classes.formLabel}>Choose the frequency of your payouts.</FormLabel> <br />*/}
          </Grid>
         {/*{error ? (
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
          )}*/}
        {/* {
           props.messages.notify_timeout ? 
            (
            <Grid item xs={6}>
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
          }*/}
         {/* {
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
          }*/}
    <div className={classes.parentDiv}>
      {bank_accounts.slice(0, len_).map((bank_account) => (
        <Accordion
          className={classes.accordion}
          key={bank_account.id}
          square
          expanded
          onChange={handleChange(`panel${bank_account.id}`)}
        >
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
             {/*{
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
             }*/}
              <Grid item>
                 <FormLabel component="label" className={classes.formLabel}><AccountBalanceIcon className={classes.bank} /> {" "} {bank_account.bank_name}</FormLabel> <br />
              </Grid>
            </AccordionSummary>

          <AccordionDetails>
            <Grid item xs={12}>
              <Grid container spacing={2}>
              <Grid item sm={4}>
                  <TextField
                    id="last4"
                    label="Routing number"
                    value={bank_account.routing_number}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
              </Grid>
              <Grid item sm={5}>
                  <TextField
                    id="account_number"
                    label="Account number ending with"
                    type="text"
                    value={bank_account.last4}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
               </Grid>
               <Grid item sm={3}>
                  <TextField
                    id="account_number"
                    label="Currency"
                    type="text"
                    value={bank_account.currency}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
               </Grid>

                {/*<Grid item sm={2}>
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
                </Grid>*/}
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
                      onClick={(e) => delete_payout_(bank_account.id)}
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
    
     <Grid item xs={12} sm={6} style={{ marginLeft: '20px' }}> 
     <div>
        <FormLabel component="label" className={classes.formLabel_} >{"Payout Schedule"}</FormLabel> <br/>
        <FormLabel component="label" className={classes.formLabel__} >{"Choose the frequency of your payouts."}</FormLabel> 
    </div> 
      <Paper elevation={0} className={classes.paper}>
       <div>
        <span component="label" className={classes.formLabel} >{"Frequency "} </span>
       </div>
        <Select
          onChange={(e) => setOccurence(e.target.value)}
          disableUnderline
          displayEmpty
          fullWidth
          value={occurence}
          // defaultValue={props.schedules.occurrence}
          className={classes.inputSmall} 
          inputProps={{
              "aria-label": "Select Expiry year",
          }}
          >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
      </Select>
      <div>
        <span component="label" className={classes.formLabel} >{"Every Week "} </span>
       </div>
        <Select
          onChange={(e) => setWeekDay(e.target.value)}
          disableUnderline
          displayEmpty
          fullWidth
          value={weekday}
          // defaultValue={props.schedules.day_of_the_week}
          className={classes.inputSmall} 
          inputProps={{
              "aria-label": "Select Expiry year",
          }}
          >
          <MenuItem value="sunday">Sunday</MenuItem>
          <MenuItem value="monday">Monday</MenuItem>
          <MenuItem value="tuesday">Tuesday</MenuItem>
          <MenuItem value="wednesday">Wednesday</MenuItem>
          <MenuItem value="thursday">Thursday</MenuItem>
          <MenuItem value="friday">Friday</MenuItem>
          <MenuItem value="saturday">Saturday</MenuItem>
      </Select>
      <div>
         <span component="label" className={classes.formLabel} >{"Every Month"} </span>
       </div>
        <Select
          onChange={(e) => setMonthDay(e.target.value)}
          disableUnderline
          displayEmpty
          fullWidth
          value={monthday}
          // defaultValue={props.schedules.day_of_the_month}
          className={classes.inputSmall} 
          inputProps={{
              "aria-label": "Select Expiry year",
          }}
          >
          <MenuItem value={1}>On day 1</MenuItem>
          <MenuItem value={2}>On day 2</MenuItem>
          <MenuItem value={3}>On day 3</MenuItem>
          <MenuItem value={4}>On day 4</MenuItem>
          <MenuItem value={5}>On day 5</MenuItem>
          <MenuItem value={6}>On day 6</MenuItem>
          <MenuItem value={7}>On day 7</MenuItem>
          <MenuItem value={8}>On day 8</MenuItem>
          <MenuItem value={9}>On day 9</MenuItem>
          <MenuItem value={10}>On day 10</MenuItem>
          <MenuItem value={11}>On day 11</MenuItem>
          <MenuItem value={12}>On day 12</MenuItem>
          <MenuItem value={13}>On day 13</MenuItem>
          <MenuItem value={14}>On day 14</MenuItem>
          <MenuItem value={15}>On day 15</MenuItem>
          <MenuItem value={16}>On day 16</MenuItem>
          <MenuItem value={17}>On day 17</MenuItem>
          <MenuItem value={18}>On day 18</MenuItem>
          <MenuItem value={19}>On day 19</MenuItem>
          <MenuItem value={20}>On day 20</MenuItem>
          <MenuItem value={21}>On day 21</MenuItem>
          <MenuItem value={22}>On day 22</MenuItem>
          <MenuItem value={23}>On day 23</MenuItem>
          <MenuItem value={24}>On day 24</MenuItem>
          <MenuItem value={25}>On day 25</MenuItem>
          <MenuItem value={26}>On day 26</MenuItem>
          <MenuItem value={27}>On day 27</MenuItem>
          <MenuItem value={28}>On day 28</MenuItem>
          <MenuItem value={29}>On day 29</MenuItem>
          <MenuItem value={30}>On day 30</MenuItem>
        {/*  <MenuItem value={31}>On day 31</MenuItem>*/}
      </Select>
      {
        status_update_save === "save" ? 
        (
         <Button
            variant="outlined"
            //disabled={disabl_}
            color="primary"
            style={{maxWidth: '100px', maxHeight: '35px', minWidth: '100px', minHeight: '35px', marginLeft : '10px' }}
            onClick={handleCreate_schedule}
           // className={classes.button}
          >
          {"Save"}{
            props.booking.loading_schedule === true ? (
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
        ) : 
        (
         <Button
            variant="outlined"
            //disabled={disabl_}
            color="primary"
            style={{maxWidth: '100px', maxHeight: '35px', minWidth: '100px', minHeight: '35px', marginLeft : '10px' }}
            onClick={handleUpadte_schedule}
            // className={classes.button}
          >
          {"Update"} {
            props.booking.loading_schedule === true ? (
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
        )
      }
        {
           props.messages.notify_schedule ? 
            (
            <Grid item xs={12}>
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
           </Grid>
            ): null
          }  
     </Paper>
    </Grid> 
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
  clear_error,
  get_payouts,
  delete_payout,
  create_schedule
})(PaymentBankAccountsList);
