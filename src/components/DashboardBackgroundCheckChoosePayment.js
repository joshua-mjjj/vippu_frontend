import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { screening } from "../actions/auth.js";
import { loadUser } from "../actions/auth.js";
import { useDispatch } from "react-redux";
import { sendUserData, start_check } from "../actions/form";


// import PaymentsViewList from "./PaymentsViewList";
import PaymentsViewListMakePayment from "./PaymentsViewListMakePayment";
// import PaymentMethods from "./PaymentMethodList";
import PaymentMethodListBackCheck from './PaymentMethodListBackCheck'

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

  const primary_method = (value) => {
    //console.log(value);
    props.primary_error(value);
  }

   React.useEffect(() => {
  	 console.log(props.payment_methods.length)
  	 if(props.payment_methods.length > 0){
 		     setShow_not(false)
  	 }
     if(props.payment_methods.length === 0){
        setShow_not(true)
     }
  }, [props.payment_methods]);

   React.useEffect(() => {
  	 console.log(props.new_form)
  }, [props.new_form]);

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
          	show_not === true ? 
          	(
          		<div>
          			<PaymentMethodListBackCheck payment_methods={props.payment_methods} fetch_again={props.fetch_again}/>
          		</div>
          	) 
          	: ("")
          }
          {
            show_not === false ? 
            (
              <div>
                <PaymentsViewListMakePayment primary_error={primary_method} payment_methods={props.payment_methods} fetch_again={props.fetch_again}/>

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
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  screening,
  loadUser,
  sendUserData,
  start_check
})(DashboardBackgroundCheckChoosePayment);
