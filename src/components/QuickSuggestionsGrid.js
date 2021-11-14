import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { get_all_services } from "../actions/form";
import Image from '../assets/logo_placeholder_transparent.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    height: 52,
    width: 52,
    borderRadius: '40%',
    backgroundColor: '#f1f1f1',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: 'flex',
    margin: 'auto',
  },
  control: {
    padding: theme.spacing(2),
  },
  category:{
    color: 'black',
    padding: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '96px',
    textAlign: 'center',
    margin: 'auto',
    whiteSpace: 'nowrap',
  },
  petIcon:{
    margin: "auto",
    height: '40px',
    width: '40px',
    backgroundColor: '#fdfaff',
    padding: theme.spacing(0.5),
    '& img':{
      height: 'auto',
      width: '28px',
    },
  },
}));

function QuickSuggestionsArea(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  React.useEffect(() => {
      props.get_all_services();
      console.log("loading system services...");
  }, []);
  React.useEffect(() => {
    if(props.errors.status !== null){
        window.location.reload();
    }
  }, []);



  return (
    <Container maxWidth="md" className={classes.root}>
      {
        props.all_services !== null ? 
        (
          <div>
            <Grid 
                container 
                justify="center" 
                spacing={4}
                alignItems="baseline"
                >
                  {props.all_services.map((p, i) => ( 
                    <Grid key={i} xs={4} sm={3} md={2} item>
                      <Link style={{ textDecoration: 'none', color: 'grey' }} to={{ pathname: `/search`, search: `?q=${p.name}`, state: { detail: `${p.name}`, id: `${p.id}` } }}>
                        {p.icon && p.icon != "" ? (
                        <Avatar className={classes.petIcon} src={p.icon} /> ):
                        (<Avatar className={classes.petIcon} src={Image}>
                          
                        </Avatar>
                        ) }
                        <Typography className={classes.category} variant="body2" align="center" gutterBottom>
                            {p.name}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
            </Grid>
        </div>
        ) : ('')
      }
    </Container>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  user: state.auth.user,
  errors: state.errors,
  all_services: state.services.admin_services
});

export default connect(mapStateToProps, { 
  get_all_services
 })(QuickSuggestionsArea);
