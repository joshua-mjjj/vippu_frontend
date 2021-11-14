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
import { sendUserData, user_editing, reset_save_signal } from "../actions/form.js";
import { loadUser } from "../actions/auth.js";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import validator from 'validator' 

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
        // // "&::after": {
        // //     borderBottom: '1px solid #949494',
        // //     },
        // "&&&:before": {
        //   borderBottom: "none"
        // },
        // "&&:after": {
        //   borderBottom: "none"
        // }
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
        width: theme.spacing(14),
        height: theme.spacing(14),
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

}));


function DashboardContactSectionWizard(props){
     const classes = useStyles();

  const { window, user } = props;
  const user_id = user.id;

    // data
    const [phone_number,                   setPhone_number]                   = useState(props.user.phone_number);
    const [alternate_phone_number,         setAlternate_Phone_number]         = useState(props.user.alternate_phone_number);
    const [email,                          setEmail]                          = useState(props.user.email);
    const [emergency_contact_name,         setEmergency_Contact_Name]         = useState(props.user.emergency_contact_name);
    const [emergency_contact_phone_number, setEmergency_Contact_Phone_Number] = useState(props.user.emergency_contact_phone_number);
    const [emergency_contact_email,        setEmergency_Contact_Email]        = useState(props.user.emergency_contact_email);
    const [edited,                         setEdited ]                        = useState(false);
    const [social_number,                  setSocial_number ]                 = useState(props.user.ssn);
    const [error_email,                    setError_email]                    = useState(false);
    const [error_phone1,                   setError_phone1]                   = useState(false);
    const [error_phone2,                   setError_phone2]                   = useState(false);
    const [error_phone3,                   setError_phone3]                   = useState(false);
    const [error_ssn,                      setError_ssn]                      = useState(false);
 
  React.useEffect(() => {
    if(props.form.signal_save === true){

      
      var mailFormat = /^([a-zA-Z0-9_\.\-!#$%&'*+/=?^`{|}~"(),:;<>[\]])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

      if (!mailFormat.test(emergency_contact_email)) {
          setError_email(true);
          props.reset_save_signal();

      } else setError_email(false); 

      const isValidPhoneNumber1 = validator.isMobilePhone(phone_number)
      if (isValidPhoneNumber1 === false) {
          setError_phone1(true);
          props.reset_save_signal();

      } else setError_phone1(false); 

      const isValidPhoneNumber2 = validator.isMobilePhone(alternate_phone_number)
      if (isValidPhoneNumber2 === false) {
          setError_phone2(true);
          props.reset_save_signal();

      } else setError_phone2(false); 

      const isValidPhoneNumber3 = validator.isMobilePhone(emergency_contact_phone_number)
       if (isValidPhoneNumber3 === false) {
          setError_phone3(true);
          props.reset_save_signal();

      } else setError_phone3(false);

     if(props.user.account_type === "service_provider" ){
          if(social_number){
            if(social_number.search(/[A-Z]/) !== -1 || social_number.search(/[a-z]/) !== -1 || social_number.search(/^(?=.*[!@#$%^&*()/_+'=?`\{|}~",:;</>])/) !== -1 || social_number.length > 11) {
                setError_ssn(true)
                props.reset_save_signal();
            } else setError_ssn(false); 
         }
      }

      if(props.user.account_type === "service_provider" ){
          if(social_number === null || social_number === undefined || social_number === ""){
            setError_ssn(true)
            props.reset_save_signal();
          }
      }
    
     
     // if(phone_number && alternate_phone_number && email && emergency_contact_name && emergency_contact_phone_number && emergency_contact_email){
        // console.log("Save data")
        let object;
        if(props.user.account_type === "service_provider" ){
           object = {
              phone_number:                   phone_number,
              alternate_phone_number:         alternate_phone_number,
              email:                          email,
              ssn:                            social_number,
              emergency_contact_name:         emergency_contact_name,
              emergency_contact_phone_number: emergency_contact_phone_number,
              emergency_contact_email:        emergency_contact_email,
            };
         }else{
           object = {
              phone_number:                   phone_number,
              alternate_phone_number:         alternate_phone_number,
              email:                          email,
              // ssn:                            social_number,
              emergency_contact_name:         emergency_contact_name,
              emergency_contact_phone_number: emergency_contact_phone_number,
              emergency_contact_email:        emergency_contact_email,
            };
         }
        
        const timer = sendReq(object, user_id);
        return () => clearTimeout(timer);
     // }
    }
  }, [phone_number, social_number, alternate_phone_number, emergency_contact_name, emergency_contact_phone_number, emergency_contact_email, props.form.signal_save]);

  React.useEffect(() => {
        if(edited === true){
            if(props.form.user_editing === false){  // avoiding multiple dispatches when boolean is already true
                props.user_editing()
            }else{
                setEdited(false)
            } 
        }
  }, [props.form.user_editing, edited]);

  const dispatch = useDispatch();
  const [showSSN, setShowSSN] = useState(false);
  const handleClickShowSSN = () => setShowSSN(!showSSN);

  function sendReq(data, user_id) {
    const timer = setTimeout(() => {
      dispatch(sendUserData(data, user_id));
    }, 500);

    return timer;
  }

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();
  }, []);

   const handleSSNNumber = (text) => {
      // remove all non-dash and non-numerals
      var val = text.replace(/[^\d-]/g, '');

      // add the first dash if number from the second group appear
      val = val.replace(/^(\d{3})-?(\d{1,2})/, '$1-$2');

      // add the second dash if numbers from the third group appear
      val = val.replace(/^(\d{3})-?(\d{2})-?(\d{1,4})/, '$1-$2-$3');

      // remove misplaced dashes
      val = val.split('').filter((val, idx) => {
        return val !== '-' || idx === 3 || idx === 6;
      }).join('');

      // enforce max length
      return val.substring(0, 11);
    }
  
  // const [value, setValue] = useState(props.user.ssn !== null ? handleSSNNumber(props.user.ssn) : "");


    return(
            <div>
            <FormGroup className={classes.formGroupProfileSection}>
                <FormLabel component="label" className={classes.formGroupLabel}>Your Contact Information</FormLabel>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Phone Number*</FormLabel>
                        <Input 
                            id="phone_number" 
                            defaultValue={props.user.phone_number} 
                            onChange={(e) => {
                                setPhone_number(e.target.value)
                                setEdited(true)
                            }}
                            autoComplete="new-password"
                            error={error_phone1} 
                            disableUnderline 
                            fullWidth 
                            placeholder="Phone Number" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                             {error_phone1 ? (
                                <FormHelperText error>
                                  Please enter a valid phone number.{" "}
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                      </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Alternative Phone Number</FormLabel>
                        <Input 
                            id="alt_phone_number" 
                            defaultValue={props.user.alternate_phone_number} 
                            onChange={(e) => {
                                setAlternate_Phone_number(e.target.value)
                                setEdited(true)
                            }}
                            autoComplete="new-password" 
                            disableUnderline 
                            error={error_phone2}
                            fullWidth 
                            placeholder="Alternative Phone Number" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                             {error_phone2 ? (
                                <FormHelperText error>
                                  Please enter a valid phone number.{" "}
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Email Address</FormLabel>
                        <Input 
                            id="email" 
                            type="email" 
                            value={props.user.email} 
                            disableUnderline 
                            fullWidth 
                            placeholder="Email Address" 
                            onChange={(e) => setEmail(e.target.value)} 
                            autoComplete="new-password" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                    </Grid>
                  { 
                    props.user.account_type === "service_provider" ? 
                      (
                         <Grid item xs={12} sm={6}>
                            <FormLabel component="label" className={classes.formLabel}>Social Security Number</FormLabel>
                            <TextField
                              className={classes.inputSmall}
                              fullWidth
                              error={error_ssn}
                              //value={value}
                              placeholder="Social Security Number"
                              onChange={(e) => {
                                // handleCardNumber(e.target.value)
                                setSocial_number(e.target.value)
                                setEdited(true)
                            }}
                              defaultValue={props.user.ssn}
                              required
                              type={showSSN ? "text" : "password"}
                              variant="standard"
                              id="ssn"
                              //label="Social Security Number"
                              name="ssn"
                              autoComplete="new-password"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="Toggle password visibility"
                                      onClick={handleClickShowSSN}
                                    >
                                      {showSSN ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                                disableUnderline: true
                              }}
                            />
                             {error_ssn ? (
                                <FormHelperText error>
                                  Please enter a valid ssn.{" "}
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                      </Grid>
                      ):(null)
                  }
                </Grid>
            </FormGroup>
            <FormGroup className={classes.formGroupProfileSection}>
                <FormLabel component="label" className={classes.formGroupLabel}>Emergency Contact Information</FormLabel>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Full Names</FormLabel>
                        <Input 
                            onChange={(e) => {
                                setEmergency_Contact_Name(e.target.value)
                                setEdited(true)
                            }} 
                            id="emerg_contact_name" 
                            defaultValue={props.user.emergency_contact_name} 
                            autoComplete="new-password" 
                            disableUnderline 
                            fullWidth 
                            placeholder="Full Names" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Phone Number</FormLabel>
                        <Input 
                            onChange={(e) => {
                                setEmergency_Contact_Phone_Number(e.target.value)
                                setEdited(true)
                            }} 
                            id="emerg_phone_number" 
                            defaultValue={props.user.emergency_contact_phone_number} 
                            autoComplete="new-password" 
                            disableUnderline 
                            fullWidth 
                            error={error_phone3}
                            placeholder="Phone Number" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                             {error_phone3 ? (
                                <FormHelperText error>
                                  Please enter a valid phone number.{" "}
                                </FormHelperText>
                              ) : (
                                ""
                              )}
                        </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Email Address</FormLabel>
                        <Input 
                            onChange={(e) => {
                                setEmergency_Contact_Email(e.target.value)
                                setEdited(true)
                            }} 
                            id="emerg_email" 
                            defaultValue={props.user.emergency_contact_email} 
                            autoComplete="new-password" 
                            error={error_email}
                            type="email" 
                            disableUnderline 
                            fullWidth 
                            placeholder="Email Address" 
                            inputProps={{ 'aria-label': 'description' }} 
                            className={classes.inputSmall} />
                            {error_email ? (
                                <FormHelperText error>
                                  Please enter a valid email address.{" "}
                                </FormHelperText>
                              ) : (
                                ""
                              )}
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
    reset_save_signal
  })(DashboardContactSectionWizard);
