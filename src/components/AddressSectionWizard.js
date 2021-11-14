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
import { countryList, stateList } from "../actions/lists";
import FormHelperText from "@material-ui/core/FormHelperText";

import GoogleMapsAutoComplete from "./GoogleMapsAutoComplete"; 


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
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
        marginBottom: theme.spacing(1),
    },
     formLabel_:{
        fontSize: '13px',
        color: 'rgba(0, 0, 0, 0.5)',
        fontWeight: '600',
        marginBottom: theme.spacing(2),
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
function DashboardProfilePicSectionWizard(props){
  const classes = useStyles();
  const { window, user } = props;
  const user_id = user.id;

  const [address_line_1, setAddress_Line1] = useState(props.user.address_line_1);
  const [address_line_2, setAddress_Line2] = useState(props.user.address_line_2);
  const [city,           setCity]          = useState(props.user.city);
  const [state,          setState]         = useState(props.user.state);
  const [country,        setCountry]       = useState(props.user.country);
  const [zipcode,        setZipcode]       = useState(props.user.zipcode);
  const [edited,         setEdited ]       = useState(false);
  const [error_zip,      setError_zip]     = useState(false);
  const [address,        setAddress]     = useState("");

  // const [state_auto,        setState_auto]     = useState(null);

  // React.useEffect(() => {
  //   if(address_line_1 && address_line_2 && city && state && country && zipcode){
  //       console.log(address_line_1)
  //       console.log(address_line_2)
  //       console.log(city)
  //       console.log(state)
  //       console.log(country)
  //       console.log(zipcode)
  //   }
  // }, [address_line_1, address_line_2, city, state, country, zipcode]);

  React.useEffect(() => {
   // console.log(address_line_1)
    if(props.form.signal_save === true){

      var zipFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
      // const isValidPhoneNumber = validator.isMobilePhone(number)
      if (!zipFormat.test(zipcode)) {
          setError_zip(true);
          props.reset_save_signal();

      } else setError_zip(false); 

     if(address_line_1 !== null){
         //  console.log(address_line_1.structured_formatting.main_text)
          const object = {
          address_line_1: address_line_1,
          address_line_2: address_line_2,
          city: city,
          state: state,
          country: country,
          zipcode: zipcode,
        };
        const timer = sendReq(object, user_id);
        return () => clearTimeout(timer);
      }else{
        props.reset_save_signal();
      }

    
    }
  }, [address_line_1, address_line_2, city, state, country, zipcode, props.form.signal_save]);

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
  function sendReq(data, user_id) {
    const timer = setTimeout(() => {
      dispatch(sendUserData(data, user_id));
    }, 500);
    return timer;
  }

  function compIsType(t, s) { 
    for(let z = 0; z < t.length; ++z) 
       if(t[z] == s)
      return true;
    return false;
  }

  const [google_form, setGoogle_form]  =  useState(true);
  const [address_value, setAddress_value]  =  useState(props.user.address_line_1);
  const [address_value2, setAddress_value2]  =  useState(props.user.address_line_2);
  const [store, setStore]  =  useState(null);
  const [store2, setStore2]  =  useState(null);
  const [length_results, setLength]  =  useState(null);
  const [length_results2, setLength2]  =  useState(null);

  const not_found = (options) => {
    // console.log(options.length)
    // console.log(options)
    setLength(options.length)
  }

  const not_found_ = (options) => {
    // console.log(options.length)
    // console.log(options)
    setLength2(options.length)
  }

const typed_value = (value) => {
    // console.log(value)
    setAddress_value(value)
  }
const typed_value_ = (value) => {
    // console.log(value)
    setAddress_value2(value)
  }

React.useEffect(() => {
    if(address_value2 !== ""){
        setStore2(address_value2)
    }
    console.log(address_value2)
    if(address_value2 === ""){
        // console.log("Empty")
        setAddress_value2(store2)
        setEdited(true)
    }
  }, [address_value2]);

React.useEffect(() => {
    if(address_value !== ""){
        setStore(address_value)
    }
    // console.log(address_value)
    if(address_value === ""){
        // console.log("Empty")
        setAddress_value(store)
        setEdited(true)
    }
  }, [address_value]);

 React.useEffect(() => {
     if(store !== null && length_results === 0){
        // console.log("Saving: " + store)
        // console.log(length_results)
        setAddress_Line1(store);
        setEdited(true)
     }
  }, [store, length_results]);

 React.useEffect(() => {
     if(store2 !== null && length_results === 0){
        // console.log("Saving: " + store2)
        // console.log(length_results)
        setAddress_Line2(store2);
        setEdited(true)
     }
  }, [store2, length_results2]);

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();  
  }, []);

  //  React.useEffect(() => {
  //    // console.log("Changing.....")
  //    // setRender(true)
  // }, [state, city, country, zipcode]);
  // // if()

    return(
       <div>
            <FormGroup className={classes.formGroup}>
                <FormLabel component="label" className={classes.formGroupLabel}>Your address</FormLabel>
                <FormLabel component="label" className={classes.formLabel}>Address Line 1 
                {/*{ store !== null && length_results === 0 ? (<FormLabel component="label" className={classes.formLabel}>: {store} </FormLabel>) : null }*/}
                </FormLabel>
                 <GoogleMapsAutoComplete 
                    placeholder="Physical Address *"
                    variant={"filled"}
                    not_found={not_found}
                    get_typed_value={typed_value}
                    defaultValue={props.user.address_line_1}
                    onChange={
                      (value) => {
                        console.log(value)
                       // console.log(value.placeDetails.address_components)
                        if(value !== null){
                            console.log(value.placeDetails.address_components)

                            if(value.placeDetails.address_components !== undefined){
                              let addrComp = value.placeDetails.address_components;
                              for(let i = 0; i < addrComp.length; ++i)
                              {
                                var typ = addrComp[i].types;
                                if(compIsType(typ, 'administrative_area_level_1')){
                                   var state_ = addrComp[i].long_name; // store the state
                                   console.log(state_)
                                   setState(state_)
                                }
                                else if(compIsType(typ, 'locality') || compIsType(typ, 'sublocality')){
                                   var city_ = addrComp[i].long_name; // store the city
                                   console.log(city_)
                                   setCity(city_)
                                }
                                else if(compIsType(typ, 'country')){
                                   var country_ = addrComp[i].long_name; // store the country        
                                   console.log(country_)
                                   setCountry(country_)
                                }
                                else if(compIsType(typ, 'postal_code')){
                                   var zipcode_ = addrComp[i].long_name; // store the zip code        
                                   console.log(zipcode_)
                                   setZipcode(zipcode_)
                                }
                                //we can break early if we find all three data
                                if(state_ != null && city_ != null && country_ != null && zipcode_ != null) {
                                    // console.log(state_)
                                    // console.log(city_)
                                    // console.log(country_)
                                    break
                                };
                              }
                            }

                            setAddress_Line1(value.structured_formatting.main_text);
                            setEdited(true)
                        }
                      }
                    }
                  />
          </FormGroup>
          {/* <FormGroup className={classes.formGroup}>
                <FormLabel component="label" className={classes.formGroupLabel}>Your address</FormLabel>
                <FormLabel component="label" className={classes.formLabel}>Address Line 1 </FormLabel>
                 <GoogleMapsAutoComplete 
                    placeholder="Physical Address *"
                    variant={"filled"}
                    value={props.user.address_line_1}
                    onChange={
                      (value) => {
                        setAddress_Line1(value);
                        setEdited(true)
                      }
                    }
                  />
          </FormGroup>*/}
            <FormGroup className={classes.formGroup}>
                <FormLabel component="label" className={classes.formLabel}>Address Line 2</FormLabel>
                 <GoogleMapsAutoComplete 
                    placeholder="Physical Address *"
                    variant={"filled"}
                    not_found={not_found_}
                    get_typed_value={typed_value_}
                    defaultValue={props.user.address_line_2}
                    onChange={
                      (value) => {
                        if(value !== null){
                        setAddress_Line2(value.structured_formatting.main_text);
                        setEdited(true)
                      }
                     }
                    }
                  />
                 {/*<Input 
                    id="address2" 
                    defaultValue={props.user.address_line_2} 
                    disableUnderline 
                    fullWidth 
                    placeholder="This can be your apartment number" 
                    autoComplete="new-password" 
                    inputProps={{ 'aria-label': 'description' }} 
                    className={classes.input} 
                    onChange={(e) => { 
                      setAddress_Line2(e.target.value)
                      setEdited(true)
                    }}/>*/}
          </FormGroup>
            <FormGroup className={classes.formGroup}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>City</FormLabel>
                        <Input 
                          id="city" 
                          value={city} 
                          disableUnderline 
                          fullWidth 
                          placeholder="City" 
                          inputProps={{ 'aria-label': 'description' }} 
                          autoComplete="new-password" 
                          className={classes.inputSmall} 
                          onChange={(e) =>  { 
                            setCity(e.target.value)
                            setEdited(true) 
                          }}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>State</FormLabel>
  		                  {/*<Select
  		                    name="state"
  		                    autoComplete="new-password"
  		                    disableUnderline
  		                    defaultValue={props.user.state}
  		                    onChange={(e) => { 
                            setState(e.target.value)
                            setEdited(true)
                          }}
  		                    displayEmpty
  		                    className={classes.inputSelect}
  		                    inputProps={{ "aria-label": "Select State" }}
  		                  >
  		                    {stateList != null ? (
  		                      stateList.map((state, i) => (
  		                        <MenuItem key={i} value={state.name}>
  		                          {state.name}
  		                        </MenuItem>
  		                      ))
  		                    ) : (
  		                      <MenuItem value="Seattle">Seattle</MenuItem>
  		                    )}
  		                  </Select>*/}
                          <Input 
                              id="city" 
                              value={state}
                              disableUnderline 
                              fullWidth 
                              placeholder="State" 
                              inputProps={{ 'aria-label': 'description' }} 
                              autoComplete="new-password" 
                              className={classes.inputSmall} 
                              onChange={(e) =>  { 
                                setState(e.target.value)
                                setEdited(true) 
                        }}/>
		              
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Country</FormLabel>
		                 {/* <Select
		                    autoComplete="new-password"
		                    name="country"
		                    disableUnderline
		                    defaultValue={props.user.country}
		                    onChange={(e) => { 
                          setCountry(e.target.value) 
                          setEdited(true)
                        }}
		                    displayEmpty
		                    className={classes.inputSelect}
		                    inputProps={{ "aria-label": "Select Country" }}
		                  >
		                    {countryList != null ? (
		                      countryList.map((country, i) => (
		                        <MenuItem key={i} value={country.country_name}>
		                          {country.country_name}
		                        </MenuItem>
		                      ))
		                    ) : (
		                      <MenuItem value="United States">
		                        United States
		                      </MenuItem>
		                    )}
		                  </Select>*/}
                        <Input 
                          id="city" 
                          value={country} 
                          disableUnderline 
                          fullWidth 
                          placeholder="Country" 
                          inputProps={{ 'aria-label': 'description' }} 
                          autoComplete="new-password" 
                          className={classes.inputSmall} 
                          onChange={(e) =>  { 
                            setCountry(e.target.value)
                            setEdited(true) 
                        }}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormLabel component="label" className={classes.formLabel}>Zip/Postal code</FormLabel>
                        <Input 
                          onChange={(e) => { 
                            setZipcode(e.target.value)
                            setEdited(true) 
                          }}
                          id="zip_code" 
                          value={zipcode} 
                          error={error_zip}
                          disableUnderline 
                			    autoComplete="new-password" 
                          fullWidth 
                          placeholder="Enter your zip code " 
                          inputProps={{ 'aria-label': 'description' }} 
                          className={classes.inputSmall} />
                          {error_zip ? (
                                <FormHelperText error>
                                   Enter a valid zip code.{" "}
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
  })(DashboardProfilePicSectionWizard);
