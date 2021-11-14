import React from "react";
import { connect } from "react-redux";
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
import { loadUser } from "../actions/auth.js";
import FormLabel from '@material-ui/core/FormLabel';

import { 
  getServiceData, 
  user_delete_service,
  get_all_services,
  get_all_rates,
  user_update_service,
  clear_state

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
    backgroundColor: "rgba(0, 0, 0, .03)",
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
  line: {
    textAlign: "center",
    backgroundColor: "#fafafa",
    width: "100%",
    borderRadius: "5px",
    padding: theme.spacing(1, 1),
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
    color: "#b53f3fbd",
  },
  spin: {
    height: 50,
    width: 50,
    display: "flex",
    marginLeft: "10px",
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
    margin: theme.spacing(2, 2, 1, 'auto'),
  },
  submitButton: {
    backgroundColor: "#663399",
    margin: theme.spacing(2, 0, 1, 'auto'),
    float: 'right',
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

function DashboardSingleAccordian(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [service, setService] = React.useState(props.service.service.name);
  const [user_service_id, setUserService_id] = React.useState(props.service.id);
  const [price, setPrice] = React.useState(props.service.price);
  const [rate_name, setRate_name] = React.useState(props.service.rate.name);
  const [rate_id, setRate_id] = React.useState(props.service.rate.id);
  const [description, setDescription] = React.useState(props.service.description);



  const handleSubmit_update = (e) => {
     const user_id = props.user.id;
     const ser = props.all_services.filter((serv) => serv.name === service);
     const send_id = ser[0].id;
     props.user_update_service(description, price, user_id, send_id, rate_id, user_service_id)
     props.user_update_service(description, price, user_id, send_id, rate_id, user_service_id)
     //props.clear_state();
     const usid = props.user.id;
     props.getServiceData(usid);
     props.getServiceData(usid);
     //props.clear_state();
     props.fetch_again();
     props.getServiceData(usid);
     props.getServiceData(usid);
   
  }

 

  // posting, getting
  React.useEffect(() => {
    const id = props.user.id;
    props.get_all_services();
    props.get_all_rates();
  }, []);

  React.useEffect(() => {
    const id = props.user.id;
    props.getServiceData(id);
    props.getServiceData(id);
  }, []);

  const delete_service = (id) => {
    props.fetch_again();
    props.user_delete_service(id);
    const usid = props.user.id;
    props.getServiceData(usid);
    props.getServiceData(usid);
    props.getServiceData(usid);
    props.getServiceData(usid);
  };

  return (
     <div>
    { props.service !== null ? (
    <div>
        <Accordion
          className={classes.accordion}
          key={props.service.id}
          square
          expanded={expanded === `panel${props.service.id}`}
          onChange={handleChange(`panel${props.service.id}`)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>{props.service.service.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                 { props.all_services !== null ? (
                  <div>
                    <Select
                      onChange={(e) => setService(e.target.value)}
                      disableUnderline
                      fullWidth
                      defaultValue={props.service.service.name}
                      autoComplete="new-password"
                      displayEmpty
                      className={classes.inputSelect}
                      inputProps={{
                          "aria-label": "Update Service",
                      }}
                      >
                      {props.all_services.map((p, i) => (
                        <MenuItem value={p.name} key={i}>
                          {p.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                  ) 
                  : ('')
              }
                </Grid>
                <Grid item xs={12} sm={3}>
                <FormLabel > Price $ </FormLabel>
                  <TextField
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    //label="Price $"
                    type="number"
                    defaultValue={props.service.price}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                { props.rates !== null ? (
                  <div>
                    <Select
                      disableUnderline
                      fullWidth
                      onChange={(e) => setRate_id(e.target.value)}
                      defaultValue={rate_id}
                      autoComplete="new"
                      className={classes.inputSelect}
                      inputProps={{
                          "aria-label": "Update rate",
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
                  : (null)
                }
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    id="description"
                    label="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    defaultValue={props.service.description}
                    className={classes.line}
                    InputProps={{ classes: { underline: classes.underline } }}
                  />
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
                      onClick={(e) => delete_service(props.service.id)}
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
  error: state.errors,
  form: state.forms,
  user: state.auth.user,
  loading: state.services.isLoading,
  results: state.services.results,
  rates: state.services.rates,
  all_services: state.services.admin_services,
});
export default connect(mapStateToProps, {
  getServiceData,
  user_delete_service,
  get_all_services,
  get_all_rates,
  user_update_service,
  clear_state
})(DashboardSingleAccordian);
