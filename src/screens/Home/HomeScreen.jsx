import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Label13Light,
  Label14,
  Label16,
  Label17,
} from '../../components/AppText';
import AppButton from '../../components/AppButton';
import theme from '../../config/theme';
import CustomModal from '../../components/AppModal';

const templates = [
  {
    id: 1,
    title: 'Romantic',
    color: '#FF4958',
    image: require('../../assets/heart.png'),
  },
  {
    id: 2,
    title: 'Relaxing',
    color: '#1A7F79',
    image: require('../../assets/meditation.png'),
  },
  {
    id: 3,
    title: 'Cool',
    color: '#00CCC0',
    image: require('../../assets/cool.png'),
  },
  {
    id: 4,
    title: 'Upbeat',
    color: '#748080',
    image: require('../../assets/cheers.png'),
  },
  {
    id: 5,
    title: 'Romantic',
    color: '#00CCC0',
    image: require('../../assets/heart2.png'),
  },
  {
    id: 6,
    title: 'Trends',
    color: '#FF4958',
    image: require('../../assets/trending.png'),
  },
  {
    id: 7,
    title: 'Transition',
    color: '#1A7F79',
    image: require('../../assets/transition.png'),
  },
  {
    id: 8,
    title: 'Lip Sync',
    color: '#748080',
    image: require('../../assets/lipss.png'),
  },
  {
    id: 9,
    title: 'Tutorial',
    color: '#00CCC0',
    image: require('../../assets/video-tutorial.png'),
  },
];

export default function HomeScreen({navigation}) {
  const [activeTab, setActiveTab] = useState('category');
 const [modalVisible,setModalVisible]=useState(false)
 React.useEffect(()=>{
  setTimeout(()=>{
    setModalVisible(true)
  },4000)
 },[])
  const Tabs = () => {
    return (
      <View style={styles.tabContainer}>
        {activeTab == 'category' ? (
          <>
            <AppButton
              title={'Category'}
              buttonStyles={{width: '50%'}}
              onPress={() => {}}
            />
            <TouchableOpacity
              style={{width: '50%', alignItems: 'center'}}
              onPress={() => setActiveTab('industry')}>
              <Label16 style={{color: theme.custom.gray}}>Industry</Label16>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              style={{width: '50%', alignItems: 'center'}}
              onPress={() => setActiveTab('category')}>
              <Label16 style={{color: theme.custom.gray}}>Category</Label16>
            </TouchableOpacity>
            <AppButton
              title={'Industry'}
              buttonStyles={{width: '50%'}}
              onPress={() => {}}
            />
          </>
        )}
      </View>
    );
  };
  const TemplateButton = ({title, color, image}) => {
    return (
      <TouchableOpacity
        style={[styles.templateButton, {borderColor: color}]}
        onPress={() => navigation.navigate('ChooseAudioScreen', null)}>
        <Image
          source={image}
          style={{height: wp(10), width: wp(10)}}
          resizeMode="contain"
        />
        <Label14 style={{top: wp(2), fontWeight: '500'}}>{title}</Label14>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ImageBackground
          style={styles.imageContainer}
          source={require('../../assets/HomeTop.png')}
          resizeMode="cover">
          <View style={{top: -4, backgroundColor: 'transparent'}}>
            <Label13Light style={{color: 'white'}}>Good Morning,</Label13Light>
            <Label16 style={{color: 'white', fontWeight: '600'}}>Jason</Label16>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('NotificationScreen', null)}>
            <Image
              style={{height: wp(6), width: wp(6)}}
              resizeMode="contain"
              source={require('../../assets/bell.png')}
            />
            </TouchableOpacity>
            <Image
              style={{height: wp(6), width: wp(6), marginHorizontal: wp(5)}}
              resizeMode="contain"
              source={require('../../assets/help.png')}
            />
            <TouchableOpacity onPress={()=>navigation.navigate('ProfileScreen', {edit:true})}>

            <Image
              style={{height: wp(10), width: wp(10)}}
              resizeMode="contain"
              source={require('../../assets/profile.png')}
            />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Label17
          style={{
            alignSelf: 'center',
            marginTop: wp(6),
            fontWeight: '500',
          }}>
          Step 1: Choose your Audio
        </Label17>
        <Tabs />
      </View>
      <View style={styles.templatesContainer}>
        {templates.map(template => (
          <TemplateButton
            key={template.id}
            title={template.title}
            color={template.color}
            image={template.image}
          />
        ))}
      </View>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <View style={{backgroundColor:theme.custom.white,height:wp(50),width:wp(60),borderRadius:wp(5),justifyContent:"center",alignItems:"center",top:wp(10)}}>
        <Pressable
              style={{ alignSelf: "flex-end",position:"absolute",top:wp(2),right:wp(2) }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Image
                source={require("../../assets/x.png")}
                style={{ height: 30, width: 30 }}
                resizeMode="contain"
              />
            </Pressable>
            <Label13Light >Wellcome to Reel Ninja</Label13Light>
        </View>
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: '#E7FFFD',
    borderBottomLeftRadius: wp(5),
    borderBottomRightRadius: wp(5),
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('100%'),
    height: hp(21),
    paddingHorizontal: wp(5),
  },
  tabContainer: {
    backgroundColor: '#CAE5E4',
    width: '95%',
    padding: wp(1),
    alignSelf: 'center',
    borderRadius: wp(2),
    marginVertical: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  templatesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: wp(4),
  },
  templateButton: {
    height: wp(25),
    width: wp(25),
    borderWidth: 2,
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: wp(2),
    marginHorizontal: wp(3),
  },
});
