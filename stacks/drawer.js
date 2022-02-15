import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import COLORS from '../constants/colors';
import STYLES from '../constants/styles';

import CategoriesScreen from '../screens/categories';
import GalleryScreen from '../screens/gallery';
import AboutScreen from '../screens/about';

const Drawer = createDrawerNavigator();

export default function DrawerStack({route, navigation}) {

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={(route) => ({
        headerTitleAlign: 'center',
        headerShown: true,
        headerStyle: STYLES.header.itself,
        headerTintColor: COLORS.HEADER.TINT,
      })}
     >
      <Drawer.Screen name="Home" component={CategoriesScreen} options={({route}) => ({
        title: 'Αρχική',
      })}
      />
      <Drawer.Screen name="Gallery" component={GalleryScreen} options={({route}) => ({

      })}
      />
      <Drawer.Screen name="About" component={AboutScreen} options={({route}) => ({
        title: 'Το μουσείο μας'
      })}
      />
    </Drawer.Navigator>
  );
}

const DrawerStyles = StyleSheet.create({
  
});