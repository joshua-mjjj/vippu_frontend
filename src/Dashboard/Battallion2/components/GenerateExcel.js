import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

import Alert from '../../GlobalComponents/Alert';
import Spinner from "../../../components/Spinner";
 
import { clear_messages, clear_errors, download_file } from '../../../actions/battallions_create';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(2),
    }
  },
  formLabel:{
      fontSize: '15px',
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Dosis',
      // margin: theme.spacing(4),
  },
  inputSmall:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
   // margin: theme.spacing(2),
    "&::after": {
        borderBottom: '1px solid #949494',
    },
  },
  inputSmall_:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(0),
    },
    height: 45
    // padding: theme.spacing(1)
    // marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  inputSmall_date:{
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1)
   // margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: "56px",
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

function GenerateExcel(props) {
  const classes = useStyles();

  // Implementaion code 

  const [filename, setFilename] = React.useState(null);
  const [show_alert, setShow_alert] = React.useState(false);

  const handle_submit_data = (e) => {
    const url = "export_excel"
    e.preventDefault()
    if(filename !== null){
      props.download_file(url, filename)
    }else{
      setShow_alert(true)
    }

  }

  const control_bool = () => {
    setShow_alert(false)
  }
  
  const control_bool_api_message = () => {
    props.clear_messages()
  }

  // const control_bool_error = () => {
  //   props.clear_errors()
  // }

  const content_all_fields_required = "Please provide a file name before submitting."

  return (
      <Paper elevation={0}>
            <div className={classes.root}>
              <Grid container spacing={1}>
                 <Grid item md={12} xs={12} sm={12}> 
                  <FormLabel component="label" className={classes.formLabel}>File name</FormLabel>                 
                  <Input
                    placeholder="Enter your preferred name for the report. "
                    fullWidth
                    value={filename}
                    disableUnderline
                    onChange={(e) => setFilename(e.target.value)}
                    className={classes.inputSmall}
                  />
                </Grid>              
              </Grid>
             
              <Grid container spacing={1}> 

                 <Grid item md={12} xs={12} sm={12}>
                 {
                  show_alert === true ? ( <Alert content={content_all_fields_required} control_bool={control_bool} status="error" />) : null
                 }
                 {
                  props.messages.api_message !== null && props.messages.message_type === "file_downloaded" ? 
                  ( <Alert content={props.messages.api_message} control_bool={control_bool_api_message} status="success" />) : null
                 }
                 {/*{
                  props.error.msg !== null && props.error.msg.detail ? 
                  ( <Alert content={"You provided an invalid password, please make you provide a valid password inorder to change your password. If you have forgot your password, please contact the System Adminstrators for help."} control_bool={control_bool_error} status="error" />) : null
                 }*/}
                </Grid>  

                <Grid item md={12} xs={12} sm={12}>
                  <Stack spacing={6}>
                   <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handle_submit_data}
                    >
                      {props.loading === true ? <Spinner /> : "Generate report"}
                    </Button>
                  </Stack>
                </Grid>                 
              </Grid>

          </div>
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  loading : state.battallions_create.generate_report_battallion_loading
});

export default connect(mapStateToProps, {
  clear_messages,
  clear_errors,
  download_file
})(GenerateExcel);

