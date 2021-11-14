import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { countryList, stateList } from "../actions/lists";
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
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

export default function AddressSection(props) {
  const classes = useStyles();
  const [service, setService] = React.useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <div>
          <FormGroup className={classes.formGroup}>
              <FormLabel component="label" className={classes.formGroupLabel}>Your address</FormLabel>
              <FormLabel component="label" className={classes.formLabel}>Address Line 1</FormLabel>
              <Input disableUnderline fullWidth id="address1" defaultValue={props.address_line_1} placeholder="Physical Address *" 
              autoComplete="new-password" inputProps={{ 'aria-label': 'description' }} className={classes.input} onChange={(e) => props.setAddress_Line1(e.target.value)}/>
          </FormGroup>
          <FormGroup className={classes.formGroup}>
              <FormLabel component="label" className={classes.formLabel}>Address Line 2</FormLabel>
              <Input id="address2" defaultValue={props.address_line_2} disableUnderline fullWidth placeholder="This can be your apartment number" 
              autoComplete="new-password" inputProps={{ 'aria-label': 'description' }} className={classes.input} onChange={(e) => props.setAddress_Line2(e.target.value)}/>
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>City</FormLabel>
                  <Input id="city" defaultValue={props.city} disableUnderline fullWidth placeholder="City" inputProps={{ 'aria-label': 'description' }} 
                  autoComplete="new-password" className={classes.inputSmall} onChange={(e) => props.setCity(e.target.value)}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>State</FormLabel>
                <FormControl className={classes.selectFormControl}>
                  <Select
                    name="state"
                    autoComplete="new-password"
                    disableUnderline
                    defaultValue={props.state}
                    onChange={(e) => props.setState(e.target.value)}
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
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Country</FormLabel>
                <FormControl className={classes.selectFormControl}>
                  <Select
                    autoComplete="new-password"
                    name="country"
                    disableUnderline
                    defaultValue={props.country}
                    onChange={(e) => props.setCountry(e.target.value)}
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
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="label" className={classes.formLabel}>Zip/Postal code</FormLabel>
                <Input onChange={(e) => props.setZipcode(e.target.value)} id="zip_code" defaultValue={props.zipcode} disableUnderline 
                autoComplete="new-password" fullWidth placeholder="Zip / Postal / Post code" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} />
              </Grid>
            </Grid>
          </FormGroup>
        </div>
      </Container>
    </Paper>
  );
}
