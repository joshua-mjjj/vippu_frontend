import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { logout } from "./../actions/auth.js";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import LogoAvatar from "../components/LogoDashboard";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import NotificationsDropdownMenu from "../components/NotificationsDropdown";
import HelpDropdownMenu from "../components/HelpDropdown";
import Spinner from "../assets/Spinner.gif";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#BEE2BD',
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    marginBottom: "0!important",
    height: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  profileChip: {
    marginLeft: theme.spacing(2),
    marginTop: "auto",
    marginBottom: "auto",
  },
  popper: {
    maxWidth: 500,
    zIndex: 1100,
  },
  helpDropDown:{
    //color: '#4B0082',
  },
  small: {
    marginTop:  theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  }
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popperAnchorEl, setPopperAnchorEl] = React.useState(null);
  const [helpPopperAnchorEl, setHelpPopperAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openPopper, setOpenPopper] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const [helpPlacement, setHelpPlacement] = React.useState();
  const isLoading = useSelector((state) => state.forms.isLoading);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
    window.location.href = "/dashboard#profile";
  };
  const account = () => {
    window.location.href = "/dashboard";
  };
  const profile = () => {
     const route = "profile"
     localStorage.setItem("routing_to", route);
     window.location.href = "/dashboard";
  };
  const payment = () => {
     const route = "payment"
     localStorage.setItem("routing_to", route);
     window.location.href = "/dashboard";
  };
   const wizard = () => {
     window.location.href = "/wizard";
  };
  const handlePopperClick = (newPlacement) => (event) => {
    setPopperAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleHelpPopperClick = (newPlacement) => (event) => {
    setHelpPopperAnchorEl(event.currentTarget);
    setOpenPopper((prev) => helpPlacement !== newPlacement || !prev);
    setHelpPlacement(newPlacement);
  };

  let letter;
  if (props.auth.user !== undefined) {
    if (
      props.auth.user.fullname !== undefined &&
      props.auth.user.fullname !== null &&
      props.auth.user.fullname !== ""
    ) {
      var str = props.auth.user.fullname;
      letter = str.substr(0, 1);
    } else if (
      props.auth.user.first_name !== undefined &&
      props.auth.user.first_name !== null &&
      props.auth.user.first_name !== ""
    ) {
      var str = props.auth.user.first_name;
      letter = str.substr(0, 1);
    } else {
      letter = "D";
    }
  }

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     {/*<MenuItem>
        <IconButton
          aria-label="Search"
          color="inherit"
          onClick={(e) => (window.location.href = "/")}
        >
          <SearchIcon />
        </IconButton>
        <p>Search ...</p>
      </MenuItem>*/} 
      <MenuItem>
        <IconButton
          aria-label="Search"
          color="inherit"
          onClick={(e) => (window.location.href = "/")}
        >
          <HelpOutlineIcon className={classes.helpDropDown} />
        </IconButton>
        <p>Help</p>
        <Popper
          open={openPopper}
          anchorEl={helpPopperAnchorEl}
          placement={helpPlacement}
          transition
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <HelpDropdownMenu className={classes.helpDropDown}/>
            </Fade>
          )}
        </Popper>
      </MenuItem>
      <MenuItem>
          <IconButton
            aria-label="Store"
            target="_blank"
            color="inherit"
            onClick={(e) => (window.location.href = "https://store.homepetvet.com/")}
          >
            <ShoppingCartIcon />
          </IconButton>
          <p>Store</p>
      </MenuItem>
      <MenuItem>
       {/* <IconButton
          aria-label="show 11 new notifications"
          color="primary"
          onClick={handlePopperClick("bottom-end")}
        >
       <Badge color="secondary">
            <NotificationsIcon />
          </Badge>
         
        </IconButton>*/}
        <p>Notifications</p>
        <Popper
          open={open}
          anchorEl={popperAnchorEl}
          placement={placement}
          transition
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <NotificationsDropdownMenu />
            </Fade>
          )}
        </Popper>
      </MenuItem>
      <MenuItem> 
        <Chip
          avatar={
            props.auth.user.photo ? 
              (<Avatar alt="profile picture" src={props.auth.user.photo}/>):
              (<Avatar>{letter}</Avatar>)
          }
          label={ props.auth.user.first_name ? props.auth.user.first_name : props.auth.user.fullname }
          onClick={handleProfileClick}
          variant="outlined"
          aria-controls="profile-menu"
        />
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleProfileClose}
        >
          <MenuItem onClick={account}>Dashboard</MenuItem>
          <MenuItem onClick={profile}>Profile</MenuItem>
          <MenuItem onClick={payment}>Payments</MenuItem>
          <MenuItem onClick={wizard}>Wizard</MenuItem>
          <MenuItem onClick={props.logout}>Logout</MenuItem>
        </Menu>
      </MenuItem>
    </Menu>
  );

  const [location, setLocation] = useState({
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location) => {
    setLocation({
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  // useEffect(() => {
  //   if (!("geolocation" in navigator)) {
  //     alert("Geolocation not supported");
  //   }

  //   navigator.geolocation.getCurrentPosition(onSuccess);
  // }, []);

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent" className={classes.appBar}>
        <Toolbar>
          <LogoAvatar />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/*<IconButton
              aria-label="Search"
              color="inherit"
              onClick={(e) => (window.location.href = "/")}
            >
              <SearchIcon />
            </IconButton>*/}
            <IconButton
              aria-label="Help"
              color="inherit"
              onClick={handleHelpPopperClick("bottom-end")}
            >
              <HelpOutlineIcon className={classes.helpDropDown} />
            </IconButton>
            <IconButton
              aria-label="Store"
              target="_blank"
              color="inherit"
              variant="link"
              href="https://store.homepetvet.com/"
            >
              <ShoppingCartIcon />
            </IconButton>
           {/* <IconButton
              aria-label="show 2 new notifications"
              color="inherit"
              onClick={handlePopperClick("bottom-end")}
            >
             <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>*/} 
            <Popper
              open={open}
              anchorEl={popperAnchorEl}
              placement={placement}
              transition
              className={classes.popper}
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <NotificationsDropdownMenu />
                </Fade>
              )}
            </Popper>
            <Chip
              avatar={
                props.auth.user.photo ? 
                  (<Avatar alt="profile picture" src={props.auth.user.photo}/>):
                  (<Avatar>{letter}</Avatar>)
              }
              label={ props.auth.user.first_name ? props.auth.user.first_name : props.auth.user.fullname }
              onClick={handleProfileClick}
              variant="outlined"
              aria-controls="profile-menu-2"
              className={classes.profileChip}
            ></Chip>
            <Menu
              id="profile-menu-2"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleProfileClose}
            >
              <MenuItem onClick={account}>Dashboard</MenuItem>
              <MenuItem onClick={profile}>Profile</MenuItem>
              <MenuItem onClick={payment}>Payments</MenuItem>
              <MenuItem onClick={props.logout}>Logout</MenuItem>
            </Menu>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
          <Box
            color="white"
            p={2}
            position="absolute"
            top={135}
            left="85%"
            zIndex="tooltip"
          >
            {isLoading && (
              <img src={Spinner} alt="" height="40px" width="40px" />
            )}
          </Box>{" "}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(PrimarySearchAppBar);
