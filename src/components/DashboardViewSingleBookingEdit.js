import React , { useState } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import PetCardDetailsPet from "./PetCardDetailsPet";
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import { Alert, AlertTitle } from '@material-ui/lab';
import Popper from '@material-ui/core/Popper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AppointmentsBook from "../views/AppointmentsBook";
import { get_availability_data, clear_aval, getPetData, clear_error, clear_available } from "../actions/form.js";
import { update_booking } from "../actions/booking.js";
import Spinner from '../assets/home_load.gif';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { FormGroup } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const theme = createMuiTheme({
  overrides: {
    MuiPickersClock: {
      pin: {
        backgroundColor: '#3a9643',
      },
    },
    MuiButton: {
      textPrimary: {
        color: '#3a9643'
      }
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: '#3a9643',
        thumb: {
          backgroundColor: '#3a9643',
        },
        "& > div": {
          backgroundColor: '#3a9643',
          border: '14px solid #3a9643'
        }
      },
      thumb: {
        backgroundColor: '#3a9643',
      },
      noPoint: {
        backgroundColor: '#3a9643',
      }
    },
    MuiFormHelperText: {
      root: {
        position: 'apsolute'
      }
    },
    MuiPickersToolbar: {
      toolbar: {
          backgroundColor: '#3a9643',
      },
    },
  }
});


