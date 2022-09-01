import React, {useState, useContext} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {Label20, Label16, Label12} from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';
import theme from '../../config/theme';
import NavigationService from '../../navigation/NavigationService';

const ProfileScreen = () => {
  //   const {isKeyboardVisible} = useKeyboard()
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [industry, setIndustry] = useState('');
  const [country, setCountry] = useState('');
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState('Male');
  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ]);
  const [date, setDate] = useState();
  const [dateShow, setDateShow] = useState();
  const [showCalender, setCalender] = useState(false);
  const [value, setValue] = useState(null);
  const handleSubmit = () => {
    setName('');
    setProfession('');
    setIndustry('');
    setCountry('');
    setDate('');
    NavigationService.navigate('Home', {});
  };
  const hideDatePicker = () => {
    setCalender(false);
  };
  const onDateChange = date => {
    setCalender(false);
    const newDate = new Date(date);
    var date1 = newDate.getDate();
    var month = newDate.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = newDate.getFullYear();

    var dateStr = month + '/' + date1 + '/' + year;
    setDateShow(dateStr);
    setDate(newDate.toISOString());
    // setDateErr(false);
  };
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          width: wp('100%'),
          backgroundColor: theme.custom.green,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: wp(4),
          paddingVertical: wp(4),
        }}>
        <TouchableOpacity onPress={() => NavigationService.goBack()}>
          <Image
            style={{height: wp(8), width: wp(8)}}
            resizeMode="contain"
            source={require('../../assets/white_x.png')}
          />
        </TouchableOpacity>
<Label16 style={{color:"white",fontWeight:"bold"}}>Profile</Label16>
        <TouchableOpacity onPress={handleSubmit}>
          <Image
            style={{height: wp(8), width: wp(8)}}
            resizeMode="contain"
            source={require('../../assets/check_.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../assets/profile-placeholder.png')}
          resizeMode="contain"
          style={{
            height: wp(20),
            width: wp(20),
            borderRadius: wp(10),
            top: wp(-9),
          }}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'Name'}
          value={name}
          onChangeText={val => setName(val)}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          keyboardType="email-address"
          placeholder={'Profession'}
          value={profession}
          onChangeText={val => setProfession(val)}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'Industry'}
          value={industry}
          onChangeText={val => setIndustry(val)}
        />
        <AppTextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          placeholder={'Country'}
          value={country}
          onChangeText={val => setCountry(val)}
        />
        {/* <DateTimePicker value={new Date()} maximumDate={new Date(2300, 10, 20)} /> */}
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderColor: theme.custom.green,
            borderWidth: 1,
            color: '#636F82',
            borderRadius: wp(1),
            marginVertical: wp(3),
            height: wp(10),
            width: wp('83%'),
            paddingHorizontal: wp(2),
            paddingRight: 11,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            // marginBottom: 20,
          }}
          onPress={() => {
            setCalender(true);
          }}>
          {dateShow ? (
            <Text style={{color: 'black'}}>{dateShow}</Text>
          ) : (
            <Text style={{color: 'black'}}>Date of Birth</Text>
          )}

          <DateTimePickerModal
            isVisible={showCalender}
            mode="date"
            onConfirm={date => {
              onDateChange(date);
            }}
            onCancel={hideDatePicker}
          />
          <Image
            style={{height: 20, width: 20}}
            resizeMode="contain"
            source={require('../../assets/chevron.png')}
          />
        </TouchableOpacity>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={{
            backgroundColor: 'white',
            borderColor: theme.custom.green,
            borderWidth: 1.5,
            color: 'black',
            marginVertical: wp(3),
          }}
          onSelectItem={item => {
            console.log(item);
            setGender(item.value);
            // setGenderErr(false);
          }}
          placeholder={'Gender'}
          placeholderStyle={{color: '#636F82'}}
          labelStyle={{color: 'black'}}
          dropDownContainerStyle={{
            backgroundColor: theme.custom.light_green,
            color: 'black',
          }}
          listItemLabelStyle={{
            color: 'black',
          }}
          arrowIconStyle={{
            color: 'white',
          }}
          closeIconStyle={{
            color: 'white',
          }}
          iconContainerStyle={{
            borderColor: 'red',
            borderWidth: 1,
          }}
        />
        {/* <AppButton
          title="Save"
          onPress={handleSubmit}
        //   disabled={!email || !isValidEmail(email) || !password}
          buttonStyles={styles.button}
        /> */}
      </View>
    </View>
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
  signUpText: {
    top: hp(-4),
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    //   paddingVertical: wp(4),
    marginTop: wp(6),
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
    color: '#128FAE',
    marginVertical: wp(4),
  },
});
export default ProfileScreen;
