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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Skeleton from '@material-ui/lab/Skeleton';
import Input from '@material-ui/core/Input';
import Spinner from '../assets/home_load.gif';
import Alert from "@material-ui/lab/Alert";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Popover from '@material-ui/core/Popover';

import { 
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  deinit_fetch,
  user_update_pet
 } from "../actions/form.js";

 import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Footprint from "../assets/logo_placeholder_transparent_grey.png";


// import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';

import { get_bookings, confirm_booking } from "../actions/booking";
import PetCardDetails from "./PetCardDetails";
import PetCardDetailsPet from "./PetCardDetailsPet";

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

// const AccordionSummary = withStyles({
//   root: {
//     // backgroundColor: "rgba(0, 0, 0, .03)",
//     backgroundColor: "#BEE2BD",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56,
//     },
//   },

//   content: {
//     "&$expanded": {
//       margin: "12px 0",
//     },
//   },
//   expanded: {},
// })(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  serviceTitle: {
    marginBottom: theme.spacing(1),
    color: "black",
  },
  parentDiv: {
    margin: theme.spacing(1),
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
    borderRadius: "3px",
    border: '1px solid #cfd7de',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    "& > label": {
      paddingLeft: theme.spacing(2),
    },
  },
  line_:{
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
  button: {
    backgroundColor: "#b53f3fbd",
    float: 'right',
    margin: theme.spacing(0, 0, 1),
  },
  submitButton: {
    backgroundColor: "#663399",
    marginLeft: theme.spacing(2),
    float: 'right',
  },
  inputSelect:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    width: '100%',
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
 inputSkeleton:{
    fontSize: '13px',
    color: '#1b1f23',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
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
  titleBlock: {
    // marginBottom: '10px',
    fontFamily: 'Dosis',
    // fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '20px',
    // lineHeight: '30px',
    color: 'black',
    //textAlign: 'left',
    // letterSpacing: '0.15px',
    // [theme.breakpoints.down("680")]: {
    //   marginBottom: '20px',
    //   fontSize: '24px',
    //   lineHeight: '24px',
    // },
  },
  checkbox: {
  	// marginLeft: '600px'
  	float: 'right',
  	display : 'flex', 
  	justifyContent: 'flex-end'
  },

  root_: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '18px',
    color: '#23286B',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  secondaryHeading_: {
    fontSize: theme.typography.pxToRem(15),
    color: 'green',
  },
  secondaryHeading__: {
    fontSize: theme.typography.pxToRem(15),
    color: '#FF3D00',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  column_message: {
    flexBasis: '33.33%',
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  column_: {
    // flexBasis: '33.33%',
    marginTop: '6px',
    marginLeft: '500px'
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  root_time: {
  	marginLeft: '40px'
  },
  formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  input:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
 typography: {
    padding: theme.spacing(2),
  },

}));

function DashboardViewSingleBookingProvider(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const [pet_updating, setPet_updating] = React.useState(props.pet.id);
  const confirm = () => {
    console.log(props.booking.id)
    props.confirm_booking(props.booking.id)
    props.fetch_again()
  }
  React.useEffect(() => {
    props.get_bookings()
    props.get_bookings()
  }, []);

  //  React.useEffect(() => {
  //   if(props.fetch === true) {
  //     const usid = props.user.id;
  //     props.getPetData(usid);
  //     props.deinit_fetch();
  //   }   
  // }, [props.fetch]);

  // const user_delet_pet = (id) => {
  //   props.user_delete_pet(id);
  //   const usid = props.user.id;
  //   setTimeout(() => {
  //     props.fetch_again();
  //     props.getPetData(usid);
  //   }, 500);
  // };

   const [pets_book, setPets]  = React.useState();
   const [checked, setChecked]  = React.useState(true);
   
   let alert;
	if (props.messages.notify_timeout !== null) {
	    alert = (
	      <div className="alerts">{props.messages.notify_timeout}</div>
	    );
	  }

  return (
    <div className={classes.parentDiv}>
      { props.booking !== null ? (
      <div>
{/*
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
          }*/}  
       <div className={classes.root_}>
	      <Accordion 
	        // defaultExpanded 
	        >
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel1c-content"
	          id="panel1c-header"
	        >
	          <div className={classes.column}>
	            <span className={classes.heading}><img src={props.booking.service.service.icon} height="17px" width="17px" style={{ marginRight: '10px' }} alt=""/> {props.booking.service.service.name} {/*<span className={classes.secondaryHeading}>by {props.booking.service_provider.first_name}</span>*/}</span>
	          </div>
	          <div className={classes.column_}>
	           <Typography ><span>status: 
	              </span> 
	                {  
	                	props.booking.status === "pending" ? ( <span className={classes.secondaryHeading_} >{" "} {props.booking.status}</span>) : (null)
	                }
	                {  
	                	props.booking.status === "confirmed" ? ( <span className={classes.secondaryHeading__} >{" "} {props.booking.status}</span>) : (null)
	                }
	           </Typography>
	          </div>
	        </AccordionSummary>
	            <Grid item xs={12} className={classes.root_time} >
	              <Grid container spacing={2}>
	                <Grid item sm={5} xs={12}>
	                 <FormLabel component="label" className={classes.formLabel}>Start time</FormLabel>
	                  <TextField
	                    id="name"
	                    name="name"
	                   // label="Start time"
	                    // onChange={(e) => setName(e.target.value)}
	                    value={props.booking.start_time}
	                    className={classes.line}
	                    InputProps={{ classes: { underline: classes.underline } }}
	                  />
	                </Grid>
	                 <Grid item sm={5} xs={12}>
	                 <FormLabel component="label" className={classes.formLabel}>End time</FormLabel>
	                  <TextField
	                    id="name"
	                    name="name"
	                   // label="End time"
	                    // onChange={(e) => setName(e.target.value)}
	                    value={props.booking.end_time}
	                    className={classes.line}
	                    InputProps={{ classes: { underline: classes.underline } }}
	                  />
	                </Grid>
	                 <Grid item sm={5} xs={12}>
	                 <FormLabel component="label" className={classes.formLabel}>Start date</FormLabel>
	                  <TextField
	                    id="name"
	                    name="name"
	                   // label="Start date"
	                    // onChange={(e) => setName(e.target.value)}
	                    value={props.booking.start_date}
	                    className={classes.line}
	                    InputProps={{ classes: { underline: classes.underline } }}
	                  />
	                </Grid>
	                 <Grid item sm={5} xs={12}>
	                 <FormLabel component="label" className={classes.formLabel}>End date</FormLabel>
	                  <TextField
	                    id="name"
	                    name="name"
	                   // label="End date"
	                    // onChange={(e) => setName(e.target.value)}
	                    value={props.booking.end_date}
	                    className={classes.line}
	                    InputProps={{ classes: { underline: classes.underline } }}
	                  />
	                </Grid>
	            </Grid>
	            <FormLabel component="label" className={classes.formLabel}>Pet(s)</FormLabel>
	             <div className={classes.column}>
			      {props.booking.pets.map((pet, i) => (
			      	  <PetCardDetailsPet pet={pet} />
			      ))}
			     </div>
	            {/*<div className={classes.column}>
	              <Chip label="Barbados" onDelete={() => {}} />
	            </div>*/}
	           </Grid>
	        <AccordionDetails className={classes.details}>
	        <div style={{ marginLeft: '40px' }} >
	           <div className={classes.column}>
	              <span style={{     
			              	fontSize: '18px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286D' }}
				   >Your pet owner's details</span>
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Name: </span> {" "} {props.booking.created_by.first_name} {" "} {props.booking.created_by.last_name}
	              </span>
	              {/*<br />
	               <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Contact: </span>{props.booking.created_by.phone_number}
	              </span>
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Email: </span>{props.booking.created_by.email}
	              </span>*/}
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>City: </span>{props.booking.created_by.city}
	              </span>
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Address: </span>{props.booking.created_by.address_line_1}
	              </span>
	              <br />
	          </div>
	        </div>
	          <div className={classes.column} />
	           <Divider />
	         {/* <div className={classes.column}>
	            <Chip label="Barbados" onDelete={() => {}} />
	          </div>*/}
	          <div className={classes.column_message}>
	              <span style={{     
			              	fontSize: '18px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286D' }}
				   >Message</span>
	              <br />
                <Input 
	                disableUnderline
	                fullWidth
	                // onChange={(e) => {
	                //     setBio(e.target.value)
	                //     setEdited(true)
	                // }}
	                multiline
	                rows={4}
	                placeholder="Share any important notes about your pet(s)."
	                value={props.booking.notes}
	                className={classes.input}
                />
	              
	          </div>
	        </AccordionDetails>
	        <Divider />
	        <AccordionActions>

	      {/*  props.booking.status === "pending"
			props.booking.status === "confirmed"*/}

	          <Button 
	             size="small"
	             disabled={props.booking.status === "confirmed" ? true : false} 
	             variant="outlined" 
	             onClick={confirm}
	             color="primary">
	            {"Confirm"}
                 {  props.bookings.isLoading === true ? (
                            <div style={{ marginLeft:'10px' }}>
                            <img src={Spinner} alt="" height="16px" width="16px" /> 
                         </div>
                         )  : null }
	          </Button>
	          <Button size="small" color="red" variant="outlined">
	             <span style={{ color:'red' }}> Decline </span>
	          </Button>
	        </AccordionActions>
	      </Accordion>
    </div>
      </div>
      ) : (
        <div>
          <Skeleton variant="rect" width="100%" className={classes.accordion} height="3em"/>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  fetch: state.pets.fetch,
  types: state.pets.pet_types,
  loading: state.pets.isLoading,
  error: state.errors,
  form: state.forms,
  progress: state.services.progress,
  pets: state.pets.pets,
  admin_pets: state.pets.pet_types,
  breeds_types: state.pets.breeds,
  breeds_cats: state.pets.breeds_cats,
  bookings: state.booking,
  messages: state.messages,
});

export default connect(mapStateToProps, {
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  deinit_fetch,
  user_update_pet,
  get_bookings,
  confirm_booking
})(DashboardViewSingleBookingProvider);
