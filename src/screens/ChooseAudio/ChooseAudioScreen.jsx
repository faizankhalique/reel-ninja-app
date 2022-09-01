import {ImageBackground, StyleSheet, Image, Text, View,Pressable} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppStepper from '../../components/AppStepper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Label14Light, Label13Light } from '../../components/AppText';
import AppCircleButton from '../../components/AppCircleButton';
import CustomModal from '../../components/AppModal';
import theme from '../../config/theme';

export default function ChooseAudio({navigation}) {
  const [modalVisible,setModalVisible]=React.useState(false)
  return (
    <View style={styles.container}>
      <AppHeader
        title={'Choose Audio'}
        onImagePress={() => {
          navigation.goBack();
        }}
        image={require('../../assets/crossIcon.png')}
        step={1}
      />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/josh.png')}>
        <AppStepper activeWidth="25%" setp={1} />
        <View
          style={{
            width: wp(13),
            height: wp(60),
            borderRadius: wp(6.5),
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            paddingVertical: wp(1.5),
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: wp(24),
            right: wp(2),
          }}>
          <AppCircleButton
            onPress={() => navigation.navigate('UploadClipsScreen', null)}
            styles={{
              backgroundColor: '#444444',
              width: wp(12),
              height: wp(12),
              borderRadius: wp(12),
            }}>
            <Image
              style={{width: wp(4.7), height: wp(4.7)}}
              resizeMode="contain"
              source={require('../../assets/idea2.png')}
            />
          </AppCircleButton>
          <AppCircleButton
            onPress={() => {setModalVisible(true)}}
            styles={{
              backgroundColor: '#444444',
              width: wp(12),
              height: wp(12),
              borderRadius: wp(12),
            }}>
            <Image
              style={{width: wp(4.7), height: wp(4.7)}}
              resizeMode="contain"
              source={require('../../assets/diskette.png')}
            />
          </AppCircleButton>
          <AppCircleButton
            onPress={() => navigation.navigate('UploadClipsScreen', null)}
            styles={{
              backgroundColor: '#444444',
              width: wp(12),
              height: wp(12),
              borderRadius: wp(12),
            }}>
            <Image
              style={{width: wp(4.7), height: wp(4.7)}}
              resizeMode="contain"
              source={require('../../assets/slide-show.png')}
            />
          </AppCircleButton>
          <AppCircleButton
            onPress={() => navigation.navigate('UploadClipsScreen', null)}
            styles={{
              backgroundColor: '#444444',
              width: wp(12),
              height: wp(12),
              borderRadius: wp(12),
            }}>
            <Label14Light style={{color: 'white'}}>2d</Label14Light>
          </AppCircleButton>
        </View>
        <View
          style={{
            position: 'absolute',
            width: '95%',
            alignSelf: 'center',
            bottom: wp(2),
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingVertical: wp(3),
            paddingHorizontal: wp(6),
          }}>
          <Label14Light style={{color: 'white', lineHeight: wp(6)}}>
            Best for luxurious products & services, such as traveling, resorts,
            fine dining, super cars
          </Label14Light>
        </View>
      </ImageBackground>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={{backgroundColor:theme.custom.light_green,height:wp(30),width:wp(30),borderRadius:wp(5),justifyContent:"center",alignItems:"center"}}>
        <Pressable
              style={{ alignSelf: "flex-end",position:"absolute",top:wp(2),right:wp(2) }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                source={require("../../assets/x.png")}
                style={{ height: 25, width: 25 }}
                resizeMode="contain"
              />
            </Pressable>
            <Label13Light >Saved</Label13Light>
        </View>
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
