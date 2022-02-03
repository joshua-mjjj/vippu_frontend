import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '../../GlobalComponents/Alert';
import Spinner from '../../../components/Spinner';
import Checkbox from '@mui/material/Checkbox';

import {
  clear_messages,
  clear_errors,
  download_file,
  download_file_query_leave_Bone,
  download_file_query_status_Bone
} from '../../../actions/battallions_create';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(2)
    }
  },
  formLabel: {
    fontSize: '20px',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Dosis'
    // margin: theme.spacing(4),
  },
  formLabel_: {
    fontSize: '18px',
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Dosis'
    // margin: theme.spacing(4),
  },
  inputSmall: {
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1),
    // margin: theme.spacing(2),
    '&::after': {
      borderBottom: '1px solid #949494'
    }
  },
  inputSmall_: {
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    '& .MuiInputBase-root': {
      marginBottom: theme.spacing(0)
    },
    height: 45
    // padding: theme.spacing(1)
    // marginBottom: theme.spacing(2),
    // "&::after": {
    //     borderBottom: '1px solid #949494',
    // },
  },
  inputSmall_date: {
    fontSize: '13px',
    color: '#1b1f23',
    border: '1px solid #cfd7de',
    borderRadius: '5px',
    padding: theme.spacing(1)
    // margin: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
    height: '56px',
    textTransform: 'none',
    fontSize: '20px!important',
    background: '#101F33',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    lineHeight: '16px',
    color: '#FFFFFF!important',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0)
    }
  },
  notice_on: {
    color: 'red'
  },
  notice_off: {
    color: 'black'
  }
}));

