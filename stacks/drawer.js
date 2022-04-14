import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import COLORS from '../constants/colors';
import STYLES from '../constants/styles';

import CategoriesScreen from '../screens/categories';
import GalleryScreen from '../screens/gallery';
import AboutScreen from '../screens/about';

const Drawer = createDrawerNavigator();

export default function DrawerStack() {

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerShown: true,
        headerStyle: STYLES.header.itself,
        headerTintColor: COLORS.HEADER.TINT,
      })}
     >
      <Drawer.Screen name="Home" component={CategoriesScreen} options={() => ({
        title: 'Αρχική',
      })}
      />
      <Drawer.Screen name="Gallery" component={GalleryScreen} options={() => ({

      })}
      />
      <Drawer.Screen name="About" component={AboutScreen} options={() => ({
        title: 'Το μουσείο μας'
      })}
      />
    </Drawer.Navigator>
  );
}

