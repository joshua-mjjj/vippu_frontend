import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";

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
  body2:{
    marginBottom: theme.spacing(2),
  }
}));

export default function BillingAddressSection(props) {
  const classes = useStyles();
  const [service, setService] = React.useState("");

  const handleChange = (event) => {
    setService(event.target.value);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Typography className={classes.serviceTitle}>
              Billing Address
            </Typography>
            <Typography variant="body2" className={classes.body2}>Please provide the billing address associated with the credit card you've provided.</Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Grid container spacing={4} className={classes.gridSubsection}>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setAddress_Line1(e.target.value)}
                      id="line"
                      label="Address Line 1"
                      placeholder="Physical Address *"
                      defaultValue={props.address_line_1}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setAddress_Line2(e.target.value)}
                      id="line"
                      label="Address Line 2"
                      placeholder="This can be your apartment number"
                      defaultValue={props.address_line_2}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4} className={classes.gridSubsection}>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setCity(e.target.value)}
                      id="line"
                      label="City"
                      defaultValue={props.city}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setState(e.target.value)}
                      id="line"
                      label="State"
                      defaultValue={props.state}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4} className={classes.gridSubsection}>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setCountry(e.target.value)}
                      id="line"
                      label="Country"
                      defaultValue={props.country}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => props.setZipcode(e.target.value)}
                      id="line"
                      label="Zip/postal/post code"
                      defaultValue={props.zipcode}
                      className={classes.line}
                      InputProps={{ disableUnderline: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
