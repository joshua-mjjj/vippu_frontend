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
          // content: `${props.overrall_data.administration}`,
          icon: AccountBalanceIcon,
          label: 'Police Establishment'
        }
      ]);

  const [sorted_starts, setSorted_stats] = React.useState(null);

  React.useEffect(() => {
    let sections_stats;
    sections_stats = [
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Anti-corruption and War Crime division'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Buganda Road Court'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Commercial court'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Supreme Court'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'High Court Offices Kampala'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'High Court Residence'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Family Court Division Makindye'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Court of Appeal'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Residence of Justice of Court Appeal'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'DPP Office'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'IGG'
      },
      {
        content: '',
        icon: AccountBalanceIcon,
        label: 'Police Establishment'
      }
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
          {props.overrall_data_three !== null ? (
            <FormLabel component="label" className={classes.formLabel}>
              JLOS overall total : {props.overrall_data_three.total}{' '}
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
  overrall_data: state.battallions_fetch.battalion_two_overrall_data,
  overrall_data_three: state.battallions_fetch.battalion_three_overrall_data
});

export default connect(mapStateToProps, null)(Content_Dashboard);
