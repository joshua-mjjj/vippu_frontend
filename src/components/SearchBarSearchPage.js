import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Autocomplete from './Autocomplete.js';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '6rem auto 0',
    width: '40rem',
    borderRadius: "50px",
    border: "1px solid #dfe1e5",

  },
  input: {
    padding: '0',
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 'medium',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const [Search_Input, setSearch_Input] = useState(props.search);
  const [redi, setRedi] = useState('');
  
  const user_input = (UserInput) => {
    setSearch_Input(UserInput)
  }
  const refreshSearch = (e) => { 
    setRedi(true)
  }

  React.useEffect(() => {
    if (redi === true) {
      window.location.reload();
    return <Redirect to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}/>
    }
  }, [redi]);
  return (
    <Paper component="form" className={classes.root} width="auto" elevation={0}>
      <Autocomplete 
          //suggestions={['red', 'yellow', 'green']}
          suggestions={props.auto_complete}
          user_input={user_input}
          userInput ={props.search}
          className={classes.listitem}
       />
      <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon onClick={refreshSearch}/>
        </IconButton>
      </Link>
    </Paper>
  );
}