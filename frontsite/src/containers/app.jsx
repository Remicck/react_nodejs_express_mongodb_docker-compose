import React, { Component } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import TopPage from './toppage';

// components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  /*
    <Route
      path="/propsclass"
      render={props => <PropsClass func={this.handleChildClick} {...props} />}
    />
  */

  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={TopPage} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
