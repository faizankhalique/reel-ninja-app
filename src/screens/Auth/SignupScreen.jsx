import React, {useState, useContext} from 'react'
import {View, ImageBackground,StyleSheet} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen'

// import {useMutation} from 'react-query'

// import {axiosInstance} from '@api/axios'
// import {SignupScreenStyles as styles} from '@styles/SignupScreenStyles'
// import AppCustomLogo from '@components/AppCustomLogo'
import {Label20, Label13, Label12,Label11Light} from '../../components/AppText'
import AppTextInput from '../../components/AppTextInput'
import AppButton from '../../components/AppButton'
import theme from '../../config/theme'
import NavigationService from '../../navigation/NavigationService'
// import AppSpinner from '@components/AppSpinner'
// import {isValidEmail} from '@helpers/utilHelper'

import { isValidEmail } from '../../helpers/utilHelper';



const SignupScreen = () => {
  // const {isKeyboardVisible} = useKeyboard()
const [name,setName]=useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (!name) {
      setError('Please enter full name');
      return;
    }
    if (!email) {
      setError('Please enter email');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter valid email');
      return;
    } else if (!password) {
      setError('Please enter password');
      return;
    }
    else if (!confirmPassword) {
      setError('Please enter confirm password');
      return;
    }
    else if (password!=confirmPassword) {
      setError('Password and confirm password should be same.');
      return;
    }
     else {
  setError("");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    NavigationService.navigate('ProfileScreen', {signUp:true})
    }
};
  
  return (
    <ImageBackground source={require("../../assets/background2.jpeg")}  style={styles.wrapper}>
      {/* <AppCustomLogo containerStyles={styles.logoContainerStyles} /> */}
     

      <View style={styles.container}>
      <Label20 style={styles.signUpText}>Sign Up</Label20>
      <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
        //   icon={'FullName'}
        //   keyboardType="email-address"
          placeholder={'Full Name'}
          value={name}
          onChangeText={(val) =>{ setName(val);setError("")}}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'email'}
          keyboardType="email-address"
          placeholder={'Email Address'}
          value={email}
          onChangeText={(val) => {setEmail(val);setError("")}}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'lock'}
          placeholder={'Password'}
          password
          value={password}
          onChangeText={(val) => {setPassword(val);setError("")}}
        />
       <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'lock'}
          placeholder={'Confirm Password'}
          password
          value={confirmPassword}
          onChangeText={(val) =>{ setConfirmPassword(val);setError("")}}
        />
         {error && <Label11Light style={{color: 'red'}}>{error}</Label11Light>}
        <AppButton
          title="Save"
          onPress={handleSubmit}
        //   disabled={!email || !isValidEmail(email) || !password}
          buttonStyles={styles.button}
        />
      </View>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: wp(8),
      backgroundColor:"white"
    },
    logoContainerStyles: {
      marginTop: hp(14),
    },
    signUpText: {
      top: hp(-4),
      fontWeight: 'bold',
      color:"white"
    },
    button: {
    //   paddingVertical: wp(4),
      marginTop: wp(6),
    },
    container: {
      width: '100%',
      paddingTop: wp(16),
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    },
    bottomContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: hp(3),
    },
    forgotPassword: {
      alignSelf: 'flex-end',
      color: '#128FAE',
      marginVertical:wp(4)
    },
  })
export default SignupScreen
