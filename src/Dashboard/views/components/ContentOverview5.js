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

    props.overrall_data_five !== null
    ? (stats = [
        {
          content: props.overrall_data_five.ucc === undefined ? '' : `${props.overrall_data_five.ucc}`,
          icon: AccountBalanceIcon,
          label: 'UCC'
        },
        {
          content: props.overrall_data_five.ec === undefined ? '' : `${props.overrall_data_five.ec}`,
          icon: AccountBalanceIcon,
          label: 'EC'
        },
        {
          content: props.overrall_data_five.ira === undefined ? '' : `${props.overrall_data_five.ira}`,
          icon: AccountBalanceIcon,
          label: 'IRA'
        },
        {
          content: props.overrall_data_five.ura === undefined ? '' : `${props.overrall_data_five.ura}`,
          icon: AccountBalanceIcon,
          label: 'URA'
        },
        {
          content: props.overrall_data_five.unra === undefined ? '' : `${props.overrall_data_five.unra}`,
          icon: AccountBalanceIcon,
          label: 'UNRA'
        },
        {
          content: props.overrall_data_five.npa === undefined ? '' : `${props.overrall_data_five.npa}`,
          icon: AccountBalanceIcon,
          label: 'NPA'
        },
        {
          content: props.overrall_data_five.ulc === undefined ? '' : `${props.overrall_data_five.ulc}`,
          icon: AccountBalanceIcon,
          label: 'ULC'
        },
        {
          content: props.overrall_data_five.psc === undefined ? '' : `${props.overrall_data_five.psc}`,
          icon: AccountBalanceIcon,
          label: 'PSC'
        },
        {
          content: props.overrall_data_five.nssf === undefined ? '' : `${props.overrall_data_five.nssf}`,
          icon: AccountBalanceIcon,
          label: 'NSSF'
        },
        {
          content: props.overrall_data_five.kcca === undefined ? '' : `${props.overrall_data_five.kcca}`,
          icon: AccountBalanceIcon,
          label: 'KCCA'
        },
        {
          content: props.overrall_data_five.senior_citizens === undefined ? '' : `${props.overrall_data_five.senior_citizens}`,
          icon: AccountBalanceIcon,
          label: 'SENIOR CITIZENS'
        },
        {
          content: props.overrall_data_five.jsc === undefined ? '' : `${props.overrall_data_five.jsc}`,
          icon: AccountBalanceIcon,
          label: 'JSC'
        },
        {
          content: props.overrall_data_five.eoc === undefined ? '' : `${props.overrall_data_five.eoc}`,
          icon: AccountBalanceIcon,
          label: 'EOC'
        },
        {
          content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Administration'
        },
      ])
    : (stats = [
        {
          // content: props.overrall_data_four.body_gaurd === undefined ? '' : `${props.overrall_data_four.body_gaurd}`,
          icon: AccountBalanceIcon,
          label: 'UCC'
        },
        {
          // content: props.overrall_data_four.crew_commander === undefined ? '' : `${props.overrall_data_four.crew_commander}`,
          icon: AccountBalanceIcon,
          label: 'EC'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'IRA'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'URA'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'UNRA'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'NPA'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'ULC'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'PSC'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'NSSF'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'KCCA'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'SENIOR CITIZENS'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'JSC'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'EOC'
        },
        {
          // content: props.overrall_data_four.crew === undefined ? '' : `${props.overrall_data_four.crew}`,
          icon: AccountBalanceIcon,
          label: 'Administration'
        },
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
  	const access_battalion = "battallion_five"

  	if(user_type_access === 'admin' && user_level_check){
  		// Can access other dashboards...
  		props.grant_access(grant_access, access_battalion, user_id)
  	}
  }

  React.useEffect(() => {
  	if(props.auth.admin_access_granted){
  		console.log("Reload dashboard..")
  		const current_dashboard = "dashboard_five"
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
          {props.overrall_data_five !== null ? (
            <FormLabel component="label" className={classes.formLabel}>
              Battalion Five overall total : {props.overrall_data_five.total}{' '}
            </FormLabel>
          ) : null}
           <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                onClick={handle_submit}
                color="primary"
                endIcon={props.auth.user.admin_request_access === true && 
                	     props.auth.user.admin_request_battalion === 'battallion_five' ?
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
              Access Battalion five dashboard
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
  overrall_data_five: state.battallions_fetch.battalion_five_overrall_data
});

export default connect(mapStateToProps, { grant_access })(ContentOverview);
