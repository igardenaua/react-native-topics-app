import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        screenOptions={() => ({
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
          options={() => ({
            title: 'Σούλι Κορινθίας',          
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
