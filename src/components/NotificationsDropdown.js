import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { ListItemAvatar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
  inline: {
    display: 'inline',
  },
});

export default function NotificationsDropdownMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary="Remy sharp set an Appointment"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    noWrap
                >
                    Ali Connors
                </Typography>
                <br/>
                {` Time: 0200pm; Date: 05/12/2020`}
                </React.Fragment>
            }
            />
        </MenuItem>
        <Divider variant="inset" component="li" />
        <MenuItem>
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary="Jackie Chan made a payment"
            secondary={
                <React.Fragment>
                <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                    noWrap
                >
                    A payment of 25 dollars was made to you
                </Typography>
                <br/>
                {` Time: 0200pm; Date: 05/12/2020`}
                </React.Fragment>
            }
            />
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
