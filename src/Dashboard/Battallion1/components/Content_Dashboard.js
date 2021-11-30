import * as React from 'react';
import { connect } from "react-redux";
import { Box, Container, Grid } from '@mui/material'
import { SummaryItem } from './summary-item';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Content_Dashboard(props){
  let stats;
  props.overrall_data !== null ?  stats = [
      {
        content: `${props.overrall_data.agencies}`,
        icon: AccountBalanceIcon,
        label: 'UN Agencies'
      },
       {
        content: `${props.overrall_data.administration}`,
        icon: AdminPanelSettingsIcon,
        label: 'Administration'
      },
      {
        content: `${props.overrall_data.drivers}`,
        icon: DriveEtaIcon,
        label: 'Drivers'
      }
  ] :  stats = [
          {
            content: '',
            icon: AccountBalanceIcon,
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

