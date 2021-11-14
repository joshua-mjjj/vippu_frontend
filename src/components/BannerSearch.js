import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dog from '../assets/dog.svg';
import House from '../assets/house.svg';
import Grooming from '../assets/grooming.svg';
import Sitting from '../assets/sitting.svg';
import Play from '../assets/play.svg';
import Overnight from '../assets/overnight.svg';
import Concierge from '../assets/concierge.svg';
import Training from '../assets/training.svg';
import Cleaning from '../assets/cleaning.svg';
import Veterinary from '../assets/veterinary.svg';
import Cat from '../assets/cat.svg';
import CustomizedInputBase from "../components/SearchBar";
import zIndex from '@material-ui/core/styles/zIndex';
import SearchIcon from '../assets/search.svg';
import Foots from '../assets/foots.svg';
import { BorderRight } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
    background: '#E9F8F8',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down("1110")]: {
      paddingRight: '50px',
      paddingLeft: '50px',
      paddingTop: '50px',
    },
    [theme.breakpoints.down("400")]: {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
  container: {
    margin: '0 auto',
    maxWidth: '1140px',
    display: 'flex',
    alignItems: "center",
  },
  content: {
    position: 'raletive',
    width: '100%'
  },
  input: {
    paddingLeft: '23px',
    marginLeft: theme.spacing(1),
    fontSize: '33px',
    lineHeight: '41px',
    color: '#000',
    height: '79px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '998px',
    borderRadius: '10px 0px 0px 10px',
    border: "2px solid #BDBDBD",
    "& > input": {
      background: 'red'
    },
    "&::-webkit-input-placeholder": { 
      fontFamily: 'Averia Sans Libre',
    },
    "&::-moz-placeholder": { 
      fontFamily: 'Averia Sans Libre',
    },
    "&::ms-input-placeholder": { 
      fontFamily: 'Averia Sans Libre',
    },
    "&::-moz-placeholder": { 
      fontFamily: 'Averia Sans Libre',
    },
    [theme.breakpoints.down('sm')] : {
      width: 'auto',
      margin: '1rem 0.5rem',
    },
    [theme.breakpoints.down('1200')] : {
      maxWidth: '570px',
      margin: '0',
    },
    [theme.breakpoints.down('650')] : {
      maxWidth: '278px',
      margin: '0',
      height: '58px',
      fontSize: '18px',
      lineHeight: '22,27px',
      paddingLeft: "10px",
      minWidth: '250px',
      borderRight: 'none',
    }
  },
  labelSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: '40px',
    position: 'relative',
    [theme.breakpoints.down('650')] : {
      marginBottom: '10px',
    }
  },
  decor: {
    position: 'absolute',
    top: '-43px',
    right: '22%',
    [theme.breakpoints.down('650')] : {
      maxWidth: '82px',    
      top: '-16px',
      right: '34%'
    }
  },
  button: {
    margin: '-1px',
    padding: '10px 69px',
    background: '#C5E1A5',
    borderRadius: '0px 10px 10px 0px',
    border: '2px solid #BDBDBD',
    outline: 'none',
    transition: 'background 0.2s ease-in',
    cursor: 'pointer',
    "&:hover": {
      background: '#b7e285',
    },
    "&:active": {
      background: '#C5E1A5',
    },
    "& img": {
      [theme.breakpoints.down('650')] : {
        maxWidth: '35px',
      },
    },
    [theme.breakpoints.down('650')] : {
      maxWidth: '278px',
      margin: '0',
      padding: '9px 17px 6px 11px ',
    }
  },
  listItem: {
    maxWidth: '800px',
    height: '286px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-beetwen',
    flexWrap: 'wrap',
    margin: '0 auto',
    [theme.breakpoints.down("780")]: {
      justifyContent: 'center',
      height: '486px',
    },
    [theme.breakpoints.down("650")]: {
      maxWidth: '309px',
    },
  },
  itemWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% / 5)',
    [theme.breakpoints.down("780")]: {
      width: 'calc(100% / 4)',
    },
    [theme.breakpoints.down("650")]: {
      width: 'calc(100% / 3)',
    },
  },
  item: {
    paddingTop: '15px',
    paddingBottom: '12px',
    maxWidth: '128px',
    maxHeight: '128px',
    width: '128px',
    height: '128px',
    boxShadow: '2px 3px 10px rgba(34, 34, 34, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-arawnd',
    flexDirection: 'column',
    textDecoration: 'none',
    background: '#FFFFFF',
    borderRadius: '10px',
    "& img": {
      [theme.breakpoints.down("650")]: {
        maxWidth: '43px',
        maxHeight: '43px'
      },
    },
    [theme.breakpoints.down("650")]: {
      paddingTop: '10px',
      paddingBottom: '8px',
      maxWidth: '85px',
      maxHeight: '85px',
      width: '85px',
      height: '85px',
    },
  },
  text: {
    fontSize: '28px',
    lineHeight: '38px',
    alignItems: 'center',
    display: 'flex',
    fontWeight: '500',
    color: '#4F4F4F',
    [theme.breakpoints.down("650")]: {
      fontSize: '18px',
      lineHeight: '22.75px',
    },
  },
  foots: {
    position: 'absolute',
    right: '-140px',
    top: '46%',
    zIndex: '-1',
    [theme.breakpoints.down("650")]: {
      width: '185px',
      right: '-10px',
      top: 'auto',
      bottom: '0'
    },
  },
}));


