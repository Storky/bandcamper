import './App.scss';
import React from "react";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Auth from "./containers/Auth";
import UIKitPage from "./containers/UIKit";
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'core/theme.js';
import LayoutHOC from "components/LayoutHOC/LayoutHOC";

function App() {
    const routes = <Switch>
        <Route path="/auth" exact component={Auth}/>
        <Route path="/uikit" exact component={UIKitPage}/>
        <Redirect from='/' to='uikit'/>
    </Switch>

  return <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutHOC>
          {routes}
      </LayoutHOC>
  </ThemeProvider>;
}

export default withRouter(App);
