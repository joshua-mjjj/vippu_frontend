import * as React from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from './Navigator';
// import Content from './Content';
import Header from './Header';
// import AppBar from '@mui/material/AppBar';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';

// Views
import Dashboard from './Views/Dashboard';
import NewEntry from './Views/NewEntry';
import Findemployee from './Views/Findemployee';
import BattallionData from './Views/BattallionData';
import BattalionDataReport from './Views/BattalionData_report';
import Profile from './Views/Profile';

import {
  battallion_three_fetch_data,
  battallion_three_overrall_data
} from '../../actions/battallions_fetch.js';

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

const drawerWidth = 256;

function Paperbase(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Implementation code
  const [active_page, setActive_page] = React.useState('Dashboard');

  const routing_info = (page) => {
    // console.log(page);
    setActive_page(page);
  };

  React.useEffect(() => {
    // console.log("Fetching dashboard data before rendering... ")
    props.battallion_three_fetch_data();
    props.battallion_three_overrall_data();
  }, [props]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              routing_info={routing_info}
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            routing_info={routing_info}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Render conditionally */}
          {active_page === 'Dashboard' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Database Overview" onDrawerToggle={handleDrawerToggle} />
              <Dashboard />
            </Box>
          ) : null}
          {active_page === 'Battalion data' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Battalion Data Overview " onDrawerToggle={handleDrawerToggle} />
              <BattallionData />
            </Box>
          ) : null}
          {active_page === 'Generate report' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Generate section report" onDrawerToggle={handleDrawerToggle} />
              <BattalionDataReport />
            </Box>
          ) : null}
          {active_page === 'New entry' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Add an employee" onDrawerToggle={handleDrawerToggle} />
              <NewEntry />
            </Box>
          ) : null}
          {active_page === 'Find employee' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Find an employee" onDrawerToggle={handleDrawerToggle} />
              <Findemployee />
            </Box>
          ) : null}
          {active_page === 'Profile' ? (
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Header title="Account profile" onDrawerToggle={handleDrawerToggle} />
              <Profile />
            </Box>
          ) : null}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors
  // loading : state.battallions_create.create_battallion_one_loading,
});

export default connect(mapStateToProps, {
  battallion_three_fetch_data,
  battallion_three_overrall_data
})(Paperbase);
