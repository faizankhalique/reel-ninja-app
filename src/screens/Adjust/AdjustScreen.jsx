import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppHeader from '../../components/AppHeader';
import AppStepper from '../../components/AppStepper';
import AppButton from '../../components/AppButton';
import {getFontSize, Label13} from '../../components/AppText';
import theme from '../../config/theme';
import AppCircleButton from '../../components/AppCircleButton';
const data = [
  {
    id: 1,
    backgroundColor: '#1A7F79',
    title: '0.5 X',
  },
  {
    id: 2,
    backgroundColor: '#00CCC0',
    title: '0.8 X',
  },
  {
    id: 3,
    backgroundColor: '#748080',
    title: '1 X',
  },
  {
    id: 4,
    backgroundColor: '#FF828C',
    title: '1.5 X',
  },
  {
    id: 5,
    backgroundColor: '#FF4958',
    title: '2 X',
  },
];

export default function AdjustScreen({navigation}) {
  return (
    <View style={styles.container}>
      <AppHeader
        title={'Adjust'}
        onImagePress={() => {
          navigation.goBack();
        }}
        image={require('../../assets/backArrow.png')}
        step={3}
      />
      <AppStepper activeWidth="75%" setp={3} />
      <View
        style={{
          flex: 1,
          // alignItems: 'center',
          paddingVertical: wp(4),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/Mask.png')}
            style={{height: wp(100), width: wp(75)}}
            resizeMode="contain"
          />

          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              height: wp(80),
              left: wp(2),
            }}>
            {data.map(item => (
              <AppCircleButton
                key={item.id}
                styles={{
                  backgroundColor: item.backgroundColor,
                  width: wp(14),
                  height: wp(14),
                  borderRadius: wp(14),
                }}
                onPress={() => {}}>
                <Label13 style={{color: 'white', fontWeight: '500'}}>
                  {item.title}
                </Label13>
              </AppCircleButton>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            top: wp(6),
            alignSelf: 'center',
            alignItems: 'center',
            position: 'relative',
          }}>
          <View
            style={{
              backgroundColor: '#00CCC0',
              position: 'absolute',
              height: wp(4.5),
              width: wp(1.5),
              top: wp(5.8),
              left: wp(20.4),
              zIndex: 10,
            }}
          />
          <View
            style={{
              backgroundColor: '#00CCC0',
              position: 'absolute',
              height: wp(4.5),
              width: wp(1.5),
              top: wp(5.8),
              left: wp(29.4),
              zIndex: 10,
            }}
          />
          <Image
            source={require('../../assets/masksmallleft.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(8), height: wp(17), marginHorizontal: 2}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmall.png')}
            style={{width: wp(7), height: wp(13)}}
            // resizeMode="contain"
          />
          <Image
            source={require('../../assets/masksmallright.png')}
            style={{width: wp(4.2), height: wp(13)}}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <AppButton
          title={'Save'}
          onPress={() => navigation.navigate('AdjustScreen', null)}
          buttonStyles={{
            width: '48%',
            backgroundColor: 'transparent',
            borderWidth: 1.2,
            borderColor: theme.custom.green,
          }}
          textStyles={{
            color: theme.custom.green,
            fontSize: getFontSize(12),
            fontWeight: '500',
          }}
        />
        <AppButton
          title={'Complete'}
          buttonStyles={{width: '48%'}}
          textStyles={{
            fontSize: getFontSize(12),
            fontWeight: '500',
          }}
          onPress={() => navigation.navigate('DoneScreen', null)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomContainer: {
    position: 'absolute',
    width: wp('100%'),
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(4),
    backgroundColor: '#fff',
    paddingHorizontal: wp(4),
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
