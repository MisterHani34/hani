import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../Util/colors';
import HomeNavigation from './HomeNavigation';
import BookingNavigation from './BookingNavigation';


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
    tabBarActiveTintColor:colors.ore}}>
          <Tab.Screen name='Home' component={HomeNavigation}
          options={{

             tabBarLabel:({color})=>(
             <Text style ={{color:color,fontSize:12,marginTop:-8}}> Home </Text>
             ),
             tabBarIcon:({color,size})=>(<FontAwesome name="home" size={size} color={color} />

             )
          }}
          
          />
          <Tab.Screen name='booking' component={BookingScreen}
            options={{

                tabBarLabel:({color})=>(
                <Text style ={{color:color,fontSize:12,marginTop:-8}}> booking </Text>
                ),
                tabBarIcon:({color,size})=>(<FontAwesome name="bookmark" size={size} color={color} />
   
                )
             }}
          
          
          
          />
          <Tab.Screen name='profile' component={ProfileScreen}   
          options={{

          tabBarLabel:({color})=>(
<           Text style ={{color:color,fontSize:12,marginTop:-8}}> profile </Text>
                      ),
        tabBarIcon:({color,size})=>(<FontAwesome name="user-circle-o" size={size} color={color} />
                   )
}}/>
    </Tab.Navigator>
  )
}