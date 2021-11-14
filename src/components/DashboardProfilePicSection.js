import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Dialog from "./Dialog.js";
import { sendUserData } from "../actions/form.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    flexGrow: 1,
    marginTop: theme.spacing(8),
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
  tagline: {
    float: "left",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    width: "90%",
    paddingLeft: theme.spacing(1),
    "& > label": {
      paddingLeft: theme.spacing(1),
      color: "#5A5A5A",
    },
  },
  bio: {
    float: "left",
    backgroundColor: "#fafafa",
    marginTop: theme.spacing(1),
    width: "90%",
    borderRadius: "10px",
    height: "auto!important",
    paddingLeft: theme.spacing(1),
    "& > label": {
      paddingLeft: theme.spacing(1),
      color: "#5A5A5A",
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
  headers: {
    color: "black",
  },
  root_: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4, 0),
    },
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    paddingLeft: theme.spacing(0),
  },
  small: {
    margin:  theme.spacing(3, 'auto', 0),
    display: "block",

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
      margin: theme.spacing(1, 'auto'),
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
  formGroup:{
      marginBottom: theme.spacing(3),
  },
  formGroupProfileSection:{
      marginTop: theme.spacing(2),
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
  }
}));

function BioSection(props) {
  const classes = useStyles();

  const { window, user } = props;
  const user_id = user.id;

  const [ photo, setPhoto ] = useState(null);
  const [ updating, setUpdating ] = useState(false);


  const upload = (e) =>  {
    document.getElementById("selectImage").click()
  }
  const upload_new = (e) =>  {
    setUpdating(true)
    document.getElementById("selectImage").click()
  }

   const setting = (image) =>  {
    if(image){
      setUpdating(true)
      setPhoto(image)
    }
  }


  React.useEffect(() => {
    if(photo !== null) {
      const uploadData = new FormData();
      uploadData.append('photo', photo, photo.name);

      const timer = sendReq(uploadData, user_id);
      return () => clearTimeout(timer);
      function sendReq(object, user_id) {
          const timer = setTimeout(() => {
          
          props.sendUserData(object, user_id);   
        }, 2000);
        return timer;
    } 
  }  
  }, [photo]);


  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
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
                            <Avatar className={classes.large} alt="profile picture" src={props.user.photo}/>
                             {/*<Button onClick={upload_new} className={classes.small} color="primary">
                              change
                            </Button>*/}
                          </div>
                          ):(
                          <div>
                            { photo ? 
                              (<div>
                                <Avatar className={classes.large} alt="profile picture" src={URL.createObjectURL(photo)}/>
                                 {/*<Button onClick={upload_new} className={classes.small} color="primary">
                                  change
                                </Button>*/}
                              </div>
                              )
                               :
                              (<div> 
                                <Skeleton variant="circle" className={classes.large}/>
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
                            <Avatar className={classes.large} alt="profile picture" src={URL.createObjectURL(photo)}/>
                          ) : 
                          (
                            <Avatar className={classes.large} onClick={upload}>
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
                      onChange={(e) => props.setFirstName(e.target.value)}
                      label=""
                      placeholder="First Name"
                      defaultValue={props.firstName}
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <Input 
                      fullWidth
                      disableUnderline
                      id="lastname"
                      onChange={(e) => props.setLastName(e.target.value)}
                      label=""
                      placeholder="Last Name"
                      defaultValue={props.lastName}
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Input 
                      fullWidth
                      disableUnderline
                      id="tagline"
                      onChange={(e) => props.setTaglin(e.target.value)}
                      label="Tagline"
                      placeholder="Write a short tagline about yourself"
                      defaultValue={props.tagline}
                      className={classes.input}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Input 
                      disableUnderline
                      fullWidth
                      onChange={(e) => props.setBio(e.target.value)}
                      multiline
                      rows={4}
                      id="about"
                      label="Bio"
                      placeholder="Tell us about yourself"
                      defaultValue={props.bio}
                      className={classes.input}
                      />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <FormLabel component="label" className={classes.formLabel}>Date of Birth</FormLabel>
                    <Input 
                        fullWidth
                        disableUnderline
                        onChange={(e) => props.setDob(e.target.value)}
                        id="date"
                        label="Date of Birth"
                        type="date"
                        defaultValue={props.user.date_of_birth}
                        placeholder="2000-01-01"
                        className={classes.inputSmall}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
  results: state.services.results,
  all_services: state.services.admin_services,
});
export default connect(mapStateToProps, {
  sendUserData,
})(BioSection);