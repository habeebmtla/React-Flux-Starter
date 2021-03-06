import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../../stores/SampleStore';
import AppAction from '../../actions/AppActionCreators';
import Loader from '../Loader'

class Home extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  componentDidMount() {
    AppAction.getApi('users','/users')
  }

  render() {
    let {users,loading} = this.state.sample
    console.log(users)
    return (
      <div className="container" >
        {loading && <Loader />}
        <h1>Hi I am starter react flux</h1>
      </div>
    );
  }
}

export default Container.create(Home);
