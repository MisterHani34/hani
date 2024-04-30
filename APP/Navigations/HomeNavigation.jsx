import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategoryScreen from '../Screens/BusinesListByCategoryScreen.jsx/BusinessListByCategoryScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
    
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='hani' component={HomeScreen} />
      <Stack.Screen name='business-list' component={BusinessListByCategoryScreen} />
      <Stack.Screen name='Business-details' component={BusinessDetailsScreen} />
    </Stack.Navigator>
    
  )
}