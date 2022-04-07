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

  props.overrall_data_six !== null
    ? (stats = [
        {
          content: props.overrall_data_six.administration === undefined ? '' : `${props.overrall_data_six.administration}`,
          icon: AccountBalanceIcon,
          label: 'Administration'
        },
        {
          content: props.overrall_data_six.min_pres === undefined ? '' : `${props.overrall_data_six.min_pres}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Presidency'
        },
        {
          content: props.overrall_data_six.min_sti === undefined ? '' : `${props.overrall_data_six.min_sti}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Science, Technology and Innovation'
        },
        {
          content: props.overrall_data_six.min_we === undefined ? '' : `${props.overrall_data_six.min_we}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Water and Environment'
        },
        {
          content: props.overrall_data_six.min_eaa === undefined ? '' : `${props.overrall_data_six.min_eaa}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for East African Affairs'
        },
        {
          content: props.overrall_data_six.min_ia === undefined ? '' : `${props.overrall_data_six.min_ia}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Internal Affairs'
        },
        {
          content: props.overrall_data_six.min_wt === undefined ? '' : `${props.overrall_data_six.min_wt}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Works and Transport'
        },
        {
          content: props.overrall_data_six.opm === undefined ? '' : `${props.overrall_data_six.opm}`,
          icon: AccountBalanceIcon,
          label: 'Office of the Prime Minister'
        },
        {
          content: props.overrall_data_six.min_finance === undefined ? '' : `${props.overrall_data_six.min_finance}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Finance'
        },
        {
          content: props.overrall_data_six.min_health === undefined ? '' : `${props.overrall_data_six.min_health}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Health'
        },
        {
          content: props.overrall_data_six.min_glsd === undefined ? '' : `${props.overrall_data_six.min_glsd}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Gender, Labor and Social Development'
        },
        {
          content: props.overrall_data_six.min_lhud === undefined ? '' : `${props.overrall_data_six.min_lhud}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Lands, Housing and Urban Development'
        },
        {
          content: props.overrall_data_six.min_kla === undefined ? '' : `${props.overrall_data_six.min_kla}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Kampala'
        },
        {
          content: props.overrall_data_six.min_ing === undefined ? '' : `${props.overrall_data_six.min_ing}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of ICT and National Guidance'
        },
        {
          content: props.overrall_data_six.min_jca === undefined ? '' : `${props.overrall_data_six.min_jca}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Justice and Constitutional Affairs'
        },
        {
          content: props.overrall_data_six.min_lc === undefined ? '' : `${props.overrall_data_six.min_lc}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Local Government'
        },
        {
          content: props.overrall_data_six.min_fa === undefined ? '' : `${props.overrall_data_six.min_fa}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Foreign Affairs'
        },
        {
          content: props.overrall_data_six.min_energy === undefined ? '' : `${props.overrall_data_six.min_energy}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Energy'
        },
        {
          content: props.overrall_data_six.min_twa === undefined ? '' : `${props.overrall_data_six.min_twa}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Tourism Wildlife and Antiquities'
        },
        {
          content: props.overrall_data_six.min_tic === undefined ? '' : `${props.overrall_data_six.min_tic}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Trade Industry and Cooperatives'
        },
        {
          content: props.overrall_data_six.min_educ === undefined ? '' : `${props.overrall_data_six.min_educ}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Education'
        },
        {
          content: props.overrall_data_six.min_ps === undefined ? '' : `${props.overrall_data_six.min_ps}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Public Service'
        },
        {
          content: props.overrall_data_six.min_aaic === undefined ? '' : `${props.overrall_data_six.min_aaic}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Agriculture Animal Industry and Fisheries'
        },
        {
          content: props.overrall_data_six.min_educ_inst === undefined ? '' : `${props.overrall_data_six.min_educ_inst}`,
          icon: AccountBalanceIcon,
          label: 'Education Institution'
        },
        {
          content: props.overrall_data_six.min_religious === undefined ? '' : `${props.overrall_data_six.min_religious}`,
          icon: AccountBalanceIcon,
          label: 'Religious Leaders'
        },
        {
          content: props.overrall_data_six.min_senior === undefined ? '' : `${props.overrall_data_six.min_senior}`,
          icon: AccountBalanceIcon,
          label: 'Senior Citizens'
        },
        {
          content: props.overrall_data_six.min_political === undefined ? '' : `${props.overrall_data_six.min_political}`,
          icon: AccountBalanceIcon,
          label: 'Political Leaders'
        },
        {
          content: props.overrall_data_six.min_parliamnt === undefined ? '' : `${props.overrall_data_six.min_parliamnt}`,
          icon: AccountBalanceIcon,
          label: 'Members of Parliament'
        },
        {
          content: props.overrall_data_six.min_businss_parks === undefined ? '' : `${props.overrall_data_six.min_businss_parks}`,
          icon: AccountBalanceIcon,
          label: 'Business Parks'
        },
        {
          content: props.overrall_data_six.min_uiri === undefined ? '' : `${props.overrall_data_six.min_uiri}`,
          icon: AccountBalanceIcon,
          label: 'UIRI'
        },
        {
          content: props.overrall_data_six.min_new_vision === undefined ? '' : `${props.overrall_data_six.min_new_vision}`,
          icon: AccountBalanceIcon,
          label: 'New Vision'
        },
        {
          content: props.overrall_data_six.min_ubc === undefined ? '' : `${props.overrall_data_six.min_ubc}`,
          icon: AccountBalanceIcon,
          label: 'UBC'
        },
      ])
    : (stats = [
        {
          // content: props.overrall_data_five.ucc === undefined ? '' : `${props.overrall_data_five.ucc}`,
          icon: AccountBalanceIcon,
          label: 'Administration'
        },
        {
          // content: props.overrall_data_five.ec === undefined ? '' : `${props.overrall_data_five.ec}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Presidency'
        },
        {
          // content: props.overrall_data_five.ira === undefined ? '' : `${props.overrall_data_five.ira}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Science, Technology and Innovation'
        },
        {
          // content: props.overrall_data_five.ura === undefined ? '' : `${props.overrall_data_five.ura}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Water and Environment'
        },
        {
          // content: props.overrall_data_five.unra === undefined ? '' : `${props.overrall_data_five.unra}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for East African Affairs'
        },
        {
          // content: props.overrall_data_five.npa === undefined ? '' : `${props.overrall_data_five.npa}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Internal Affairs'
        },
        {
          // content: props.overrall_data_five.ulc === undefined ? '' : `${props.overrall_data_five.ulc}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Works and Transport'
        },
        {
          // content: props.overrall_data_five.psc === undefined ? '' : `${props.overrall_data_five.psc}`,
          icon: AccountBalanceIcon,
          label: 'Office of the Prime Minister'
        },
        {
          // content: props.overrall_data_five.nssf === undefined ? '' : `${props.overrall_data_five.nssf}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Finance'
        },
        {
          // content: props.overrall_data_five.kcca === undefined ? '' : `${props.overrall_data_five.kcca}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Health'
        },
        {
          // content: props.overrall_data_five.senior_citizens === undefined ? '' : `${props.overrall_data_five.senior_citizens}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Gender, Labor and Social Development'
        },
        {
          // content: props.overrall_data_five.jsc === undefined ? '' : `${props.overrall_data_five.jsc}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Lands, Housing and Urban Development'
        },
        {
          // content: props.overrall_data_five.eoc === undefined ? '' : `${props.overrall_data_five.eoc}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Kampala'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of ICT and National Guidance'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Justice and Constitutional Affairs'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Local Government'
        },
        {
          // c// ontent: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry for Foreign Affairs'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Energy'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Tourism Wildlife and Antiquities'
        },
        {
          // c// ontent: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Trade Industry and Cooperatives'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Education'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Public Service'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Ministry of Agriculture Animal Industry and Fisheries'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Education Institution'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Religious Leaders'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Senior Citizens'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Political Leaders'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Members of Parliament'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'Business Parks'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'UIRI'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'New Vision'
        },
        {
          // content: props.overrall_data_five.administration === undefined ? '' : `${props.overrall_data_five.administration}`,
          icon: AccountBalanceIcon,
          label: 'UBC'
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
  	const access_battalion = "battallion_six"

  	if(user_type_access === 'admin' && user_level_check){
  		// Can access other dashboards...
  		props.grant_access(grant_access, access_battalion, user_id)
  	}
  }

  React.useEffect(() => {
  	if(props.auth.admin_access_granted){
  		// console.log("Reload dashboard..")
  		const current_dashboard = "dashboard_six"
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
              Battalion Six overall total : {props.overrall_data_six.total}{' '}
            </FormLabel>
          ) : null}
           <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                onClick={handle_submit}
                color="primary"
                endIcon={props.auth.user.admin_request_access === true && 
                	     props.auth.user.admin_request_battalion === 'battallion_six' ?
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
              Access Battalion six dashboard
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
  overrall_data_six: state.battallions_fetch.battalion_six_overrall_data
});

export default connect(mapStateToProps, { grant_access })(ContentOverview);
