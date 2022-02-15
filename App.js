import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Button, LogBox } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import DrawerStack from './stacks/drawer';
import COLORS from './constants/colors';
import STYLES from './constants/styles';

import PostsScreen from './screens/posts';
import ItemScreen from './screens/item';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={COLORS.GLOBAL}
        barStyle="light-content" />
      <Stack.Navigator
        screenOptions={(route) => ({
          headerTitleAlign: 'center',
          headerStyle: STYLES.header.itself,
          headerTintColor: COLORS.HEADER.TINT,
          headerBackTitle: ' ',
        })} >
        <Stack.Screen
          name="Categories"
          component={DrawerStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={({ route }) => ({
            title: route.params.category.title,
          })}
        />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={({ route }) => ({
            title: 'Σούλι Κορινθίας',          
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppStyles = StyleSheet.create({
  
});
