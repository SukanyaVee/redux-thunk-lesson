import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAndHideNotification } from './reducer';

class Component2 extends Component {
  constructor() {
    super();
    this.doThingAndShowNotification = this.doThingAndShowNotification.bind(this);
  }

  doThingAndShowNotification() {
    // This setTimeout simulates any async operation, e.g. an axios call.
    setTimeout(() => {
      this.props.showAndHideNotification('Did thing from component 2');
      // This setTimeout has nothing to do with the axios call. We just want to show the notification for a certain amount of time and then hide it.
    }, 1500);
  }

  render() {
    return (
      <button onClick={this.doThingAndShowNotification}>Do thing and show notification 2</button>
    );
  }
};

const mapDispatchToProps = {
  showAndHideNotification: showAndHideNotification,
};

export default connect(null, mapDispatchToProps)(Component2);
