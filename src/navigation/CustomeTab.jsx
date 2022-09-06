import {Image, View, Text} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getFontSize} from '../components/AppText';
import theme from '../config/theme';

export default function CustomTab({
  isFocused,
  activeImage,
  image,
  activeStyles,
  styles,
  title,
}) {
  return (
    <View style={{width:wp(17),paddingTop:wp(2),alignItems: 'center',borderTopColor:isFocused ? theme.custom.light_green : theme.custom.light_grey,borderTopWidth:isFocused ? 2.5 : 0}}>
      {isFocused ? (
        <Image
          source={activeImage}
          style={[{height: wp(6), width: wp(6)}, activeStyles]}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={image}
          style={[{height: wp(6), width: wp(6)}, styles]}
          resizeMode="contain"
        />
      )}
      <Text
        style={{
          fontSize: getFontSize(10),
          marginTop: wp(1),
          color: isFocused ? theme.custom.light_green : theme.custom.light_grey,
        }}>
        {title}
      </Text>
    </View>
  );
}
