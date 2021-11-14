import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import GuestNavBar from '../components/GuestNavBar';
import PrimarySearchAppBar from '../components/AuthorizedUserHomepageNavbar';
import { Box, Grid, Typography, TextField, IconButton} from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { DropzoneArea } from "material-ui-dropzone";
import DashboardBackgroundCheckSection from '../components/DashboardBackgroundCheckSection';
import Skeleton from '@material-ui/lab/Skeleton';
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from "react-redux";
import { sendUserData, user_editing, sendUserData_photo, reset_save_signal, clear_error } from "../actions/form.js";
import { loadUser } from "../actions/auth.js";
// import PicUploadCrop from "./PicUploadCrop.js";
import Dialog from "./Dialog.js";
import PetGallery from "../components/ProviderGallery"

import Alert from "@material-ui/lab/Alert";
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment'
import FormHelperText from "@material-ui/core/FormHelperText";

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
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    stepper:{
        width: '100%',
        margin: theme.spacing(8, 'auto', 4),
        paddingLeft: '0',
        paddingRight: '0',
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
    inputSmall:{
        fontSize: '13px',
        color: '#1b1f23',
        border: '1px solid #cfd7de',
        borderRadius: '5px',
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
        "&::after": {
            borderBottom: '1px solid #949494',
        },
    },
    inputSelect:{
        fontSize: '13px',
        color: '#1b1f23',
        border: '1px solid #cfd7de',
        borderRadius: '5px',
        padding: theme.spacing(1),
        width: '100%',
        marginTop: theme.spacing(1),
        "&::after": {
            borderBottom: '1px solid #949494',
        },
    },
    inputBio:{
        fontSize: '13px',
        color: '#1b1f23',
        border: '1px solid #cfd7de',
        borderRadius: '5px',
        padding: theme.spacing(1, 2, 1, 1),
        marginTop: theme.spacing(1),
        "&::after": {
            borderBottom: '1px solid #949494',
        },
    },
    radioLabel:{
        "& span":{
            fontSize: '13px!important',
            color: '#1b1f23',
        },
    },
    wizardContainer:{
        margin: theme.spacing(2, 'auto', 8),
    },
    form: {
        margin: 'auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    formHeader:{
        margin: theme.spacing(2, 'auto', 4),
        textAlign: 'center',
    },
    formLabel:{
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
        marginBottom: theme.spacing(1),
    },
    formLabelPetPrefs:{
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
        margin: theme.spacing(1, 0),
    },
    formLabelPetExperience:{
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
        lineHeight: '2.5em',
    },
    formGroupLabel:{
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: '600',
        marginBottom: theme.spacing(2),
    },
    formGroupLabelPetPrefs:{
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.7)',
        fontWeight: '600',
        marginBottom: theme.spacing(4),
    },
    formGroup:{
        marginBottom: theme.spacing(3),
    },
    formGroupProfileSection:{
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(6),
    },
    imageSelector: {
        fontSize: "8rem",
        width: theme.spacing(16),
      height: theme.spacing(16),
      paddingLeft: theme.spacing(0),
    },
    selector:{
        paddingLeft: theme.spacing(0),
    },
    small: {
    margin:  theme.spacing(1, 'auto', 0),
    display: "block",

  },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    button: {
        marginRight: theme.spacing(1),
        backgroundColor: '#663399!important',
    },
    buttonBack: {
        marginRight: theme.spacing(1),
        marginLeft: 'auto',
    },
    buttonNext: {
        marginLeft: theme.spacing(1),
        backgroundColor: '#663399!important',
        marginRight: 'auto',
    },
    buttonSection:{
        margin: 'auto',
        float: 'right',
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    fieldSetRadio:{
        marginLeft: theme.spacing(1),
    },
    adornment:{
        "& p":{
            fontSize: '13px',
        },
    },
    root_: {
      margin: theme.spacing(2, 0),
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

}));


