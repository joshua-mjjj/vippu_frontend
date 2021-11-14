import React from "react";
import { connect } from "react-redux";

import { logout } from "./../actions/auth.js";

import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import NotificationsDropdownMenu from "../components/NotificationsDropdown";
import HelpDropdownMenu from "../components/HelpDropdown";
import ImageAvatars from "./LogoSearchPage";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Burger from '../assets/question.svg';
import User from '../assets/user.jpg';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  displayNone: {
    [theme.breakpoints.down("800")]: {
      display: 'none'
    }
  },
  appBar: {
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.03), 0px 1px 1px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.03)",
    backgroundColor: '#BEE2BD',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1440px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    [theme.breakpoints.up("800")]: {
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
  helpDropDown: {
    //color: '#4B0082',
  },
  small: {
    marginTop: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  contant: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down("650")]: {
      width: '100%'
    },
  },
  userWrap: {
    marginRight: '19px',
    display: 'flex',
    alignItems: 'center',
    minWidth: '230px',
    justifyContent: 'flex-end',
    [theme.breakpoints.down("800")]: {
      marginRight: '0',
      minWidth: '0',
    },
  },
  userName: {
    marginRight: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#383F45',
    fontFamily: 'Dosis',
    textAling: 'center',
    [theme.breakpoints.down("650")]: {
      display: 'none'
    },
  },
  userImgWrap: {
    maxWidth: '43px',
    maxHeight: '43px',
    borderRadius: '50%',
    overflow: 'hidden',
    "& img": {
      width: '100%'
    }
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("800")]: {
      // display: 'none'
      position: 'absolute',
      flexDirection: 'column-reverse',
      top: '72px',
      left: '80px',
      width: '107px'
    },
    [theme.breakpoints.down("550")]: {
      left: '70px',
    },
  },
  link: {
    marginRight: '18px',
    fontFamily: 'Dosis',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#222222',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'color 0.3s ease-in',
    [theme.breakpoints.down("800")]: {
      display:'none'
    },
    "&:first-child": {
      fontWeight: '700',
      marginRight: '28px',
      [theme.breakpoints.down("800")]: {
        marginRight: '0px',
      },
    },
    "&::before": {
      [theme.breakpoints.down("800")]: {
        content: "''",
        width: '100%',
        height: '2px',
        bottom: 0,
        background: 'white',
        display: 'block',
        position: 'absolute'
      },
    },
    "&:first-child": {
      "&::before": {
        [theme.breakpoints.down("800")]: {
          display: 'none'
        },
      },
    },
    "&:hover": {
      color: '#FF5722',
    }
  },
  burger: {
    border: 'none',
    background: 'none',
    padding: 0,
    marginLeft: '30px',
    cursore: 'pointer',
    borderRadius: '50%',
    outline: 'none',
    maxHeight: '24px',
    overflow: 'hidden',
    transition: 'background 0.3s ease-in',
    "&:hover": {
      background: 'fff',
      opacity: '0.5'
    },
    "&:hover .makeStyles-links-11": {
      background: 'fff',
      // opacity: '0.5'
    },
    [theme.breakpoints.up("800")]: {
      display: 'none'
    },
  },
  buy: {
    [theme.breakpoints.down("800")]: {
      marginRight: 'auto'
    },
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
   // window.location.href = "/dashboard#profile";
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

  const handleHelpClose = () => {
    // setAnchorHelpEl(null);
    window.$crisp.push(['do', 'chat:open']);
  };

  const handlePopperClick = (newPlacement) => (event) => {
    setPopperAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleHelpPopperClick = (newPopperPlacement) => (event) => {
    setHelpPopperAnchorEl(event.currentTarget);
    setOpenPopper((prev) => helpPlacement !== newPopperPlacement || !prev);
    setHelpPlacement(newPopperPlacement);
  };

  const handleHelpPopperClickAway = () => {
    setOpenPopper(false);
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
      <MenuItem>
        <IconButton
          aria-label="Search"
          color="inherit"
          onClick={handleHelpClose}
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
              <HelpDropdownMenu />
            </Fade>
          )}
        </Popper>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="Store"
          target="_blank"
          // color="#219653"
          onClick={(e) => (window.location.href = "https://store.homepetvet.com/")}
        >
          <ShoppingCartIcon htmlColor='#219653' />
        </IconButton>
        <p>Store</p>
      </MenuItem>
      <MenuItem>
        {/* <IconButton
              aria-label="show 2 new notifications"
              color="inherit"
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
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="transparent" className={classes.appBar} elevation={1}>
        <div className={classes.container}>
          <Toolbar className={classes.inner}>
            {/* <ImageAvatars /> */}
            {/* <div className={classes.grow} /> */}
            {/* <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="Help"
              color="inherit"
              onClick={handleHelpPopperClick("bottom-end")}
            >
              <ClickAwayListener onClickAway={handleHelpPopperClickAway}>
                <HelpOutlineIcon className={classes.helpDropDown} />
              </ClickAwayListener>
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
            <IconButton
              aria-label="show 2 new notifications"
              color="inherit"
              onClick={handlePopperClick("bottom-end")}
            >
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
            </Popper>*/}

            
            <ImageAvatars />
          
            <div className={classes.contant}>


              {/* <IconButton
                aria-label="Help"
                className={classes.burger}
                onClick={() => setShowLinks(!showLinks)}
                variant="link"
              >
                <img src={Burger}
                  alt="" />
              </IconButton> */}
              {/* <Typography variant="h6" className={classes.title}></Typography> */}

              {/* <IconButton
                aria-label="Store"
                target="_blank"
                style={{ color: '#219653' }}
                variant="link"
                className={classes.buy}
                href="https://store.homepetvet.com/"
              >
                <ShoppingCartIcon />
              </IconButton> */}

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
              {<div className={classes.links}>
                <a href="#" onClick={handleHelpClose} className={classes.link}>HELP</a>
              </div>}
              <MenuItem>
                <IconButton
                  aria-label="Store"
                  target="_blank"
                  // color="#219653"
                  onClick={(e) => (window.location.href = "https://store.homepetvet.com/")}
                >
                  <ShoppingCartIcon htmlColor='#219653' />
                </IconButton>
              </MenuItem>
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
                    (<Avatar alt="profile picture" src={props.auth.user.photo} />) :
                    (<Avatar>{letter}</Avatar>)
                }
                label={props.auth.user.first_name ? props.auth.user.first_name : props.auth.user.fullname}
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
              <Popper
                open={openPopper}
                anchorEl={helpPopperAnchorEl}
                placement={helpPlacement}
                transition
                className={classes.popper}
              >

                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <HelpDropdownMenu />
                  </Fade>
                )}
              </Popper>
            </div>
          </Toolbar>
        </div>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(PrimarySearchAppBar);
