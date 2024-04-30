import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'
import Sliderss from './Sliderss'
import Categoriess from './Categoriess'
import BusinessList from './BusinessList'






export default function HomeScreen() {
  
  return (
    <ScrollView>
      <Header/>
      <View style={{padding:20}}>
         <Sliderss/> 
         <Categoriess/>
         <BusinessList/>
  </View>
      
    </ScrollView>
  )
}