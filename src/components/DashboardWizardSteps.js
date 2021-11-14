import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import BioSection from "../components/DashboardProfilePicSectionWizard";
import AddressSectionWizard from '../components/AddressSectionWizard';
import DashboardContactSectionWizard from '../components/DashboardContactSectionWizard';
import AddServicesSectionWizard from '../components/AddServicesSectionWizard';
import DashboardPetPreferenceWizard from '../components/DashboardPetPreferenceWizard';
import DashboardPetExperienceWizard from '../components/DashboardPetExperienceWizard';
import DashboardBackgroundCheckSectionWizard from '../components/DashboardBackgroundCheckSectionWizard';

import { loadUser } from "../actions/auth.js";
import { reset_go_to_next, getPetTypes } from "../actions/form.js";

import * as Scroll from 'react-scroll';

var scroll = Scroll.animateScroll;

function DashboardWizardSteps(props) {

  // const [error_name, setError_name] = useState(false);

    React.useEffect(() => {
      props.loadUser();
      props.loadUser();
  }, []);

    // const step = 4;
    // if(step === 4){
    //    console.log(props.user.last_login);
    //    props.setActiveStep(4)
    //    return <DashboardPetPreferenceWizard />;
    // }

    const current_stage = localStorage.getItem(`stage_value_${props.user.id}`);

     React.useEffect(() => {
       props.getPetTypes();
       props.reset_go_to_next()  // making sure this is always reset to false
      //  window.scrollTo(0, 0);
       scroll.scrollToTop();

    }, [current_stage]);

   //  console.log(current_stage);
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
      return <AddServicesSectionWizard />;
     }
    if(current_stage === "4"){
      props.setActiveStep(4)
      return <DashboardPetPreferenceWizard />;
     }
    if(current_stage === "5"){
      props.setActiveStep(5)
      return <DashboardPetExperienceWizard />;
     }
    if(current_stage === "6"){
      props.setActiveStep(6)
      return <DashboardBackgroundCheckSectionWizard />;
    }

   switch (current_stage) {
      case 0:
        return  <BioSection />;
      case 1:
        return <AddressSectionWizard />;
      case 2:
        return <DashboardContactSectionWizard />;
      case 3:
        return <AddServicesSectionWizard />;
      case 4:
        return <DashboardPetPreferenceWizard />;
      case 5:
        return <DashboardPetExperienceWizard />;
      case 6:
        return <DashboardBackgroundCheckSectionWizard />;
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