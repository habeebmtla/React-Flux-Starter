import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../../stores/SampleStore';
import './style.scss';
class Loader extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default Container.create(Loader);
