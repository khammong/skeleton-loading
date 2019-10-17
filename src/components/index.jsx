import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Skeleton from 'react-loading-skeleton';

class Blogpost extends Component {
  render() {
    return (
      <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1>{this.props.title || <Skeleton />}</h1>
        {this.props.body || <Skeleton count={10} />}
      </div>
    );
  }
}

export default Blogpost

Blogpost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
}