import React from 'react';
import nationwideimage from '../src/images/Nationwide+Building+Society+logo.png';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Home';
import Transaction from './transaction';
import Employee from './employee';


export default class app extends React.Component {

  render() {
    return (
      <html>
        <center><img src={nationwideimage} className="" alt="logo" /></center>
        <Router>
          <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                onSelect={(selected) => {
                  const to = '/' + selected;
                  if (location.pathname !== to) {
                    history.push(to);
                  }
                }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Home
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="employee">
                    <NavIcon>
                      <i className="fa fa-users" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Involved Party
                        </NavText>
                  </NavItem>
                  <NavItem eventKey="transaction">
                    <NavIcon>
                      <i className="fa fa-bar-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Transactions
                        </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/" exact component={props => <Home />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/employee" component={props => <Employee />} />
                <Route path="/transaction" component={props => <Transaction />} />
              </main>
            </React.Fragment>
          )}
          />
        </Router>
      </html >
    )
  }
}

