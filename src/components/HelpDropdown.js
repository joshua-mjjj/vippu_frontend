import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    
  },
  inline: {
    display: 'inline',
  },
});

//window.$crisp.push(['do', 'chat:open']);

export default function HelpDropdownMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorHelpEl, setAnchorHelpEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleHelpClose = () => {
    window.$crisp.push(['do', 'chat:open']);
    setAnchorHelpEl(null);
   
  };

  const handleAboutClose = () => {
    setAnchorHelpEl(null);
    window.location.href = "/about";
  };

  return (
    <Paper className={classes.root}>
      <MenuList
        id="help-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        className={classes.helpDropDown}
        onClose={handleClose}
      >
        <MenuItem anchorEl={anchorHelpEl} onClick={handleHelpClose}>Help</MenuItem>
        {/*<MenuItem onClick={handleAboutClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Terms</MenuItem>
        <MenuItem onClick={handleClose}>Privacy Policy</MenuItem>*/}        
      </MenuList>
    </Paper>
  );
}
