import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Spinner from "../assets/Spinner.gif";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import moment from 'moment';

import { edit_availability_instance, get_availability, clear_aval} from "../actions/form.js";

const useStyles = makeStyles((theme) => ({
 button: {
    marginLeft: theme.spacing(2),
  },
}));

function Editappointment(props) {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.forms.isLoading);

  const handleCreate = (e) => {

    // console.log(props.start)
    // console.log(props.startime)
    // console.log(props.end)
    // console.log(props.endtime)
    // console.log(props.start_day_init)
    // console.log(props.startDate)
    // console.log(props.end_day_init)
    // console.log(props.endDate)
    // console.log(props.note)
    // console.log(props.notes)

  	const user_id = props.user.id;

  	var set_start;
  	var set_end;
  	var set_start_day;
  	var set_end_day;
  	var set_notes;

  	function splitText(value, index) {
  	  if (value.length < index) {return value;} 
  	  return [value.substring(0, index)].concat(splitText(value.substring(index), index));
  	}

  	if(props.startime === ""){
      let dt = props.start;
      const formatted = `${dt.getHours()}:${dt.getMinutes()}`

      var set_format = {
        'Date/Time': ` 2018-09-30 ${formatted}` // Interested in the time
      }
      set_start = moment(set_format['Date/Time']).format("HH:mm:ss");

  	}else{
  		set_start = props.startime  // Assuming that it is in the right format
  	}

  	if(props.endtime === ""){
      let dt = props.end;
      const formatted_ = `${dt.getHours()}:${dt.getMinutes()}`

      var set_format = {
        'Date/Time': ` 2018-09-30 ${formatted_}` // Interested in the time
      }
      set_end = moment(set_format['Date/Time']).format("HH:mm:ss");
  	}else{
  		set_end = props.endtime
  	}

  	if(props.startDate === ""){
  		set_start_day = props.start_day_init
  		var date = new Date(set_start_day);
  		const year = date.getFullYear()
  		const month = date.getMonth()+1
  		const day = date.getDate() 
        set_start_day = (year + '-' + month + '-' + day)
  	}else{
  		set_start_day = props.startDate
  		var date = new Date(set_start_day);
  		const year = date.getFullYear()
  		const month = date.getMonth()+1
  		const day = date.getDate() 
        set_start_day = (year + '-' + month + '-' + day)
  	}

  	if(props.endDate === ""){
  		set_end_day = props.end_day_init
  		var date = new Date(set_end_day);
  		const year = date.getFullYear()
  		const month = date.getMonth()+1
  		const day = date.getDate() 
        set_end_day = (year + '-' + month + '-' + day)
  	}else{
  		set_end_day = props.endDate
  		var date = new Date(set_end_day);
  		const year = date.getFullYear()
  		const month = date.getMonth()+1
  		const day = date.getDate() 
        set_end_day = (year + '-' + month + '-' + day)
  	}

  	if(props.notes === ""){
  		set_notes = props.note
  	}else{
  		set_notes = props.notes
  	}
    
    // console.log(set_start)
    // console.log(set_end)
    // console.log(set_start_day)
    // console.log(set_end_day)
    // console.log(set_notes)

    const appointment_id = props.id;

  	if(user_id && set_start && set_end && set_start_day && set_end_day){
  	  const recurring = true
      const interval = "daily"
  	  props.edit_availability_instance(set_start_day, set_end_day, set_start, set_end, set_notes, user_id, appointment_id, recurring, interval)
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
	      {'Edit'}
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
  form: state.forms,
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  edit_availability_instance, get_availability, clear_aval
})(Editappointment);