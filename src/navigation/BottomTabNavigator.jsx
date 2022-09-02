import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {getFontSize, Label10} from '../components/AppText';
import theme from '../config/theme';

import MyVideosScreen from '../screens/MyVideos/MyVideosScreen';
import TemplatesScreen from '../screens/Templates/Templates';
import TipsScreen from '../screens/Tips/TipsScreen';
import CustomTab from './CustomeTab';
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();
const getIconStyles = focused => {
  return {
    color: focused ? theme.custom.orange : theme.custom.medium_grey,
    fontSize: getFontSize(22),
  };
};
const TabTitle = ({title, isFocused}) => (
  <Label10
    style={{
      color: isFocused ? theme.custom.light_green : theme.custom.medium_grey,
    }}>
    {title}
  </Label10>
);

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: wp(14),
        justifyContent: 'space-around',
        // alignItems: 'center',

        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
        backgroundColor: '#fff',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {route.name === 'Home' ? (
              <CustomTab
                isFocused={isFocused}
                activeImage={require('../assets/home.png')}
                image={require('../assets/home.png')}
                title="Home"
              />
            ) : null}
            {route.name === 'MyVideos' ? (
              <CustomTab
                isFocused={isFocused}
                activeImage={require('../assets/footage.png')}
                image={require('../assets/footage.png')}
                title="My Videos"
              />
            ) : null}
            {route.name === 'Templates' ? (
              <CustomTab
                isFocused={isFocused}
                activeImage={require('../assets/layout.png')}
                image={require('../assets/layout.png')}
                title="Templates"
              />
            ) : null}
            {route.name === 'Tips' ? (
              <CustomTab
                isFocused={isFocused}
                activeImage={require('../assets/idea.png')}
                image={require('../assets/idea.png')}
                title="Tips"
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyVideos" component={MyVideosScreen} />
      <Tab.Screen name="Templates" component={TemplatesScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
