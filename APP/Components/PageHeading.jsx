import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';


export default function PageHeading() {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}   onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back" size={26} color="black" />
      <Text style={{fontSize:20,fontFamily:'outfit-bold'}}>My Booking</Text>
    </TouchableOpacity>
  )
}
