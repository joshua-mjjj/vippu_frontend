import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from '../assets/banner-benefits.png';
import Box from '../assets/box.svg';
import Share  from '../assets/share.svg';
import Shield  from '../assets/shield.svg';
import Foots  from '../assets/foots-benefits.svg';
import Bone  from '../assets/bone.svg';
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  inner: {
    paddingTop: '5px'
  },
  root: {
    paddingTop: '63px',
    paddingBottom: '40px',
    fontFamily: 'Dosis',
    overflow: 'hidden',
    background: '#FAFAFA',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down("1390")]: {
      paddingBottom: '113px',
    },
    [theme.breakpoints.down("650")]: {
      paddingTop: '30px',
      paddingBottom: '22px',
    },
  },
  wrap: {
    position: 'raletive',
    width: '100%'
    
  },
  content: {
    padding: '0 140px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    justifyContent: 'space-around',
    marginBottom: '40px',
    maxWidth: '1500px',
    [theme.breakpoints.down("1390")]: {
      flexDirection: 'column'
    },
    [theme.breakpoints.down("800")]: {
      marginBottom: '0px',
      padding: '0 40px',
    },
  },
  head: {
    marginBottom: '100px',
    [theme.breakpoints.down("1390")]: {
      marginBottom: '40px',
    },
    [theme.breakpoints.down("650")]: {
      marginBottom: '20px',
    },
  },
  title: {
    marginBottom: '14px',
    fontSize: '38px',
    lineHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '600',
    color: '#0A79B8',
    [theme.breakpoints.down("650")]: {
      fontSize: '21px',
      lineHeight: '26.54px',
    },
  },
  subtitle: {
    fontSize: '24px',
    lineHeight: '30px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '600',
    color: '#383F45',
    [theme.breakpoints.down("650")]: {
      fontSize: '16px',
      lineHeight: '19.8px',
    },
  },
  imgWrap: {
   marginRight: '102px',
    [theme.breakpoints.down("1470")]: {
      marginRight: '100px',
      maxWidth: '400px'
    },
    [theme.breakpoints.down("1390")]: {
      marginRight: '0px',
      marginBottom: '40px'
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '200px',
      marginBottom: '20px'
    },
  },
  image: {
    width: '100%'
  },
  icon: {
    marginRight: '49px',
    maxWidth: '104px',
    maxHeight: '104px',
    [theme.breakpoints.down("650")]: {
      maxWidth: '51px',
      maxHeight: '51px',
      marginRight: '23px',
    },
  },
  listItem: {
    [theme.breakpoints.down("650")]: {
      marginBottom: '50px',
    },
  },
  item: {
    marginBottom: '60px',
    maxWidth: '502px',
    maxHeight: '119px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-araund',
    "&:last-child": {
      marginBottom: '0',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '300px',
    },
  },
  itemText: {
    maxWidth: '350px',
  },
  itemTitle: {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '600',
    color: '#1B5E20',
    [theme.breakpoints.down("650")]: {
      fontSize: '16px',
      lineHeight: '20.22px',
      marginBottom: '2px'
    },
  },
  itemDescriptions: {
    fontFamily: 'Averia Sans Libre',
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight: '500',
    color: '#156981',
    textAlign: 'left',
    "& > span": {
      whiteSpace: 'nowrap'
    },
    [theme.breakpoints.down("650")]: {
      fontSize: '16px',
      lineHeight: '20.22px',
    },
  },
  buttonDesc: {
    width: '156px',
    height: "56px",
    margin: theme.spacing(3, 0, 1),
    textTransform: 'none',
    background: '#FF5722',
    color: '#FFFFFF',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    margin: '0 auto',
    display: 'block',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    transition: 'background 0.3s ease-in',
    textDecoration: 'none',
    "& a": {
      fontFamily: 'Dosis',
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '16px',
      color: '#FFFFFF',
      textDecoration: 'none!important',
    },
    "&:active": {
      background: '#FF3D00',
    },
    "&:hover": {
      background: '#FF3D00',
      textDecoration: 'none',
    },
    [theme.breakpoints.down("650")]: {
      display: 'none'
    },
  },
  button: {
    width: '156px',
    height: "56px",
    margin: theme.spacing(3, 0, 1),
    textTransform: 'none',
    fontSize: '13px',
    background: '#FF5722',
    fontFamily: 'Dosis',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    lineHeight: '16px',
    color: '#FFFFFF',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    transition: 'background 0.3s ease-in',
    textDecoration: 'none',
    "& a": {
      fontFamily: 'Dosis',
      fontWeight: 'bold',
      fontSize: '22px',
      lineHeight: '16px',
      color: '#FFFFFF',
      textDecoration: 'none!important',
    },
    "&:active": {
      background: '#FF3D00',
    },
    "&:hover": {
      background: '#FF3D00',
      textDecoration: 'none',
    },
    [theme.breakpoints.up("650")]: {
      display: 'none'
    },
  },
  foots: {
    position: 'absolute',
    left: '40px',
    top: '15px',
    zIndex: '-1',
    [theme.breakpoints.down("940")]: {
      display: 'none'
    },
  },
  bone: {
    position: 'absolute',
    right: '12%',
    bottom: '18%',
    zIndex: '-1',
    [theme.breakpoints.down("940")]: {
      display: 'none'
    },
  },
}));


export default function BannerBenefits() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.inner}>
          <div className={classes.root}>
            <img className={classes.foots} src={Foots} alt=""/>
            <img className={classes.bone} src={Bone} alt=""/>
              <div className={classes.wrap}>
                <div className={classes.head}>
                  <h2 className={classes.title}>The world's choice in Pet Care</h2>
                  <p className={classes.subtitle}>There is something for everyone here</p>
                </div>
                <div className={classes.content}>
                  <div className={classes.imgWrap}>
                    <img className={classes.image} src={Image} alt=""/>
                  </div>
                  <div className={classes.listItem}>
                    <div className={classes.item}>
                      <img className={classes.icon} src={Box} alt=""/>
                      <div className={classes.itemText}>
                        <div className={classes.itemTitle}>Convenient</div>
                      <p className={classes.itemDescriptions}>Everything in one place, either you need someone to look after your pet for a day or require qualified help</p>
                      </div>
                    </div>
                    <div className={classes.item}>
                      <img className={classes.icon} src={Share} alt=""/>
                      <div className={classes.itemText}>
                        <div className={classes.itemTitle}>Easy</div>
                        <p className={classes.itemDescriptions}>Great network for those who seek a <span>part-time job</span> or professionals that want to take charge of their own destiny</p>
                      </div>
                    </div>
                    <div className={classes.item}>
                      <img className={classes.icon} src={Shield} alt=""/>
                      <div className={classes.itemText}>
                        <div className={classes.itemTitle}>Secure</div>
                        <p className={classes.itemDescriptions}>All payments are protected and our customer support is available 24/7</p>
                      </div>
                    </div>
                  </div>
                  <button className={classes.button}>
                    <Link href="/signup" variant="body2">
                      JOIN NOW
                    </Link>
                  </button>
                </div>
                  <button className={classes.buttonDesc}>
                    <Link href="/signup" variant="body2">
                      JOIN NOW
                    </Link>
                  </button>
              </div>
            </div>
          </div>
        {/* </div> */}
       
      </Grid>
    </Grid>
  );
}
