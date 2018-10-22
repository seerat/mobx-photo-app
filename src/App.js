import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import { Route, Switch, withRouter, NavLink } from 'react-router-dom';
import PhotoList from './components/PhotoList.js';
import PhotoDetails from "./components/PhotoDetails.js"


class App extends Component {

  
  componentDidMount() {
      this.props.photoAppStore.getPhotos();
  }

  render() {
    return (
      <div>
        <h2 className="text-center">
          <NavLink to="/">
            Home 
          </NavLink>
        </h2> 
        {
          this.props.photoAppStore.photoList ?
          <Switch>
            <Route exact path="/" component={PhotoList} />
            <Route path="/:imageName" component={PhotoDetails} />
          </Switch> : null
        }
        
      </div>
    );
  }
}

export default inject("photoAppStore")(withRouter(observer(App)));
