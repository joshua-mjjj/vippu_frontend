import React , { useState } from "react";
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

import { 
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  deinit_fetch,
  user_update_pet,
  get_availability_data,
  clear_available
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
import PetCardDetailsPet from "./PetCardDetailsPet";
import DashboardViewSingleBookingEdit from "./DashboardViewSingleBookingEdit";

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

}));

function DashboardViewSingleBooking(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // const [pet_updating, setPet_updating] = React.useState(props.pet.id);
  const handleSubmit_update = (e) => {
    
  }
  React.useEffect(() => {
    props.get_bookings()
    props.get_bookings()
  }, []);



   const [pets_book, setPets]  = React.useState();
   const [checked, setChecked]  = React.useState(true); 
   const [load, setLoad]  = React.useState(false); 

   const [id, setID_] = React.useState(props.booking.service_provider.id);
   const refetch = () => {
      console.log("Here...")
      props.clear_available()
      props.get_availability_data(id)
      props.get_availability_data(id)
   }


    // Availability
    const [_id, setID] = React.useState(props.booking.service_provider.id);
    React.useEffect(() => {
        // props.get_availability_data(_id)
        // console.log(props.booking)
    }, []);

    // React.useEffect(() => {
    //     console.log(_id)
    //     props.get_availability_data(_id)
    // }, [props.booking.service_provider.id]);

    const [data, setData] = useState("");
    const fetching = () => {
       // console.log("Refreshing secondary....")
        props.clear_aval()
        props.get_availability_data(_id)
        props.get_availability_data(_id)
    };

    React.useEffect(() => {
      if(props.availability){
         const list = []
         
         props.availability.results.filter((availability) => {
           // console.log(availability)
            const end_time   = availability.end_time
            const start_time = availability.start_time
            const day        = availability.day
            const start_date     = availability.start_date
            const end_date       = availability.end_date

            var dateString_start = start_date + " " + start_time;
            var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString_start); 
            var dateObject_start = new Date(
                (+dateArray[1]), (+dateArray[2])-1, // Careful, month starts at 0!
                (+dateArray[3]),(+dateArray[4]),
                (+dateArray[5]),(+dateArray[6])
            );

            var dateString_end = end_date + " " + end_time;
            var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString_end); 
            var dateObject_end = new Date(
                (+dateArray[1]),(+dateArray[2])-1, // Careful, month starts at 0!
                (+dateArray[3]),(+dateArray[4]),
                (+dateArray[5]),(+dateArray[6])
            ); 

            const id         = availability.id
            const notes      = availability.notes
            const first =  dateObject_start.toString().substring(0,24)
            const second = dateObject_end.toString().substring(0,24)
            // console.log(first.toString().substring(0,24))
            // console.log(second.toString().substring(0,24))

            const object = {
              title: `${first}, ${second}`,
              startDate : dateObject_start,
              endDate   : dateObject_end,
              id        : id,
              location: "Dummy",
            }
            list.push(object)
         })
          // console.log(list)
          setData(list)
        }else{
          setLoad(true)
          setData(null)
        }
  }, [props.availability, _id]);

    const [current, setCurrent] = useState("");
    const [name, setName] = useState(localStorage.getItem("book_provider_name"));

    React.useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var current_date = year + '-' + month + '-' + date
      setCurrent(current_date)
    }, [data]);


  return (
    <div className={classes.parentDiv}>
      { props.booking !== null ? (
      <div>

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
	            <span className={classes.heading}><img src={props.booking.service.service.icon} height="17px" width="17px" style={{ marginRight: '10px' }} alt=""/> {props.booking.service.service.name} <span className={classes.secondaryHeading}>by {props.booking.service_provider.first_name}</span></span>
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
	                    defaultValue={props.booking.end_time}
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
	                    defaultValue={props.booking.start_date}
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
	                <Grid item xs={12}>
	                   {/*<Button
	                      variant="contained"
	                      //disabled={disabl_}
	                      color="primary"
	                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
	                      onClick={handleSubmit_update}
	                      className={classes.submitButton}
	                    >
	                    {"Update"}
	                  </Button>*/}
	                  {/*<Button
	                      variant="contained"
	                      //disabled={disabl_}
	                      color="secondary"
	                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
	                      // onClick={(e) => user_delet_pet(props.pet.id)}
	                      className={classes.button}
	                    >
	                    {"cancel"}
	                    </Button>*/}
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
				   >More Details</span>
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Price: </span> {"$"} {props.booking.service.price}
	              </span>
	              <br />
	              <span>
	              	<span style={{     
			              	fontSize: '16px',
						    fontFamily: 'Dosis',
						    fontWeight: 'bold',
						    color: '#23286G' }}>Rate: </span>{props.booking.service.rate.name}
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
          <DashboardViewSingleBookingEdit data={data} booking={props.booking} refetch={refetch} />
	          {/*<Button size="small" variant="outlined" color="primary">
	            Update
	          </Button>*/}
	          <Button size="small" variant="outlined" >
               <span style={{ color:'red' }}> Cancel </span>
            </Button>
	        </AccordionActions>
	      </Accordion>
    </div>


        {/*<Accordion
          className={classes.accordion}
          key={props.booking.id}
          square
          expanded={expanded === `panel${props.booking.id}`}
          onChange={handleChange(`panel${props.booking.id}`)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
             <Grid
			  container
			  direction="row"
			  justifyContent="center"
			  alignItems="center">
			  <Typography ><span className={classes.titleBlock}>{props.booking.notes}</span></Typography>
			</Grid>
             <Grid
			  container
			  direction="row"
			  justifyContent="center"
			  alignItems="center">
			</Grid>
            {/* <div className={classes.checkbox}>
                <Checkbox 
		             checked={!checked}
		             // defaultValue={payment_method.is_primary}
		             onClick={(e) => set_pet_id(props.pet.id)} 
		             onChange={(e) => setChecked(!checked)}
		             color="primary" 
		             icon={<CircleUnchecked />}
		             checkedIcon={<CircleCheckedFilled />}
             /></div>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={5} xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Start time"
                    // onChange={(e) => setName(e.target.value)}
                    defaultValue={props.booking.start_time}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                 <Grid item sm={5} xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="End time"
                    // onChange={(e) => setName(e.target.value)}
                    defaultValue={props.booking.end_time}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                 <Grid item sm={5} xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Start date"
                    // onChange={(e) => setName(e.target.value)}
                    defaultValue={props.booking.start_date}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                 <Grid item sm={5} xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="End date"
                    // onChange={(e) => setName(e.target.value)}
                    defaultValue={props.booking.end_date}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                <Grid item xs={12}>
                   {/*<Button
                      variant="contained"
                      //disabled={disabl_}
                      color="primary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      onClick={handleSubmit_update}
                      className={classes.submitButton}
                    >
                    {"Update"}
                  </Button>*/}
                  {/*<Button
                      variant="contained"
                      //disabled={disabl_}
                      color="secondary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      // onClick={(e) => user_delet_pet(props.pet.id)}
                      className={classes.button}
                    >
                    {"cancel"}
                    </Button>
                </Grid> 
            </Grid>
           </Grid>
          </AccordionDetails>
        </Accordion>*/}
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
  availability: state.forms.availability_data,
  progress: state.services.progress,
  pets: state.pets.pets,
  admin_pets: state.pets.pet_types,
  breeds_types: state.pets.breeds,
  breeds_cats: state.pets.breeds_cats,
});

export default connect(mapStateToProps, {
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  clear_available,
  deinit_fetch,
  user_update_pet,
  get_bookings,
  get_availability_data
})(DashboardViewSingleBooking);
