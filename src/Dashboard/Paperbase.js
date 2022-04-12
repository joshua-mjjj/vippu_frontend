import * as React from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Navigator from './Navigator';
// import Content from './Content';
import Header from './Header';

// Views
import BattalionSixOverview from './views/Battalion_six_overview';
import BattalionFiveOverview from './views/Battalion_five_overview';
import BattalionFourOverview from './views/Battalion_four_overview';
import BattalionThreeOverview from './views/Battalion_three_overview';
import BattalionTwoOverview from './views/Battalion_two_overview';
import BattalionOneOverview from './views/Battalion_one_overview';
import AdminOverview from './views/Battalion_admin_overview';
import Profile from './views/Profile';

// importing api functions
import {
  battallion_six_overrall_data,
  battallion_five_overrall_data,
  battallion_four_overrall_data,
  battallion_three_overrall_data,
  battallion_two_overrall_data,
  battallion_one_overrall_data,
  vippu_overrall_data,
} from '../actions/battallions_fetch.js';


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
  const [active_page, setActive_page] = React.useState('VIPPU Admin Home');

  const routing_info = (page) => {
    console.log(page);
    setActive_page(page);
  };

  React.useEffect(() => {
    // Fetching Overall dashboard data for all battalions...
    props.battallion_six_overrall_data();
    props.battallion_five_overrall_data();
    props.battallion_four_overrall_data();
    props.battallion_three_overrall_data();
    props.battallion_two_overrall_data();
    props.battallion_one_overrall_data();
    props.vippu_overrall_data();
  }, [props]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              routing_info={routing_info}
              variant="temporary"
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
          
          {active_page === 'VIPPU Admin Home' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="VIPPU Admin Overview" onDrawerToggle={handleDrawerToggle} />
                <AdminOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion One' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion One Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionOneOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion Two' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion Two Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionTwoOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion Three' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion Three Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionThreeOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion Four' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion Four Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionFourOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion Five' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion Five Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionFiveOverview />
              </Box>
          ) : null}
          {active_page === 'Battalion Six' ? (
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header title="Battalion Six Overview" onDrawerToggle={handleDrawerToggle} />
                <BattalionSixOverview />
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
  battallion_five_overrall_data,
  battallion_six_overrall_data,
  battallion_four_overrall_data,
  battallion_three_overrall_data,
  battallion_two_overrall_data,
  battallion_one_overrall_data,
  vippu_overrall_data,
})(Paperbase);