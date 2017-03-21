// import primary libraries
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// import global components
import Base from "../../../global/components/BaseComponent.js.jsx";
import DefaultLayout from "../../../global/components/DefaultLayout.js.jsx";

class UserLayout extends Base {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout>
        {this.props.children}
      </DefaultLayout>
    )
  }
}

export default UserLayout;
