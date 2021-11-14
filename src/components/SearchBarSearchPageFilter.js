import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '../assets/search.svg';
import Container from '@material-ui/core/Container';
import Card from '../views/atoms/Card';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Link, Redirect } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pagination from '@material-ui/lab/Pagination';

import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  wizardContainer: {
    [theme.breakpoints.down('450')] : {
      paddingLeft: '0px',
      paddingRight: '0px',
    }
  },
  root: {
    width: '100%',
    minHeight: '10vh',
    paddingTop: '40px',
    background: "#D4F2F2",
    [theme.breakpoints.down('700')] : {
      paddingTop: '30px',
    },
  },
  page: {
    display: 'flex',
    minHeight: '120px',
    height: '20px',
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down('960')] : {
      flexDirection: 'column'
    },
    [theme.breakpoints.down('700')] : {
      maxWidth: '400px',
      margin: '0 auto',
      minHeight: '120px',
      marginBottom: '20px',
    },
    [theme.breakpoints.down('450')] : {
      maxWidth: '370px',
      marginBottom: '20px',
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center'
  },
  aside:{
    width: '100%',
    maxWidth: '302px',
    [theme.breakpoints.down('960')] : {
      maxWidth: '100%',
      order: 3
    }
  },
  asideHeader: {
    background: "white",
    height: '112px',
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '45px',
    color: '#4F4F4F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '2px solid #BDBDBD',
    borderBottom: '2px solid #BDBDBD',
    [theme.breakpoints.down('960')] : {
      display: 'none'
    }
  },
  asideMain: {
    padding: '16px 47px 16px',
    background: 'white',
    minHeight: '400px',
    borderRight: '2px solid #BDBDBD',
    [theme.breakpoints.down('960')] : {
      padding: '16px 20px 16px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'auto',
      order: '3'
    },
    [theme.breakpoints.down('700')] : {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }
  },
  content: {
    width: '100%',
    [theme.breakpoints.down('960')] : {
      order: '0'
    }
  },
  headerContent: {
    width: '100%',
    background: "white",
    height: '112px',
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'normal',
    fontSize: '36px',
    lineHeight: '45px',
    color: '#4F4F4F',
    borderBottom: '2px solid #BDBDBD',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('700')] : {
      height: '100%',
      padding: '0 20px'
    }
  },
  contantMain: {
    paddingTop: '17px',
    paddingBottom: '17px',
    minHeight: '400px',
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    [theme.breakpoints.down('700')] : {
      minHeight: '62vh',
      background: '#fff',
      paddingBottom: '0px',
    },
  },
  labelSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    position: 'relative',
    [theme.breakpoints.down('700')] : {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      padding: '20px 0',
      marginBottom: '0px',
      justifyContent:'flex-start',
    },
    [theme.breakpoints.down('450')] : {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      padding: '20px 0',
      marginBottom: '0px',
      justifyContent:'center',
    },
  },
  input: {
    width: '524px',
    height: '52px',
    paddingLeft: '23px',
    marginLeft: theme.spacing(1),
    fontSize: '33px',
    lineHeight: '41px',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '998px',
    borderRadius: '10px 0px 0px 10px',
    border: "2px solid #BDBDBD",
    borderRight: '1px',
    fontFamily: 'Averia Sans Libre',
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
    [theme.breakpoints.down("1150")]: {
      fontSize: '22px',
      maxWidth: '300px',
    },
    [theme.breakpoints.down('1150')] : {
      maxWidth: '298px',
      margin: '0',
      width: '290px',
      height: '52px',
      fontSize: '22px',
      lineHeight: '22,27px',
      paddingLeft: "10px",
      minWidth: '250px',
      borderRight: 'none',
    },
    [theme.breakpoints.down('700')] : {
      maxWidth: '100%',
      width: '100%',
      height: '38px',
      border: '2px solid #BDBDBD',
      borderRadius: '10px 10px 0px 0px'
    },
    [theme.breakpoints.down('450')] : {
      maxWidth: '314px',
     
    },
  },
  inputZip: {
    width: '100%',
    height: '52px',
    paddingLeft: '23px',
    fontSize: '33px',
    lineHeight: '41px',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '143px',
    border: "2px solid #BDBDBD",
    borderRight: "none",
    fontFamily: 'Averia Sans Libre',
    [theme.breakpoints.down("1150")]: {
      fontSize: '22px',
      maxWidth: '80px',
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
    "&::-webkit-outer-spin-button": {
      appearance: 'none',
      margin: '0'
    },
    "&::-webkit-inner-spin-button": {
      appearance: 'none',
      margin: '0'
    },
    [theme.breakpoints.down('700')] : {
      maxWidth: '136px',
      width: '136px',
      border: '2px solid #BDBDBD',
      borderTop: 'none',
      paddingLeft: '10px',
      fontSize: '18px',
      height: '38px',
      borderRadius: '0px 0px 0px 10px'
    },
    [theme.breakpoints.down('450')] : {
      maxWidth: '121px',
      width: '121px',
    },
  },
  button: {
    maxWidth: '79px',
    maxHeight: '52px',
    margin: '-1px',
    padding: '9.5px 23px',
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
      maxWidth: '29px',
      [theme.breakpoints.down('700')] : {
        maxWidth: '20px',
      },
    },
    [theme.breakpoints.down('650')] : {
      maxWidth: '278px',
      margin: '0',
      padding: '9px 17px 6px 11px ',
    },
    [theme.breakpoints.down('700')] : {
      width: '72px',
      maxWidth: '100%',
      borderRadius: '0px 0px 10px 0px',
      height: '38px',
      borderTop: 'none'
    },
    [theme.breakpoints.down('450')] : {
      width: '64px',
    }
  },
  formControl: {
    minWidth: '152px',
    minHeight: '52px',
    "& > label": {
      top: '-9px',
      left: '11px',
      fontFamily: 'Averia Sans Libre',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '33px',
      lineHeight: '33px',
      color: '#7F7F7F',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('1150')] : {
        fontSize: '22px',
        lineHeight: '22px',
        top: '-4px'
      },
      [theme.breakpoints.down('700')] : {
        fontSize: '20px',
        lineHeight: '24px',
        left: '0px',
        top: '-13px'
      }
    },
    "& > div > select": {
      borderTop: '2px solid #BDBDBD',
      borderBottom: '2px solid #BDBDBD',
      borderLeft: '2px solid #BDBDBD',
      paddingLeft: '16px',
      minHeight: '48px',
      padding: '0',
      background: 'white',
      fontFamily: 'Averia Sans Libre',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '30px',
      color: '#7F7F7F',
      [theme.breakpoints.down('1150')] : {
        fontSize: '22px'
      },
      [theme.breakpoints.down('700')] : {
        paddingLeft: '10px',
        fontSize: '20px',
        height: '36px',
        minHeight: '36px',
        border: 'none',
        borderBottom: '2px solid #BDBDBD',
      }
    },
    "& > .MuiInputLabel-shrink": {
      transform: 'translate(5px, -14px) scale(0.75)',
      [theme.breakpoints.down('700')] : {
        display: 'none'
      }
    },
    "& > .MuiFilledInput-underline:before": {
      display: 'none'
    },
    "& > .MuiFilledInput-underline:after": {
      display: 'none'
    },
    "& > .Mui-focused": {
      color: '#7F7F7F!important'
    },
    [theme.breakpoints.down('1150')] : {
      fontSize: '22px'
    },
    [theme.breakpoints.down('700')] : {
      width: '152px',
      maxWidth: '152px',
      height: '38px',
      minHeight: '34px',
      borderTop: 'none',
      borderLeft: 'none'
    },
    [theme.breakpoints.down('450')] : {
      maxWidth: '128px',
      minWidth: '128px'
    }
  },
  selectAside: {
    minWidth: '210px',
    [theme.breakpoints.down('960')] : {
      minWidth: '150px',
    },
    [theme.breakpoints.down('700')] : {
      minWidth: '100px',
      padding: '0px 0'
    },
    "& > div > select": {
      [theme.breakpoints.down('700')] : {
        padding: '0!important',
        minHeight: '36px',
        // background: 'red'
      }
    },
    "& > label": {
      [theme.breakpoints.down('700')] : {
        top: '-8px'
      }
    }
  },
  asideTitle: {
    marginBottom: '5px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '30px',
    color: '#383F45',
    [theme.breakpoints.down('700')] : {
      fontSize: '18px',
      lineHeight: '18px',
    },
    [theme.breakpoints.down('450')] : {
      fontSize: '14px',
      lineHeight: '14px',
    }
  },
  asideSubTitle: {
    marginTop: '5px',
    fontFamily: 'Averia Sans Libre',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#828282',
    [theme.breakpoints.down('700')] : {
      display: 'none'
    }
  },
  hr: {
    display: 'block',
    marginTop: '25px',
    opacity: '0.5',
    [theme.breakpoints.down('960')] : {
      display: 'none'
    }
  },
  buttonAside: {
    display: 'block',
    width: '116px',
    padding: '4px 0',
    background: '#1B5E20',
    borderRadius: '10px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#FFFFFF',
    margin: '0 auto',
    marginTop: '36px',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    [theme.breakpoints.down('960')] : {
      margin: 0
    },
    [theme.breakpoints.down('700')] : {
      marginTop: '10px'
    }
  },
  selectFilter: {
    maxWidth: '100%',
    width: '100%'
  },
  pagination: {
    marginTop: 'auto'
  }
}));