const useStyles = makeStyles((theme) => ({

   root: {
    paddingBottom: '10px',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '73px',
    background: "#D4F2F2",

  },
  page: {
    padding: '76px 0px 0px 0px',
    width: '100%',
    background: 'white',
    minHeight: '400px',
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down("680")]: {
      padding: '50px 0px 0px 0px',
      maxWidth: '400px',
      margin: '0 auto'
    },
  },
  custom: {
    margin: '0',
    padding: '18px 16px 14px',
    maxWidth: '210px',
    minHeight: '56px',
    border: '1px solid rgba(25, 25, 25, 0.32)',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down("680")]: {
      marginBottom: '10px'
    },
    "& > .MuiInput-underline": {
      "&:before": {
        display: 'none'
      },
      "&:after": {
        display: 'none'
      }
    },
    "& > .MuiPickersToolbar": {
      toolbar: 'none'
    },
  },
  toolbar: {
    backgroundColor: "red",
    
  },
  // pageTitle: {
  //   marginBottom: '68px',
  //   fontFamily: 'Dosis',
  //   fontStyle: 'normal',
  //   fontWeight: '600',
  //   fontSize: '36px',
  //   lineHeight: '36px',
  //   color: '#222222',
  //   [theme.breakpoints.down("680")]: {
  //     marginBottom: '40px',
  //     fontSize: '28px',
  //     lineHeight: '28px',
  //   },
  // },
  contant: {
    marginBottom: '48px',
    textAlign: 'center',
    padding: '0 52px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down("680")]: {
      padding: '0 15px'
    },
  },
  input: {
  display:'none'
  },
  inputLabel: {
    padding: '10px 22px 10px 16px',
    display: 'flex',
    alignItems: 'center',
    width: '495px',
    height: '93px',
    background: '#E7E7E7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  inputText: {
    marginLeft: '34px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    order: '1'
  },
  petName: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '29px',
    lineHeight: '36px',
    color: '#156981',
  },
  petType: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#68AC82'
  },
  circle: {
    marginLeft: 'auto',
    width: '32px',
    height: '32px',
    background: '#FFFFFF',
    border: '1px solid #4F4F4F',
    borderRadius: '50%',
    position: 'relative',
    display: 'block',
    order: '2',
    "&:before": {
      content: '""',
      position: 'absolute',
      width: '18px',
      height: '7px',
      top: '8px',
      right: '4px',
      display: 'block',
    }
  },
  formgroup: {
    marginBottom: '63px',
    [theme.breakpoints.down("680")]: {
      marginBottom: '40px'
    },
  },
  grid: {
    marginBottom: '43px',
    [theme.breakpoints.down("680")]: {
      marginBottom: '20px'
    },
  },
  buttonForm: {
    marginTop: '36px',
    marginBottom: '38px',
    display: 'block',
    width: '100%',
    padding: '16.5px 0',
    background: '#fff',
    borderRadius: '10px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '24px',
    color: '#FFFFFF',
    margin: '0 auto',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #BDBDBD',
    borderRadius: '10px',
    textAlign: 'center',
    letterSpacing: '0.15px',
    color: '#156981',
    transition: 'background 0.4s',
    [theme.breakpoints.down("680")]: {
      marginTop: '20px',
      marginBottom: '40px',
    },
    "&:hover": {
      backgroundColor: "#cce5e7"
    }
  },
  submit: {
    display: 'block',
    height: '39px',
    width: '141px',
    background: '#156981',
    borderRadius: '10px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '21px',
    lineHeight: '27px',
    color: '#FFFFFF',
    margin: '0 auto',
    marginTop: '36px',
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #BDBDBD',
    borderRadius: '10px',
    textAlign: 'center',
    letterSpacing: '0.15px',
    color: '#fff',
    transition: 'background 0.4s',
    "&:hover": {
      backgroundColor: "#52a3bb"
    }
  },
  titleBlock: {
    marginBottom: '30px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '30px',
    lineHeight: '30px',
    color: '#000000',
    textAlign: 'left',
    letterSpacing: '0.15px',
    [theme.breakpoints.down("680")]: {
      marginBottom: '20px',
      fontSize: '24px',
      lineHeight: '24px',
    },
  },
  textarea: {
    width: '100%',
    height: '161px',
    padding: '8px 22px 8px 14px',
    background: 'rgba(51, 51, 51, 0.06)',
    borderRadius: '4px 4px 0px 0px',
    border: 'none',
    borderBottom: 'solid 2px #00BCD4',
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#4F4F4F',
    resize: 'none',
    outline: 'none'
  },
  form: {
    width: '100%'
  },
  imgWrap: {
    maxWidth: '73px',
    maxHeight: '73px',
    order:'0',
    "& > img": {
      width: '100%'
    },
    [theme.breakpoints.down("680")]: {
      maxWidth: '62px',
      maxHeight: '62px',
    },
  }, 
	title_:{
	    maxWidth: '624px',
	    marginBottom: '3px',
	    alignItems: 'center',
	    fontWeight: '350',
	    fontSize: '20px',
	    // lineHeight: '58px',
	    color: '#23286B',
	    [theme.breakpoints.down("1210")]: {
	      maxWidth: '506px',
	    },
	    [theme.breakpoints.down("700")]: {
	      maxWidth: '327px',
	      fontSize: '26px',
	      lineHeight: '32.86px',
	    },
	pageTitle:{
	    maxWidth: '624px',
	    marginBottom: '2px',
	    // alignItems: 'center',
	    fontWeight: '200',
	    fontSize: '22px',
	    // lineHeight: '58px',
	    color: '#23286B',
	  },
  },
  titleBlock: {
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '25px',
    color: 'black',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    marginLeft: '20px',
    fontSize: '18px',
    color: '#23286B',
  },
 formLabel:{
      fontSize: '13px',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
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
 underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
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
  button_:{
    // alignItems: 'center',
    color: '#FF3D00',
    // float: 'left',
    justifyContent: 'center',
    backgroundColor: '#fff!important',
    border: '1.5px solid #FF3D00',
    borderRadius: '50px',
  },
    formLabel_:{
      fontSize: '13px',
      color: 'red',
      fontWeight: '600',
      marginBottom: theme.spacing(1),
  },
  column:{
    marginBottom: '20px',
  }
},
}));

