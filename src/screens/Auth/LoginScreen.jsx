import React, {useState, useContext} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// import {useMutation} from 'react-query'

// import {axiosInstance} from '@api/axios'
// import {LoginScreenStyles as styles} from '@styles/LoginScreenStyles'
// import AppCustomLogo from '@components/AppCustomLogo'
import {
  Label20,
  Label13,
  Label12,
  Label11Light,
} from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import theme from '../../config/theme';
import NavigationService from '../../navigation/NavigationService';
// import AppSpinner from '@components/AppSpinner'
import {isValidEmail} from '../../helpers/utilHelper';
// import {useKeyboard} from '@hooks/useKeyboard'

const LoginScreen = () => {
  //   const {isKeyboardVisible} = useKeyboard()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = () => {
    if (!email) {
      setError('Please enter email');
      return;
    }
    if (!isValidEmail(email)) {
      setError('Please enter valid email');
      return;
    } else if (!password) {
      setError('Please enter Password');
      return;
    } else {
      setEmail('');
      setPassword('');
      setError('');
      NavigationService.navigate('Home', {});
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background2.jpeg')}
      style={styles.wrapper}>
      {/* <AppCustomLogo containerStyles={styles.logoContainerStyles} /> */}

      <View style={styles.container}>
        <Label20 style={styles.signInText}>Sign In</Label20>
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'email'}
          keyboardType="email-address"
          placeholder={'Email Address'}
          value={email}
          onChangeText={val => {
            setEmail(val);
            setError('');
          }}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          icon={'lock'}
          placeholder={'Password'}
          password
          value={password}
          onChangeText={val => {
            setPassword(val);
            setError('');
          }}
        />
        {error && <Label11Light style={{color: 'red'}}>{error}</Label11Light>}
        <Label12 style={styles.forgotPassword}>Forgot Password?</Label12>
        <AppButton
          title="Sign In"
          onPress={handleSubmit}
          //   disabled={!email || !isValidEmail(email) || !password}
          buttonContainerStyles={styles.button}
        />
      </View>
      {/* {!isKeyboardVisible && ( */}
      <View style={styles.bottomContainer}>
        <Label13 style={{color: theme.custom.white}}>
          Don't have an account?
        </Label13>
        <Label13
          style={{marginLeft: 5, color: theme.custom.orange}}
          onPress={() => NavigationService.navigate('SignupScreen', {})}>
          Register.
        </Label13>
      </View>
      {/* )} */}
      {/* <AppSpinner loading={isLoading} /> */}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: wp(8),
    backgroundColor: 'white',
  },
  logoContainerStyles: {
    marginTop: hp(14),
  },
  signInText: {
    top: hp(-4),
    fontWeight: 'bold',
    color: theme.custom.white,
  },
  button: {
    paddingVertical: wp(4),
    marginTop: hp(6),
  },
  container: {
    width: '100%',
    paddingTop: wp(16),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp(3),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'white',
    marginVertical: wp(4),
  },
});
export default LoginScreen;
