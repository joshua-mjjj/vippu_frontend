import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import Container from '@material-ui/core/Container'
import InputBase from '@material-ui/core/InputBase';
import Suggestions from './Suggestions.js';
import { init_fetch } from "./../actions/results.js";
import PropTypes from 'prop-types';



class Autocomplete extends Component {

  static defaultProperty={
        suggestions: []
      };

  constructor(props) {
    super(props);
    this.state = {
      active_suggestion: 0,
      filter_suggestions: [],
      show_suggestions: false,
      userInput: this.props.userInput 
    };

    this.onChange = this.onChange.bind(this)
  }

  onChange = (e) => {
    //alert("Changed")
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    let filter_suggestions;
    if(suggestions.length !== undefined){
          filter_suggestions = suggestions.filter(
          (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
     );
    }else {
         filter_suggestions = []
    }

    this.setState({
      active_suggestion: 0,
      filter_suggestions,
      show_suggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = (e) => {
    this.setState({
      active_suggestion: 0,
      filter_suggestions: [],
      show_suggestions: false,
      userInput: e.currentTarget.innerText
    });

    this.props.user_input(this.state.userInput)
  };

  //	13 → Return (Enter) key
	// 38 → Up Arrow Key
	// 40 → Down Arrow Key

  onKeyDown = e => {
    const { active_suggestion, filter_suggestions, userInput } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        active_suggestion: 0,
        show_suggestions: false,
        userInput: userInput
      });
        this.props.init_fetch(userInput)
       //this.props.user_input(this.state.userInput)
    }
    else if (e.keyCode === 38) {
      if (active_suggestion === 0) {
        return;
      }

      this.setState({ active_suggestion: active_suggestion - 1 });
    }
    else if (e.keyCode === 40) {
      if (active_suggestion - 1 === filter_suggestions.length) {
        return;
      }

      this.setState({ active_suggestion: active_suggestion + 1 });
    }
  };

  render() {
    this.props.user_input(this.state.userInput)
  	const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        filter_suggestions,
        show_suggestions,
        userInput
      }
    } = this;

  	let suggestions_list;
    if (show_suggestions && userInput) {
      if (filter_suggestions.length) {
        suggestions_list = (
          <div class="suggestions"> 
            {filter_suggestions.map((suggestion, index) => {
              return (
                <Suggestions key={index} onClick={onClick}
                  selected={suggestion} />
              );
            })}
          </div>
        );
      } else {
        suggestions_list = (
          <div class="no-suggestions">
            <em></em>
          </div>
        );
      }
    }

    return (
		 	<Fragment>
			  <Container>
            <InputBase
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
              fullWidth
              placeholder="Search pet services near me..."
              inputProps={{ 'aria-label': 'search pet services' }}
            />
  					{suggestions_list}
		      </Container>
		</Fragment>
    	);
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  fetch: state.results.results.fetch,
});
export default connect(mapStateToProps, { init_fetch })(Autocomplete);