function DashboardViewSingleBookingEdit(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [update, setUpated] = React.useState(false);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClose_ = () => {
    setOpen(false);
    setTimeout(() => {
       props.clear_available()
    }, 1000)
    if(update === true){
      window.location.href = "/dashboard"
    }
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

    // Availability
    const [_id, setID] = useState(props.booking.service_provider.id);
    React.useEffect(() => {
    	// console.log(_id)
        // props.get_availability_data(_id)
        // console.log(props.booking)
    }, []);

    // React.useEffect(() => {
    // 	console.log(_id)
    //     props.get_availability_data(_id)
    // }, [props.booking.service_provider.id]);

    const [data, setData] = useState("");
    const [restrict_data, setRestrictData] = useState("");
    const fetching = () => {
       // console.log("Refreshing secondary....")
        props.clear_aval()
        props.get_availability_data(_id)
        props.get_availability_data(_id)
    };

    const data_ = props.data

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
          setData(list)


          // for restricting booking times
          const list_ = []
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

            const object = {
              title: notes,
              startDate : dateObject_start,
              endDate   : dateObject_end,
              start_time: start_time,
              end_time: end_time,
              id        : id,
              location: "Dummy",
            }
            list_.push(object)
         })
         // console.log(list_)
         setRestrictData(list_)

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

      var object = {
          'Date/Time': `${props.booking.start_date} ${props.booking.start_time}`  
        }
      const start = moment(object['Date/Time']);

      var object_2 = {
          'Date/Time': `${props.booking.end_date} ${props.booking.end_time}`  
        }
      const end = moment(object_2['Date/Time']);

      const [booking_id, setBook_id] = useState(props.booking.id);
      const [selectedDate, setSelectedDate] = useState(new Date(props.booking.start_date));
      const [start_date_edit, setStart_date_edit] = useState(null);

      const [selectedDate_, setSelectedDate_] = useState(new Date(props.booking.end_date));
      const [end_date_edit, setEnd_date_edit] = useState(null);

      const [selectedTime, setSelectedTime] = useState(new Date(start));
      const [start_time_edit, setStart_time_edit] = useState(null);

      const [selectedTime_, setSelectedTime_] = useState(new Date(end));
      const [end_time_edit, setEnd_time_edit] = useState(null);

      const [message, setMessage] = useState(props.booking.notes);

      const [startDateError, setStartDateError] = React.useState(false);
      const [EndDateError, setEndDateError] = React.useState(false);
      const [notcorrectdates, setNotCorrectDates] = React.useState(false);

      const [changed, setChanged] = React.useState(false);

    
      const handleSubmit_update = () => {

        function convertTo12Hour(oldFormatTime) {
            // console.log("oldFormatTime: " + oldFormatTime);
            var oldFormatTimeArray = oldFormatTime.split(":");

            var HH = parseInt(oldFormatTimeArray[0]);
            var min = oldFormatTimeArray[1];

            var AMPM = HH >= 12 ? "PM" : "AM";
            var hours;
            if(HH == 0){
              hours = HH + 12;
            } else if (HH > 12) {
              hours = HH - 12;
            } else {
              hours = HH;
            }
            var newFormatTime = hours + ":" + min + " " + AMPM;
            return newFormatTime;
        }

        if(start_date_edit === null){
          console.log(selectedDate)
          let dt_a = new Date(selectedDate);
          let conDtObj_a = `${dt_a.getFullYear()}-${dt_a.getMonth()+1}-${dt_a.getDate()}`
          setStart_date_edit(conDtObj_a)
          console.log(start_date_edit)
        }
        if(end_date_edit === null){
          console.log(selectedDate_)
          let dt_b = new Date(selectedDate_);
          let conDtObj_b = `${dt_b.getFullYear()}-${dt_b.getMonth()+1}-${dt_b.getDate()}`
          setEnd_date_edit(conDtObj_b)
          console.log(end_date_edit)
        }
        if(start_time_edit === null){
          let dt_c = new Date(selectedTime);
          let conDtObj_c = `${dt_c.getHours()}:${dt_c.getMinutes()}`
          setStart_time_edit(convertTo12Hour(conDtObj_c))
          console.log(start_time_edit)
        }
        if(end_time_edit === null){
          let dt_d = new Date(selectedTime_);
          let conDtObj_d = `${dt_d.getHours()}:${dt_d.getMinutes()}`
          setEnd_time_edit(convertTo12Hour(conDtObj_d))
          console.log(end_time_edit)
        }
        console.log(start_date_edit)
        console.log(end_date_edit)
        console.log(start_time_edit)
        console.log(end_time_edit)
        console.log(message)
        console.log(data_)
        console.log(restrict_data)

        if(restrict_data && changed === true && start_date_edit !== null && end_date_edit !== null && start_time_edit !== null && end_time_edit !== null){
        // check time and dates.
        let dt = new Date(selectedDate);
        let date = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()} `
        var obj = {
              'Date/Time': `${date} ${start_time_edit}`
            }
        const dat = moment(obj['Date/Time']).toDate();
        console.log(dat)

        // const date = start_date_edit
        console.log(date)
        const array = []
            restrict_data.filter((availability) => {
                const obj = {
                  'start' :     (new Date(availability.startDate)),
                  'end'   :     (new Date(availability.endDate)),
                  'time_start': (availability.start_time),
                  'time_end'  : (availability.end_time),
                }
                array.push(obj)
             })
         var today = dat
         var bool = null;
         var bool_ = null;
        array.filter((instance) => {
            var obj = {
              'Date/Time': `2018-09-30 ${start_time_edit}`
            }
            const dat = moment(obj['Date/Time']).format("HH:mm:ss");
            if ((today >= instance.start && today <= instance.end) && (dat >= instance.time_start && dat <= instance.time_end)){
              console.log('in between');
              bool = true 
            }else {
              console.log('outside');
            }
         })
        if(bool === true){
          setStartDateError(false)
        }else {
          setStartDateError(true)
        }

        const date_ = end_date_edit
        const end_time = end_time_edit

        let dt2 = new Date(selectedDate_);
        let date2 = `${dt2.getFullYear()}-${dt2.getMonth()+1}-${dt2.getDate()} `
        var obj = {
              'Date/Time': `${date2} ${end_time_edit}`
            }
        const dat2 = moment(obj['Date/Time']).toDate();
        console.log(dat2)
        const array_ = []
            restrict_data.filter((availability) => {
                const obj = {
                  'start' :  (new Date(availability.startDate)),
                  'end' :    (new Date(availability.endDate)),
                  'time_start': (availability.start_time),
                  'time_end'  : (availability.end_time),
                }
                array_.push(obj)
             })
         var today_ = dat2
        array_.filter((instance) => {

            var obj_ = {
              'Date/Time': `2018-09-30 ${end_time_edit}`  // A little bit of hard coding but we are targeting the time not the date...
            }
            const dat_ = moment(obj_['Date/Time']).format("HH:mm:ss");
            console.log(dat_)

            if ((today_ >= instance.start && today_ <= instance.end) && (dat_ >= instance.time_start && dat_ <= instance.time_end)){
              console.log('in between');
              bool_ = true 
            }else {
              console.log('outside');
            }
         })
        if(bool_ === true){
          setEndDateError(false)
        }else {
          setEndDateError(true)
        }

         if(bool_ === true && bool === true){
          setNotCorrectDates(false)

          const today = new Date()
          const first = dat
          const second = dat2
          console.log(today)
          console.log(first)
          console.log(second)

          if(today <= first && today <= second){
            console.log("Dates are correct")
            const provider = props.booking.service_provider.first_name
              setNotCorrectDates(false)
              props.update_booking(start_time_edit, start_date_edit, end_time_edit, end_date_edit, message, provider, booking_id)
              setUpated(true)
             //  setSubmitted(true)
             // clearState()
          }else{
            setNotCorrectDates(true)
          }
        }
      }else return

    }

    
      const handleDateChange = (date) => {
        setSelectedDate(date)

        let dt = new Date(date);

        let conDtObj = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
        setStart_date_edit(conDtObj)
        setChanged(true)
      };

      const handleDateChange_ = (date) => {
        setSelectedDate_(date)

        let dt = new Date(date);

        let conDtObj = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
        setEnd_date_edit(conDtObj)
        setChanged(true)
      };

    const handleTimeChange = (date) => {
        function convertTo12Hour(oldFormatTime) {
            // console.log("oldFormatTime: " + oldFormatTime);
            var oldFormatTimeArray = oldFormatTime.split(":");

            var HH = parseInt(oldFormatTimeArray[0]);
            var min = oldFormatTimeArray[1];

            var AMPM = HH >= 12 ? "PM" : "AM";
            var hours;
            if(HH == 0){
              hours = HH + 12;
            } else if (HH > 12) {
              hours = HH - 12;
            } else {
              hours = HH;
            }
            var newFormatTime = hours + ":" + min + " " + AMPM;
            return newFormatTime;
        }
        setSelectedTime(date)

        let dt = new Date(date);

        let conDtObj = `${dt.getHours()}:${dt.getMinutes()}`
        // console.log(conDtObj)
        setStart_time_edit(convertTo12Hour(conDtObj))
        setChanged(true)
      }

    const handleTimeChange_ = (date) => {
        function convertTo12Hour(oldFormatTime) {
            // console.log("oldFormatTime: " + oldFormatTime);
            var oldFormatTimeArray = oldFormatTime.split(":");

            var HH = parseInt(oldFormatTimeArray[0]);
            var min = oldFormatTimeArray[1];

            var AMPM = HH >= 12 ? "PM" : "AM";
            var hours;
            if(HH == 0){
              hours = HH + 12;
            } else if (HH > 12) {
              hours = HH - 12;
            } else {
              hours = HH;
            }
            var newFormatTime = hours + ":" + min + " " + AMPM;
            return newFormatTime;
        }

        setSelectedTime_(date)

        let dt = new Date(date);

        let conDtObj = `${dt.getHours()}:${dt.getMinutes()}`
        // console.log(conDtObj)
        setEnd_time_edit(convertTo12Hour(conDtObj))
        setChanged(true)
      }
     
    let alert;
    if (props.messages.notify_timeout !== null) {
      alert = (
        <div className="alerts">{props.messages.notify_timeout}</div>
      )
    }

  return (
    <div>
      <Button 
      	size="small" 
      	onClick={handleClickOpen('body')} 
      	variant="outlined" 
      	color="primary">
         <span onClick={() => {
      		console.log(props.booking.service_provider.id)
      		setID(props.booking.service_provider.id)
      		props.refetch()
      	  }}> Update </span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Update your booking</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>
            
            <div className={classes.reviews}>
            	<div className={classes.title_}>Availability</div>
            	<div className={classes.pageTitle}>This calendar shows the dates when {props.booking.service_provider.first_name} is available.</div>
                {
                  data_ ? 
                  (
                    <div className={classes.calendar}>
                      <AppointmentsBook data={data_} current={current} fetch={fetching}/> 
                    </div>
                  ) : 
                  (<div>
                  	<span>Loading {props.booking.service_provider.first_name}'s calendar.</span>
  						        <div style={{
                            display: "flex",
                            minHeight: '2vh',
                            alignItems:'center',
                            justifyContent:'center',
                      }}>
                       <div style={{
                           alignItems:'center',
                           justifyContent:'center'
                        }}>
                          <img src={Spinner} alt="" height="50px" width="50px" /> 
                       </div>
                      </div>
                  </div>)
                }

            <span className={classes.titleBlock}>Services</span>
            <div className={classes.column}>
              <span className={classes.heading}><img src={props.booking.service.service.icon} height="17px" width="17px" style={{ marginRight: '10px' }} alt=""/> {props.booking.service.service.name} </span>
            </div>
            <span className={classes.titleBlock}>Pet (s) </span>
              <div className={classes.column}>
              <div style={{ marginLeft : '20px', marginBottom:'20px' }} >
                 {props.booking.pets.map((pet, i) => (
                   <PetCardDetailsPet pet={pet} />
                 ))}
              </div>
              </div>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <span className={classes.titleBlock}>Update your booking</span>
                 <Grid style={{ marginLeft : '20px' }} container spacing={2}>
                    <Grid item sm={5} xs={5}>
                     <FormLabel component="label" className={classes.formLabel}>Start time</FormLabel>
                          <ThemeProvider theme={theme}>
                          <KeyboardTimePicker
                              keyboardIcon={<AccessAlarmIcon/>}
                              className={classes.line}
                              InputProps={{ classes: { underline: classes.underline } }}
                              label=""
                              placeholder="Start time AM"
                              mask="__:__ _M"
                              value={selectedTime}
                              keyboardIcon={<AccessAlarmIcon/>}
                              onChange={date => handleTimeChange(date)}
                            />
                          </ThemeProvider>
                         {
                            startDateError === true ? (<FormLabel component="label" 
                              style={{ 
                                fontSize: '13px',
                                color: 'red',
                                fontWeight: '600',
                                marginTop: theme.spacing(2)
                               }}>
                                 Please select a date or time when {props.booking.service_provider.first_name} is available</FormLabel>) : (null)
                          }
                    </Grid>
                    <Grid item sm={5} xs={5}>
                     <FormLabel component="label" className={classes.formLabel}>Start date</FormLabel>
                       <ThemeProvider theme={theme}>
                        <KeyboardDatePicker
                              className={classes.line}
                              InputProps={{ classes: { underline: classes.underline } }}
                              placeholder="08:00 AM"
                              id="date-picker-dialog"
                              format="MM/dd/yyyy"
                              value={selectedDate}
                              //  defaultValue={props.booking.start_date}
                              onChange={handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                        </ThemeProvider>
                    </Grid>
                     <Grid item sm={5} xs={12}>
                     <FormLabel component="label" className={classes.formLabel}>End time</FormLabel>
                       <ThemeProvider theme={theme}>
                            <KeyboardTimePicker
                              keyboardIcon={<AccessAlarmIcon/>}
                              className={classes.line}
                              InputProps={{ classes: { underline: classes.underline } }}
                              label=""
                              // ampm={false}
                              //  defaultValue={props.booking.end_time}
                              placeholder="Start time AM"
                              mask="__:__ _M"
                              value={selectedTime_}
                              keyboardIcon={<AccessAlarmIcon/>}
                              onChange={date => handleTimeChange_(date)}
                            />
                          </ThemeProvider>
                          {
                            EndDateError === true ? (<FormLabel component="label" 
                              style={{ 
                                fontSize: '13px',
                                color: 'red',
                                fontWeight: '600',
                                marginTop: theme.spacing(2)}}>
                                 Please select a date or time when {props.booking.service_provider.first_name} is available</FormLabel>) : (null)
                          }
                          < br/>
                          {
                            notcorrectdates  === true ? (
                              <div>
                              <FormLabel component="label"  
                              style={{
                               // marginLeft : '40px',
                                fontSize: '13px',
                                color: 'red',
                                fontWeight: '600',
                                marginTop: theme.spacing(2)}}
                              >You can't make a booking with past dates.</FormLabel>
                              </div>
                              ) : (null)
                           }
                           < br/>
                    </Grid>
                     <Grid item sm={5} xs={12}>
                     <FormLabel component="label" className={classes.formLabel}>End date</FormLabel>
                       <KeyboardDatePicker
                          className={classes.line}
                          InputProps={{ classes: { underline: classes.underline } }}
                          placeholder="08:00 AM"
                          id="date-picker-dialog"
                          format="MM/dd/yyyy"
                          value={selectedDate_}
                          // defaultValue={props.booking.start_time}
                          //  defaultValue={props.booking.end_date}
                          onChange={handleDateChange_}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                          />
                    </Grid>

                    <div className={classes.column_message}>
                      <span style={{     
                            fontSize: '18px',
                            fontFamily: 'Dosis',
                            fontWeight: 'bold',
                            color: '#23286D' }}>Message</span>
                        <br />
                         <TextField
                            id="standard-full-width"
                            // label="Message"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                           //  helperText="Full width!"
                            defaultValue={props.booking.notes}
                            onChange={(e) => {
                              setChanged(true)
                              setMessage(e.target.value)}
                            }
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                    </div>

                    <Grid item xs={12}>
                       <Button
                          variant="outlined"
                          //disabled={disabl_}
                          style={{
                            maxWidth: '130px', 
                            maxHeight: '35px', 
                            minWidth: '130px', 
                            minHeight: '35px',
                            color: '#FF3D00',
                            justifyContent: 'center',
                            backgroundColor: '#fff!important',
                            border: '1.5px solid #FF3D00',
                            borderRadius: '50px',

                        }}
                          onClick={handleSubmit_update}
                        >
                        {"Update"} {
                                props.book_data.loading_update === true ? (
                                  <div style={{
                                       marginLeft:'8px',
                                       marginTop: '10px'
                                }}>
                                  <img src={Spinner} alt="" height="25px" width="25px" /> 
                               </div>) : null
                              }
                      </Button>

                       {
                         props.messages.notify_timeout ? 
                          (
                          <Grid item md={8} sm={8} xs={8}>
                              <Alert
                                severity="info"
                                style={{ marginTop: '20px' }}
                                icon={false}
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
                          ): (null)
                      }  

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
               </MuiPickersUtilsProvider>

            </div>

			

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
             onClick={handleClose_} 
             variant="outlined"
              style={{
                  color: '#FF3D00',
                  justifyContent: 'center',
                  backgroundColor: '#fff!important',
                  border: '1.5px solid #FF3D00',
                  borderRadius: '50px',

              }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  pets: state.pets.pets,
  form: state.forms,
  book_data: state.booking,
  messages: state.messages,
  availability: state.forms.availability_data,
  details: state.results.petproviderdetails,

});

export default connect(mapStateToProps, { 
	get_availability_data, 
	clear_aval, 
	getPetData, 
	clear_error,
	clear_available,
  update_booking
})(DashboardViewSingleBookingEdit);

