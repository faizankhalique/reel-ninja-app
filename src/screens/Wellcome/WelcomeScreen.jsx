import React,{useState,useEffect} from 'react';
import { View, Text, ImageBackground, TouchableOpacity,Image,Animated } from 'react-native';
import { getFontSize, Label12, Label13, Label14, Label19 } from "../../components/AppText";

import {StyleSheet} from 'react-native'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

// import { WelcomeScreenStyles as styles } from "@styles/WelcomeScreenStyles";
// import AppCustomLogo from "../../components/AppCustomLogo"
import AppButton from '../../components/AppButton';
import NavigationService from '../../navigation/NavigationService';
import theme from '../../config/theme';

function WelcomeScreen(props) {
  const topValue=useState(new Animated.Value(wp(50)))[0];
  const opacity=useState(new Animated.Value(0))[0];

  const move=()=>{
    Animated.timing(topValue,{
      toValue:wp(50),
      duration:2800,
      // useNativeDriver:true
    }).start();
  }
  const fadeIn=()=>{
    Animated.timing(opacity,{
      toValue:1,
      duration:3500,
      // useNativeDriver:true
    }).start();
  }
  useEffect(()=>{
    // move();
    fadeIn();
  },[]);
    return (
        <ImageBackground source={require("../../assets/background2.jpeg")}  style={styles.wrapper}>
            <View style={styles.textContainer}>
            <Image style={{height:wp(28),width:wp(28),borderRadius:wp(4),borderWidth:2,borderColor:theme.custom.gray}}  source={require("../../assets/appLogo.jpeg")}/>
          
               
                <Label19 style={{color:"white",fontWeight:"400",fontSize:getFontSize(28),marginTop:wp(4)}}>REELS NINJA</Label19>
                <Label13 style={{color:"white",textAlign:"center",marginVertical:wp(2)}}>{"Start creating engaging short\nvideos for reels & tiktok\n within 5 mints"}</Label13>
                <Animated.View style={[{
                  // marginTop:topValue,
                  opacity:opacity
                  }]}>
                 <AppButton title="Create Account" onPress={() => NavigationService.navigate("SignupScreen", {})} textStyles={{fontSize:getFontSize(18)}} buttonStyles={styles.buttonContainerStyles}  />
                <TouchableOpacity onPress={() => NavigationService.navigate("LoginScreen", {})}>
                    <Label12 style={styles.signInText}>Already registered. Login here</Label12>
                </TouchableOpacity>
                
                </Animated.View>
               
            </View>
            
        </ImageBackground>
    );
}

export default WelcomeScreen;

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(10),
        backgroundColor:theme.custom.white
      },
      textContainer: {
        alignItems: 'center',
      },
      smallText: {
        marginTop: wp(3),
        color: '#7B7B7B',
      },
      buttonContainerStyles: {
        width: '85%',
        // borderWidth:1,
        marginTop:wp(8),
        width:wp(60),
        height:wp(16),
        borderRadius:wp(10),
        backgroundColor:"#FF4958"
      },
      bottomContainer: {
        width: wp('100%'),
        // position: 'absolute',
        // bottom: 0,
        alignItems: 'center',
      },
      signInText:{
          marginVertical:wp(5),
          fontWeight:"bold",
          color:theme.custom.white,
          alignSelf:"center"
      }
  })