import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from '@material-ui/core/FormGroup';
import Container from '@material-ui/core/Container';

import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { loadUser } from "../actions/auth.js";
import { pet_preference, pet_preference_del, sendUserData_pref } from "../actions/form.js";
// import PetGallery from "../components/ProviderGallery"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),

    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  imageSelector: {
    fontSize: "8rem",
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
  helpText: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  underline: {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
  },
  selectEmpty: {
    float: "left",
    width: "100%",
    borderRadius: "10px",
    height: "auto!important",
    "& > label": {
      paddingLeft: theme.spacing(1),
    },
  },
  addRowButton: {
    marginTop: theme.spacing(4),
  },
  selectFormControl: {
    width: "100%",
  },
  serviceTitle: {
    marginBottom: theme.spacing(1),
    color: "black",
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
    margin: theme.spacing(4, 'auto'),
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
    marginBottom: theme.spacing(2),
},
formGroupLabelPetPrefs_:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    marginBottom: theme.spacing(0),
},
formGroup:{
    marginBottom: theme.spacing(0),
},
formGroupProfileSection:{
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(6),
},
imageSelector: {
    fontSize: "8rem",
    paddingLeft: theme.spacing(0),
},
selector:{
    paddingLeft: theme.spacing(0),
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
formGroup_: {
  display: 'block',
  marginRight: theme.spacing(2),
},
formGroup__: {
  display: 'flex'
}

}));

function PetPreferencesSection(props) {
  const classes = useStyles();

  const user_id = props.user.id;

  const [cat_,  setCat]   = React.useState(false);
  const [dog_,  setDog]   = React.useState(false);
  const [bird_, setBird]  = React.useState(false);

  const [small_,  setSmall]  = React.useState(false);
  const [medium_, setMedium] = React.useState(false);
  const [large_,  setLarge]  = React.useState(false);

  const handlecat = (e) => {
    const new_value = !cat_

    const object = {
      "pet_preference_1": new_value,
    }
    if(cat_ === true){
      setCat(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setCat(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }


   const handledog = (e) => {
    const new_value = !dog_

    const object = {
      "pet_preference_2": new_value,
    }
    if(dog_ === true){
      setDog(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setDog(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }

  const handlebird = (e) => {
    const new_value = !bird_

    const object = {
      "pet_preference_3": new_value,
    }
    if(bird_ === true){
      setBird(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setBird(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }

  const handleSmall = (e) => {
    const new_value = !small_

    const object = {
      "weight_preference_1": new_value,
    }
    if(small_ === true){
      setSmall(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setSmall(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }

  const handleMedium = (e) => {
    const new_value = !medium_

    const object = {
      "weight_preference_2": new_value,
    }
    if(medium_ === true){
      setMedium(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setMedium(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }

  const handleLarge = (e) => {
    const new_value = !large_

    const object = {
      "weight_preference_3": new_value,
    }
    if(large_ === true){
      setLarge(false);
      props.loadUser();
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }else{
      setLarge(true);
      props.sendUserData_pref(object, user_id)
      props.loadUser();
    }
  }

  React.useEffect(() => {
    // pet_preferences
    // cat 
    if(props.user.pet_preference_1 === false){
      setCat(false);
    }else{
      setCat(true);
    }
    // Dog
    if(props.user.pet_preference_2 === false){
      setDog(false);
    }else{
      setDog(true);
    }
    // Bird
    if(props.user.pet_preference_3 === false){
      setBird(false);
    }else{
      setBird(true);
    }

    // weight_preferences
    // small 
    if(props.user.weight_preference_1 === false){
      setSmall(false);
    }else{
      setSmall(true);
    }
    // medium
    if(props.user.weight_preference_2 === false){
      setMedium(false);
    }else{
      setMedium(true);
    }
    // large
    if(props.user.weight_preference_3 === false){
      setLarge(false);
    }else{
      setLarge(true);
    }
  }, []);


  React.useEffect(() => {
      props.loadUser();
      props.loadUser();
  }, []);
  

  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroup}>
            <FormLabel component="label" className={classes.formGroupLabelPetPrefs}>Tell us about your preferences</FormLabel>
            
               <FormGroup className={classes.formGroup_}>
                <FormLabel component="label" className={classes.formGroupLabelPetPrefs}>Pet preferences</FormLabel><br/>
                <FormControlLabel
                  control={<Checkbox 
                    checked={cat_} 
                    onChange={handlecat} 
                    name="cat" />}
                    label="Cat "
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={dog_} 
                    onChange={handledog} 
                    name="dog" />}
                  label="Dog"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={bird_} 
                    onChange={handlebird} 
                    name="bird" />}
                  label="Bird"
                />
              </FormGroup><br/>
              <FormGroup className={classes.formGroup__}>
                <FormLabel component="label" className={classes.formGroupLabelPetPrefs_}>Weight preferences</FormLabel>
                <FormControlLabel
                  control={<Checkbox 
                    checked={small_} 
                    onChange={handleSmall} 
                    name="small" />}
                  label="Small Pets (Up to 15 lbs)"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={medium_} 
                    onChange={handleMedium} 
                    name="medium" />}
                  label="Medium Pets (Between 16 to 50 lbs)"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={large_} 
                    onChange={handleLarge} 
                    name="large" />}
                  label="Large Pets (Over 50 lbs)"
                />
              </FormGroup>
          </FormGroup>
        </div>
       

      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
    error: state.errors,
    form: state.forms,
    user: state.auth.user,
    admin_pets: state.pets.pet_types,
    results: state.services.results,
    all_services: state.services.admin_services,
  });
  export default connect(mapStateToProps, {
    pet_preference,
    pet_preference_del,
    sendUserData_pref,
    loadUser
})(PetPreferencesSection);

