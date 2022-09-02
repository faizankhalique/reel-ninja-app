import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppStepper from '../../components/AppStepper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from '../../config/theme';
import {Label14, Label12, getFontSize, Label17} from '../../components/AppText';
const templates = [
  {
    id: 1,
    title: 'Download',
    color: '#FF4958',
    image: require('../../assets/download.png'),
  },
  {
    id: 2,
    title: 'New Project',
    color: '#1A7F79',
    image: require('../../assets/newproject.png'),
  },
  {
    id: 3,
    title: 'Save',
    color: '#00CCC0',
    image: require('../../assets/diskettegreen.png'),
  },
];
const templates2 = [
  {
    id: 1,
    title: 'Hashtag',
    color: '#FF4958',
    image: require('../../assets/hashtag.png'),
  },
  {
    id: 2,
    title: 'Caption',
    color: '#1A7F79',
    image: require('../../assets/caption.png'),
  },
  {
    id: 3,
    title: 'Cover',
    color: '#00CCC0',
    image: require('../../assets/album.png'),
  },
  {
    id: 4,
    title: 'Tools',
    color: '#748080',
    image: require('../../assets/tool.png'),
  },
  {
    id: 5,
    title: 'Tips',
    color: '#00CCC0',
    image: require('../../assets/ideagreen.png'),
  },
  {
    id: 6,
    title: 'Live',
    color: '#FF4958',
    image: require('../../assets/live.png'),
  },
];
export default function DoneScreen({navigation}) {
  const TemplateButton = ({
    title,
    color,
    image,
    textColor,
    fontSize,
    imageSize,
    containerHeight,
    containerWidth,
    onPress,
    marginVertical,
    marginHorizontal,
    borderWidth,
    isMarginVertical,
    isMarginHorizontal,
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.templateButton,
          {
            borderColor: color,
            height: containerHeight ? wp(containerHeight) : wp(25),
            width: containerWidth ? wp(containerWidth) : wp(27),
            borderWidth: borderWidth ? borderWidth : 2,
            marginVertical: isMarginVertical ? wp(2) : wp(0),
            // marginHorizontal: isMarginHorizontal ? wp(2) : wp(0),
          },
        ]}
        onPress={onPress}>
        <Image
          source={image}
          style={{
            height: wp(imageSize ? imageSize : 10),
            width: wp(imageSize ? imageSize : 10),
          }}
          resizeMode="contain"
        />
        <Label14
          style={{
            top: wp(2),
            fontWeight: '500',
            color: textColor,
            fontSize: fontSize ? getFontSize(fontSize) : getFontSize(12),
          }}>
          {title}
        </Label14>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <AppHeader
        title={'Done'}
        onImagePress={() => {
          navigation.goBack();
        }}
        image={require('../../assets/backArrow.png')}
        step={4}
      />
      <AppStepper activeWidth="100%" setp={4} />
      <View style={{flex: 1, paddingHorizontal: wp(5)}}>
        <Label14
          style={{
            alignSelf: 'center',
            fontWeight: '500',
            marginVertical: wp(6),
          }}>
          Please do not close this page.
        </Label14>
        <View
          style={{
            height: wp(15),
            backgroundColor: '#E1FFFD',
            borderRadius: wp(4),
            borderWidth: 1,
            borderColor: '#00CCC0',
          }}>
          <View
            style={{
              backgroundColor: '#00CCC0',
              height: '100%',
              width: '60%',
              borderRadius: wp(4),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Label17 style={{color: 'white', fontWeight: '500'}}>
              PROCESSING...
            </Label17>
          </View>
          <Label17
            style={{
              color: '#1A7F79',
              fontWeight: '500',
              position: 'absolute',
              top: wp(4),
              right: wp(4),
            }}>
            60%
          </Label17>
        </View>

        <View
          style={{
            backgroundColor: '#1A7F79',
            // height: wp(14),
            borderRadius: wp(2),
            padding: wp(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: wp(6),
          }}>
          {templates.map(item => (
            <TemplateButton
              title={item.title}
              image={item.image}
              color={'white'}
              textColor={'#1A7F79'}
              fontSize={12}
              imageSize={8}
              containerHeight={23}
              containerWidth={27}
              marginHorizontal={0}
              marginVertical={0}
              borderWidth={0}
            />
          ))}
        </View>
        <View style={styles.templatesContainer}>
          {templates2.map(template => (
            <TemplateButton
              key={template.id}
              title={template.title}
              color={template.color}
              image={template.image}
              isMarginVertical={true}
              isMarginHorizontal={true}
            />
          ))}
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
  templatesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: wp(22),
  },
  templateButton: {
    height: wp(25),
    width: wp(25),
    // borderWidth: 2,
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: wp(2),
    // marginHorizontal: wp(3),
    backgroundColor: 'white',
  },
});
