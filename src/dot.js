'use strict';

import React, { Component } from 'react';
import { View , ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types'
export default class Dot extends Component {
  static propTypes = {
    color: PropTypes.string,
    diameter: PropTypes.number,
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    color: 'white',
    diameter: 10,
  };

  render() {
    const { color, diameter , borderColor, borderWidth} = this.props;

    return (
      <View
        style={ [{
          backgroundColor: color,
          borderWidth: borderWidth,
          borderColor: borderColor,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }, this.props.style] }
      />
    );
  }
}
