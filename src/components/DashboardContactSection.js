import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";


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
    display: "flex",
    textAlign: "left",
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
  gridSubsection: {
    marginBottom: theme.spacing(1),
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
          borderBottom: 'none',
      },
      "&::before": {
          borderBottom: 'none',
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

export default function ContactSection(props) {
  const classes = useStyles();

  // const [error_email, setError_email] = useState(false);
  
  // var mailFormat = /^([a-zA-Z0-9_\.\-!#$%&'*+/=?^`{|}~"(),:;<>[\]])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroupProfileSection}>
            <FormLabel component="label" className={classes.formGroupLabel}>Your Contact Information</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Phone Number*</FormLabel>
                <Input id="phone_number" defaultValue={props.phone_number} onChange={(e) => props.setPhone_number(e.target.value)} 
                autoComplete="new-password" disableUnderline fullWidth placeholder="Phone Number" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Alternative Phone Number</FormLabel>
                <Input id="alt_phone_number" defaultValue={props.alternate_phone_number} onChange={(e) => props.setAlternate_Phone_number(e.target.value)} 
                autoComplete="new-password" disableUnderline fullWidth placeholder="Alternative Phone Number" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Email Address</FormLabel>
                <Input id="email" type="email" value={props.email} disableUnderline fullWidth placeholder="Email Address" onChange={(e) => props.setEmail(e.target.value)} 
                autoComplete="new-password" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
            </Grid>
          </FormGroup>
          <FormGroup className={classes.formGroupProfileSection}>
            <FormLabel component="label" className={classes.formGroupLabel}>Emergency Contact Information</FormLabel>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Full Names</FormLabel>
                <Input onChange={(e) => {props.setEmergency_Contact_Name(e.target.value)}} id="emerg_contact_name" defaultValue={props.emergency_contact_name} 
                autoComplete="new-password" disableUnderline fullWidth placeholder="Full Names" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Phone Number</FormLabel>
                <Input onChange={(e) => {props.setEmergency_Contact_Phone_Number(e.target.value)}} id="emerg_phone_number" defaultValue={props.emergency_contact_phone_number} 
                autoComplete="new-password" disableUnderline fullWidth placeholder="Phone Number" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Email Address</FormLabel>
                <TextField 
                    onChange={(e) => {props.setEmergency_Contact_Email(e.target.value)}} 
                    id="emerg_email" 
                    defaultValue={props.emergency_contact_email} 
                    autoComplete="new-password" 
                    type="email" 
                    disableUnderline 
                    fullWidth 
                    placeholder="Email Address" 
                    inputProps={{ 'aria-label': 'description' }} 
                    className={classes.inputSmall} 
                  />
              </Grid>
            </Grid>
          </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}
