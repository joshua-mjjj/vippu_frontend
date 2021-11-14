import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
// import TextField from '@material-ui/core/TextField';
// import Button from "@mui/material/Button";
// import Spinner from '../assets/home_load.gif';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';

import AutocompleteSections from './AutocompleteSections';
import AutocompleteLocations from './AutocompleteLocations';
import Alert from './Alert';
import Spinner from "../../../components/Spinner";
 

import { battallion_two_create, clear_messages, clear_errors } from '../../../actions/battallions_create';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(2),
    }
  },
  formLabel:{
      fontSize: '15px',
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Dosis',
      // margin: theme.spacing(4),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
   // margin: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall_:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(0),
    },
    height: 45
    // padding: theme.spacing(1)
    // marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  inputSmall_date:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1)
   // margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: "56px",
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

function Content_Newentry(props) {
  const classes = useStyles();

  // Implementaion code 

  const [first_name, setFirst_name] = React.useState(null);
  const [last_name, setLast_name] = React.useState(null);
  const [nin, setNin] = React.useState(null);
  const [ipps, setIpps] = React.useState(null);
  const [file_number, setFile_number] = React.useState(null);
  const [account_number, setAccount_number] = React.useState(null);
  const [bank, setBank] = React.useState(null);
  const [branch, setBranch] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  const [sex, setSex] = React.useState(null);

  const [department, setDepartment] = React.useState(null);
  const [section, setSection] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  const [education_level, setEducation_level] = React.useState(null);
  const [education_level_other, setOtherEducation_level] = React.useState(null);
  const [other_education_level, setEducation_level_bool] = React.useState(true);

  const [armed, setArmed] = React.useState(null);
  const [rank, setRank] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [shift, setShift] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [date_pickers_enabled, setEnable_date_pickers] = React.useState(true);

  const [date_of_enlistment, setDate_of_enlistment] = React.useState(new Date());
  const [date_of_enlistment_data, setDate_of_enlistment_data] = React.useState(null);

  const [date_of_transfer, setDate_of_transfer] = React.useState(new Date());
  const [date_of_transfer_data, setDate_of_transfer_data] = React.useState(null);

  const [date_of_promotion, setDate_of_promotion] = React.useState(new Date());
  const [date_of_promotion_data, setDate_of_promotion_data] = React.useState(null);

  const [date_of_birth, setDate_of_birth] = React.useState(new Date());
  const [date_of_birth_data, setDate_of_birth_data] = React.useState(null);

  const [on_leave, setOnLeave] = React.useState(null);
  const [leave_start, setLeave_start] = React.useState(new Date());
  const [leave_start_data, setLeave_start_data] = React.useState(null);

  const [leave_end, setLeave_end] = React.useState(new Date());
  const [leave_end_data, setLeave_end_data] = React.useState(null);

  const [show_alert, setShow_alert] = React.useState(false);

  // eslint-disable-next-line
  const [battallion, setBattallion] = React.useState("Battalion 2");  // We already know this is Battallion 2 form

  const handle_Department_Change = (e) => {
    setDepartment(e.target.value)
  }

  const handle_Rank_Change = (e) => {
    setRank(e.target.value)
  }

  const handle_Title_Change = (e) => {
    setTitle(e.target.value)
  }

  const handle_Leave_Change = (e) => {
    if(e.target.value === "not_no_leave"){
      setEnable_date_pickers(true)
      setOnLeave(e.target.value)
    }else{
      setEnable_date_pickers(false)
      setOnLeave(e.target.value)
    }
  }

  const handle_Shift_Change = (e) => {
    setShift(e.target.value)
  }

  const handle_Status_Change = (e) => {
    setStatus(e.target.value)
  }

  const handle_education_level_change = (e) => {
    if(e.target.value === "other"){
      setEducation_level_bool(false)
      setEducation_level(e.target.value)
    }else{
       setEducation_level_bool(true)
       setEducation_level(e.target.value)
    }
  }
  
  const handle_other_education_level = (e) => {
    setOtherEducation_level(e.target.value)
  }

  const handle_date_of_enlistment_Change = (e) => {
    // console.log(e)
    setDate_of_enlistment(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setDate_of_enlistment_data(date_object)
  }

  const handle_date_of_transfer = (e) => {
    // console.log(e)
    setDate_of_transfer(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setDate_of_transfer_data(date_object)
  }

  const handle_date_of_promotion = (e) => {
    // console.log(e)
    setDate_of_promotion(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setDate_of_promotion_data(date_object)
  }

  const handle_date_of_birth = (e) => {
    // console.log(e)
    setDate_of_birth(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setDate_of_birth_data(date_object)
  }

  const handle_leave_start = (e) => {
    // console.log(e)
    setLeave_start(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setLeave_start_data(date_object)
  }

  const handle_leave_end = (e) => {
    // console.log(e)
    setLeave_end(e)
    let dt = new Date(e);
    let date_object = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
    console.log(date_object)
    setLeave_end_data(date_object)
  }

  const get_section_value = (section_value) => {
    console.log(section_value)
    setSection(section_value)
  }

  const get_location_value = (location_value) => {
    console.log(location_value)
    setLocation(location_value)
  }

  const handle_submit_data = (e) => {
    const current_date = new Date()

    let date_of_enlistment_sub
    if(date_of_enlistment_data === null){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      date_of_enlistment_sub = date_object
    }else {
      date_of_enlistment_sub = date_of_enlistment_data
    }

    let date_of_transfer_sub
    if(date_of_transfer_data === null){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      date_of_transfer_sub = date_object
    }else{
      date_of_transfer_sub = date_of_transfer_data
    }

    let date_of_promotion_sub
    if(date_of_promotion_data === null){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      date_of_promotion_sub = date_object
    }else{
      date_of_promotion_sub = date_of_promotion_data
    }

    let date_of_birth_sub
    if(date_of_birth_data === null){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      date_of_birth_sub = date_object
    }else{
      date_of_birth_sub = date_of_birth_data
    }

    let leave_start_sub = null
    if(leave_start_data === null && on_leave !== 'not_no_leave'){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      leave_start_sub = date_object
    }else{
      leave_start_sub = leave_start_data
    }

    let leave_end_sub = null
    if(leave_end_data === null && on_leave !== 'not_no_leave'){
      let date_object = `${current_date.getFullYear()}-${current_date.getMonth()+1}-${current_date.getDate()}`
      leave_end_sub = date_object
    }else{
      leave_end_sub = leave_end_data
    }

    const battallion_value = "battallion_two" // Battallion 2 form, hence we do alittle bit of hard coding
    // Create an employee
    e.preventDefault()
    if(
      department !== null && 
      rank !== null && 
      title !== null && 
      shift !== null && 
      status !== null && 
      on_leave !== null && 
      first_name !== null && 
      last_name !== null && 
      nin !== null && 
      ipps !== null && 
      file_number !== null && 
      // account_number !== null && // can be null
      // bank !== null && // can be null
      // branch !== null && // can be null
      // contact !== null && // can be null
      sex !== null && 
      education_level !== null && 
      armed !== null && 
      section !== null && 
      location !== null
    ){
      props.battallion_two_create(first_name,
        last_name,
        nin,
        ipps,
        file_number,
        battallion_value,
        account_number,
        contact,
        sex,
        rank,
        education_level,
        education_level_other,
        bank,
        branch,
        department,
        title,
        status,
        shift,
        date_of_enlistment_sub,
        date_of_transfer_sub,
        date_of_promotion_sub,
        date_of_birth_sub,
        armed,
        section,
        location,
        on_leave,
        leave_start_sub,
        leave_end_sub)
    }else{
      setShow_alert(true)
    }

  }

  const control_bool = () => {
    setShow_alert(false)
  }
  
  const control_bool_api_message = () => {
    props.clear_messages()
  }

  const control_bool_error = () => {
    props.clear_errors()
  }

  const content_all_fields_required = "Please provide all the required information in the form before submitting."

  return (
      <Paper elevation={0}>
            <div className={classes.root}>
              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>First Name</FormLabel>                 
                  <Input
                    placeholder="First name * "
                    fullWidth
                    value={first_name}
                    disableUnderline
                    onChange={(e) => setFirst_name(e.target.value)}
                    className={classes.inputSmall}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Last Name</FormLabel>                 
                  <Input
                    placeholder="Last name * "
                    disableUnderline
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid>                 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>NIN</FormLabel>                 
                  <Input
                    placeholder="Enter NIN * "
                    fullWidth
                    value={nin}
                    onChange={(e) => setNin(e.target.value)}
                    disableUnderline
                    className={classes.inputSmall}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>IPPS</FormLabel>                 
                  <Input
                    placeholder="Enter IPPS * "
                    disableUnderline
                    value={ipps}
                    onChange={(e) => setIpps(e.target.value)}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid>                 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>File number</FormLabel>                 
                  <Input
                    placeholder="File number * "
                    fullWidth
                    value={file_number}
                    onChange={(e) => setFile_number(e.target.value)}
                    disableUnderline
                    className={classes.inputSmall}
                  />
                </Grid>
                 <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Battalion</FormLabel>                 
                  <Input
                    placeholder="Battallion"
                    disableUnderline
                    value={battallion}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid> 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Account no.</FormLabel>                 
                  <Input
                    placeholder="Account number"
                    fullWidth
                    value={account_number}
                    onChange={(e) => setAccount_number(e.target.value)}
                    disableUnderline
                    className={classes.inputSmall}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Tel Contact</FormLabel>                 
                  <Input
                    placeholder="Contact"
                    disableUnderline
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid>                 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Sex</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={sex}
                      className={classes.inputSmall_}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female" >Female</MenuItem>
                    </Select>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Rank</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={rank}
                      className={classes.inputSmall_}
                      onChange={handle_Rank_Change}
                    >
                      <MenuItem value="AIGP">AIGP</MenuItem>
                      <MenuItem value="SCP" >SCP</MenuItem>
                      <MenuItem value="CP">CP</MenuItem>
                      <MenuItem value="ACP">ACP</MenuItem>
                      <MenuItem value="SSP">SSP</MenuItem>
                      <MenuItem value="SP">SP</MenuItem>
                      <MenuItem value="ASP">ASP</MenuItem>
                      <MenuItem value="IP">IP</MenuItem>
                      <MenuItem value="AIP">AIP</MenuItem>
                      <MenuItem value="SGT">SGT</MenuItem>
                      <MenuItem value="CPL">CPL</MenuItem>
                      <MenuItem value="PC">PC</MenuItem>
                      <MenuItem value="SPC">SPC</MenuItem>
                    </Select>
                </Grid>  
              </Grid>

               <Grid container spacing={1}>
               <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Education Level</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={education_level}
                      className={classes.inputSmall_}
                      onChange={handle_education_level_change}
                    >
                      <MenuItem value="ple">PLE</MenuItem>
                      <MenuItem value="uce" >UCE</MenuItem>
                      <MenuItem value="uace">UACE</MenuItem>
                      <MenuItem value="diploma">Diploma</MenuItem>
                      <MenuItem value="bachelors">Bachelors</MenuItem>
                      <MenuItem value="masters">Masters</MenuItem>
                      <MenuItem value="doctorate">Doctorate(PhD)</MenuItem>
                      <MenuItem value="other">Other</MenuItem>
                    </Select>
                </Grid> 
               <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Other level</FormLabel>                 
                  <Input
                    placeholder="Enter your other education level / cerification"
                    disableUnderline
                    disabled={other_education_level}
                    value={education_level_other}
                    onChange={handle_other_education_level}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid>              
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Bank</FormLabel>                 
                  <Input
                    placeholder="Enter bank"
                    disableUnderline
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    className={classes.inputSmall}
                    fullWidth
                  />
                </Grid> 
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Branch</FormLabel>                 
                  <Input
                    placeholder="Enter bank branch"
                    fullWidth
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    disableUnderline
                    className={classes.inputSmall}
                  />
                </Grid>
              </Grid>

                   <Grid container spacing={1}>
                {/*NOTE: These departments are specific to Battallion 2 */}
                 <Grid item md={6} xs={12} sm={6}> 
                    <FormLabel component="label" className={classes.formLabel}>Department</FormLabel>                 
                    <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={department}
                      className={classes.inputSmall_}
                      onChange={handle_Department_Change}
                    >
                      <MenuItem value="embassy">Embassy</MenuItem>
                      <MenuItem value="consolate" >Consulate</MenuItem>
                      <MenuItem value="high_commission">High Commission</MenuItem>
                      <MenuItem value="other_diplomats">Other diplomats</MenuItem>
                      <MenuItem value="administration">Administration</MenuItem>
                    </Select>
                </Grid>

                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Title</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={title}
                      className={classes.inputSmall_}
                      onChange={handle_Title_Change}
                    >
                      <MenuItem value="commandant">Commandant</MenuItem>
                      <MenuItem value="deputy_commandant" >Deputy Commandant</MenuItem>
                      <MenuItem value="staff_officer">Staff Officer</MenuItem>
                      <MenuItem value="head_of_operations">Head of Operations</MenuItem>
                      <MenuItem value="head_of_armoury">Head of Armoury</MenuItem>
                      <MenuItem value="supervisor">Supervisor</MenuItem>
                      <MenuItem value="in_Charge">In Charge</MenuItem>
                      <MenuItem value="2nd_in_charge">2nd In charge</MenuItem>
                      <MenuItem value="driver">Driver</MenuItem>
                    </Select>
                </Grid>                 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Status</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={status}
                      className={classes.inputSmall_}
                      onChange={handle_Status_Change}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="absent" >Absent(AWOL)</MenuItem>
                      <MenuItem value="transfered">Transfered</MenuItem>
                      <MenuItem value="sick">Sick</MenuItem>
                      <MenuItem value="dead">Dead</MenuItem>
                      <MenuItem value="suspended">Suspended</MenuItem>
                      <MenuItem value="dismissed">Dismissed</MenuItem>
                      <MenuItem value="in_court">In court(Displinary/criminal)</MenuItem>
                      <MenuItem value="deserted">Deserted</MenuItem>
                      <MenuItem value="on_course">On course</MenuItem>
                      <MenuItem value="on_mission">On mission</MenuItem>
                    </Select>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Shift</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={shift}
                      className={classes.inputSmall_}
                      onChange={handle_Shift_Change}
                    >
                      <MenuItem value="day">Day</MenuItem>
                      <MenuItem value="night" >Night</MenuItem>
                      <MenuItem value="long_night">Long night</MenuItem>
                      <MenuItem value="none">None(not applicable)</MenuItem>
                    </Select>
                </Grid>  
              </Grid>


              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Date of enlistment</FormLabel>                 
                    <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={date_of_enlistment}
                          onChange={handle_date_of_enlistment_Change}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Date of transfer</FormLabel>                 
                  <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={date_of_transfer}
                          onChange={handle_date_of_transfer}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Stack>
                </Grid>                 
              </Grid>

              <Grid container spacing={1}>
                 <Grid item md={6} xs={12} sm={6}> 
                  <FormLabel component="label" className={classes.formLabel}>Date of promotion</FormLabel>                 
                  <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={date_of_promotion}
                          onChange={handle_date_of_promotion}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    </Stack>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Date of birth</FormLabel>                 
                  <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={date_of_birth}
                          onChange={handle_date_of_birth}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                  </Stack>
                </Grid>               
              </Grid>

              <Grid container spacing={1}> 
                <Grid item md={12} xs={12} sm={12}>
                  <FormLabel component="label" className={classes.formLabel}>Armed</FormLabel>                 
                   <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={armed}
                      className={classes.inputSmall_}
                      onChange={(e) => setArmed(e.target.value)}
                    >
                      <MenuItem value="yes">Yes</MenuItem>
                      <MenuItem value="no" >No</MenuItem>
                    </Select>
                </Grid>           
              </Grid>

               <Grid container spacing={1}> 
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Section</FormLabel>                 
                  {/*<Input
                    placeholder="Location"
                    disableUnderline
                    // value={l_name}
                    className={classes.inputSmall}
                    fullWidth
                  />*/}
                  <AutocompleteSections get_section_value={get_section_value} />
                </Grid>    
                <Grid item md={6} xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Location</FormLabel>                 
                  {/*<Input
                    placeholder="Location"
                    disableUnderline
                    // value={l_name}
                    className={classes.inputSmall}
                    fullWidth
                  />*/}
                  <AutocompleteLocations get_section_value={get_location_value} />
                </Grid>              
              </Grid>

              <Grid container spacing={1}> 
                <Grid item md={4} xs={12} sm={12}> 
                  <FormLabel component="label" className={classes.formLabel}>On leave</FormLabel>                 
                  <Select
                      labelId="demo-simple-select-label"
                      isableUnderline
                      displayEmpty
                      fullWidth
                      id="demo-simple-select"
                      value={on_leave}
                      className={classes.inputSmall_}
                      onChange={handle_Leave_Change}
                    >
                      <MenuItem value="pass_leave">Pass leave</MenuItem>
                      <MenuItem value="maternity_leave" >Maternity leave</MenuItem>
                      <MenuItem value="sick_leave">Sick leave</MenuItem>
                      <MenuItem value="study_leave">Study leave</MenuItem>
                      <MenuItem value="annual_leave">Annual leave</MenuItem>
                      <MenuItem value="not_no_leave">Not on leave</MenuItem>
                    </Select>
                </Grid>  
                 <Grid item md={4} xs={12} sm={12}>
                  <FormLabel component="label" className={classes.formLabel}>Leave start date</FormLabel>                 
                  <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          disabled={date_pickers_enabled}
                          inputFormat="MM/dd/yyyy"
                          value={leave_start}
                          onChange={handle_leave_start}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                  </Stack>
                </Grid>  
                 <Grid item md={4} xs={12} sm={12}>
                  <FormLabel component="label" className={classes.formLabel}>Leave end date</FormLabel>                 
                  <Stack spacing={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          // label="Date desktop"
                          disabled={date_pickers_enabled}
                          inputFormat="MM/dd/yyyy"
                          value={leave_end}
                          onChange={handle_leave_end}
                          className={classes.inputSmall_date}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                  </Stack>
                </Grid> 

                 <Grid item md={12} xs={12} sm={12}>
                 {
                  show_alert === true ? ( <Alert content={content_all_fields_required} control_bool={control_bool} status="error" />) : null
                 }
                 {
                  props.messages.api_message !== null && props.messages.message_type === "battallion_employee_created" ? 
                  ( <Alert content={props.messages.api_message} control_bool={control_bool_api_message} status="success" />) : null
                 }
                 {
                  props.error.msg !== null && props.error.msg.file_number ? 
                  ( <Alert content={"File number already taken, please make sure you are providing the correct file number."} control_bool={control_bool_error} status="error" />) : null
                 }
                </Grid>  

                <Grid item md={12} xs={12} sm={12}>
                  <Stack spacing={6}>
                   <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handle_submit_data}
                    >
                      {props.loading === true ? <Spinner /> : "Submit data"}
                    </Button>
                  </Stack>
                </Grid>                 
              </Grid>

          </div>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  loading : state.battallions_create.create_battallion_two_loading,
});

export default connect(mapStateToProps, {
  battallion_two_create,
  clear_messages,
  clear_errors
})(Content_Newentry);

