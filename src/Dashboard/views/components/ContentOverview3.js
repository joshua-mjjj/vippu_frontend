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

  props.overrall_data_three !== null
    ? (stats = [
        {
          content: props.overrall_data_three.corruption === undefined ? '' : `${props.overrall_data_three.corruption}`,
          icon: AccountBalanceIcon,
          label: 'Anti-corruption and War Crime division'
        },
        {
          content: props.overrall_data_three.buganda_road_court === undefined ? '' : `${props.overrall_data_three.buganda_road_court}`,
          icon: AccountBalanceIcon,
          label: 'Buganda Road Court'
        },
        {
          content: props.overrall_data_three.commercial_court === undefined ? '' : `${props.overrall_data_three.commercial_court}`,
          icon: AccountBalanceIcon,
          label: 'Commercial court'
        },
        {
          content: props.overrall_data_three.supreme_court === undefined ? '' : `${props.overrall_data_three.supreme_court}`,
          icon: AccountBalanceIcon,
          label: 'Supreme Court'
        },
        {
          content: props.overrall_data_three.high_court_offices === undefined ? '' : `${props.overrall_data_three.high_court_offices}`,
          icon: AccountBalanceIcon,
          label: 'High Court Offices Kampala'
        },
        {
          content: props.overrall_data_three.high_court_residence === undefined ? '' : `${props.overrall_data_three.high_court_residence}`,
          icon: AccountBalanceIcon,
          label: 'High Court Residence'
        },
        {
          content: props.overrall_data_three.family_court_division === undefined ? '' : `${props.overrall_data_three.family_court_division}`,
          icon: AccountBalanceIcon,
          label: 'Family Court Division Makindye'
        },
        {
          content: props.overrall_data_three.court_of_appeal === undefined ? '' : `${props.overrall_data_three.court_of_appeal}`,
          icon: AccountBalanceIcon,
          label: 'Court of Appeal'
        },
        {
          content: props.overrall_data_three.residence_of_justice === undefined ? '' : `${props.overrall_data_three.residence_of_justice}`,
          icon: AccountBalanceIcon,
          label: 'Residence of Justice of Court Appeal'
        },
        {
          content: props.overrall_data_three.dpp_office === undefined ? '' : `${props.overrall_data_three.dpp_office}`,
          icon: AccountBalanceIcon,
          label: 'DPP Office'
        },
        {
          content: props.overrall_data_three.igg === undefined ? '' : `${props.overrall_data_three.igg}`,
          icon: AccountBalanceIcon,
          label: 'IGG'
        },
        {
          content: props.overrall_data_three.aog === undefined ? '' : `${props.overrall_data_three.aog}`,
          icon: AccountBalanceIcon,
          label: 'AOG'
        },
        {
          content: props.overrall_data_three.police_establishment === undefined ? '' : `${props.overrall_data_three.police_establishment}`,
          icon: AccountBalanceIcon,
          label: 'Police Establishment'
        }
      ])
    : (stats = [
        {
        // content: `${props.overrall_data.agencies}`,
        icon: AccountBalanceIcon,
        label: 'Anti-corruption and War Crime division'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Buganda Road Court'
        },
        {
          // content: `${props.overrall_data.drivers}`,
          icon: AccountBalanceIcon,
          label: 'Commercial court'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Supreme Court'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'High Court Offices Kampala'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'High Court Residence'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Family Court Division Makindye'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Court of Appeal'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Residence of Justice of Court Appeal'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'DPP Office'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'IGG'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'AOG'
        },
        {
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Police Establishment'
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
  	const access_battalion = "battallion_three"

  	if(user_type_access === 'admin' && user_level_check){
  		// Can access other dashboards...
  		props.grant_access(grant_access, access_battalion, user_id)
  	}
  }

  React.useEffect(() => {
  	if(props.auth.admin_access_granted){
  		// console.log("Reload dashboard..")
  		const current_dashboard = "battallion_three"
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
          {props.overrall_data_three !== null ? (
            <FormLabel component="label" className={classes.formLabel}>
              JLOS overall total : {props.overrall_data_three.total}{' '}
            </FormLabel>
          ) : null}
           <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button
                variant="contained"
                onClick={handle_submit}
                color="primary"
                endIcon={props.auth.user.admin_request_access === true && 
                	     props.auth.user.admin_request_battalion === 'battallion_three' ?
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
              Access Battalion three dashboard
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
  overrall_data_three: state.battallions_fetch.battalion_three_overrall_data
});

export default connect(mapStateToProps, { grant_access })(ContentOverview);
