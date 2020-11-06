import './App.scss';
import React from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import UIKitPage from "./containers/UIKit";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'core/theme.js';
import LayoutHOC from "components/LayoutHOC/LayoutHOC";
import Signin from "containers/Auth/Signin/Signin";
import {connect} from "react-redux";
import MechsPage from "containers/Mechs/MechsPage";

function App({ isAuthenticated }) {
    const routes = isAuthenticated ?
        <Switch>
            <Route path="/uikit" exact component={UIKitPage}/>
            <Route path="/mechs" exact component={MechsPage}/>
            <Redirect from="/" to="/uikit" />
        </Switch>
        : <Switch>
            <Route path="/signin" exact component={Signin} />
            <Redirect from="/" to="/signin" />
        </Switch>;

  return <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutHOC>
          {routes}
      </LayoutHOC>
  </ThemeProvider>;
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.email !== null && state.auth.idToken !== null,
    };
};

export default withRouter(connect(mapStateToProps, null)(App));
