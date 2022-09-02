import React from 'react'
import {TextInput, View, ViewStyle, Image,TextInputProps,StyleSheet, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'

import theme from '../config/theme'
import { getFontSize } from './AppText'

const AppTextInput= ({
  icon,
  iconSize = 20,
  textInputContainerStyle,
  textInputIconStyle,
  textInputStyle,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  placeholder,
  password,
  onChangeText,
  value,
  isSearch,
}) => {
  const [isSecure, setIsSecure] = useState(password ? true : false)

  return (
    <View style={[styles.container, textInputContainerStyle]}>
      {/* {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          style={[styles.icon, textInputIconStyle]}
        />
      )}
      {isSearch && (
        <Feather
          name={'search'}
          size={iconSize}
          style={[styles.icon, textInputIconStyle]}
        />
      )} */}
      <TextInput
        placeholderTextColor={theme.custom.black}
        style={[styles.textInput, textInputStyle]}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        value={value}
        onChangeText={onChangeText}
        
      />
      {password && (
        <TouchableOpacity  onPress={() => setIsSecure(!isSecure)}>

            {isSecure?<Image
            //   name={isSecure ? 'eye-off' : 'eye'}
            //   size={iconSize}
            
              style={styles.eyeOff}
              source={require("../assets/eye-off.png")}
              resizeMode="contain"
             
            />:<Image
            //   name={isSecure ? 'eye-off' : 'eye'}
            //   size={iconSize}
            style={styles.eye}
              source={require("../assets/eye.png")}
              resizeMode="contain"
             
            />}
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      // height:wp(10),

      paddingHorizontal: wp(4),
      marginVertical: wp(3),
      borderColor: theme.custom.green,
      borderWidth: 1,
      borderRadius:wp(1),
      backgroundColor:"white",
    },
    icon: {
      marginRight: 12,
      color: '#A0A0A0',
    },
    textInput: {
      flex: 1,
      color: 'black',
      fontSize:getFontSize(12),
      height:wp(10),
    },
    eye: {
      marginLeft: 12,
    //   color: '#A0A0A0',
      height:wp(6),
      width:wp(6)
    },
    eyeOff: {
        marginLeft: 12,
      //   color: '#A0A0A0',
        height:wp(6),
        width:wp(6)
      },
  })
export default AppTextInput