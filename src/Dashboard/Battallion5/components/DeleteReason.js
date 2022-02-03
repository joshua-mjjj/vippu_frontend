import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '@mui/material/Input';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../../GlobalComponents/Alert';
import logo from '../../../assets/loading.gif';

import { battallion_two_fetch_detail } from '../../../actions/battallions_detail';
import { save_delete_record, delete_employee } from '../../../actions/battallions_create';

import {
  clear_messages,
  clear_errors
} from '../../../actions/battallions_create';

const useStyles = makeStyles((theme) => ({
	  span: {
	    fontSize: '15px',
        fontFamily: 'Dosis',
        color: 'red',
        fontWeight: '800'
	  },
	  title1: {
	  	fontFamily: 'Dosis',
	  	fontSize: '20px',
	  	fontWeight: '800',
        color: 'red',
	  },
	  title2: {
	  	fontSize: '15px',
	  },
	  spin: {
	  	marginTop: '8px',
	  },
	  input: {
	    fontSize: '13px',
	    color: '#1b1f23',
	    border: '1px solid #cfd7de',
	    borderRadius: '5px',
	    padding: theme.spacing(1),
	    '&::after': {
	      borderBottom: '1px solid #949494'
	    }
	  },
	  submit: {
	    height : "35px"
	  }
	}));

function DeleteReason(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reason, setReason] = React.useState(null);
  const [show_alert, setShow_alert] = React.useState(false);
  const [enable, setDisable] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const control_bool = () => {
    setShow_alert(false);
  };

  const control_bool_api_message = () => {
    props.clear_messages();
  };

  const handleSubmit = () => {
    if(reason !== null && reason.length >= 10){
    	const deletor_name = props.auth.user.first_name + " " + props.auth.user.last_name
    	const deletor_file_number = props.auth.user.username
    	const battalion = "5"
    	const deleted_file_number = props.employee.file_number
    	const deleted_name = props.employee.first_name + " " + props.employee.last_name

    	props.save_delete_record(reason, deletor_name, deletor_file_number, deleted_name, deleted_file_number, battalion)

    }else{
    	setShow_alert(true)
    }
  };

  const handleDelete = () => {
    // console.log(props.employee.id)
    const id = props.employee.id
    const url = props.battalion

    props.delete_employee(id, url)
  };

  React.useEffect(() => {
    if(props.can_delete === true){
        setDisable(false)
    }else{
    	setDisable(true)
    }
  }, [props.can_delete]);

  React.useEffect(() => {
    localStorage.removeItem("deleted");
  }, []);

  const required = 'Please provide a reason before submitting. Reason must be atleast 10 characters long.';

  return (
    <div>
      <Button 
      	variant="outlined"
      	disabled={props.disabled} 
      	onClick={handleClickOpen}
      	sx={{ marginRight: '20px', marginTop: '15px' }}>
        <span className={classes.span}>Delete</span>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle><span className={classes.title1}>Delete an employee</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span className={classes.title2}>Before you delete an employee from the system, please briefly state the reason why record is being deleted.</span>
          </DialogContentText>
          <Input
	        disableUnderline
	        fullWidth
	        onChange={(e) => setReason(e.target.value)}
	        multiline
	        rows={4}
	        placeholder="Briefly explain your reason for deleting this employee"
	        value={reason}
	        className={classes.input}
           />
            {show_alert === true ? (
              <Alert
                content={required}
                control_bool={control_bool}
                status="error"
              />
            ) : null}
            {props.messages.api_message !== null &&
             props.messages.message_type === 'record_deleted' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="success"
              />
            ) : null}
            {props.messages.api_message !== null &&
             props.messages.message_type === 'delete_failed' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="error"
              />
            ) : null}
            {props.messages.api_message !== null &&
             props.messages.message_type === 'record_delete_failed' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="error"
              />
            ) : null}
            {props.messages.api_message !== null &&
             props.messages.message_type === 'record_delete_saved' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="success"
              />
            ) : null}
        </DialogContent>
        <DialogActions>
        {
        	props.can_delete === false && !(localStorage.getItem("deleted")) ? 
        		(
    			 <Button 
		          	variant="outlined" 
		          	className={classes.submit} 
		          	onClick={handleSubmit}>
		          	{ props.delete_record_loading === true ? (
		          		<span className={classes.spin}>
					        <img src={logo} alt="" width="90" height="90" />
					    </span>
		          	) : 'Submit'}
		         </Button>
        		) : null
        }
         <Button 
         	variant="contained" 
         	disabled={enable}
         	className={classes.submit} 
         	onClick={handleDelete}>
          	{ props.delete_loading === true ? (
          		<span className={classes.spin}>
			        <img src={logo} alt="" width="90" height="90" />
			    </span>
          	) : 'Delete'}
          </Button>
           <Button 
           	  variant="outlined" 
           	  className={classes.submit}
           	  onClick={handleClose}>
          	  {'Close'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  loading: state.battallions_detail.battalion_two_data_detail_loading,
  detail_data: state.battallions_detail.battalion_two_detail_data,
  delete_record_loading: state.battallions_create.delete_record,
  can_delete: state.battallions_create.can_delete,
  delete_loading: state.battallions_create.delete_loading
});

export default connect(mapStateToProps, {
  battallion_two_fetch_detail,
  save_delete_record,
  clear_messages,
  clear_errors,
  delete_employee
})(DeleteReason);