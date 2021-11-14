import React, { useState } from 'react';
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import FolderIcon from '@material-ui/icons/Folder';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";

import { DropzoneDialog } from "material-ui-dropzone";

import { useDispatch } from "react-redux";
import { loadUser } from "../actions/auth.js";

import {
  sendUserData,
  sendCertificate,
  getCertificate,
  deleteCertificate,
  user_editing,
  clear_error
} from "../actions/form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),

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
  dropzone: {
    marginTop: theme.spacing(1),
  },
  cardContainer: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(0, 0, 1),
  },
  cardRoot: {
    maxWidth: 245,
  },
  media: {
    height: 0,
    borderRadius: '5px',
    paddingTop: "56.25%", // 16:9
  },
  delete: {
    marginLeft: "auto",
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
    margin: theme.spacing(0, 'auto', 1),
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
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    lineHeight: '2.5em',
},
formLabelPetExperience_:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    lineHeight: '2.5em',
    marginLeft: theme.spacing(2),
},
formGroupLabel:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    margin: theme.spacing(3, 0, 1),
},
formGroupLabelPetPrefs:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    marginBottom: theme.spacing(4),
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
buttonCertificate:{
  margin: theme.spacing(2, 0, 1),
  backgroundColor: '#FF3D00!important',
},
fieldSetRadio:{
    marginLeft: theme.spacing(1),
},
adornment:{
    "& p":{
        fontSize: '13px',
    },
},
cardHeader:{
  "& span":{
    fontSize: '14px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '225px',
  },
},
}));

