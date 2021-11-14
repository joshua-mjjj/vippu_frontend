import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { withStyles } from '@material-ui/core/styles';
import {useState} from 'react';
// import Avatar from "../assets/avatar-01.png";
import PostAvatar from "../assets/avatar-min.png";
import Local from "../assets/local.svg";
import Exp from "../assets/cleaning.svg";
import Mark from "../assets/checked.svg";
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import GuestNavBar from "../components/GuestNavBar"
import PrimarySearchAppBar from '../components/AuthorizedUserHomepageNavbar';
import Footer from "../components/Footer"
import ProviderGalleryView from "../components/ProviderGalleryView"
import { get_availability_data, clear_aval } from "../actions/form.js";
import AppointmentsBook from "../views/AppointmentsBook";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Spinner from '../assets/home_load.gif';

import Geocode from "react-geocode";
import HaversineGeolocation from 'haversine-geolocation';
Geocode.setApiKey("AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI");
Geocode.setLanguage("en");
Geocode.setLocationType("ROOFTOP");

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    paddingTop: '73px',
    background: "#D4F2F2",
  },
  page: {
    padding: '45px 92px 44px 107px',
    width: '100%',
    background: 'white',
    minHeight: '400px',
    borderRadius: '10px',
    overflow: 'hidden',
    [theme.breakpoints.down("768")]: {
      maxWidth: '375px',
      margin: '0 auto',
      padding: '45px 20px 44px 20px'
    },
  },
  head: {
    marginBottom: '48px',
    display: 'flex',
    alignItems: 'flex-start'
  },
  avatar:{
    marginRight: '95px',
    width: '184px',
    maxWidth: '184px',
    textAlign: 'center',
    [theme.breakpoints.down("768")]: {
      width: '140px',
      maxWidth: '140px',
      marginRight: '30px',
    },
  },
  avatarImg:{
    width: '184px',
    maxWidth: '184px',
    height: '184px',
    maxHeight: '184px',
    [theme.breakpoints.down("768")]: {
      width: '140px',
      maxWidth: '140px',
      height: '100%',
    },
    "& > img": {
      width: '100%'
    }
  },
  numberStar: {
    marginLeft: '7px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#000000',
  },
  starRatings: {
    marginTop: '25px',
    marginLeft: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down("768")]: {
      marginTop: '0px',
      position: 'relative',
      left: '90px',
      top: '10px'
    },
  },
  headInfo: {
    textAlign: 'left',
    width: '100%'
  },
  headName: {
    marginTop: '20px',
    maxWidth: 'fit-content',
    marginBottom: '8px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '36px',
    letterSpacing: '0.15px',
    color: '#222222',
    position: 'relative',
    [theme.breakpoints.down("768")]: {
      marginTop: 0,
      marginBottom: '12px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  background_check:{
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'grey',
    fontSize: '55px',
  },
  headName_: {
    marginTop: '5px',
    maxWidth: 'fit-content',
    marginBottom: '5px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '36px',
    letterSpacing: '0.15px',
    color: '#222222',
    position: 'relative',
    [theme.breakpoints.down("768")]: {
      marginTop: 0,
      marginBottom: '4px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  headName__: {
    marginTop: '10px',
    maxWidth: 'fit-content',
    marginBottom: '6px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '36px',
    letterSpacing: '0.15px',
    color: '#222222',
    position: 'relative',
    [theme.breakpoints.down("768")]: {
      marginTop: 0,
      marginBottom: '4px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  headMark: {
    position: 'absolute',
    right: '-26px',
    top: '0',
    [theme.breakpoints.down("768")]: {
      right: '-26px',
      left: 'auto'
    },
  },
  headLocation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: '20px'
  },
  headLocationImg: {
    marginRight: '20px',
  },
  headLocationTitle: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#383F45',
  },
  headLocationSubtitle: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '18px',
    color: '#1b5e2c',
    lineHeight: '18px',
    marginBottom: '30px'
  },
  headLocationBtn: {
    marginTop: '14px', 
    width: '149px',
    height: '41px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '30px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#156981',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.4s',
    [theme.breakpoints.down("768")]: {
      marginTop: '12px', 
      fontSize: '20px',
      height: '36px',
    },
    "&:hover": {
      background: '#88CCDD',
    }
  },
  title: {
    marginBottom: '14px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '33px',
    textDecorationLine: 'underline',
    color: '#222222',
    [theme.breakpoints.down("768")]: {
      marginBottom: '5px',
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  title_:{
    maxWidth: '624px',
    marginBottom: '9px',
    alignItems: 'center',
    fontWeight: '350',
    fontSize: '32px',
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
  title__:{
    maxWidth: '624px',
    marginBottom: '9px',
    alignItems: 'center',
    fontWeight: '350',
    fontSize: '18px',
    lineHeight: '58px',
    color: 'black',
    [theme.breakpoints.down("1210")]: {
      maxWidth: '506px',
    },
    [theme.breakpoints.down("700")]: {
      maxWidth: '327px',
      fontSize: '26px',
      lineHeight: '32.86px',
    },
  },
  description: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#383F45',
    [theme.breakpoints.down("768")]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  services: {
    width: '100%',
    [theme.breakpoints.down("1110")]: {
      width: '40%',
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '140px'
    },
  },
  servicesWraper: {
    width: '371px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down("1110")]: {
      width: '100%',
    },
    [theme.breakpoints.down("950")]: {
      flexDirection: 'column'
    },
  },
  servicesItem: {
    marginBottom: '14px',
    padding: '11px 0px 8px 0px',
    width: 'calc((100% - 40px) / 2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    background: '#F2F2F2',
    border: '1px solid #E0E0E0',
    borderRadius: '10px',
    [theme.breakpoints.down("1110")]: {
      width: 'calc((100% - 20px) / 2)',
    },
    [theme.breakpoints.down("950")]: {
      width: '100%',
    },
    [theme.breakpoints.down("768")]: {
      padding: '5px 0px 5px 0px',
      marginBottom: '8px',
    },
  },
  servicesTitle: {
    marginBottom: '4px',
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '40px',
    color: '#1B5E20',
    [theme.breakpoints.down("768")]: {
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
  servicesPrice: {
    marginBottom: '13px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#000000',
    [theme.breakpoints.down("768")]: {
      marginBottom: '5px',
    },
  },
  servicesBtn: {
    width: '91px',
    height: '25px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#156981',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background 0.4s',
    [theme.breakpoints.down("768")]: {
      width: '70px',
      height: '20px',
    },
    "&:hover": {
      background: '#88CCDD',
    }
  },
  contant: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down("1110")]: {
      flexDirection: 'row-reverse'
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '680px',
      margin: '0 auto'
    },
  },
  contantInfo: {
    width: '100%',
    maxWidth: '564px',
    [theme.breakpoints.down("1250")]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.down("950")]: {
      maxWidth: '500px',
      marginRight: '20px'
    },
  },
  about: {
   //  marginBottom: '76px',
    maxWidth: '444px',
    [theme.breakpoints.down("950")]: {
      marginBottom: '30px',
    },
  },
  gallery: {
    marginBottom: '106px',
    maxWidth: '444px',
    [theme.breakpoints.down("950")]: {
      marginBottom: '30px',
    },
  },
  post: {
    marginBottom: '34px',
    "&:last-child": {
      marginBottom: '28px',
    }
  },
  postHead: {
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  postAvatar: {
    marginRight: '17px',
    maxHeight: '53px',
    maxWidth: '53px'
  },
  postAvatarImg: {
    width: '100%'
  },
  rating: {
    marginLeft: 'auto',
  },
  postHeadName: {
    marginBottom: '7px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#383F45',
  },
  buttonAside: {
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '23px',
    color: '#828282',
  },
  postText: {
    fontFamily: 'Averia Sans Libre',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#383F45',
    [theme.breakpoints.down("768")]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  postsMore: {
    display: 'block',
    margin: '0 auto',
    width: '87px',
    height: '24px',
    fontFamily: 'Dosis',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#BDBDBD',
    borderRadius: '10px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
   imageSelector: {
      fontSize: "8rem",
      width: theme.spacing(26),
      height: theme.spacing(26),
      paddingLeft: theme.spacing(0),
      marginBottom: theme.spacing(4),
    },
  reviews: {
     marginTop: '30px'
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

function PetProviderInfo(props){
    const classes = useStyles();
    const [rating, setRating] = useState(0)
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const handleChange = (event) => {
      const name = event.target.name;
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    const StyledRating = withStyles({
      iconFilled: {
        color: '#ff6d75',
      },
      iconHover: {
        color: '#ff3d47',
      },
    })(Rating);

    const customIcons = {
      1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
      },
    };
    
function IconContainer(props) {
      const { value, ...other } = props;
      return <span {...other}>{customIcons[value].icon}</span>;
    }

    let services;
    if(props.services){
       services = props.services
    }

  const redirect_book = (e) => {
    const name = props.first_name
    localStorage.setItem("book_provider_name", name);
    window.location.href = `/petprovider`;
  }
  
  const [_id, setID] = useState(props.user_id);
  React.useEffect(() => {
      props.get_availability_data(_id)
      // making sure we get current provider availability data
      const name = props.first_name
      const id = props.user_id
      localStorage.setItem("book_provider_name", name);
      localStorage.setItem("book_provider_id", id);
  }, []);

  const [data, setData] = useState("");
  const fetching = () => {
     // console.log("Refreshing secondary....")
      props.clear_aval()
      props.get_availability_data(_id)
      props.get_availability_data(_id)
  };

  const [owner_lat,    setOwner_lat]    = useState("")
  const [owner_lng,    setOwner_lng]    = useState("")
  const [provider_lat, setProvider_lat] = useState("")
  const [provider_lng, setProvider_lng] = useState("")
  const [distance,     setDistance]     = useState(null)
  // calculating miles
    React.useEffect(() => {
      if(props.auth.user){
        console.log("User Authenticated...")
        const pet_owner_address = props.auth.user.address_line_1
        const pet_provider_address = props.address_line_1

        // decoding adresses
        // console.log("Pet Owner: " + pet_owner_address)
        Geocode.fromAddress(pet_owner_address).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            setOwner_lat(response.results[0].geometry.location.lat)
            setOwner_lng(response.results[0].geometry.location.lng) 
          },
          (error) => {
            console.error(error);
          }
        );
        // console.log("Pet provider: " + pet_provider_address)
        Geocode.fromAddress(pet_provider_address).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            setProvider_lat(response.results[0].geometry.location.lat)
            setProvider_lng(response.results[0].geometry.location.lng)
          },
          (error) => {
            console.error(error);
          }
        );

      if(owner_lat && owner_lng && provider_lat && provider_lng){
          const owner_point = {
            latitude: owner_lat,
            longitude: owner_lng
           }
          const  provider_point = {
              latitude: provider_lat,
              longitude: provider_lng
            }
          console.log(owner_point)
          console.log(provider_point)

          // calculating miles 
          const points = [ owner_point, provider_point ];
          // Distance in miles
          setDistance(HaversineGeolocation.getDistanceBetween(points[0], points[1], 'mi')) // miles
          console.log(distance)
          // // Distance in meters
          // HaversineGeolocation.getDistanceBetween(points[0], points[1], 'm'); // meters
           
          // // Distance in kilometers(default value)
          // HaversineGeolocation.getDistanceBetween(points[0], points[1]); // kilometers
        }
      }else{
        console.log("Sign in..")
      }
  }, [props.auth, owner_lat, owner_lng,  provider_lat,  provider_lng, distance]);

   // AVailability Regoin
   React.useEffect(() => {
      if(props.availability){
        // if(props.auth.user.id !==  null && props.auth.user.id !== undefined){
        //   var stage = 0;
        //   var stage_ = parseInt(stage)
        //   localStorage.setItem(`booking_status_${props.auth.user.id}`, stage_); 
        //   console.log(props.auth.user.id)
        // }
         const list = []
        
         props.availability.results.filter((availability) => {
           // console.log(availability)
            const end_time   = availability.end_time
            const start_time = availability.start_time
            const day        = availability.day
            const start_date     = availability.start_date
            const end_date       = availability.end_date


            var dateString_start = start_date + " " + start_time;
            var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString_start); 
            var dateObject_start = new Date(
                (+dateArray[1]), (+dateArray[2])-1, // Careful, month starts at 0!
                (+dateArray[3]),(+dateArray[4]),
                (+dateArray[5]),(+dateArray[6])
            );

            var dateString_end = end_date + " " + end_time;
            var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
            var dateArray = reggie.exec(dateString_end); 
            var dateObject_end = new Date(
                (+dateArray[1]),(+dateArray[2])-1, // Careful, month starts at 0!
                (+dateArray[3]),(+dateArray[4]),
                (+dateArray[5]),(+dateArray[6])
            ); 

            const id         = availability.id
            const notes      = availability.notes
            const first =  dateObject_start.toString().substring(15,24)
            const second = dateObject_end.toString().substring(15,24)
            // console.log(first.toString().substring(0,24))
            // console.log(second.toString().substring(0,24))

            const object = {
              title: `${first}, ${second}`,
              startDate : dateObject_start,
              endDate   : dateObject_end,
              id        : id,
              location: "Dummy",
            }
            list.push(object)
         })
          // console.log(list)
          setData(list)

        }
  }, [props.availability]);

    const [current, setCurrent] = useState("");
    const [name, setName] = useState(localStorage.getItem("book_provider_name"));

    React.useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var current_date = year + '-' + month + '-' + date
      setCurrent(current_date)

  }, [data]);

  React.useEffect(() => {
    if(props.form.isLoading === true){
      props.get_availability_data(_id)
       //console.log("setting to true")
    }
  }, [props.form.isLoading]);


  const redirect_signup = (e) => { 
    window.location.href = '/signup'
  }
  
  const redirect_login = (e) => { 
    window.location.href = '/login'
  }

   const redirect_signin = (e) => { 
    const bool = true;
    localStorage.setItem("user_from_booking", bool);
    window.location.href = '/login'
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
 


    return (
        <div className={classes.root}>
            <div>
               {props.auth.isAuthenticated && <PrimarySearchAppBar />}
            </div>
             <div>
               {!(props.auth.token) && <GuestNavBar />}
            </div>
            <Container maxWidth="lg" className={classes.wizardContainer}>
              <div className={classes.page}>
                <div className={classes.head}>
                  <div className={classes.avatar}>
                    <div className={classes.avatarImg}>
                     {/*<img src={props.avatar} alt="avatar"/>*/} 
                      <Avatar className={classes.imageSelector} alt="profile picture" src={props.avatar}/>
                    </div>
                    <div className={classes.starRatings}>
                      <Rating
                        classes={classes.star }
                        name="customized-empty"
                        defaultValue={2}
                        precision={1}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      />
                      <div className={classes.numberStar}>(4)</div>
                    </div>
                  </div>
                  <div className={classes.headInfo}>
                    <h2 className={classes.headName}>
                      {props.first_name} {props.last_name}
                      { props.background_check_status === "passed" && props.background_check_complete === true ? 
	                      (
                          <div>
	                      	 <img 
                              className={classes.headMark} src={Mark} alt=""
                              onMouseEnter={handlePopoverOpen}
                              onMouseLeave={handlePopoverClose}
                              />
                            <Popover
                                id="mouse-over-popover"
                                className={classes.popover}
                                classes={{
                                  paper: classes.paper,
                                }}
                                open={open}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'left',
                                }}
                                onClose={handlePopoverClose}
                                disableRestoreFocus
                              >
                                <Typography className={classes.background_check} >Background check cleared!</Typography>
                              </Popover>
                          </div>
	                      ) 
                      : null}
                    </h2>
                    <h2 className={classes.headName_}>
                      {props.tagline}
                    </h2>
                    <h2 className={classes.headName__}>
                      {props.country}
                    </h2>
                    <div className={classes.headLocation}>
                      <img className={classes.headLocationImg} src={Local} alt="local"/>
                      <div className={classes.headLocationText}>
                        <h2 className={classes.headLocationTitle}> {props.state}, {props.address_line_1}</h2>
                        {
                          props.auth.isAuthenticated ? 
                          (<div>{
                              distance !== null ? (<span className={classes.headLocationSubtitle}>{distance} miles away</span>) : (<span className={classes.headLocationSubtitle}>Calculating miles...</span>)
                          }</div>) 
                          : ("")
                        }
                        
                      </div>
                    </div>
                    <div className={classes.headLocation}>
                      <img className={classes.headLocationImg} src={Exp} height="25px" width="25px" alt="local"/>
                      <div className={classes.headLocationText}>
                        <h2 className={classes.headLocationTitle}>Experience: {props.experience_years} years, {props.experience_months} months</h2>
                      </div>
                    </div>
                      <button  onClick={redirect_book}  className={classes.headLocationBtn}>CONTACT</button>

                  </div>
                </div>
                <div className={classes.contant}>
                  <div className={classes.services}>
                    <div className={classes.title}>Services</div>
                      <div className={classes.servicesWraper}>
	                    {props.services ?  (
					              services.map((service, idx) => (
		                      <div className={classes.servicesItem}>
		                        <div className={classes.servicesTitle}>{service.service.name}</div>
		                        <div className={classes.servicesPrice}> <span>${service.price}/</span>{service.rate.name}</div>
		                        <button type="button" onClick={redirect_book} className={classes.servicesBtn}>BOOK</button>
		                      </div>
        					       ))
        					      ) : null
        					    }
          				    </div>
                  </div>
                  <div className={classes.contantInfo}>
                  <div className={classes.about}>
                    <div className={classes.title}>About</div>
                    <div className={classes.description}>
                      {props.description}
                    </div>
                    <div>
                     {
                      props.images && props.images.length !== 0 ? (<ProviderGalleryView images={props.images}/>) : ("")
                     }
                    </div>
                  </div>
                  <div style={{ 'marginBottom' : '30px'}}>
                  </div>
                  </div>
                </div>
                    <div className={classes.reviews}>
                    <div className={classes.title_}>{props.first_name}'s Availability</div>
                        {
                          data ? 
                          (
                            <div className={classes.calendar}>
                              <AppointmentsBook data={data} current={current} fetch={fetching}/> 
                            </div>
                          ) 
                          : 
                          (
                             <div>
                             {
                               props.auth.isAuthenticated ? (
                                  <div style={{
                                        marginLeft:'10px',
                                        marginTop: '5px'
                                   }}>
                                     <img src={Spinner} alt="" height="35px" width="35px" /> 
                                  </div>
                                ) :
                                ( <div className={classes.title__}>Please <Link variant="h6" color="primary" onClick={redirect_signin}>sign in</Link> to view availability</div>)
                             }
                            </div>
                          )
                        }
                    </div>

                  <div className={classes.reviews}>
                    <div className={classes.title}>Reviews</div>
                    <div className={classes.posts}>

                      <div className={classes.post}>
                        <div className={classes.postHead} className={classes.postHead}>
                          <div className={classes.postAvatar}>
                            <img className={classes.postAvatarImg} src={PostAvatar} alt="avarat"/>
                          </div>
                          <div className={classes.postHeadInfo}>
                            <h2 className={classes.postHeadName}>Kyle S.</h2>
                            <p className={classes.postHeadStatus}>2 days ago</p>
                          </div>
                          <div className={classes.rating}>
                            <Rating
                              classes={classes.star }
                              name="customized"
                              defaultValue={2}
                              precision={1}
                              emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                            </div>
                        </div>
                          <p className={classes.postText}>
                            I have had wonderful experiences with pet 
                            sitters on Rover, but Kyle has been the best. 
                            I could tell he really cared about my animals 
                            like they were his own. Excellent communication 
                            with me and took beautiful care of the house. 
                            Highly recommend.
                          </p>
                      </div>

                      <div className={classes.post}>
                        <div className={classes.postHead} className={classes.postHead}>
                          <div className={classes.postAvatar}>
                            <img className={classes.postAvatarImg} src={PostAvatar} alt="avarat"/>
                          </div>
                          <div className={classes.postHeadInfo}>
                            <h2 className={classes.postHeadName}>Kyle S.</h2>
                            <p className={classes.postHeadStatus}>2 days ago</p>
                          </div>
                          <div className={classes.rating}>
                            <Rating
                              classes={classes.star }
                              name="customized-empty"
                              defaultValue={2}
                              precision={1}
                              emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            />
                            </div>
                        </div>
                          <p className={classes.postText}>
                            I have had wonderful experiences with pet 
                            sitters on Rover, but Kyle has been the best. 
                            I could tell he really cared about my animals 
                            like they were his own. Excellent communication 
                            with me and took beautiful care of the house. 
                            Highly recommend.
                          </p>
                      </div>

                      <div className={classes.post}>
                        <div className={classes.postHead} className={classes.postHead}>
                          <div className={classes.postAvatar}>
                            <img className={classes.postAvatarImg} src={PostAvatar} alt="avarat"/>
                          </div>
                          <div className={classes.postHeadInfo}>
                            <h2 className={classes.postHeadName}>Kyle S.</h2>
                            <p className={classes.postHeadStatus}>2 days ago</p>
                          </div>
                          <div className={classes.rating}>
                            {/* <StarRatings
                              rating={rating}
                              starRatedColor="#FBC02D"
                              changeRating={setRating}
                              numberOfStars={5}
                              name='rating'
                              starDimension = "19px "
                              starSpacing = " 4px "
                            /> */}
                            </div>
                        </div>
                          <p className={classes.postText}>
                            I have had wonderful experiences with pet 
                            sitters on Rover, but Kyle has been the best. 
                            I could tell he really cared about my animals 
                            like they were his own. Excellent communication 
                            with me and took beautiful care of the house. 
                            Highly recommend.
                          </p>
                      </div>
                    </div>
                    <button className={classes.postsMore} type="button">MORE</button>
                  </div>
              </div>
            </Container>
            {/*<Footer/>*/}
        </div>
    );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  form: state.forms,
  availability: state.forms.availability_data,
});

export default connect(mapStateToProps, { get_availability_data, clear_aval })(PetProviderInfo);

