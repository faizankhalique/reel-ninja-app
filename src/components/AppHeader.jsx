import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../config/theme';
import {Label14Light, Label16} from './AppText';

export default function AppHeader({title, image, onImagePress, step}) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onImagePress}>
          <Image
            source={image}
            resizeMode="contain"
            style={{height: wp(3), width: wp(3)}}
          />
        </TouchableOpacity>
        <Label14Light style={{color: 'white'}}>
          <Label16
            style={{
              color: 'white',
              fontWeight: '500',
            }}>{`Step ${step}: `}</Label16>
          {title}
        </Label14Light>
        <View></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: wp(8),
    paddingBottom: wp(4),
    backgroundColor: theme.custom.green,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(4),
  },
});
