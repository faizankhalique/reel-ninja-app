import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Label10Light, Label12} from './AppText';
import theme from '../config/theme';
import AppCircleButton from './AppCircleButton';

export default function AppStepper({activeWidth = '25%', setp}) {
  const Step = ({isActive, setp, title}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '25%',
          height: '100%',
        }}>
        <AppCircleButton
          styles={{backgroundColor: isActive ? theme.custom.green : '#DEDEDE'}}>
          <Label12
            style={{
              color: isActive ? 'white' : '#909090',
              fontWeight: '500',
            }}>
            {setp}
          </Label12>
        </AppCircleButton>
        <Label10Light style={{top: 2, fontWeight: '500'}}>{title}</Label10Light>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            height: '100%',
            width: activeWidth,
            backgroundColor: '#00CCC0',
            borderTopRightRadius: wp(2),
            borderBottomRightRadius: wp(2),
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: wp(20),
          position: 'relative',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            width: activeWidth,
            height: '100%',
            backgroundColor: '#C5FFFC',
            opacity: 0.4,
            position: 'absolute',
          }}
        />
        <Step
          title={'Choose Audio'}
          isActive={setp >= 1 ? true : false}
          setp={1}
        />
        <View
          style={{
            backgroundColor: setp > 1 ? '#00CCC0' : '#DCDCDC',
            height: 1,
            width: '14%',
            left: '18%',
            top: wp(8),
            position: 'absolute',
          }}
        />
        <Step
          title={'Upload Clips'}
          isActive={setp >= 2 ? true : false}
          setp={2}
        />
        <View
          style={{
            backgroundColor: setp > 2 ? '#00CCC0' : '#DCDCDC',
            height: 1,
            width: '14%',
            left: '43%',
            top: wp(8),
            position: 'absolute',
          }}
        />
        <Step title={'Adjust'} isActive={setp >= 3 ? true : false} setp={3} />
        <View
          style={{
            backgroundColor: setp > 3 ? '#00CCC0' : '#DCDCDC',
            height: 1,
            width: '14%',
            left: '67.8%',
            top: wp(8),
            position: 'absolute',
          }}
        />
        <Step title={'Done'} isActive={setp >= 4 ? true : false} setp={4} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDBDB',
    width: '100%',
    height: wp(2.6),
  },
});
