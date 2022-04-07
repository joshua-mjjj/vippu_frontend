import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Box, Container, Grid } from '@mui/material';
import Backdrop from '../../GlobalComponents/Backdrop';
import { Summary } from './summary';
// import AccountBalanceIcon_ from '@mui/icons-material/AccountBalance';
import AccountBalanceIcon from '@mui/icons-material/GridView';
// import GridViewIcon from '@mui/icons-material/GridView';
// import DriveEtaIcon from '@mui/icons-material/DriveEta';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FormLabel from '@mui/material/FormLabel';
import Icon from '@mui/icons-material/CheckCircleOutline';

import Button from '@mui/material/Button';
// import Spinner from '../../../components/Spinner';

import { grant_access } from '../../../actions/auth.js';

const useStyles = makeStyles((theme) => ({
  formLabel: {
    fontSize: '18px',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Dosis'
  }
}));


function ContentOverview(props) {
  const classes = useStyles();

  let stats;
 props.overrall_data_four !== null
    ? (stats = [
        {
          content: props.overrall_data_four.body_gaurd === undefined ? '' : `${props.overrall_data_four.body_gaurd}`,
          icon: AccountBalanceIcon,
          label: 'Body guard'
        },
        {
          content: props.overrall_data_four.crew_commander === undefined ? '' : `${props.overrall_data_four.crew_commander}`,
          icon: AccountBalanceIcon,
          label: 'Crew Commander'
        },
        {
          content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'Crew'
        }
      ])
    : (stats = [
        {
        // content: `${props.overrall_data.agencies}`,
        icon: AccountBalanceIcon,
        label: 'Body guard'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Crew Commander'
        },
        {
          // content: `${props.overrall_data.drivers}`,
          icon: AccountBalanceIcon,
          label: 'Crew'
        }
      ]);

   // Getting department
  const get_section = (section) => {
    console.log(section)
    // props.get_child_section(section);
  };

    // ("battallion_one", "Battallion 1"),
	// ("battallion_two", "Battallion 2"),
	// ("battallion_three", "Battallion 3"),
	// ("battallion_four", "Battallion 4"),
	// ("battallion_five", "Battallion 5"),
	// ("battallion_six", "Battallion 6"),

  // Getting dashboard access 
  const handle_submit = () => {
  	const user_type_access = props.auth.user.account_type
  	const user_level_check = props.auth.user.top_level_incharge
  	const user_id = props.auth.user.id

  	const grant_access = true 
  	const access_battalion = "battallion_four"

  	if(user_type_access === 'admin' && user_level_check){
  		// Can access other dashboards...
  		props.grant_access(grant_access, access_battalion, user_id)
  	}
  }

  React.useEffect(() => {
  	if(props.auth.admin_access_granted){
  		// console.log("Reload dashboard..")
  		const current_dashboard = "battallion_four"
        localStorage.setItem("admin_current_dashboard", current_dashboard)
  		window.location.href = "/dashboard"
  	}
  }, [props.auth.admin_access_granted])

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 3
      }}
    >
      {props.auth.user.top_level_incharge === true ? (
        <Container maxWidth="lg">
          {props.overrall_data_six !== null ? (
            <FormLabel component="label" className={classes.formLabel}>
              Battalion four overall total : {props.overrall_data_four.total}{' '}
            </FormLabel>
          ) : null}
           <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                onClick={handle_submit}
                color="primary"
                endIcon={props.auth.user.admin_request_access === true && 
                	     props.auth.user.admin_request_battalion === 'battallion_four' ?
                	     (<Icon></Icon>): null }
                style={{
                  height: '36px',
                  marginBottom: '10px',
                  textTransform: 'none',
                  fontSize: '20px!important',
                  background: '#101F33',
                  fontFamily: 'Dosis',
                  fontWeight: 'bold',
                  color: '#FFFFFF!important'
                }}
              >
              Access Battalion Four dashboard
              </Button>
              {props.auth.admin_request_access_loading === true ? <Backdrop /> : null}
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            {stats.map((item) => (
              <Grid item key={item.label} md={4} xs={12}>
                {/*<SummaryItem content={item.content} icon={item.icon} label={item.label} />*/}
                <Summary
                    get_section={get_section}
                    content={item.content}
                    icon={item.icon}
                    label={item.label}
                  />
              </Grid>
            ))}
          </Grid>
          <br />
        </Container>
      ) : null}
    </Box>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  overrall_data: state.battallions_fetch.battalion_two_overrall_data,
  overrall_data_four: state.battallions_fetch.battalion_four_overrall_data
});

export default connect(mapStateToProps, { grant_access })(ContentOverview);
