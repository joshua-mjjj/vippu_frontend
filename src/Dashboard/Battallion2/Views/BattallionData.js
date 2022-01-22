import React from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import BattallionList from '../components/Battalion_two_list';
import GenerateExcel from '../components/GenerateExcel';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import moment from 'moment';

import { battallion_two_fetch_data } from '../../../actions/battallions_fetch.js';

import { send_notification } from '../../../actions/battallions_create.js';

import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        @iCode
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: theme.spacing(1)
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1)
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#4fc3f7'
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32
        }
      }
    }
  }
};

function BattallionData(props) {
  // Implementation code
  const [tab_value, setTab_value] = React.useState(0);

  const set_tab_0 = () => {
    setTab_value(0);
  };

  const refetch_data = () => {
    console.log('Refetching battalion two data ...');
    props.battallion_two_fetch_data();
  };

  const set_tab_1 = () => {
    setTab_value(1);
  };

  // const set_tab_2 = () => {
  //   setTab_value(2)
  // }

  React.useEffect(() => {
    if (props.data !== null) {
      // eslint-disable-next-line
      props.data.filter((instance) => {
        if (instance.on_leave !== 'Not on leave' && instance.notify_leave === false) {
          var end_date = moment(`${instance.leave_end_date}`);
          var current = moment(new Date()); // now
          const prime_difference = end_date.diff(current, 'days') + 1;
          if (prime_difference <= 0) {
            const new_notify_leave = true;
            const url = 'battallion_two';
            props.send_notification(instance.id, new_notify_leave, url);
            // turn notify_leave to true
          }
        }
      });

      // eslint-disable-next-line
      props.data.filter((instance) => {
        if (instance.status === 'Special duty' && instance.notify_special_duty === false) {
          var end_date = moment(`${instance.special_duty_end_date}`);
          var current = moment(new Date()); // now
          const prime_difference = end_date.diff(current, 'days') + 1;
          if (prime_difference <= 0) {
            const url = 'battallion_two';
            const object = {
              'notify_special_duty' : true
            }
            props.send_notification(instance.id, object, url);
            // turn notify_leave to true
          }
        }
      });

    }
  }, [props]);

  React.useEffect(() => {
    scroll.scrollToTop();
    localStorage.removeItem("deleted");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
          <Tabs value={tab_value} textColor="inherit">
            <Tab onClick={set_tab_0} label="Battalion employees" />
            <Tab onClick={set_tab_1} label="Generate report" />
            {/* <Tab onClick={set_tab_2} label="Find employee" />*/}
          </Tabs>
        </AppBar>
        <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
          {/* Render conditionally */}
          {tab_value === 0 ? (
            <BattallionList
              refetch_data={refetch_data}
              data={props.data !== null ? props.data : null}
            />
          ) : null}
          {tab_value === 1 ? <GenerateExcel /> : null}
          {/*{ 
                tab_value === 2 ? (<Content />) : null
              }*/}
        </Box>
        <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
          <Copyright />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  data: state.battallions_fetch.battalion_two_data
});

export default connect(mapStateToProps, {
  battallion_two_fetch_data,
  send_notification
})(BattallionData);