export default function Filter(props){
    const classes = useStyles();
    const [rating, setRating] = useState(0)
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });

    const [Search_Input, setSearch_Input] = useState(props.search);
    const [miles, setMiles] = useState(localStorage.getItem("miles"));
    const [zipcode, setZipcode] = useState(localStorage.getItem("zipcode"));
    const [redi, setRedi] = useState('');

    const handleChange = (e) => {
      setSearch_Input(e.target.value)
    }

    const changeZip = (e) => {
      setZipcode(e.target.value)
    }

    const ChangeMilies = (e) => {
      //console.log(e.target.value)
      setMiles(e.target.value)
    }


  const refreshSearch = (e) => { 
    localStorage.setItem("miles", miles);
    localStorage.setItem("zipcode", zipcode);
    setRedi(true)
  }

    React.useEffect(() => {
      if (redi === true) {
        window.location.reload();
        return <Redirect to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}/>
      }
  }, [redi]);

    return (
        <div className={classes.root}>
            <Container maxWidth="lg" className={classes.wizardContainer}>
              <div className={classes.page}>
                <div className={classes.aside}> 
                  <div className={classes.asideHeader}>Filter by</div>
                </div >
                <div className={classes.content}>
                  <div className={classes.headerContent}>
                    <label className={classes.labelSearch} htmlFor="search">
                      <input className={classes.input} value={Search_Input} onChange={handleChange} type="text" id="search" placeholder="What service do you need?"/>
                      <input className={classes.inputZip} type="number" value={zipcode} onChange={changeZip} id="zip" placeholder="ZIP" maxlength="3"/>
                      <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Miles</InputLabel>
                        <Select
                          native
                          value={miles}
                          classes={{ root: classes.selectFilter }}
                          onChange={ChangeMilies}
                          inputProps={{
                            name: 'age',
                            id: 'filled-age-native-simple',
                          }}
                          >
                          <option aria-label="None" value="" />
                          <option value="10">Ten</option>
                          <option value="20">Twenty</option>
                          <option value="30">Thirty</option>
                        </Select>
                      </FormControl>
                      <Link to={{ pathname: `/search`, search: `?q=${Search_Input}`, state: { detail: `${Search_Input}` } }}>
                        <button className={classes.button} onClick={refreshSearch} type="submit">
                          <img className={classes.image} src={SearchIcon} alt=""/>
                        </button>
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </Container>
        </div>
    );
}
