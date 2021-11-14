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
import DashboardSinglePetAccordian from './DashboardSinglePetAccordian'
import { 
  getPetData, 
  user_delete_pet,
  //clear_state,
  init_fetch,
  deinit_fetch,
  get_breeds
 } from "../actions/form.js";

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
}));

function DashboardViewPetSection(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const pets = props.pets;
  pets.sort((a, b) => (a.id > b.id) ? 1 : -1)
  const len = pets.length;

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

   React.useEffect(() => {
    const id = props.user.id;
    props.getPetData(id);
  }, []);

   const fetch_again = (e) => {
     const usid = props.user.id;
      props.getPetData(usid);
      props.getPetData(usid);
  }
   React.useEffect(() => {
    props.get_breeds();
  }, []);

   React.useEffect(() => {
    if(props.fetch === true) {
      const usid = props.user.id;
      props.getPetData(usid);
      props.deinit_fetch();
    }   
  }, [props.fetch]);

  //  React.useEffect(() => {
  
  //   if(props.breeds_cats !== null && props.pet.breed !== null){
  //     console.log(props.pet.breed)
  //     const get_breed = props.breeds_cats.filter((pet) => pet === props.pet.breed);
  //     console.log(get_breed.length)
  //     console.log(get_breed)

  //     if(get_breed.length === 0){
  //       setOwner_name_cat(true)
  //     }
  //     // if(get_breed.length >= 1) {
  //     //   setOwner_name_cat(false)
  //     // }
  //   }
  //     // console.log(props.pet.breed)
  //     // console.log(props.pet.pet_type)
  // }, [props.breeds_cats, props.pet.breed]);

  return (
    <div className={classes.parentDiv}>
      {pets.slice(0, len).map((pet, i) => (
        <div>
          {
            pet.pet_type === 2 ? 
            (
              <div>
                {
                  props.breeds_cats !== null ? 
                  (<div>
                  {
                    (props.breeds_cats.filter((pet_) => pet_ === pet.breed)).length === 0 ? 
                    (<DashboardSinglePetAccordian pet={pet} key={i} api_name={false}  fetch_again={fetch_again}/>): 
                    (<DashboardSinglePetAccordian pet={pet} key={i} api_name={true} fetch_again={fetch_again}/>)
                  }</div>
                  )
                  :("")
                }
              </div>
            ) 
            : ("")
          }
          {
            pet.pet_type === 1 ? 
            (
             <div>
               {
                  props.breeds_types !== null ? 
                  (<div>
                  {
                    (props.breeds_types.filter((pet_) => pet_ === pet.breed)).length === 0 ? 
                    (<DashboardSinglePetAccordian pet={pet} key={i} api_name={false}  fetch_again={fetch_again}/>): 
                    (<DashboardSinglePetAccordian pet={pet} key={i} api_name={true} fetch_again={fetch_again}/>)
                  }</div>
                  )
                  :("")
                }
              </div>
            ) : ("")
          }
          
        </div>
      ))}
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
  get_breeds
})(DashboardViewPetSection);