function GenerateExcel(props) {
  const classes = useStyles();

  // Implementaion code

  const [filename, setFilename] = React.useState(null);
  const [title_doc, setTitle_doc] = React.useState(null);
  const [show_alert, setShow_alert] = React.useState(false);

  const control_bool = () => {
    setShow_alert(false);
  };

  const control_bool_api_message = () => {
    props.clear_messages();
  };

  const [one_option_flag, setFlag] = React.useState(false);
  const [general, setGeneral] = React.useState(false);
  const [report_status, setReport_status] = React.useState(false);
  const [report_leave, setReport_leave] = React.useState(false);

  React.useEffect(() => {
    if (
      (general === true && report_status === true) ||
      (general === true && report_leave === true) ||
      (report_status === true && report_leave === true) ||
      (report_status === true && report_status === true && general === true)
    ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [general, report_status, report_leave]);

  const general_report = (e) => {
    e.preventDefault();
    //console.log(e.target.checked)
    setGeneral(e.target.checked);
  };
  const status_report = (e) => {
    e.preventDefault();
    //console.log(e.target.checked)
    setReport_status(e.target.checked);
  };
  const leave_report = (e) => {
    e.preventDefault();
    //console.log(e.target.checked)
    setReport_leave(e.target.checked);
  };

  const [leave_type, setOnLeave] = React.useState(null);
  const handle_Leave_Change = (e) => {
    setOnLeave(e.target.value);
  };

  const [status_type, setStatus] = React.useState(null);
  const handle_Status_Change = (e) => {
    setStatus(e.target.value);
  };

  const handle_submit_data = (e) => {
    const url_general = 'export_battalion_four';
    const url_status = 'export_battalion_four_status';
    const url_leave = 'export_battalion_four_leave';
    e.preventDefault();
    if (filename !== null && title_doc !== null) {

      // general report
      if (general === true && report_status === false && report_leave === false) {
        props.download_file(url_general, filename, title_doc);
      }
      // report querying by status
      if (report_status === true && general === false && report_leave === false) {
        if (status_type !== null) {
          props.download_file_query_status_Bone(url_status, filename, status_type, title_doc);
        }
      }
      // report querying by leave
      if (report_leave === true && general === false && report_status === false) {
        if (leave_type !== null) {
          props.download_file_query_leave_Bone(url_leave, filename, leave_type, title_doc);
        }
      }
    } else {
      setShow_alert(true);
    }
  };

  // const control_bool_error = () => {
  //   props.clear_errors()
  // }

  const content_all_fields_required =
    'Please provide a file name and document title before submitting.';

  return (
    <Paper elevation={0}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12} sm={12}>
            <FormLabel component="label" className={classes.formLabel}>
              File name
            </FormLabel>
            <Input
              placeholder="Enter your preferred name for the report. "
              fullWidth
              value={filename}
              disableUnderline
              onChange={(e) => setFilename(e.target.value)}
              className={classes.inputSmall}
            />
            <FormLabel component="label" className={classes.formLabel}>
              Document title
            </FormLabel>
            <Input
              placeholder="Enter your preferred title for the report. "
              fullWidth
              value={title_doc}
              disableUnderline
              onChange={(e) => setTitle_doc(e.target.value)}
              className={classes.inputSmall}
            />

            <FormLabel component="label" className={classes.formLabel}>
              Please specify more information about the report you want to generate .{' '}
              <span className={one_option_flag === true ? classes.notice_on : classes.notice_off}>
                (Please check one option)
              </span>
            </FormLabel>
            <div>
              <FormLabel component="label" className={classes.formLabel_}>
                General Battalion Report
              </FormLabel>
              <Checkbox onChange={general_report} {...label} />
              <br />
              <FormLabel component="label" className={classes.formLabel_}>
                Battalion Report queried by status
              </FormLabel>
              <Checkbox onChange={status_report} {...label} />
              <br />
              <FormLabel component="label" className={classes.formLabel_}>
                Battalion Report queried by Leave status
              </FormLabel>
              <Checkbox onChange={leave_report} {...label} />
            </div>

            {report_status === true && general === false && report_leave === false ? (
              <div>
                <FormLabel component="label" className={classes.formLabel}>
                  Please select the status to include in the report
                </FormLabel>
                <Grid item md={6} xs={12} sm={6}>
                  <Select
                    labelId="demo-simple-select-label"
                    isableUnderline
                    displayEmpty
                    fullWidth
                    id="demo-simple-select"
                    value={status_type}
                    className={classes.inputSmall_}
                    onChange={handle_Status_Change}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Absent">Absent(AWOL)</MenuItem>
                    <MenuItem value="Transfered">Transfered</MenuItem>
                    <MenuItem value="Sick">Sick</MenuItem>
                    <MenuItem value="Dead">Dead</MenuItem>
                    <MenuItem value="Suspended">Suspended</MenuItem>
                    <MenuItem value="Dismissed">Dismissed</MenuItem>
                    <MenuItem value="In court">In court(Displinary/criminal)</MenuItem>
                    <MenuItem value="Deserted">Deserted</MenuItem>
                    <MenuItem value="On course">On course</MenuItem>
                    <MenuItem value="On mission">On mission</MenuItem>
                    <MenuItem value="On leave">On leave</MenuItem>
                    <MenuItem value="Interdiction">Interdiction</MenuItem>
                    <MenuItem value="Criminal court">Criminal court(remand / bail)</MenuItem>
                    <MenuItem value="Displinary court">Displinary court</MenuItem>
                    <MenuItem value="Special duty">Special duty</MenuItem>
                    <MenuItem value="On police course">On police course</MenuItem>
                  </Select>
                </Grid>
              </div>
            ) : null}
            {report_status === false && general === false && report_leave === true ? (
              <div>
                <FormLabel component="label" className={classes.formLabel}>
                  Please select the leave status to include in the report
                </FormLabel>
                <Grid item md={6} xs={12} sm={6}>
                  <Select
                    labelId="demo-simple-select-label"
                    isableUnderline
                    displayEmpty
                    fullWidth
                    id="demo-simple-select"
                    value={leave_type}
                    className={classes.inputSmall_}
                    onChange={handle_Leave_Change}
                  >
                    <MenuItem value="Pass leave">Pass leave</MenuItem>
                    <MenuItem value="Maternity leave">Maternity leave</MenuItem>
                    <MenuItem value="Sick leave">Sick leave</MenuItem>
                    <MenuItem value="Study leave">Study leave</MenuItem>
                    <MenuItem value="Annual leave">Annual leave</MenuItem>
                    <MenuItem value="Not on leave">Not on leave</MenuItem>
                  </Select>
                </Grid>
              </div>
            ) : null}
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item md={12} xs={12} sm={12}>
            {show_alert === true ? (
              <Alert
                content={content_all_fields_required}
                control_bool={control_bool}
                status="error"
              />
            ) : null}
            {props.messages.api_message !== null &&
            props.messages.message_type === 'file_downloaded' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="success"
              />
            ) : null}
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
                {props.loading === true ? <Spinner /> : 'Generate report'}
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
  loading: state.battallions_create.generate_report_battallion_loading
});

export default connect(mapStateToProps, {
  clear_messages,
  clear_errors,
  download_file,
  download_file_query_status_Bone,
  download_file_query_leave_Bone
})(GenerateExcel);
