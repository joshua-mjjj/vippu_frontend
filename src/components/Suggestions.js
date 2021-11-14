import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    backgroundColor: theme.palette.background.paper,
    '& span':{
        padding: '2px 0',
        margin: '2px 0',
    },
    padding: '2px 0',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      
    }
  },
}));

export default function Suggestions(props) {
  const classes = useStyles();


  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button key={props.key}>
        <ListItemText className={classes.search_item} inset primary={props.selected} onClick={props.onClick} />
      </ListItem>
    </List>
  );
}
