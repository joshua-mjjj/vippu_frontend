import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Spinner from "../assets/Spinner.gif";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import {  Redirect } from 'react-router-dom';
import { create_availability_instance, get_availability, clear_aval} from "../actions/form.js";

const useStyles = makeStyles((theme) => ({
 button: {
    marginLeft: theme.spacing(2),
  },
}));

function Createappointment(props) {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.forms.isLoading);

  const handleCreate = (e) => {
      // console.log(props.startime)
      // console.log(props.endtime)
      // console.log(props.startdate)
      // console.log(props.enddate)
      // console.log(props.notes)
  	const user_id = props.user.id;
    const recurring = true
    const interval = "daily"
    let notes;
    if(props.notes === ""){
      notes = null
    }else {
      notes = props.notes
    }

  	if(user_id && props.startime && props.endtime && props.startdate && props.enddate){
  	  props.create_availability_instance(props.startdate, props.enddate, props.startime, props.endtime, notes, user_id, recurring, interval)
      props.clear_aval()
      props.reload()
      props.get_availability()
      props.get_availability()
    }
  }

  React.useEffect(() => {
    if(props.form.refresh === true) {
      const route = "availability"
      localStorage.setItem("routing_to", route);
      window.location.href = "/dashboard"
    }    
  }, [props.form.refresh]);

   React.useEffect(() => {
    if(props.form.isLoading === true){
      props.get_availability()
    }
  }, [props.form.isLoading]);

  return (
  	<div>
	    <Button
	      variant="outlined"
	      color="primary"
	      className={classes.button}
	      onClick={handleCreate}
	    >
	      {'Create'}
	    </Button>

	     <Box
	        color="white"
	        p={2}
	        position="absolute"
	        top={155}
	        left="80%"
	        zIndex="tooltip"
	      >
	        {isLoading && (
	          <img src={Spinner} alt="" height="40px" width="40px" />
	        )}
	      </Box>{" "}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  create_availability_instance, get_availability, clear_aval
})(Createappointment);