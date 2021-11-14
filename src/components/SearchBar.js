import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '../assets/search.svg';
import Grid from '@material-ui/core/Grid';

import Autocomplete from './Autocomplete.js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '79px',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    width: '100%',
    maxWidth: '998px',
    borderRadius: "10px",
    border: "2px solid #BDBDBD",
    "& > input": {
      background: 'red'
    },
    [theme.breakpoints.down('sm')] : {
      width: 'auto',
      margin: '1rem 0.5rem',
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 'medium',
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'normal',
    fontSize: '33px',
    lineHeight: '41px',
    color: '#7F7F7F'
  },
  iconButton: {
    padding: '12px 69px',
    background: '#C5E1A5',
    margin: '-1px',
    borderRadius: "0px 10px 10px 0px",
  },
  image: {
    maxWidth: '53px',
    maxHeight: '53px'
  },
  divider: {
    height: 28,
    margin: 4,
  },
  listitem:{
    listStyle: 'none',
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [Search_Input, setSearch_Input] = useState('');
  
  const user_input = (UserInput) => {
    setSearch_Input(UserInput)
  }
  return (
     <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.root} width="auto" elevation={0}>
            <Autocomplete 
                suggestions={props.auto_complete}
                user_input={user_input}
                className={classes.listitem}
             />
            <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}>
              <IconButton type="submit" className={classes.iconButton} aria-label="search">
                {/* <SearchIcon /> */}
                <img className={classes.image} src={SearchIcon} alt=""/>
              </IconButton>
            </Link>
          </Paper>
         </Grid>
    </Grid>
    
  );
}
