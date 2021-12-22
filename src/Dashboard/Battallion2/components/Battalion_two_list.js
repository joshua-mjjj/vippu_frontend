import * as React from 'react';
import { connect } from 'react-redux';
import { Box, Card, CardHeader, Container, Divider, Grid, Typography, Button } from '@mui/material';
import { OrdersTable } from './table';
import Spinner from '../../../components/Spinner';
import BattallionDetail from './Battallion_detail';
import BattallionEdit from './Battallion_edit';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { makeStyles } from '@material-ui/core/styles';

import { battallion_two_fetch_detail } from '../../../actions/battallions_detail';
import DeleteReason from './DeleteReason';

const useStyles = makeStyles((theme) => ({
  span: {
    fontSize: '23px',
    fontFamily: 'Dosis',
    fontWeight: '800'
  },
  span2: {
    fontSize: '15px',
    fontFamily: 'Dosis',
    fontWeight: '800'
  },
  title: {
    "& .MuiCardHeader-title" : {
      fontFamily: 'Dosis',
      fontWeight: '800'
    }
  }
}));

function Battalion_two_list(props) {
  const classes = useStyles();
  const [show_detail, setToggle] = React.useState(false);
  const [show_edit, showEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const battalion = "battallion_two"

  React.useEffect(() => {
    if(props.auth.user.top_level_incharge && props.detail_data !== null){
        setDisable(false)
    }
  }, [props.auth, props.detail_data]);

  const send_detail_id = (id) => {
    setToggle(true);
    props.battallion_two_fetch_detail(id);
  };

  const toggle_UI = () => {
    setToggle(false);
  };

  const toggle_edit_UI = () => {
    showEdit(true);
  };

  const untoggle_edit_UI = () => {
    showEdit(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {show_detail === false ? (
              <Card variant="outlined" className={classes.title} >
                <CardHeader title={`Employees total: ${props.data.length}`} />
                <Divider />
                <OrdersTable data={props.data} send_detail_id={send_detail_id} />
              </Card>
            ) : (
              <Card variant="outlined">
                {show_edit === false ? (
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
                          className={classes.span}>
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
                        <KeyboardBackspaceIcon />
                      </Button>
                      <Button
                        onClick={toggle_edit_UI}
                        disabled={!(localStorage.getItem("deleted")) ? false : true}
                        variant="outlined"
                        sx={{ marginRight: '20px', marginTop: '15px' }}
                      >
                        <span
                          className={classes.span2}>
                          Edit
                        </span>
                      </Button>
                      <DeleteReason disabled={disable} battalion={battalion} employee={props.detail_data}/>
                      {/*<Button
                        // onClick={toggle_UI}
                        disabled={disable}
                        variant="outlined"
                        sx={{ marginRight: '20px', marginTop: '15px' }}
                      >
                        <span
                          style={{
                            fontSize: '15px',
                            fontFamily: 'Dosis',
                            color: 'red',
                            fontWeight: '800'
                          }}
                        >
                          Delete
                        </span>
                      </Button>*/}

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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  auth: state.auth,
  error: state.errors,
  loading: state.battallions_detail.battalion_two_data_detail_loading,
  detail_data: state.battallions_detail.battalion_two_detail_data
});

export default connect(mapStateToProps, {
  battallion_two_fetch_detail
})(Battalion_two_list);
