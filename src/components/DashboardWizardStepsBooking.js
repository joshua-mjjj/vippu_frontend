import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import PetProvider from "../views/PetProvider";
import PetProviderCharges from "../views/PetProviderCharges";
import BookingPaymentList from "../components/BookingPaymentList";

import PaymentMethodList from '../components/PaymentMethodListBook';
import DashboardContactSectionWizard from '../components/DashboardContactSectionWizard';
import AddServicesSectionWizard from '../components/AddServicesSectionWizard';
import DashboardPetPreferenceWizard from '../components/DashboardPetPreferenceWizard';
import DashboardPetExperienceWizard from '../components/DashboardPetExperienceWizard';
import DashboardBackgroundCheckSectionWizard from '../components/DashboardBackgroundCheckSectionWizard';

import { loadUser } from "../actions/auth.js";
import { reset_go_to_next, get_payment_method } from "../actions/form.js";

import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

function DashboardWizardSteps(props) {

  // const [error_name, setError_name] = useState(false);

    React.useEffect(() => {
      props.loadUser();
      props.get_payment_method();
      props.get_payment_method();
      props.loadUser();
  }, []);


  const fetch_again = (e) => {
     props.get_payment_method();
     props.get_payment_method();
  }

    // const current_stage = localStorage.getItem(`booking_status_${user_id}`);
    const current_stage = props.step

    
     React.useEffect(() => {
       props.reset_go_to_next()  // making sure this is always reset to false
       scroll.scrollToTop();
       // console.log(props.step)

    }, [current_stage]);

   //  console.log(current_stage);
    if(current_stage === "0"){
       if(props.payment_methods){
          props.setActiveStep(0)
         return (<div> 
          <BookingPaymentList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
           <PaymentMethodList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
        </div>);
       }
     }else if(current_stage === 0){
       if(props.payment_methods){
          props.setActiveStep(0)
         return (<div> 
          <BookingPaymentList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
          <PaymentMethodList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
        </div>);
       }
     }else if(current_stage === "1"){
      props.setActiveStep(1)
      return (<PetProvider/>);
     }else if(current_stage === 1){
      props.setActiveStep(1)
      return (<PetProvider/>);
    }else if(current_stage === "2"){
      props.setActiveStep(2)
      return (<PetProviderCharges/>);
    }else if(current_stage === 2){
      props.setActiveStep(2)
      return (<PetProviderCharges/>);
    }else{
        console.log("Nothing to return")
        props.setActiveStep(0)
        return (<div> 
          <BookingPaymentList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
          <PaymentMethodList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
        </div>);
     }

      console.log("Nothing to return")
      props.setActiveStep(0)
      return (<div> 
      <BookingPaymentList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
      <PaymentMethodList payment_methods={props.payment_methods} fetch_again={fetch_again} /> 
     </div>);
  }

const mapStateToProps = (state) => ({
    form: state.forms,
    user: state.auth.user,
    results: state.services.results,
    all_services: state.services.admin_services,
    payment_methods: state.services.payment_methods
 });
 export default connect(mapStateToProps, {
    loadUser, reset_go_to_next, get_payment_method
 })(DashboardWizardSteps);