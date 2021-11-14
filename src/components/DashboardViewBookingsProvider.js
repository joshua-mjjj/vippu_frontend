import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import spinner from '../assets/Spinner.gif';
import Box from "@material-ui/core/Box";
import DashboardViewSingleBookingProvider from './DashboardViewSingleBookingProvider'
import { 
  getPetData, 
  user_delete_pet,
  //clear_state,
  init_fetch,
  deinit_fetch,
  get_breeds
 } from "../actions/form.js";

import { get_bookings } from "../actions/booking";

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
  helpText2: {
    paddingTop: theme.spacing(0),
    marginLeft: theme.spacing(3),
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "blue",
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
  spin: {
    height: 50,
    width: 50,
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  accordion:{
    margin: theme.spacing(1, 0),
  },
  titleBlock: {
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '30px',
    color: 'black',
  },
  pageTitle:{
    maxWidth: '624px',
    marginBottom: '2px',
    marginTop: '5px',
    marginLeft: '15px',
    // alignItems: 'center',
    fontWeight: '200',
    fontSize: '22px',
    lineHeight: '58px',
    color: '#23286B',
  }
}));

function DashboardViewBookings(props) {
  const [expanded, setExpanded] = React.useState("");
  const [provider_booking_data, setData] = React.useState(null);
  const classes = useStyles();

  const bookings = props.booking_data;
  const len = bookings.length;
  // sorting them
  if(len > 0){
      bookings.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const fetch_again = (e) => {
     props.get_bookings();
     props.get_bookings();
  }
   React.useEffect(() => {
    props.get_bookings()
    props.get_bookings()
    // console.log(props.provider_id)  

  }, []);


  //  React.useEffect(() => {
  //   if(props.fetch === true) {
  //     const usid = props.user.id;
  //     props.getPetData(usid);
  //     props.deinit_fetch();
  //   }   
  // }, [props.fetch]);

  return (
    <div className={classes.parentDiv}>
    {
    	len === 0 ? (<div className={classes.pageTitle}>No appointments yet.</div>) : 
    	(
    	<div>
	      {bookings.slice(0, len).map((booking, i) => (
	         <div>
	          <DashboardViewSingleBookingProvider booking={booking} key={i} fetch_again={fetch_again}/>
	        </div>
	      )).reverse()}</div>
    	)
    }
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  fetch: state.pets.fetch,
  types: state.pets.pet_types,
  loading: state.pets.isLoading,
  breeds_types: state.pets.breeds,
  breeds_cats: state.pets.breeds_cats,
});

export default connect(mapStateToProps, {
  getPetData, 
  user_delete_pet,
  //clear_state,
  init_fetch,
  deinit_fetch,
  get_breeds,
  get_bookings
})(DashboardViewBookings);
