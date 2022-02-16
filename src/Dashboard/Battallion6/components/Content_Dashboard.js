import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Box, Container, Grid } from '@mui/material';
// import { SummaryItem } from '../../GlobalComponents/summary-item';
import { Summary } from './summary';
// import AccountBalanceIcon_ from '@mui/icons-material/AccountBalance';
import AccountBalanceIcon from '@mui/icons-material/GridView';
// import GridViewIcon from '@mui/icons-material/GridView';
// import DriveEtaIcon from '@mui/icons-material/DriveEta';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FormLabel from '@mui/material/FormLabel';
import Backdrop from '../../GlobalComponents/Backdrop.js';

const useStyles = makeStyles((theme) => ({
  formLabel: {
    fontSize: '18px',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Dosis'
  }
}));


function Content_Dashboard(props) {
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

  const [sorted_starts, setSorted_stats] = React.useState(null);

  React.useEffect(() => {
    let sections_stats;
    sections_stats = [
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Administration'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry for Presidency'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Science, Technology and Innovation'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Water and Environment'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry for East African Affairs'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Internal Affairs'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Works and Transport'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Office of the Prime Minister'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Finance'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Health'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry of Gender, Labor and Social Development'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Lands, Housing and Urban Development'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry for Kampala'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry of ICT and National Guidance'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Justice and Constitutional Affairs'
        },
        {
          content:  '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry of Local Government'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry for Foreign Affairs'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry of Energy'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Ministry of Tourism Wildlife and Antiquities'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Trade Industry and Cooperatives'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Education'
        },
        {
          content:'',
          icon: AccountBalanceIcon,
          label: 'Ministry of Public Service'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Ministry of Agriculture Animal Industry and Fisheries'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Education Institution'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Religious Leaders'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Senior Citizens'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Political Leaders'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Members of Parliament'
        },
        {
          content: '' ,
          icon: AccountBalanceIcon,
          label: 'Business Parks'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'UIRI'
        },
        {
          content:  '',
          icon: AccountBalanceIcon,
          label: 'New Vision'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'UBC'
        },
    ];

    function moveArrayItemToNewIndex(arr, old_index, new_index) {
      if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
          arr.push(undefined);
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
      return arr;
    }
    const index = sections_stats.findIndex((section) => section.label === props.auth.user.department); // department
    // console.log(index)
    sections_stats = moveArrayItemToNewIndex(sections_stats, index, 0); // moving current user's section to the start of the list
    setSorted_stats(sections_stats);
  }, [props.auth.user.department]);

  // Getting department
  const get_section = (section) => {
    // console.log(section)
    props.get_child_section(section);
  };

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
      {props.auth.user.lower_level_incharge === true ? (
        <Container maxWidth="lg">
          <FormLabel component="label" className={classes.formLabel}>
            Departments
          </FormLabel>
          {sorted_starts !== null ? (
            <Grid container spacing={1}>
              {sorted_starts.map((item) => (
                <Grid item key={item.label} md={4} xs={12}>
                  <Summary
                    get_section={get_section}
                    content={item.content}
                    icon={item.icon}
                    label={item.label}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Backdrop />
          )}
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

export default connect(mapStateToProps, null)(Content_Dashboard);
