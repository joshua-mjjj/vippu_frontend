import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import BioSection from "../components/DashboardProfilePicSectionWizard";
import AddressSectionWizard from '../components/AddressSectionWizard';
import DashboardContactSectionWizard from '../components/DashboardContactSectionWizard';
import DashboardAddPetSectionWizard from '../components/DashboardAddPetSectionWizard';
import { reset_go_to_next, getPetTypes } from "../actions/form.js";

import { loadUser } from "../actions/auth.js";
import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;

function DashboardWizardSteps(props) {

  	React.useEffect(() => {
      props.loadUser();
      props.loadUser();
      //console.log("Now new")
  }, []);

     const current_stage = localStorage.getItem(`stage_value_pet_${props.user.id}`);
   //  console.log(current_stage);

      React.useEffect(() => {
       props.getPetTypes();
       props.reset_go_to_next()  // making sure this is always reset to false
      //  window.scrollTo(0, 0);
        scroll.scrollToTop();

    }, [current_stage]); 

    if(current_stage === "0"){
       props.setActiveStep(0)
       return <BioSection />;
     }
    if(current_stage === "1"){
      props.setActiveStep(1)
      return <AddressSectionWizard />;
     }
    if(current_stage === "2"){
      props.setActiveStep(2)
      return <DashboardContactSectionWizard />;
     }
    if(current_stage === "3"){
      props.setActiveStep(3)
      return <DashboardAddPetSectionWizard />;
     }
   

    switch (props.step) {
      case 0:
        return  <BioSection />;
      case 1:
        return <AddressSectionWizard />;
      case 2:
        return <DashboardContactSectionWizard />;
      case 3:
        return <DashboardAddPetSectionWizard />;
      default:
        return <BioSection />;
    }
  }

const mapStateToProps = (state) => ({
    form: state.forms,
    user: state.auth.user,
    results: state.services.results,
    all_services: state.services.admin_services,
 });
 export default connect(mapStateToProps, {
     loadUser, reset_go_to_next, getPetTypes
 })(DashboardWizardSteps);