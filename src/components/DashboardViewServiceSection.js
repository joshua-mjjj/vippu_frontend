import React from "react";
import { connect } from "react-redux";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import DashboardSingleAccordian from './DashboardSingleAccordian'

import { 
  getServiceData, 
  user_delete_service,
  get_all_services,
  get_all_rates,
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
    borderRadius: "10px",
    padding: theme.spacing(1, 2),
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
  submitButton: {
    backgroundColor: "#663399",
    marginLeft: theme.spacing(5),
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
}));

function DashboardViewServiceSection(props) {
  const [expanded, setExpanded] = React.useState("");
  const classes = useStyles();

  const services = props.services;
  services.sort((a, b) => (a.id > b.id) ? 1 : -1)
  // console.log(services.sort((a, b) => (a.id > b.id) ? 1 : -1))
  const len = services.length;
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const fetch_again = (e) => {
     const usid = props.user.id;
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
    props.user_delete_service(id);
    const usid = props.user.id;
    props.getServiceData(usid);
    props.getServiceData(usid);
    props.getServiceData(usid);
    props.getServiceData(usid);
  };

  return (
    <div className={classes.parentDiv}>
      {services.slice(0, len).map((service, i) => (
        <DashboardSingleAccordian service={service} key={i} fetch_again={fetch_again}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: state.errors,
  form: state.forms,
  user: state.auth.user,
  loading: state.services.isLoading,
  rates: state.services.rates,
  all_services: state.services.admin_services,
});
export default connect(mapStateToProps, {
  getServiceData,
  user_delete_service,
  get_all_services,
  get_all_rates,
})(DashboardViewServiceSection);
