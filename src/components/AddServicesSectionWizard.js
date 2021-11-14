import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Skeleton from '@material-ui/lab/Skeleton';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import DashboardViewServiceSection from "./DashboardViewServiceSection.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import Spinner from "./Spinner";
import { loadUser } from "../actions/auth.js";

import {
  getServiceData,
  get_all_services,
  user_create_service,
  user_delete_service,
  get_all_rates,
  init_fetch,
  deinit_fetch,
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
  helpText2: {
    height: "100%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    color: "blue",
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
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(5),
  },
  submitButton: {
     backgroundColor: '#FF3D00!important',
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
      color: 'white',
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
  addServiceSection:{
    marginTop: theme.spacing(3),
  },
  showServiceSection:{
    marginTop: theme.spacing(1),
  },
}));


function AddServicesSectionWizard(props){
  const classes = useStyles();

  const [service, setService] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [rate_id, setRate_id] = React.useState("");
  const [description, setDescription] = React.useState("");

  const clearState = () => {
    setService("");
    setPrice("");
    setDescription("");
    setRate_id("");
    
  }

  React.useEffect(() => {
      props.loadUser();
      props.loadUser();  
  }, []);

  React.useEffect(() => {
    const id = props.user.id;
    props.getServiceData(id);
    props.getServiceData(id);
  }, []);

  // posting, getting
  React.useEffect(() => {
    const id = props.user.id;
    props.get_all_services();
    props.get_all_rates();
  }, []);

  React.useEffect(() => {
    if(props.fetch === true) {
      const usid = props.user.id;
      props.getServiceData(usid);
      props.deinit_fetch();
    }   
  }, [props.fetch]);

  const handleSubmit = (e) => {
      if (service !== "" && price !== "" && rate_id !== "") {
        const ser = props.all_services.filter((serv) => serv.name === service);
        const send_id = ser[0].id;
        const user_id = props.user.id;
        props.init_fetch();
        props.user_create_service(description, price, user_id, send_id, rate_id)
        const id = props.user.id;
        props.getServiceData(id);
        props.getServiceData(id);
        clearState()
    }
  }

  let results = null;
  if (
    props.services !== undefined &&
    props.services !== null &&
    props.services.results !== undefined
  ) {
    results = props.services.results;
  }

    return(
        <div>
            <Paper className={classes.root} elevation={0}>
	      <Container maxWidth="md" className={classes.wizardContainer}>
	        {results !== null && results !== undefined && results.length !== 0 ? (
	          <div className={classes.showServiceSection}>
	            <FormLabel component="label" className={classes.formGroupLabel}>Services</FormLabel>
	            <DashboardViewServiceSection services={results} />
	          </div>
	          ) : (
	          ""
	        )}
	        {props.all_services !== null ? (
	        <div className={classes.addServiceSection}>
	         <div>
	            <FormGroup className={classes.formGroup}>
	              <FormLabel component="label" className={classes.formGroupLabel}>Add services you offer</FormLabel>
	              <Grid container spacing={2}>
	                <Grid item xs={12} sm={4}>
	                  <FormLabel component="label" className={classes.formLabel}>Select service</FormLabel>
	                  <Select
	                    onChange={(e) => setService(e.target.value)}
	                    disableUnderline
	                    fullWidth
                      value={service}
	                    autoComplete="new-password"
	                    displayEmpty
	                    className={classes.inputSelect}
	                    inputProps={{
	                        "aria-label": "Select Service",
	                    }}
	                    >
	                    {props.all_services.map((p, i) => (
	                      <MenuItem value={p.name} key={i}>
	                        {p.name}
	                      </MenuItem>
	                    ))}
	                  </Select>
	                </Grid>
	                <Grid item xs={12} sm={4}>
	                  <FormLabel component="label" className={classes.formLabel}>Price</FormLabel>
	                  <Input 
	                  onChange={(e) => setPrice(e.target.value)}
	                  disableUnderline 
	                  fullWidth
                    value={price}
	                  autoComplete="new-password"
	                  placeholder="0"
	                  type="number"
	                  min="1" 
	                  inputProps={{ 'aria-label': 'description' }} 
	                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
	                  className={classes.inputSmall} />
	                </Grid>

	                  
	                <Grid item xs={12} sm={4}>
	                  { props.rates !== null ? (
	                    <div>
	                      <FormLabel component="label" className={classes.formLabel}>Select rate</FormLabel>
	                      <Select
	                        onChange={(e) => setRate_id(e.target.value)}
	                        disableUnderline
	                        fullWidth
                          value={rate_id}
	                        autoComplete="new-password"
	                        displayEmpty
	                        type="number"
	                        min="1"
	                        className={classes.inputSelect}
	                        inputProps={{
	                            "aria-label": "Select rate",
	                        }}
	                        >
	                        {props.rates.map((p, i) => (
	                          <MenuItem  value={p.id} key={i}>
	                            {p.name}
	                          </MenuItem>
	                        ))}
	                      </Select>
	                    </div>
	                  ) 
	                    : ('')
	                  }
	                </Grid>
	                <Grid item xs={12}>
	                  <FormLabel component="label" className={classes.formLabel}>Description</FormLabel>
	                  <Input onChange={(e) => setDescription(e.target.value)} value={description} autoComplete="new-password" disableUnderline fullWidth  type="number" placeholder="Write a few words about the service" inputProps={{ 'aria-label': 'description' }} className={classes.inputSmall} multiline rows={3}/>
	                </Grid>
	              </Grid>
	            </FormGroup>
	          </div>
	        </div>
	      
	        ) : (
	          <div>
	            <FormGroup className={classes.formGroup}>
	              <FormLabel component="label" className={classes.formGroupLabel}>Services</FormLabel>
	              <Grid container spacing={2}>
	                <Grid item xs={12} sm={4}>
	                  <FormLabel component="label" className={classes.formLabel}>Select service</FormLabel>
	                  <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
	                </Grid>
	                <Grid item xs={12} sm={4}>
	                  <FormLabel component="label" className={classes.formLabel}>Price</FormLabel>
	                  <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
	                </Grid>
	                <Grid item xs={12} sm={4}>
	                  <FormLabel component="label" className={classes.formLabel}>Rate</FormLabel>
	                  <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="3em"/>
	                </Grid>
	                <Grid item xs={12}>
	                  <FormLabel component="label" className={classes.formLabel}>Description</FormLabel>
	                  <Skeleton variant="rect" width="100%" className={classes.inputSkeleton} height="4em"/>
	                </Grid>
	              </Grid>
	            </FormGroup>
	          </div>
	        )}
	        <Grid container spacing={0}>
	          <Grid item xs={12}>
	            <Paper className={classes.paper} elevation={0}>
	              <Grid container>
	                <Grid item xs={12}>
	                  <Grid item xs={12}>
	                    <Button
	                      variant="contained"
	                      color="primary"
	                      style={{maxWidth: '130px', maxHeight: '35px', minWidth: '130px', minHeight: '35px'}}
	                      onClick={handleSubmit}
	                      className={classes.submitButton}
	                    >
	                    {props.progress ? <Spinner /> : "Add service"}
	                    </Button>
	                      
	                </Grid>
	              </Grid>
	            </Grid>
	            </Paper>
	          </Grid>
	        </Grid>
	      </Container>
    	</Paper>
        </div>
    );
}

const mapStateToProps = (state) => ({
    error: state.errors,
    form: state.forms,
    user: state.auth.user,
    results: state.services.results,
    all_services: state.services.admin_services,
    auth: state.auth,
    services: state.services.services,
    progress: state.services.progress,
    fetch: state.services.fetch,
    rates: state.services.rates,
  });
  export default connect(mapStateToProps, {
    getServiceData, 
    user_delete_service,
    user_create_service,
    get_all_services,
    get_all_rates,
    loadUser,
    init_fetch,
    deinit_fetch,
  })(AddServicesSectionWizard);
