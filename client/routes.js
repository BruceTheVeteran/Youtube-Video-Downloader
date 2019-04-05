//client/routes.js
import React, {Component} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Dcp from './components/DiscordControlPanel';

class Routes extends Component {

 render() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/control-panel' component={Dcp} />
         <Redirect to="/" />
      </Switch>
    </div>
    )
  }
}
export default Routes;
