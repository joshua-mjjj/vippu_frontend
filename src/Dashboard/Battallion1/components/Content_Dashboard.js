import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { Box, Container, Grid } from '@mui/material'
import { SummaryItem } from './summary-item';
import { Summary } from './summary';
import AccountBalanceIcon_ from '@mui/icons-material/AccountBalance';
import AccountBalanceIcon from '@mui/icons-material/GridView';
// import GridViewIcon from '@mui/icons-material/GridView';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles((theme) => ({
  formLabel:{
      fontSize: '18px',
      color: 'black',
      fontWeight: '600',
      fontFamily: 'Dosis',
  }}));

function Content_Dashboard(props){
  
  const classes = useStyles();

  let stats;
  let sections_stats;
  props.overrall_data !== null ?  stats = [
      {
        content: props.overrall_data.agencies === undefined ? "" : `${props.overrall_data.agencies}`,
        icon: AccountBalanceIcon_,
        label: 'UN Agencies'
      },
       {
        content: `${props.overrall_data.administration}`,
        icon: AdminPanelSettingsIcon,
        label: 'Administration'
      },
      {
        content: props.overrall_data.drivers === undefined ? "" : `${props.overrall_data.drivers}`,
        icon: DriveEtaIcon,
        label: 'Drivers'
      }
  ] :  stats = [
          {
            content: '',
            icon: AccountBalanceIcon_,
            label: 'UN Agencies'
          },
          {
            content: '',
            icon: AdminPanelSettingsIcon,
            label: 'Administration'
          },
          {
            content: '',
            icon: DriveEtaIcon,
            label: 'Drivers'
          }
        ];

  sections_stats = [
      {
        // content: `${props.overrall_data.agencies}`,
        icon: AccountBalanceIcon,
        label: 'UNDP Head Office'
      },
      {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UN Women'
      },
      {
        // content: `${props.overrall_data.drivers}`,
        icon: AccountBalanceIcon,
        label: 'IFAD office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNDSS office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'WFP'
      },
      {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNICEF office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'WHO'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'World bank'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'FAO office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'SPGS office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNHCR new offices'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNHCR Extension'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'I.C.C field offices'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNFPA'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'I.O.M head office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'I.O.M Transit Centre'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNOHCHR office'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'EADB'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNDP'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNDP Gulu'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNDP Moroto'
      },
       {
        // content: `${props.overrall_data.administration}`,
        icon: AccountBalanceIcon,
        label: 'UNDP Arua'
      },
  ] 
  const get_section = (section) => {
    // console.log(section)
    props.get_child_section(section)
  }
  

  return (
          <Box
            sx={{
              backgroundColor: 'background.default',
              pb: 3,
              pt: 3
            }}
          >
            <Container maxWidth="lg">
              <Grid
                container
                spacing={1}
              >
                {stats.map((item) => (
                  <Grid
                    item
                    key={item.label}
                    md={4}
                    xs={12}
                  >
                    <SummaryItem
                      content={item.content}
                      icon={item.icon}
                      label={item.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
            <br/>
            <Container maxWidth="lg">
            <FormLabel component="label" className={classes.formLabel}>Sections</FormLabel> 
              <Grid
                container
                spacing={1}
              >
                {sections_stats.map((item) => (
                  <Grid
                    item
                    key={item.label}
                    md={4}
                    xs={12}
                  >
                    <Summary
                      get_section={get_section}
                      content={item.content}
                      icon={item.icon}
                      label={item.label}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
    )
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  overrall_data : state.battallions_fetch.battalion_two_overrall_data
});

export default connect(mapStateToProps, null )(Content_Dashboard);