function DashboardProfilePicSectionWizard(props){
     const classes = useStyles();

   const { window, user } = props;
  const user_id = user.id;

  const [ photo, setPhoto ] = useState(null);
  const [ updating, setUpdating ] = useState(false);
  const [open, setOpen] = React.useState(true);
  
  const upload = (e) =>  {
    document.getElementById("selectImage").click()
    // setInitiate(true)
  }
  const upload_new = (e) =>  {
    setUpdating(true)
    // setInitiate(true)
    document.getElementById("selectImage").click()
  }

  const setting = (image) =>  {
    // console.log("Image")
    // console.log(image)
    if(image){
      setUpdating(true)
      setPhoto(image)
    }
  }



  React.useEffect(() => {
    if(photo !== null) {
      const uploadData = new FormData();
      uploadData.append('photo', photo, photo.name);
      console.log(uploadData)

      const timer = sendReq_(uploadData, user_id);
      return () => clearTimeout(timer);
      function sendReq_(object, user_id) {
          const timer = setTimeout(() => {
          props.sendUserData_photo(object, user_id);   
        }, 1000);
        return timer;
    } 
  }  
  }, [photo]);



  // data
  const [ edited, setEdited ] = useState(false);
  const [tagline, setTaglin] = useState(props.user.tagline);
  const [bio, setBio] = useState(props.user.bio);
  const [dob, setDob] = useState(props.user.date_of_birth);
  const [first, setFirstName] = useState(props.user.first_name);
  const [last, setLastName] = useState(props.user.last_name);

  const [selectedDate, setSelectedDate] = useState( props.user.date_of_birth === null ? (new Date()) : (new Date(props.user.date_of_birth)));
  const [ error_dob, setError_dob ] = useState(false);

   const handleDateChange = (date) => {
        setSelectedDate(date)
        let dt = new Date(date);
        let date_Obj = `${dt.getFullYear()}-${dt.getMonth()+1}-${dt.getDate()}`
        // console.log(date_Obj)
        var obj = {
          'Date/Time': `${date_Obj} 09:00:00`
          }
        const test_date = moment(obj['Date/Time']).format("YYYY-MM-DD");
        var time = moment(test_date).fromNow()
        console.log(time)
        // console.log(test_date)
        setDob(test_date)
        const boole_an = true
        localStorage.setItem(`dob_edit_${props.user.id}`, boole_an);
        setEdited(true)
      };

  
  React.useEffect(() => {
    console.log(dob)
    if(props.form.signal_save === true){
        if(dob === null || dob === undefined || dob === "" || dob === "Invalid date"){
            setError_dob(true)
            props.reset_save_signal();
            return
        }
        const object = {
          tagline: tagline,
          bio: bio,
          date_of_birth: dob,
          first_name: first,
          last_name: last,
        };
        const timer = sendReq(object, user_id);
        return () => clearTimeout(timer);
    }
  }, [tagline, bio, dob, props.form.signal_save]);

  React.useEffect(() => {
        if(edited === true){
            if(props.form.user_editing === false){  // avoiding multiple dispatches when boolean is already true
                props.user_editing()
            }else{
                setEdited(false)
            }
           
        }
  }, [props.form.user_editing, edited]);

  // React.useEffect(() => {
  //   if(tagline && bio && dob){
  //       console.log(tagline)
  //       console.log(bio)
  //       console.log(dob)
  //   }

  // }, [tagline, bio, dob]);

  const dispatch = useDispatch();

  function sendReq(data, user_id) {
    const timer = setTimeout(() => {
      dispatch(sendUserData(data, user_id));
    }, 500);

    return timer;
  }

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();

      const state_dob = localStorage.getItem(`dob_edit_${props.user.id}`);
      if(state_dob === null || state_dob === undefined){
        const bool = false
        localStorage.setItem(`dob_edit_${props.user.id}`, bool);
        console.log("Don't exist")
      }

  }, []);
  let alert;
  if (props.error.msg.date_of_birth) {
    let msg = props.error.msg.date_of_birth;
    console.log(msg)
    alert = (
      <div className="alerts">{msg}</div>
    );
  }

    return(
        <div>
            <FormGroup className={classes.formGroupProfileSection}>
                <FormLabel component="label" className={classes.formGroupLabel}>Your Profile Picture</FormLabel>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={3} className={classes.selector}>
                        <FormLabel component="label" className={classes.formLabel}>Select a picture</FormLabel>
                       
                        <div className={classes.root_}>
                            {
                            props.user.photo ? (
                              updating === false ? (
                                <div>
                                    <Avatar className={classes.imageSelector} alt="profile picture" src={props.user.photo}/>
                                    {/*<Button onClick={upload_new} className={classes.small} color="primary">
                                       change
                                    </Button>*/}
                                </div>
                                ):(
                                <div>
                                    { photo ? 
                                    (<div>
                                        <Avatar className={classes.imageSelector} alt="profile picture" src={URL.createObjectURL(photo)}/>
                                        {/*<Button onClick={upload_new} className={classes.small} color="primary">
                                          change
                                        </Button>*/}
                                    </div>
                                    )
                                    :
                                    (<div> 
                                        <Skeleton variant="circle" className={classes.imageSelector}/>
                                        {/*<Button disabled onClick={upload_new} className={classes.small} color="primary">
                                           change
                                        </Button>*/}
                                    </div>
                                    )
                                    }
                                    
                                </div>)
                            ):(
                                <div>
                                {
                                photo ? 
                                (  
                                 <div> 
                                    <Avatar className={classes.imageSelector} alt="profile picture" src={URL.createObjectURL(photo)}/>
                                    <div> 
                                        {/*<Button  onClick={upload_new} className={classes.small} color="primary">
                                          change
                                        </Button>*/}
                                    </div>
                                  </div>
                                ) : 
                                (
                                    <Avatar className={classes.imageSelector} 
                                      // onClick={upload}
                                    >
                                    <FolderIcon /> <AddIcon/>
                                    </Avatar> 
                                )
                                }
                                </div>
                            )
                           }
                            
                        </div>

                        <Dialog setting={setting} />

                        {/*<input 
                            type="file"
                            id='selectImage' 
                            hidden
                            onChange={(evt) => setPhoto(evt.target.files[0])}
                        />*/} 
                    </Grid>
                    
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Input 
                              fullWidth
                              disableUnderline
                              id="firstname"
                              onChange={(e) => {
                                    setFirstName(e.target.value)
                                    setEdited(true)
                                }}
                              label=""
                              placeholder="First Name"
                              defaultValue={props.user.first_name}
                              className={classes.input}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <Input 
                              fullWidth
                              disableUnderline
                              id="lastname"
                               onChange={(e) => {
                                    setLastName(e.target.value)
                                    setEdited(true)
                                }}
                              label=""
                              placeholder="Last Name"
                              defaultValue={props.user.last_name}
                              className={classes.input}
                              />
                          </Grid>
                            <Grid item xs={12}>
                                <Input 
                                fullWidth
                                disableUnderline
                                id="tagline"
                                onChange={(e) => {
                                    setTaglin(e.target.value)
                                    setEdited(true)
                                }}
                                label="Tagline"
                                placeholder="Write a short tagline about yourself"
                                defaultValue={props.user.tagline}
                                className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                disableUnderline
                                fullWidth
                                onChange={(e) => {
                                    setBio(e.target.value)
                                    setEdited(true)
                                }}
                                multiline
                                rows={4}
                                id="about"
                                label="Bio"
                                placeholder="Tell us about yourself"
                                defaultValue={props.user.bio}
                                className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {/*<TextField 
                                    fullWidth
                                    id="date"
                                    label="Date of Birth"
                                    type="date"
                                    placeholder="2000-01-01"
                                    onChange={(e) => {
                                        console.log(e.target.value) // yyy mmm ddd 
                                        setDob(e.target.value)
                                        setEdited(true)
                                    }}
                                    defaultValue={props.user.date_of_birth}
                                    className={classes.bio}
                                    InputProps={{ disableUnderline: true }}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />*/}
                                 <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <FormLabel component="label" className={classes.formLabel}>Date of Birth</FormLabel>
                                    <ThemeProvider theme={theme}>
                                    <KeyboardDatePicker
                                          className={classes.line}
                                          InputProps={{ classes: { underline: classes.underline } }}
                                          id="date-picker-dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          //defaultValue={}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                          }}
                                        />
                                    </ThemeProvider>
                                    {error_dob ? (
                                        <FormHelperText error>
                                          Date of birth is required.
                                        </FormHelperText>
                                      ) : (
                                        ""
                                      )}
                                    </MuiPickersUtilsProvider>
                            {
                                props.error.msg.date_of_birth ? 
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
                                                props.clear_error()
                                                setOpen(false);
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

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FormGroup>
        </div>
    );
}

const mapStateToProps = (state) => ({
    error: state.errors,
    form: state.forms,
    user: state.auth.user,
    results: state.services.results,
    all_services: state.services.admin_services,
  });
  export default connect(mapStateToProps, {
    sendUserData,
    loadUser,
    user_editing,
    sendUserData_photo,
    reset_save_signal,
    clear_error
  })(DashboardProfilePicSectionWizard);