export default function BannerSearch({autocompletes}) {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState('');
  const onSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12}>
        <div className={classes.inner}>
          <div className={classes.root}>
            <img className={classes.foots} src={Foots} alt=""/>
            <div className={classes.container}>

              <div className={classes.content}>
                <label className={classes.labelSearch} htmlFor="search">
                  <img className={classes.decor} src={Cat} alt=""/>
                  <input className={classes.input} type="text" id="search" value={searchInput} onChange={handleChange} placeholder="Pet services near me..." />
                  <Link  to={{
                    pathname: '/search', search: `?q=${searchInput}`, state: { detail: `${searchInput}` }
                  }}>
                    <button className={classes.button} type="submit">
                    <img className={classes.image} src={SearchIcon} alt=""/>
                  </button>
                  </Link>
                </label>
                {/* <div className={classes.searchWrap}>
                  <CustomizedInputBase className={classes.searchWrap} auto_complete={autocompletes} />
                </div> */}
                <div className={classes.listItem}>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                      pathname: '/search', search: `?q=Dog`, state: { detail: "Dog" } }}>
                      <img src={Dog} alt=""/>
                      <h3 className={classes.text}>Walk</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                      pathname: '/search', search: `?q=Day Care`, state: { detail: "Day Care" } }}>
                      <img src={House} alt=""/>
                      <h3 className={classes.text}>Day Care</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Grooming`, state: { detail: "Grooming" } }}>
                        <img src={Grooming} alt=""/>
                        <h3 className={classes.text}>Grooming</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Sitting`, state: { detail: "Sitting" } }}>
                        <img src={Sitting} alt=""/>
                        <h3 className={classes.text}>Sitting</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Play Date`, state: { detail: "Play Date" } }}>
                        <img src={Play} alt=""/>
                        <h3 className={classes.text}>Play Date</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Play Date`, state: { detail: "Overnight" } }}>
                        <img src={Overnight} alt=""/>
                        <h3 className={classes.text}>Overnight</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Concierge`, state: { detail: "Concierge" } }}>
                        <img src={Concierge} alt=""/>
                        <h3 className={classes.text}>Concierge</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Training`, state: { detail: "Training" } }}>
                        <img src={Training} alt=""/>
                        <h3 className={classes.text}>Training</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Cleaning`, state: { detail: "Cleaning" } }}>
                        <img src={Cleaning} alt=""/>
                        <h3 className={classes.text}>Cleaning</h3>
                    </Link>
                  </div>

                  <div className={classes.itemWrap}>
                    <Link className={classes.item} to={{
                        pathname: '/search', search: `?q=Veterinary`, state: { detail: "Veterinary" } }}>
                        <img src={Veterinary} alt=""/>
                        <h3 className={classes.text}>Veterinary</h3>
                    </Link>
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
