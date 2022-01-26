import * as React from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Card, CardHeader, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Spinner from '../../../components/Spinner';
import Alert from '../../GlobalComponents/Alert';
import TableSingle from './TableSingle';
import {
  battallion_three_fetch_detail
} from '../../../actions/battallions_detail';
import { battallion_one_query, battallion_three_query } from '../../../actions/battallions_fetch';
import { clear_messages, clear_errors } from '../../../actions/battallions_create';
import BattallionDetail from './Battallion_detail';
import BattallionEdit from './Battallion_edit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function Findemploye(props) {
  const [input, setInput] = React.useState(null);
  const [query_available, setQuery_available] = React.useState(false);

  const [show_detail, setShowDetail] = React.useState(false);
  const [show_edit, showEdit] = React.useState(false);

  const handle_submit = () => {
    if (input) {
      // console.log(input)
      const trimmed_input = input.trim();
      props.battallion_three_query(
        trimmed_input,
        props.auth.user.department,
        props.auth.user.lower_level_incharge
      );
    } else return;
  };

  const send_detail_id = (id) => {
    console.log(id);
    setShowDetail(true);
    props.battallion_three_fetch_detail(id);
  };

  const toggle_UI = () => {
    setShowDetail(false);
  };

  const toggle_edit_UI = () => {
    showEdit(true);
  };

  const untoggle_edit_UI = () => {
    showEdit(false);
  };

  const control_bool_api_message = () => {
    props.clear_messages();
  };

  React.useEffect(() => {
    if (props.query_data !== null && props.loading_query === false) {
      setQuery_available(true);
    }
  }, [props.query_data, props.loading_query]);

  return (
    <Paper sx={{ maxWidth: 1336, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search by entering the employee's file number"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' }
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handle_submit}
                color="primary"
                style={{
                  height: '36px',
                  textTransform: 'none',
                  fontSize: '20px!important',
                  background: '#101F33',
                  fontFamily: 'Dosis',
                  fontWeight: 'bold',
                  lineHeight: '16px',
                  color: '#FFFFFF!important'
                }}
              >
                {props.loading_query === true ? <Spinner /> : 'Search employee'}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {props.messages.api_message !== null &&
      props.messages.message_type === 'battallion_query_fail' ? (
        <Alert
          content={props.messages.api_message}
          control_bool={control_bool_api_message}
          status="error"
        />
      ) : null}
      {query_available === false ? (
        <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
          No results yet.
        </Typography>
      ) : null}
      {query_available === true ? (
        <div>
          {show_detail === false ? (
            <Card variant="outlined">
              <CardHeader title={'Results'} />
              <Divider />
              <TableSingle employee={props.query_data} send_detail_id={send_detail_id} />
            </Card>
          ) : (
            <Card variant="outlined">
              {show_edit === false ? (
                <div>
                  <Box sx={{ alignItems: 'center', display: 'flex', mb: 3 }}>
                    <Typography color="textPrimary" variant="h4" sx={{ marginLeft: '20px' }}>
                      <span style={{ fontSize: '23px', fontFamily: 'Dosis', fontWeight: '800' }}>
                        {' '}
                        Employee details{' '}
                      </span>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                      onClick={toggle_UI}
                      variant="outlined"
                      sx={{ marginRight: '20px', marginTop: '15px' }}
                    >
                      <KeyboardBackspaceIcon />{' '}
                    </Button>
                    <Button
                      onClick={toggle_edit_UI}
                      variant="outlined"
                      sx={{ marginRight: '20px', marginTop: '15px' }}
                    >
                      <span
                        style={{
                          fontSize: '15px',
                          fontFamily: 'Dosis',
                          fontWeight: '800'
                        }}
                      >
                        Edit
                      </span>
                    </Button>
                  </Box>

                  {/* Detail component */}
                  <Card>
                    <hr />
                    {props.loading === false && props.detail_data !== null ? (
                      <BattallionDetail employee={props.detail_data} />
                    ) : (
                      <Spinner />
                    )}
                  </Card>
                </div>
              ) : (
                <div>
                  <Box
                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      mb: 3
                    }}
                  >
                    <Typography
                      color="textPrimary"
                      variant="h4"
                      sx={{
                        marginLeft: '20px'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '23px',
                          fontFamily: 'Dosis',
                          fontWeight: '800'
                        }}
                      >
                        {' '}
                        Edit Employee details{' '}
                      </span>
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                      onClick={untoggle_edit_UI}
                      variant="outlined"
                      sx={{ marginRight: '20px', marginTop: '15px' }}
                    >
                      <KeyboardBackspaceIcon />
                    </Button>
                  </Box>

                  {/* Edit component */}
                  <Card>
                    <hr />
                    {props.loading === false && props.detail_data !== null ? (
                      <BattallionEdit employee={props.detail_data} />
                    ) : (
                      <Spinner />
                    )}
                  </Card>
                </div>
              )}
            </Card>
          )}
        </div>
      ) : null}
    </Paper>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  loading: state.battallions_detail.battalion_three_data_detail_loading,
  detail_data: state.battallions_detail.battalion_three_detail_data,

  query_data: state.battallions_fetch.battalion_two_query_data,
  loading_query: state.battallions_fetch.battalion_two_query_loading
});

export default connect(mapStateToProps, {
  battallion_three_fetch_detail,
  battallion_one_query,
  battallion_three_query,
  clear_messages,
  clear_errors
})(Findemploye);
