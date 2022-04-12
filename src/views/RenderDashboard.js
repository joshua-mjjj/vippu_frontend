import React from 'react';
import { connect } from 'react-redux';
import { logout, notify } from '../actions/auth.js';

// import AuthAppContainer from './AuthAppContainer';
// import AuthAppContainerpetOwner from './AuthAppContainerpetOwner';

import IdleTimer from 'react-idle-timer';
// import LoginPage from "./LoginPage";
// import Backdrop from '../Dashboard/GlobalComponents/Backdrop';
import LazyLoad from 'react-lazyload';
import DashboardRoot from '../Dashboard/Paperbase';
import DashboardRootBattallion2 from '../Dashboard/Battallion2/Paperbase';
import DashboardRootBattallion1 from '../Dashboard/Battallion1/Paperbase';
import DashboardRootBattallion3 from '../Dashboard/Battallion3/Paperbase';
import DashboardRootBattallion4 from '../Dashboard/Battallion4/Paperbase';
import DashboardRootBattallion5 from '../Dashboard/Battallion5/Paperbase';
import DashboardRootBattallion6 from '../Dashboard/Battallion6/Paperbase';

import * as Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;

class RenderDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: 1000 * 900 * 1, // idle timer
      userLoggedIn: false,
      isTimedOut: false
    };
    this.idleTimer = null;
    this.onAction = this._onAction.bind(this);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
  }

  _onAction(e) {
    this.setState({ isTimedOut: false });
  }

  _onActive(e) {
    this.setState({ isTimedOut: false });
  }

  _onIdle(e) {
    const isTimedOut = this.state.isTimedOut;
    if (isTimedOut) {
      this.props.notify();
      this.props.logout();
    } else {
      this.idleTimer.reset();
      this.setState({ isTimedOut: true });
    }
  }
  componentDidMount() {
    // window.scrollTo(0, 0);
    scroll.scrollToTop();
    // turn loading true back to false
  }

  render() {

    const current_dashboard = localStorage.getItem("admin_current_dashboard")

    return (
      <>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout}
        />

        <div>
          {this.props.auth.user ? (
            <div>

              {this.props.auth.user.account_type === 'admin' ? 
                (
                  <div>
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_six' &&
                    current_dashboard === "dashboard_six"
                     ?
                    (<DashboardRootBattallion6 />): (null)
                  }
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_five' &&
                    current_dashboard === "dashboard_five"
                     ?
                    (<DashboardRootBattallion5 />): (null)
                  }
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_four' &&
                    current_dashboard === "battallion_four"
                     ?
                    (<DashboardRootBattallion4 />): (null)
                  }
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_three' &&
                    current_dashboard === "battallion_three"
                     ?
                    (<DashboardRootBattallion3 />): (null)
                  }
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_two' &&
                    current_dashboard === "battallion_two"
                     ?
                    (<DashboardRootBattallion2 />): (null)
                  }
                  {
                    this.props.auth.user.admin_request_access === true && 
                    this.props.auth.user.admin_request_battalion === 'battallion_one' &&
                    current_dashboard === "battallion_one"
                     ?
                    (<DashboardRootBattallion1 />): (null)
                  }
                  
                  {
                    current_dashboard === "admin_dashboard"?
                    (<DashboardRoot />) : (null)
                  }
                  </div>
                ) 
              : ''}



              {this.props.auth.user.account_type === 'in_charge' ? (
                // Check Battallion
                <div>
                  {this.props.auth.user.battallion === 'battallion_two' ? (
                    <LazyLoad>
                       <DashboardRootBattallion2 />
                    </LazyLoad>
                  ) : (
                    ''
                  )}
                  {this.props.auth.user.battallion === 'battallion_one' ? (
                    <LazyLoad>
                       <DashboardRootBattallion1 />
                    </LazyLoad>
                  ) : (
                    ''
                  )}
                  {this.props.auth.user.battallion === 'battallion_three' ? (
                    <LazyLoad>
                        <DashboardRootBattallion3 />
                    </LazyLoad>
                  ) : (
                    ''
                  )}
                  {this.props.auth.user.battallion === 'battallion_four' ? (
                     <LazyLoad>
                        <DashboardRootBattallion4 />
                     </LazyLoad>
                  ) : (
                    ''
                  )}
                  {this.props.auth.user.battallion === 'battallion_five' ? (
                    <LazyLoad>
                        <DashboardRootBattallion5 />
                     </LazyLoad>
                  ) : (
                    ''
                  )}
                  {this.props.auth.user.battallion === 'battallion_six' ? (
                    <LazyLoad>
                       <DashboardRootBattallion6 />
                    </LazyLoad>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout, notify })(RenderDashboard);
