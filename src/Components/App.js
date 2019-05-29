import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SingleRow from './SingleRow';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/api/row/:id" render={({match}) => <SingleRow id={match.params.id}/>}/>
        </Switch>
      </div>
    );
  };
};

export default App;
