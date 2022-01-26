import * as React from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ContentDashboard from '../components/Content_Dashboard';
import BattallionList from '../components/Battalion_list';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Alert from '../../GlobalComponents/Alert';
import { clear_messages } from '../../../actions/battallions_create';

import { battallion_section_query } from '../../../actions/battallions_fetch.js';

import { auth_message } from '../../../actions/auth.js';

import Backdrop from '../../GlobalComponents/Backdrop.js';
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

function Dashboard(props) {
  // Implementation code
  const [tab_value, setTab_value] = React.useState(0);
  const [section, setSection] = React.useState(null);
  // const [tab_value, setTab_value] = React.useState(0);

  const set_tab_0 = () => {
    setTab_value(0);
  };

  const control_bool_api_message = () => {
    props.clear_messages();
  };

  const get_section = (section) => {
    setSection(section);
    // true
    // false
    // in_charge
    // None
    if (props.auth.user.top_level_incharge === true || props.auth.user.account_type === 'admin') {
      props.battallion_section_query(section);
      setTab_value(1);
    }
    if (props.auth.user.lower_level_incharge === true) {
      if (props.auth.user.section === section) {
        props.battallion_section_query(section);
        setTab_value(1);
      } else {
        scroll.scrollToTop();
        const key_word = "section"
        props.auth_message(key_word);
        console.log("You are not allowed to view this Section's data");
      }
    }
    // console.log(props.auth.user.top_level_incharge)
    // console.log(props.auth.user.lower_level_incharge)
    // console.log(props.auth.user.section)
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
          <Tabs value={tab_value} textColor="inherit">
            <Tab onClick={set_tab_0} label="Program summary" />
            <Tab disabled={tab_value === 0 ? true : false} label="Section data" />
          </Tabs>
        </AppBar>
        <Box component="main" sx={{ flex: 1, py: 3, px: 4, bgcolor: '#eaeff1' }}>
          {props.messages.api_message !== null &&
            props.messages.message_type === 'user_error_section_data_access' ? (
              <Alert
                content={props.messages.api_message}
                control_bool={control_bool_api_message}
                status="info"
              />
            ) : null}
          {/* Render conditionally */}
          {tab_value === 0 ? <ContentDashboard get_child_section={get_section} /> : null}

          {tab_value === 1 ? (
            <div>
              {props.data !== null ? (
                <BattallionList
                  section_title={section}
                  data={props.data !== null ? props.data : null}
                />
              ) : (
                <Backdrop />
              )}
            </div>
          ) : null}
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
  overrall_data: state.battallions_fetch.battalion_one_overrall_data,
  data: state.battallions_fetch.battalion_sectionquery
});

export default connect(mapStateToProps, {
  battallion_section_query,
  auth_message,
  clear_messages
})(Dashboard);
