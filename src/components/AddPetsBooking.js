import React, { useState } from "react";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PetViewSection from "./DashboardViewPetSection_";
import Spinner from "./Spinner";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';

import Alert from "@material-ui/lab/Alert";
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { loadUser } from "../actions/auth.js";
import { createMessage } from "../actions/messages";
import { clear_error } from "../actions/form";
import { useDispatch } from "react-redux";

import {
  user_create_pet,
  getPetTypes,
  clear_state,
  init_fetch,
  deinit_fetch,
  getPetData,
  get_breeds
} from "../actions/form.js";

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
    marginLeft: theme.spacing(1),
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
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(5),
  },
  dropzone: {
    marginTop: theme.spacing(4),
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
  wizardContainer:{
      margin: theme.spacing(4, 'auto', 12),
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
  formGroupLabel:{
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.7)',
      fontWeight: '600',
      marginBottom: theme.spacing(2),
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
  formGroup:{
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(2),
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
      marginTop: theme.spacing(2),
      backgroundColor: '#FF3D00!important',
     // borderRadius: '10px',
      "&:hover": {
           backgroundColor: '#FF3D0020!important',
          }
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
  showPetSection:{
    marginTop: theme.spacing(1),
  },
  addPetSection:{
    marginTop: theme.spacing(1),
  },
  inputSkeleton_:{
    marginTop: theme.spacing(4),
  },
  buttonForm: {
    marginTop: '20px',
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
  }
}));

