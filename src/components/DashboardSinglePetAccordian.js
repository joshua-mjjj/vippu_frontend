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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Skeleton from '@material-ui/lab/Skeleton';
import { 
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  deinit_fetch,
  user_update_pet
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
    // backgroundColor: "rgba(0, 0, 0, .03)",
    backgroundColor: "#BEE2BD",
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
  button: {
    backgroundColor: "#b53f3fbd",
    float: 'right',
    margin: theme.spacing(0, 0, 1),
  },
  submitButton: {
    backgroundColor: "#663399",
    marginLeft: theme.spacing(2),
    float: 'right',
  },
  inputSelect:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    width: '100%',
    "&::after": {
        borderBottom: '1px solid #949494',
    },
},
 inputSkeleton:{
    fontSize: '13px',
    color: '#1b1f23',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
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
  formGroup:{
      marginBottom: theme.spacing(3),
  },
}));

function DashboardSinglePetAccordian(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const [pet_updating, setPet_updating] = React.useState(props.pet.id);
  const [pet_name, setPet_name] = React.useState("");
  const [name, setName] = React.useState(props.pet.name);
  const [gender, setGender] = React.useState(props.pet.gender);
  const [age, setAge]  = React.useState(props.pet.age);
  const [color, setColor]    = React.useState(props.pet.color);
  const [breed, setBreed]    = React.useState(props.pet.breed);
  const [size, setSize]     = React.useState(props.pet.size);
  const [pet_type, setPet_type] = React.useState(props.pet.pet_type);
  // const [owner_name_cat, setOwner_name_cat] = React.useState(false);
  // const [owner_name_dog, setOwner_name_dog] = React.useState(false);
  const [pet_cat, setPet_cat] = React.useState(false);
  const [pet_dog, setPet_dog] = React.useState(false);

  const handleSubmit_update = (e) => {
    let send_id;
    const user_id = props.user.id;
    const pet_ = props.admin_pets.filter((pet) => {
        if(pet.name === pet_type){
           send_id = pet.id;
        }
      });
     props.user_update_pet(name, gender, age, color, breed, size, send_id, user_id, pet_updating)
     // props.clear_state_pets();
     const usid = props.user.id;
     props.getPetData(usid);
     props.getPetData(usid);
     // props.clear_state_pets();
     props.fetch_again();
     props.getPetData(usid);
     props.getPetData(usid);
    
  }

   React.useEffect(() => {
    const id = props.user.id;
    props.getPetData(id);
  }, []);

   React.useEffect(() => {
    if(props.admin_pets !== null && props.pet.pet_type !== null){
      const get_pet = props.admin_pets.filter((pet) => pet.id === pet_type);
      setPet_name(get_pet[0].name);
  }
  }, [props.admin_pets, props.pet.pet_type]);

  React.useEffect(() => {
    if(pet_type === 2){
      // console.log(pet_type)
      setPet_cat(true)
    }else if(pet_type === 1){
      setPet_dog(true)
    }
  }, [pet_type]);

  //   React.useEffect(() => {
  //       // breeds_types
  //       // breeds_cats
  //     if(props.breeds_types !== null && props.pet.breed !== null){
  //       const get_breed = props.breeds_types.filter((pet) => pet === props.pet.breed);
  //      //  console.log(get_breed.length)
  //       if(get_breed.length === 0){
  //         setOwner_name_dog(true)
  //       }else {
  //         setOwner_name_dog(false)
  //       }
  //     }
  //       // console.log(props.pet.breed)
  //       // console.log(props.pet.pet_type)
  // }, [props.breeds_types, props.pet.breed]);

  //   React.useEffect(() => {
  //       // breeds_types
  //       // breeds_cats
  //     if(props.breeds_cats !== null && props.pet.breed !== null){
  //       console.log(props.pet.breed)
  //       const get_breed = props.breeds_cats.filter((pet) => pet === props.pet.breed);
  //       console.log(get_breed.length)
  //       console.log(get_breed)

  //       if(get_breed.length === 0){
  //         setOwner_name_cat(true)
  //       }
  //       // if(get_breed.length >= 1) {
  //       //   setOwner_name_cat(false)
  //       // }
  //     }
  //       // console.log(props.pet.breed)
  //       // console.log(props.pet.pet_type)
  // }, [props.breeds_cats, props.pet.breed]);


   React.useEffect(() => {
    if(props.fetch === true) {
      const usid = props.user.id;
      props.getPetData(usid);
      props.deinit_fetch();
    }   
  }, [props.fetch]);

  const user_delet_pet = (id) => {
    props.user_delete_pet(id);
    const usid = props.user.id;
    setTimeout(() => {
      props.fetch_again();
      props.getPetData(usid);
    }, 500);
  };

  return (
    <div className={classes.parentDiv}>
      { props.pet !== null ? (
      <div>
        <Accordion
          className={classes.accordion}
          key={props.pet.id}
          square
          expanded={expanded === `panel${props.pet.id}`}
          onChange={handleChange(`panel${props.pet.id}`)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
             <Typography>{props.pet.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={5} xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="name"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={props.pet.name}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                <Grid item sm={3} xs={12}>
                  <TextField
                    id="Age"
                    label="Age"
                    name="age"
                    type="number"
                    min="1" 
                    defaultValue={props.pet.age}
                    onChange={(e) => setAge(e.target.value)}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    id="color"
                    label="Color"
                    onChange={(e) => setColor(e.target.value)}
                    defaultValue={props.pet.color}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
             
                 <Grid item sm={4} xs={12}>
                    <div>
                      {
                        props.api_name === true  && pet_dog ? 
                        (
                          <div>
                           {props.breeds_types !== null && props.breeds_types !== undefined && props.breeds_types !== 0 ? (
                           <Select
                              onChange={(e) => setBreed(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              defaultValue={props.pet.breed}
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
                        ) : (
                           <Grid item xs={12} md={12} sm={12}>
                            <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                          </Grid>
                      )}
                          </div>
                    ) : 
                    ("")
                   }
                    
                   {
                      props.api_name === true && pet_cat ? 
                        (
                          <div>
                          {props.breeds_cats !== null && props.breeds_cats !== undefined && props.breeds_cats !== 0 ? (
                            <Select
                              onChange={(e) => setBreed(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              value={breed}
                              defaultValue={props.pet.breed}
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
                        ) : (
                           <Grid item xs={12} md={12} sm={12}>
                            <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                          </Grid>
                      )}
                          </div>
                    ) : 
                    ("")
                   }
                   {
                      props.api_name === false ? 
                        (
                          <div>
                          <TextField
                            id="breed"
                            name="breed"
                            label="Breed"
                            onChange={(e) => setBreed(e.target.value)}
                            defaultValue={props.pet.breed}
                            className={classes.line}
                            InputProps={{ classes: { underline: classes.underline } }}
                          />
                         </div>
                            ) : 
                            ("")
                           }
                    </div>
                 
                      {/*props.breeds_types !== null && props.breeds_types !== undefined && props.breeds_types !== 0 ? (
                           <Select
                              onChange={(e) => setBreed(e.target.value)}
                              disableUnderline
                              displayEmpty
                              fullWidth
                              defaultValue={props.pet.breed}
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
                        ) : (
                           <Grid item xs={12} md={12} sm={12}>
                            <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
                          </Grid>
                      )*/}
                    </Grid>
                <Grid item sm={2} xs={12}>
                  <TextField
                    id="size"
                    label="Size"
                    type="number"
                    defaultValue={props.pet.size}
                    onChange={(e) => setSize(e.target.value)}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid> 
                 <Grid item xs={12} sm={3}>
                 { props.admin_pets !== null ? (
                    <div>
                      <Select
                          onChange={(e) => setPet_type(e.target.value)}
                          disableUnderline
                          displayEmpty
                          value={props.admin_pets[props.pet.pet_type-1].name}   // immutable
                          fullWidth
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
                    
                    </div>
                  ) 
                    : (null)
                  }
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Select
                      onChange={(e) => setGender(e.target.value)}
                      disableUnderline
                      displayEmpty
                      fullWidth
                      value={gender}  // immutable
                      className={classes.inputSelect}
                      inputProps={{
                          "aria-label": "Select Pet",
                      }}
                      >
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                   <Button
                      variant="contained"
                      //disabled={disabl_}
                      color="primary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      onClick={handleSubmit_update}
                      className={classes.submitButton}
                    >
                    {"Update"}
                  </Button>
                  <Button
                      variant="contained"
                      //disabled={disabl_}
                      color="secondary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      onClick={(e) => user_delet_pet(props.pet.id)}
                      className={classes.button}
                    >
                    {"Delete"}
                    </Button>
                </Grid> 
            </Grid>
           </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
      ) : (
        <div>
          <Skeleton variant="rect" width="100%" className={classes.accordion} height="3em"/>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  fetch: state.pets.fetch,
  types: state.pets.pet_types,
  loading: state.pets.isLoading,
  error: state.errors,
  form: state.forms,
  progress: state.services.progress,
  pets: state.pets.pets,
  admin_pets: state.pets.pet_types,
  breeds_types: state.pets.breeds,
  breeds_cats: state.pets.breeds_cats,
});

export default connect(mapStateToProps, {
  getPetData, 
  user_delete_pet,
  clear_state_pets,
  init_fetch,
  deinit_fetch,
  user_update_pet
})(DashboardSinglePetAccordian);
