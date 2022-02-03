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

  const [sorted_starts, setSorted_stats] = React.useState(null);

  React.useEffect(() => {
    let sections_stats;
    sections_stats = [
      {
          content: '',
          icon: AccountBalanceIcon,
          label: 'UCC'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'EC'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'IRA'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'URA'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'UNRA'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'NPA'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'ULC'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'PSC'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'NSSF'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'KCCA'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'SENIOR CITIZENS'
        },
        {
          content: '',
          icon: AccountBalanceIcon,
          label: 'JSC'
        },
         {
          content: '',
          icon: AccountBalanceIcon,
          label: 'EOC'
        },
         {
          content: '',
          icon: AccountBalanceIcon,
          label: 'Administration'
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
    // onsole.log(section)
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
          {props.overrall_data_five !== null ? (
            <FormLabel component="label" className={classes.formLabel}>
              Battalion Five overall total : {props.overrall_data_five.total}{' '}
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
  overrall_data_five: state.battallions_fetch.battalion_five_overrall_data
});

export default connect(mapStateToProps, null)(Content_Dashboard);
