import {StyleSheet, Text, FlatList, View, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import AppHeader from '../../components/AppHeader';
import AppStepper from '../../components/AppStepper';
import {
  getFontSize,
  Label11Light,
  Label10Light,
} from '../../components/AppText';
import AppButton from '../../components/AppButton';
import theme from '../../config/theme';

export default function UploadClipsScreen({navigation}) {
  const ListItem = () => {
    return (
      <View style={styles.listItemContainer}>
        <View style={{width: wp(60), paddingLeft: wp(2)}}>
          <Label11Light style={{fontSize: getFontSize(11.5)}}>
            Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Label11Light>
        </View>
        <View>
          <View style={styles.buttonsContainer}>
            <AppButton
              title={'Upload'}
              onPress={() => {}}
              buttonStyles={{
                width: wp(17),
                height: wp(6),
                backgroundColor: '#00CCC0',
                borderRadius: wp(1.2),
              }}
              textStyles={{
                color: theme.custom.black,
                fontSize: getFontSize(10),
                fontWeight: '500',
              }}
            />
            <AppButton
              title={'Edit'}
              onPress={() => {}}
              buttonStyles={{
                width: wp(17),
                height: wp(6),
                borderRadius: wp(1.2),
                backgroundColor: '#748080',
              }}
              textStyles={{
                fontSize: getFontSize(10),
                fontWeight: '500',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FF4958',
              borderRadius: wp(1.2),
              paddingVertical: wp(0.8),
              top: 5,
            }}>
            <Image
              style={{height: wp(3), width: wp(3)}}
              resizeMode="contain"
              source={require('../../assets/timer.png')}
            />
            <Label10Light style={{color: 'white', fontWeight: 'bold', left: 4}}>
              1.0 s
            </Label10Light>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppHeader
        title={'Upload Clips'}
        onImagePress={() => {
          navigation.goBack();
        }}
        image={require('../../assets/backArrow.png')}
        step={2}
      />
      <AppStepper activeWidth="50%" setp={2} />
      <View style={styles.listContainer}>
        <FlatList
          style={{flex: 1}}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={ListItem}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
        />
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
            onPress={() => navigation.navigate('AdjustScreen', null)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    flex: 1,
    position: 'relative',
    paddingTop: wp(2),
    paddingBottom: wp(25),
  },
  listItemContainer: {
    flexDirection: 'row',
    width: wp('95%'),
    borderColor: '#CECECE',
    borderWidth: 1,
    paddingHorizontal: wp(2),
    marginVertical: wp(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: wp(2),
    paddingVertical: wp(4),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    height: wp(24),
    width: wp(20),
    borderColor: '#1A7F79',
    borderWidth: 1,
    borderRadius: wp(2),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: wp(2),
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
