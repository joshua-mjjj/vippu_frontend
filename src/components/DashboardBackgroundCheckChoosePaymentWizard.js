import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { screening } from "../actions/auth.js";
import { loadUser } from "../actions/auth.js";
import { useDispatch } from "react-redux";
import { sendUserData, start_check , get_payment_method } from "../actions/form";


// import PaymentsViewList from "./PaymentsViewList";
import PaymentsViewListMakePayment from "./PaymentsViewListMakePayment";
// import PaymentMethods from "./PaymentMethodList";
import PaymentMethodListBackCheckForm from './PaymentMethodListBackCheckForm'
import Spinner from '../assets/home_load.gif';

const useStyles = makeStyles((theme) => ({
  explanationText: {
    height: "auto",
    display: "flex",
    textAlign: "left",
    flexDirection: "column",
    fontSize: '13px',
  },
}));

function DashboardBackgroundCheckChoosePayment(props) {
  const classes = useStyles();
  const [ show_not, setShow_not ] = useState("");
  const [ primary, setPrimary ] = useState("");
  const [ show_load, setLoading ] = useState(false);

  const primary_method = (value) => {
    //console.log(value);
    props.primary_error(value);
  }

  const remove_form = () => {
    console.log("removing form...");
    setLoading(true)
    setShow_not(false)
    console.log(show_load);
    console.log(show_not);
  }

  const fetch_again = (e) => {
     props.get_payment_method();
     props.get_payment_method();
  }

  let results = null;
  if (props.payment_methods !== undefined && props.payment_methods !== null){
      results = props.payment_methods;
  }



   // if (props.errors.msg.length >= 1) {
   //    setLoading(false)
   //    setShow_not(true)
   //  }

   //  if (props.errors.msg.non_field_errors) {
   //    setLoading(false)
   //    setShow_not(true)
   //  }

   React.useEffect(() => {
    // console.log(props.payment_methods.length)
     props.get_payment_method();
     if(props.payment_methods.length > 0) {
         setShow_not(false)
         setLoading(false)
     }
     if(props.payment_methods.length === 0) {
        setShow_not(true)
     }
  }, [props.payment_methods]);

  //  React.useEffect(() => {
  //  // console.log(props.new_form)
  // }, [props.new_form]);

  return (
        <div>
          <Typography className={classes.explanationText}>
            Pet owners are more likely to work with you if a background
            check has been conducted on you. We use Sterling: a third
            party for this service.
            {/* We shall add an icon and a link to Sterling here  */}
          </Typography>
          <Typography className={classes.explanationText}>
            Sterling, which carries out the background check, charges a fee in order to cover costs 
            related to retrieving information on their applicants. 
          </Typography><br />
          <Typography className={classes.explanationText}>
           Select a Payment Method
          </Typography>

          {
            show_not === true && show_load === false ? 
            (                                                                                                          // props.fetch_again
              <div>
                <PaymentMethodListBackCheckForm remove_form={remove_form} payment_methods={results} fetch_again={fetch_again}/>
              </div>
            ) 
            : ("")
          }
          {
            show_not === false ? 
            (
              <div>
                <PaymentsViewListMakePayment primary_error={primary_method} payment_methods={results} fetch_again={fetch_again}/>
              </div>
            ) 
            : ("")
          }
          {
            show_load === true ? 
               (
                  <div>
                    <div style={{
                    display: "flex",
                    width: '100%',
                    minHeight: '50vh',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop: '13px',
                    background: "#fff",
                  }}>
                   <div style={{
                       alignItems:'center',
                       justifyContent:'center'
                    }}>
                      <img src={Spinner} alt="" height="90px" width="90px" /> 
                   </div>
                  </div>
                </div>
                )
            : ("")
          }

        </div>
                              
  );
}

const mapStateToProps = (state) => ({
  screeningResults: state.screening.results,
  beingProcessed: state.screening.beingProcessed,
  errors: state.errors,
  payment_methods: state.services.payment_methods,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  screening,
  loadUser,
  sendUserData,
  get_payment_method,
  start_check
})(DashboardBackgroundCheckChoosePayment);
