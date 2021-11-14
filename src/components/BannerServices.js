import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from '../assets/services-01.svg';
import Hends from '../assets/services-02.svg';
import IconSearch from '../assets/services-icon-01.svg';
import IconHends from '../assets/services-icon-02.svg';
import Arrow from '../assets/arrow.svg';
import Ball from '../assets/ball.svg';
import ArrowMobile from '../assets/arrow2.svg';

const useStyles = makeStyles((theme) => ({
  inner: {
    paddingTop: '5px'
  },
  root: {
    paddingTop: '63px',
    paddingBottom: '59px',
    fontFamily: 'Dosis',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    background: '#F5F5EF',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down("650")]: {
      paddingTop: '27px',
      paddingBottom: '40px',
    },
  },
  container: {
    margin: '0 auto',
    maxWidth: '1140px',
    display: 'flex',
    alignItems: "center",
  },
  wrap: {
    position: 'raletive',
    width: '100%'
  },
  content: {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '854px',
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down("850")]: {
      maxWidth: '564px',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '305px',
    },
  },
  head: {
    marginBottom: '36px'
  },
  title: {
    marginBottom: '14px',
    fontSize: '37px',
    lineHeight: '47px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '600',
    color: '#45895F',
    [theme.breakpoints.down("1150")]: {
      maxWidth: '830px',
      margin: '0 auto',
      marginBottom: '20px'
    },
    [theme.breakpoints.down("850")]: {
      fontSize: '30px',
      lineHeight: '38px', 
      maxWidth: '700px',
      marginBottom: '6px',
    },
    [theme.breakpoints.down("650")]: {
      fontSize: '21px',
      lineHeight: '26.54px',
      maxWidth: '309px',
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
    [theme.breakpoints.down("850")]: {
      fontSize: '20px',
      lineHeight: '28px', 
    },
    [theme.breakpoints.down("650")]: {
      fontSize: '16px',
      lineHeight: '19.8px',
      maxWidth: '309px',
      margin: '0 auto'
    },
  },
  card: {
    marginBottom: '23px',
    position: 'relative',
    [theme.breakpoints.down("850")]: {
      maxWidth: '100px'
    },
  },
  item: {
    maxWidth: '362px',
    maxHeight: '424px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    "& span": {
      color: '#ff5722'
    },
    [theme.breakpoints.down("850")]: {
      maxHeight: '100%',
      maxWidth: '247px',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '130px',
    },
  },
  imgContainer: {
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("850")]: {
      minHeight: '233px',
    },
    [theme.breakpoints.down("650")]: {
      minHeight: '110px',
    },
  },
  imgWrap: {
    maxWidth: '362px',
    maxHeight: '424px',
    position: 'relative',
    [theme.breakpoints.down("850")]: {
      maxWidth: '362px',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '102px',
    },
    "& img:first-child": {
      width: '100%',
    },
    "& img:last-child": {
      position: 'absolute',
      top: '50%',
      [theme.breakpoints.down("850")]: {
        maxWidth: '120px'
      },
      [theme.breakpoints.down("650")]: {
        maxWidth: '56px'
      },
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  arrow: {
    paddingTop: '140px',
    alignSelf: 'self-start',
    maxWidth: '50px',
    [theme.breakpoints.down("850")]: {
      paddingTop: '100px',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '46px',
      display: 'none'
    },
  },
  arrow2: {
    paddingTop: '38px',
    alignSelf: 'self-start',
    maxWidth: '50px',
    [theme.breakpoints.up("650")]: {
      display: 'none'
    },
  },
  itemTitle: {
    marginBottom: '9px',
    fontSize: '42px',
    lineHeight: '53px',
    fontWeight: '500',
    color: '#383F45',
    [theme.breakpoints.down("850")]: {
      fontSize: '30px',
      lineHeight: '38px',
    },
    [theme.breakpoints.down("650")]: {
      fontSize: '24px',
      lineHeight: '30px',
    },
  },
  itemDescriptions: {
    fontFamily: 'Averia Sans Libre',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '500',
    color: '#737373',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    [theme.breakpoints.down("850")]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    [theme.breakpoints.down("650")]: {
      fontSize: '14px',
      lineHeight: '17px',
    },
  },
  ball: {
    position: 'absolute',
    left: '40px',
    bottom: '12px',
    zIndex: '-1',
    [theme.breakpoints.down("1140")]: {
      width: '85px',
      right: '-10px',
      top: 'auto',
      bottom: '15px',
    },
    [theme.breakpoints.down("650")]: {
      width: '85px',
      right: '-10px',
      top: 'auto',
      bottom: '15px',
    },
  },
}));


export default function BannerServices() {
  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.inner}>
          <div className={classes.root}>
            <img className={classes.ball} src={Ball} alt=""/>
            <div className={classes.container}>

              <div className={classes.wrap}>

                <div className={classes.head}>
                  <h2 className={classes.title}>We want to make taking care of your pet easier and enjoyable with local providers you can depend on</h2>
                  <p className={classes.subtitle}>In just a couple of steps; you will be able to</p>
                </div>

                <div className={classes.content}> 
                  <div className={classes.item}>
                    <div className={classes.imgContainer}>
                      <div className={classes.imgWrap}>
                        <img className={classes.image} src={Search} alt=""/>
                        <img className={classes.icon} src={IconSearch} alt=""/>
                      </div>
                    </div>
                    <div className={classes.itemTitle}> <span>1.&nbsp;</span>Find Local</div>
                    <p className={classes.itemDescriptions}>Best high qualified animal trainers,  groomers, care takers and much more living nearby</p>
                  </div>

                  <img className={classes.arrow} src={Arrow} alt=""/>
                  <img className={classes.arrow2} src={ArrowMobile} alt=""/>

                  <div className={classes.item}>
                    <div className={classes.imgContainer}>
                      <div className={classes.imgWrap}>
                        <img className={classes.image} src={Hends} alt=""/>
                        <img className={classes.icon} src={IconHends} alt=""/>
                      </div>
                    </div>
                      <div className={classes.itemTitle}> <span>2.&nbsp;</span>Hire</div>
                      <p className={classes.itemDescriptions}>Pick one out of a great variety of local providers</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
