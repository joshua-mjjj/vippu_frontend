import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { connectGoogle, connectFacebook, change_password, init_fetch, deinit_fetch } from "../actions/form";
import { connect } from "react-redux";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Spinner from "./Spinner";

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
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(5),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  formGroupLabel:{
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    marginBottom: theme.spacing(2),
  },
  passwordGrid:{
    marginTop: theme.spacing(2),
  },
  formLabel:{
    fontSize: '13px',
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    marginBottom: theme.spacing(1),
  },
  wizardContainer:{
    margin: theme.spacing(1, 'auto'),
  },
   small: {
    margin:  theme.spacing(1, 'auto', 0),
    display: "block",

  },
  submitButton: {
    backgroundColor: '#FF3D00!important',
    marginLeft: theme.spacing(0),
    //float: 'right',
  },
}));

function ChangePassword(props) {
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState("");
  const [password_one, setPassword_one] = useState("");
  const [password_conf, setPassword_conf] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const token = props.auth.token;

  function handleGoogle() {
    props.connectGoogle();
  }

  const handleSubmit = (e) => {
     //props.init_fetch();
     if(password_one === password_conf){
        props.init_fetch()
        props.change_password(oldPassword, password_conf)
        props.deinit_fetch()
      
     }else {
      // create an error message
      return false;
     }
    
  }

  function handleFacebook() {
    props.connectFacebook();
  }
  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="md" className={classes.wizardContainer}>
        <form>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <FormLabel component="label" className={classes.formGroupLabel}>Change Password</FormLabel>
                <Grid item xs={12} sm={6} className={classes.passwordGrid}>
                  <FormLabel component="label" className={classes.formLabel}>Old password</FormLabel>
                  <Input
                    className={classes.inputSmall}
                    disableUnderline
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    placeholder="Min. 6 characters"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setOldPassword(e.target.value)}
                    endAdornment= {
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>New password</FormLabel>
                  <Input
                    className={classes.inputSmall}
                    disableUnderline
                    size="small"
                    required
                    fullWidth
                    name="newpassword"
                    label="New Password"
                    placeholder="Min. 6 characters"
                    type={showPassword ? "text" : "password"}
                    id="newpassword"
                    autoComplete="new-password"
                    onChange={(e) => setPassword_one(e.target.value)}
                    endAdornment= {
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormLabel component="label" className={classes.formLabel}>Repeat new password</FormLabel>
                  <Input
                    className={classes.inputSmall}
                    disableUnderline
                    size="small"
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Repeat New Password"
                    type={showPassword ? "text" : "password"}
                    id="repeatPassword"
                    placeholder="Min. 6 characters"
                    autoComplete="new-password"
                    onChange={(e) => setPassword_conf(e.target.value)}
                    endAdornment= {
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Grid>
                 <Button
                      variant="contained"
                      color="primary"
                      style={{maxWidth: '80px', maxHeight: '35px', minWidth: '80px', minHeight: '35px'}}
                      onClick={handleSubmit}
                      className={classes.submitButton}
                    >
                    {props.progress ? <Spinner /> : "Submit"}
                    </Button>
              </Paper>
            </Grid>
            {/* Hiding the connect with Google for now */}
            {/* <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGoogle}
                className={classes.button}
              >
                Connect With Your Google Account
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFacebook}
                className={classes.button}
              >
                Connect With Your Facebook Account
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </Container>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
  progress: state.services.progress,
});

export default connect(mapStateToProps, { connectGoogle, connectFacebook, change_password, init_fetch, deinit_fetch  })(
  ChangePassword
);
