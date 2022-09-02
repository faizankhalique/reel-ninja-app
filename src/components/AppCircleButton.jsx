import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const AppCircleButton = props => {
  const {styles, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={onPress ? false : true}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          height: wp(8),
          width: wp(8),
          borderRadius: wp(4),
          backgroundColor: '#DEDEDE',
        },
        {...styles},
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};
export default AppCircleButton;