function DashboardPetExperienceWizard(props) {
  const classes = useStyles();

  const user_id = props.user.id;

  
  // React.useEffect(() => {
  //   if (years !== "") {
  //     const object = {
  //       experience_years: years,
  //     };
  //     const timer = sendReq(object, user_id);
  //     return () => clearTimeout(timer);
  //   }
  // }, [years]);

  
  // React.useEffect(() => {
  //   if (months !== "") {
  //     const object = {
  //       experience_months: months,
  //     };
  //     const timer = sendReq(object, user_id);
  //     return () => clearTimeout(timer);
  //   }
  // }, [months]);

  const [years,  setYears]     = useState(props.user.experience_years);
  const [months, setMonths]    = useState(props.user.experience_months);
  const [edited, setEdited ]   = useState(false);

  React.useEffect(() => {
    if(props.form.signal_save === true){
     // if(years && months){
        // console.log("Save data")
        const object = {
          experience_years: years,
          experience_months: months,
        };
        const timer = sendReq(object, user_id);
        return () => clearTimeout(timer);
     // }
    }
  }, [years, months, props.form.signal_save]);

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
  //   if(years && months){
  //       console.log(years)
  //       console.log(months)
  //     }
  // }, [years && months]);



  React.useEffect(() => {
    if (props.form.fetch === true) {
      props.loadUser();
    }
  }, [props.form.fetch]);

  const dispatch = useDispatch();
  function sendReq(data, user_id) {
    const timer = setTimeout(() => {
      dispatch(sendUserData(data, user_id));
    }, 2000);

    return timer;
  }

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();
      props.clear_error();
  }, []);

    const [count, setCount] = useState([]);
  const [openDropzone, setOpenDropzone] = React.useState(false);
  const certificateResults = props.certificates;

  function loadCertificate() {
    let x;
    do {
      if (count === undefined || certificateResults < 1) {
        x = 500;
        setTimeout(() => {
          props.getCertificate();
        }, x);
      }
      x = x + 500;
    } while (x > 10000);
  }
 // loadCertificate();

  function handleDropzoneChange(e) {
    setCount(e.length);

    if (e[count] !== undefined) {
      props.sendCertificate(e[count]);
    }
    setTimeout(() => {
      props.getCertificate();
    }, 500);
  }



  return (
   <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroup}>
            <FormLabel component="label" className={classes.formGroupLabel}>Pet experience</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Years</FormLabel>
                  <Input 
                  onChange={(e) => {
                    setYears(e.target.value)
                     setEdited(true)
                  }}
                  id="years" 
                  defaultValue={props.user.experience_years}
                  disableUnderline 
                  fullWidth
                  placeholder="0" 
                  type="number"
                  inputProps={{ 'aria-label': 'description' }} 
                  endAdornment={<InputAdornment position="start" className={classes.adornment}>Year(s)</InputAdornment>}
                  className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Months</FormLabel>
                  <Input 
                  onChange={(e) => {
                    setMonths(e.target.value)
                    setEdited(true)
                  }}
                  id="months"
                  defaultValue={props.user.experience_months}
                  disableUnderline 
                  fullWidth
                  placeholder="0" 
                  type="number"
                  inputProps={{ 'aria-label': 'description' }} 
                  endAdornment={<InputAdornment position="start" className={classes.adornment}>Month(s)</InputAdornment>}
                  className={classes.inputSmall} />
              </Grid>
            </Grid>
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <Grid item xs={12} className={classes.dropzone}>
              <FormLabel component="label" className={classes.formLabelPetExperience}>Do you have any professional certificates working with pets?</FormLabel>
              <div>
                <Button className={classes.buttonCertificate} variant="contained" color="primary" onClick={() => setOpenDropzone(true)}>
                  Add Certificate
                </Button>
                <FormLabel component="label" className={classes.formLabelPetExperience_}>Add certificate as an image</FormLabel>
                <DropzoneDialog
                acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                onChange={(e) => handleDropzoneChange(e)}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={10000000}
                open={openDropzone}
                onClose={() => setOpenDropzone(false)}
                onSave={(files) => {
                  //console.log('Files:', files);
                  handleDropzoneChange(files);
                  setOpenDropzone(false);
                }}
                //showPreviews={true}
                //showFileNamesInPreview={true}
                />
              </div>
            </Grid>
            <FormLabel component="label" className={classes.formGroupLabel}>Certificates Submitted</FormLabel>
            <Grid
            container
            spacing={2}
            className={classes.cardContainer}
            >
              {certificateResults !== null && certificateResults !== undefined
                ? certificateResults.map((certificate) =>
                    certificate.certificate !== null ? (
                      <Grid item xs={12} sm={6} md={4} key={certificate.id} >
                        <Card className={classes.cardRoot}>
                          <CardMedia
                            className={classes.media}
                            image={certificate.certificate}
                            title={certificate.certificate
                              .substring(63)
                              .split("?")
                              .shift()}
                          />
                          <CardActions disableSpacing>
                            <IconButton aria-label="download">
                              <ArrowDownwardIcon />
                            </IconButton>
                            <IconButton
                              className={classes.delete}
                              aria-label="delete"
                            >
                              <DeleteIcon
                                onClick={() => {
                                  props.deleteCertificate(certificate.id);
                                  setTimeout(() => {
                                    props.getCertificate();
                                  }, 1000);
                                }}
                              />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    ) : (
                      <Grid item xs={12} sm={6} md={4} key={certificate.id}>
                        <Card className={classes.cardRoot}>
                          <CardHeader
                            title="No Name"
                            subheader={certificate.created.split("T").shift()}
                          />
                          <CardMedia
                            className={classes.media}
                            image={certificate.certificate}
                            title="No Name"
                          />
                          <CardActions disableSpacing>
                            <IconButton aria-label="download">
                              <ArrowDownwardIcon />
                            </IconButton>
                            <IconButton
                              className={classes.delete}
                              aria-label="delete"
                            >
                              <DeleteIcon
                                onClick={() =>
                                  props.deleteCertificate(certificate.id)
                                }
                              />
                            </IconButton>
                          </CardActions>
                        </Card>
                      </Grid>
                    )
                  )
                : ""}
            </Grid>
            
          </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
	user: state.auth.user,
    token: state.auth.token,
    certificates: state.certificates.results,
    error: state.errors,
    form: state.forms,
    results: state.services.results,
    all_services: state.services.admin_services,
  });
  export default connect(mapStateToProps, {
    sendUserData,
    loadUser,
    sendCertificate,
    getCertificate,
    deleteCertificate,
    user_editing,
    clear_error
  })(DashboardPetExperienceWizard);

