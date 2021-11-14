import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Image from '../assets/banner-title.png';
import Footprint from "../assets/footprint.svg";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '170px',
    paddingBottom: '60px',
    fontFamily: 'Dosis',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    zIndex: '0',
    [theme.breakpoints.down("700")]: {
      paddingTop: '106px',
      paddingBottom: '42px',
      overflow: 'hidden'
    },
    [theme.breakpoints.down("1210")]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  container: {
    margin: '0 auto',
    maxWidth: '1140px',
    display: 'flex',
    alignItems: "center",
    zIndex: '0',
  },
  wrap: {
    position: 'relative',
    width: '556px',
    [theme.breakpoints.down("1210")]: {
      left: '-50px'
    },
    [theme.breakpoints.down("700")]: {
      width: '327px',
      left: '0px',
      zIndex: '0',
    },
  },
  title: {
    maxWidth: '624px',
    marginBottom: '9px',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '46px',
    lineHeight: '58px',
    color: '#23286B',
    [theme.breakpoints.down("1210")]: {
      maxWidth: '506px',
    },
    [theme.breakpoints.down("700")]: {
      maxWidth: '327px',
      fontSize: '26px',
      lineHeight: '32.86px',
    },
  },
  subtitle: {
    maxWidth: '556px',
    marginBottom: '48.5px',
    alignItems: 'center',
    fontFamily: 'Dosis',
    fontWeight: '600',
    fontSize: '27px',
    lineHeight: '34px',
    color: '#156981',
    [theme.breakpoints.down("1210")]: {
      maxWidth: '438px',
    },
    [theme.breakpoints.down("700")]: {
      maxWidth: '258px',
      fontSize: '18px',
      lineHeight: '22.75px',
      marginBottom: '42px',
    },
  },
  toogleWrap: {
    padding: '20px 22px',
    marginLeft: '110px',
    background: '#BEE2BD',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '435px',
    fontWeight: '800',
    [theme.breakpoints.down("1210")]: {
      marginLeft: '0px',
    },
    [theme.breakpoints.down("700")]: {
      maxWidth: '261px',
      padding: '9px',
      margin: '0 auto',
      justifyContent: 'space-between',
    },
  },
  toogleText: {
    marginBottom: '15px',
    fontWeight: 'bold',
    fontSize: '32px',
    fontFamily: 'Averia Sans Libre',
    lineHeight: '40px',
    color: '#383F45',
    alignItems: 'center',
    display: 'flex',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up("700")]: {
      display: 'none'
    },
  },
  toogleTextDesk: {
    fontWeight: 'bold',
    fontSize: '22px',
    fontFamily: 'Averia Sans Libre',
    lineHeight: '40px',
    color: '#383F45',
    alignItems: 'center',
    display: 'flex',
    fontWeight: '800',
    [theme.breakpoints.down("700")]: {
      display: 'none'
    },
  },
  button: {
    minWidth: '121px',
    height: '51px',
    background: '#F9A825',
    borderRadius: '10px',
    fontSize: '23px',
    lineHeight: '29px',
    color: '#FFFFFF',
    fontFamily: 'Dosis',

    "& a": {
      fontWeight: '800',
      fontFamily: 'Dosis',
      fontSize: '23px',
      lineHeight: '29px',
      color: '#FFFFFF',
      textDecoration: 'none',
      "&:hover": {
        textDecoration: 'none',
      }
      
    },

    "&:hover": {
      background: '#F9A800',
    },
    "&.Mui-disabled": {
      background: '#BDBDBD',
    },
  },
  imageWrap: {
    position: 'absolute',
    top: '114px',
    display: 'none',
    [theme.breakpoints.up("1210")]: {
      right: '12vw',
      display: 'block',
    },
    [theme.breakpoints.up("lg")]: {
      right: '12vw',
      display: 'block',
    },
  },
  decorMobile: {
    position: 'absolute',
    right: '88%',
    bottom: '-72px',
    zIndex: -1,
    [theme.breakpoints.down("1210")]: {
      marginLeft: '0px',
      bottom: '-8%',
      right: '-112px',
    },
    [theme.breakpoints.down("700")]: {
      right: '-90px',
      bottom: '20%',
    },
  },
  space: {
    fontFamily: 'Brody',
    marginTop: '5px',
    marginBottom: '20px'
  },
  space_: {
    marginTop: '5px',
    padding: '100px',
    marginBottom: '150px',
    background: '#fff',
  },
  title_: {
    maxWidth: '624px',
    marginBottom: '20px',
   // wordSpacing: '0px',
    letterSpacing: '0px',
    lineHeight: '0',
    marginLeft: '150px',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '56px',
    lineHeight: '58px',
    color: '#144216',
  },
  titl: {
    maxWidth: '624px',
    marginBottom: '40px',
    marginLeft: '20px',
    alignItems: 'center',
    fontWeight: '500',
    fontSize: '56px',
    lineHeight: '58px',
    color: '#fff',
  },
}));

export default function BannerTitle() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      {/* <img className={classes.decor} src={Footprint} alt=""/> */}
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.root}>
          <div className={classes.container}>
            <div className={classes.wrap}>
              <img className={classes.decorMobile} src={Footprint} alt="" />
              <div className={classes.title}>Professional choice in Pet Care just around the corner</div>
              <div className={classes.subtitle}>Find trusted and passionate providers for your pet from the comfort of your home</div>
              <div className={classes.toogleText}>JOIN AS:</div>
              <div className={classes.toogleWrap}>
                <div className={classes.toogleTextDesk}>JOIN AS PET:</div>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                  <Button className={classes.button}>
                    <Link href="/signup" variant="body2">
                      Provider
                    </Link>
                  </Button>
                  <Button className={classes.button} >
                    <Link href="/signup" variant="body2">
                      Owner
                    </Link>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <div className={classes.imageWrap}>
              <img className={classes.image} src={Image} alt="" />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