function DashboardAddPetSectionWizard(props) {
  const classes = useStyles();

  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge]  = React.useState("");
  const [color, setColor]    = React.useState("");
  const [breed, setBreed]    = React.useState("");
  const [size, setSize]     = React.useState("");
  const [pet_type, setPet_type] = React.useState("");

  const [open, setOpen] = React.useState(true);
  const [dog, setDog] = React.useState(false);
  const [cat, setCat] = React.useState(false);
  const [not_exist, setNot_exist] = React.useState(false);
  const [disable, setDisable] = React.useState(true);

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();  
  }, []);

  const clearState = () => {
    setName("");
    setGender("");
    setAge("");
    setColor("");
    setBreed("");
    setSize("");
    setPet_type("");
  }

  // posting, getting
  React.useEffect(() => {
    const id = props.user.id;
    props.getPetTypes();
    props.getPetTypes();
  }, []);

  React.useEffect(() => {
      const usid = props.user.id;
      props.getPetData(usid);
      props.getPetData(usid); 
  }, []);

  React.useEffect(() => {
    if(props.fetch === true) {
      const usid = props.user.id;
      props.getPetData(usid);
      props.getPetData(usid);
      props.deinit_fetch();
    }   
  }, [props.fetch]);

  React.useEffect(() => {
    props.get_breeds();
  }, []);

   React.useEffect(() => {
    if(name && gender && age && color && breed && size && pet_type) {
      setDisable(false) 
    }    
  }, [name, gender, age, color, breed, size, pet_type]);

   React.useEffect(() => {
    if(pet_type){
       if(pet_type === 'Dog' && not_exist === false){
          // console.log("Dogggg")
           setDog(true)
           setCat(false)
           setNot_exist(false)
       }else if(pet_type === 'Cat' && not_exist === false){
           setDog(false)
           setCat(true)
           setNot_exist(false)
          // console.log("Cattttt")
     }
    }
  }, [pet_type]);

  const dispatch = useDispatch(); 
  const handleSubmit = (e) => {
     let send_id;
     if(age < 0){
       dispatch(createMessage("Please provide a valid age."));
       return;
     }
     if(size < 0){
        dispatch(createMessage("Please provide a valid size."));
       return;
     }
     if (name && gender && age && color && breed && size && pet_type) {
      const pet_ = props.admin_pets.filter((pet) => {
        if(pet.name === pet_type){
          send_id = pet.id;
        }
      });
      const user_id = props.user.id;
      props.init_fetch();
      props.user_create_pet(name, gender, age, color, breed, size, send_id, user_id)
      const usid = props.user.id;
      props.getPetData(usid);
      props.getPetData(usid);
      setDisable(false)
      clearState();
      const timer = setTimeout(() => {
        setShow_form(false);
      }, 1500);
    }
  }

  const breed_not_found = () => {
    // console.log("Not found")
     setNot_exist(true)
  }
  const find_breed = () => {
     // console.log("Not found")
     setNot_exist(false)
    // console.log(pet_type)
      if(pet_type === 'Dog'){
          // console.log("sett")
           setDog(true)
           setCat(false)
       }
       if(pet_type === 'Cat'){
           setDog(false)
           setCat(true)
          // console.log("dett")
     }
  }
  
 

  const fetch_again = (e) => {
     props.init_fetch();
     props.init_fetch();
  }

  let results = null;
  if (
    props.pets !== undefined &&
    props.pets !== null &&
    props.pets.results !== undefined
  ) {
    results = props.pets.results;
  }

  const [show_form, setShow_form] = React.useState(false);

  const set_show_form = () => {
    setShow_form(true);
  }

  const toggle = () => {
    setShow_form(false);
  }

  let alert;
  if (props.messages.notify_timeout !== null) {
    alert = (
      <div className="alerts">{props.messages.notify_timeout}</div>
    )
  }

  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.addPetSection}>
        {results !== null && results !== undefined && results.length !== 0 ? (
            <div className={classes.showPetSection}>
              <Typography ><span className={classes.titleBlock}>Your Pet(s)</span></Typography>
              <PetViewSection pets={results} fetch_again={fetch_again} />
            </div>
          ) : (
            ""
        )}
      </Container>
      {
        show_form === true ? 
        (
          <Container maxWidth="md" className={classes.addPetSection}>
            { props.admin_pets !== null ? (

              <div>
               {
                not_exist ? 
                (
                  <div>
                    <FormGroup className={classes.formGroup}>

                      <Typography component="label" className={classes.titleBlock}>Add a pet</Typography>
                       <Collapse in={open}>
                          <Alert
                            severity={"info"}
                            action={
                              <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                  setOpen(false);
                                }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }>
                            {"We are sorry your breed wasn't on the list, please fill in your breed."}
                          </Alert>
                        </Collapse>
                      <Grid container spacing={4}>
                
                        <Grid item xs={12} md={4}>
                          <FormLabel component="label" className={classes.formLabel}>Select Pet</FormLabel>
                          <Select
                              onChange={(e) => setPet_type(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              value={pet_type}
                              className={classes.inputSelect}
                              inputProps={{
                                  "aria-label": "Select Pet",
                              }}
                              >
                              {props.admin_pets.map((p, i) => (
                                  <MenuItem value={p.name} key={i}>
                                  {p.name}
                                  </MenuItem>
                              ))}
                          </Select>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Name</FormLabel>
                          <Input id="name"  value={name} disableUnderline placeholder="Name" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Age</FormLabel>
                          <Input id="Age"  value={age} min="0" disableUnderline type="number" fullWidth placeholder="Age" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setAge(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Colour</FormLabel>
                          <Input id="color"  value={color} disableUnderline placeholder="Colour" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setColor(e.target.value)}/>
                        </Grid>
                         <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Gender</FormLabel>
                          <Select
                              onChange={(e) => setGender(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              value={gender}
                              className={classes.inputSelect}
                              inputProps={{
                                  "aria-label": "Select Pet",
                              }}
                              >
                              <MenuItem value="female">Female</MenuItem>
                              <MenuItem value="male">Male</MenuItem>
                          </Select>
                            
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Size (Pounds)</FormLabel>
                          <Input id="size"  value={size} min="0" disableUnderline type="number" fullWidth placeholder="Size" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setSize(e.target.value)}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                        <FormLabel component="label" className={classes.formLabel}>Breed{" "}
                           <Link  style={{ 'textDecoration': 'none', 'color': 'blue'}}>
                            (<span onClick={find_breed}>find breed</span>)
                          </Link>
                        </FormLabel>
                        <Input id="breed"  value={breed} disableUnderline placeholder="Breed" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setBreed(e.target.value)}/>
                      </Grid>
                       
                  </Grid>
                </FormGroup>
              </div>
                ) 
                : 
                (
                   <div>
                    <FormGroup className={classes.formGroup}>
                      <FormLabel component="label" className={classes.formGroupLabel}>Add a pet</FormLabel>
                      <Grid container spacing={4}>
                
                        <Grid item xs={12} md={4}>
                          <FormLabel component="label" className={classes.formLabel}>Select Pet</FormLabel>
                          <Select
                              onChange={(e) => setPet_type(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              value={pet_type}
                              className={classes.inputSelect}
                              inputProps={{
                                  "aria-label": "Select Pet",
                              }}
                              >
                              {props.admin_pets.map((p, i) => (
                                  <MenuItem value={p.name} key={i}>
                                  {p.name}
                                  </MenuItem>
                              ))}
                          </Select>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Name</FormLabel>
                          <Input id="name"  value={name} disableUnderline placeholder="Name" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setName(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Age</FormLabel>
                          <Input id="Age"  value={age} disableUnderline type="number" fullWidth placeholder="Age" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setAge(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Colour</FormLabel>
                          <Input id="color"  value={color} disableUnderline placeholder="Colour" fullWidth inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setColor(e.target.value)}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Gender</FormLabel>
                          <Select
                              onChange={(e) => setGender(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              value={gender}
                              className={classes.inputSelect}
                              inputProps={{
                                  "aria-label": "Select Pet",
                              }}
                              >
                              <MenuItem value="female">Female</MenuItem>
                              <MenuItem value="male">Male</MenuItem>
                          </Select>
                            
                        </Grid>
                    
                        <Grid item xs={12} sm={4}>
                          <FormLabel component="label" className={classes.formLabel}>Size (Pounds)</FormLabel>
                          <Input id="size"  value={size} disableUnderline type="number" fullWidth placeholder="Size" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} onChange={(e) => setSize(e.target.value)}/>
                        </Grid>
                    

                      <Grid item xs={12} md={8}>
                         {
                          dog ? ( 
                                  <FormLabel component="label" className={classes.formLabel}>Select breed{" "}
                                     <Link  style={{ 'textDecoration': 'none', 'color': 'blue', 'fontSize' : '13px'}}>
                                      (<span style={{'fontSize' : '10px'}} onClick={breed_not_found}>Didn't find your Dog breed?</span>)
                                    </Link>
                                  </FormLabel>
                            ) : ("")
                         }
                         {
                           cat ? ( 
                                  <FormLabel component="label" className={classes.formLabel}>Select breed {" "}
                                     <Link  style={{ 'textDecoration': 'none', 'color': 'blue'}}>
                                      (<span style={{'fontSize' : '10px'}} onClick={breed_not_found}>Didn't find your Cat breed?</span>)
                                    </Link>
                                  </FormLabel>
                            ) : ("")
                         }
                          {props.breeds_types !== null && props.breeds_cats !== null && props.breeds_types !== undefined && props.breeds_types !== 0 ? (
                            <div>
                            {
                              dog ? 
                              (
                                <Select
                                  onChange={(e) => setBreed(e.target.value)}
                                  disableUnderline
                                  displayEmpty
                                  fullWidth
                                  value={breed}
                                  className={classes.inputSelect}
                                  inputProps={{
                                      "aria-label": "Select breed",
                                  }}
                                  >
                                  {props.breeds_types.map((p, i) => (
                                      <MenuItem value={p} key={i}>
                                      {p}
                                      </MenuItem>
                                  ))}
                                  
                              </Select>

                              ) : 
                              ( "")
                            }
                            {
                              cat ? 
                              (
                                 <Select
                                  onChange={(e) => setBreed(e.target.value)}
                                  disableUnderline
                                  displayEmpty
                                  fullWidth
                                  value={breed}
                                  className={classes.inputSelect}
                                  inputProps={{
                                      "aria-label": "Select breed",
                                  }}
                                  >
                                  {props.breeds_cats.map((p, i) => (
                                      <MenuItem value={p} key={i}>
                                      {p}
                                      </MenuItem>
                                  ))}
                                  
                              </Select>

                              ) : 
                              ( "" )
                            } 
                            {
                              !dog && !cat ? 
                              (
                                <div>
                                   <FormLabel component="label" className={classes.formLabel}>Breed</FormLabel>
                                    <Input id="size"  value={breed} disableUnderline fullWidth placeholder="Breed" 
                                       inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} 
                                       onChange={(e) => setBreed(e.target.value)}/>
                                </div>
                              ) : 
                              ("")
                            }

                            </div>
                            ) : (
                               <Grid item xs={12} md={12} sm={12}>
                                <Skeleton variant="rect" width="100%" className={classes.inputSkeleton_} height="3em"/>
                              </Grid>
                          )}
                        </Grid>
                  </Grid>
                </FormGroup>
              </div>
                )
               }   
          </div>
          ) : (
            <div>
              <FormGroup className={classes.formGroup}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <FormLabel component="label" className={classes.formLabel}>Select Pet</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <FormLabel component="label" className={classes.formLabel}>Name</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormLabel component="label" className={classes.formLabel}>Age</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormLabel component="label" className={classes.formLabel}>Colour</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <FormLabel component="label" className={classes.formLabel}>Breed</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Size</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormLabel component="label" className={classes.formLabel}>Gender</FormLabel>
                    <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                  </Grid>
                </Grid>
              </FormGroup>
            </div>
          )}

          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>

                {
                   props.messages.notify_timeout ? 
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
                
                <Grid >
                  <Grid item xs={12}>
                     <Grid item xs={12} spacing={2}>
                        <Button
                          disabled={disable}
                          variant="contained"
                          color="primary"
                          style={{maxWidth: '100px', maxHeight: '35px', minWidth: '100px', minHeight: '35px'}}
                          onClick={handleSubmit}
                          className={classes.button}
                        >
                           {props.progress ? <Spinner /> : "Add pet"}
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{maxWidth: '100px', maxHeight: '35px', minWidth: '100px', minHeight: '35px', float : 'right' }}
                          onClick={toggle}
                          // className={classes.button}
                        >
                           {"Cancel"}
                        </Button>
                  </Grid>
                </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        ) : 
        (
        <Grid item xs={12} sm={6} style={{ marginLeft: '50px'}} >
          <button onClick={set_show_form} className={classes.buttonForm} type="button">
              Add new+
          </button> 
        </Grid>
        )
      }
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.errors,
  form: state.forms,
  user: state.auth.user,
  fetch: state.pets.fetch,
  messages: state.messages,
  progress: state.services.progress,
  pets: state.pets.pets,
  admin_pets: state.pets.pet_types,
  all_services: state.services.admin_services,
  breeds_types: state.pets.breeds,
  breeds_cats: state.pets.breeds_cats,
});

export default connect(mapStateToProps, {
  user_create_pet,
  getPetTypes,
  clear_state,
  clear_error,
  createMessage,
  init_fetch,
  loadUser,
  deinit_fetch,
  getPetData,
  get_breeds
})(DashboardAddPetSectionWizard);