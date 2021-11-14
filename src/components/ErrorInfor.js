import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Paper } from '@material-ui/core';

import Share from './Share.js';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    color: '#5c5c5c',
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    textAlign: 'left',

  },
   paper: {
    padding: theme.spacing(2),
  }
}));



export default function ErrorInfor(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const redirect_signup = (e) => { 
    window.location.href = '/signup'
  }
  const shareUrl = "https://homepetvet.com"

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleInviteClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInviteClose = () => {
    setAnchorEl(null);
  };


  let error_info;
  if(props.statusCode === '404'){
  	error_info =  <div className={classes.root}>
         
					  {`Your search for `} <b>{props.search_query}</b> {` did not match any pet service providers we currently have on the site.`}
            <br />
            <br />
					  <Alert severity="info" icon={false}>
              <AlertTitle> {"Do you work with pets or know any people that do? "} 

                <Link variant="h6" color="primary" onClick={redirect_signup}>Join us</Link> or 
               
                <Link variant="h6" color="primary" onClick={handleClick} > Invite </Link> 
                 <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Paper className={classes.paper}><Share /></Paper> 
                </Popper>
                people who work with pets
              </AlertTitle>
            </Alert> 
            {/* <Menu
                id="invite-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleInviteClose}>
                <MenuItem onClick={handleInviteClose}>
                  <LinkIcon>
                    <LinkIcon fontSize="small" />
                  </LinkIcon>
                  Copy Link</MenuItem>
                <MenuItem onClick={handleInviteClose}>
                  <LinkIcon>
                    <FacebookIcon fontSize="small" />
                  </LinkIcon>
                  Facebook</MenuItem>
                <MenuItem onClick={handleInviteClose}>
                  <LinkIcon>
                    <TwitterIcon fontSize="small" />
                  </LinkIcon>
                  Twitter
                </MenuItem>
            </Menu> */}
		  		</div>;
  }
  else if(props.statusCode === '500'){
  	error_info = <div className={classes.root}>
					  {"Oops, an Internal Server Error occured our sincere apologies!"}<br />
					  {"Try agin in a few!"}
		  		</div>;
  }
  else if(props.statusCode === '100'){
    error_info =  <div className={classes.root}>
           {"Oops, we didn't find any service providers offering this service as yet. Our sincere apologies!"}<br />
            {"Try agin in a later!"}
            <br />
            <br />
            <Alert severity="info" icon={false}>
              <AlertTitle> {"Do you work with pets or know any people that do? "} 

                <Link variant="h6" color="primary" onClick={redirect_signup}>Join us</Link> or 
               
                <Link variant="h6" color="primary" onClick={handleClick} > Invite </Link> 
                 <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Paper className={classes.paper}><Share /></Paper> 
                </Popper>
                people who work with pets
              </AlertTitle>
            </Alert> 
          </div>;
  }

  return (
      <div>
        {error_info}
      </div>
    );
  
}