import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../../Util/colors'
import { useNavigation } from '@react-navigation/native'

export default function BusinessListItemSmall({business}) {
  const navigtaion=useNavigation();
  return (
    <View style={{padding:10,backgroundColor:'white',borderRadius:20,marginRight:10}}>
    <Image style={{width:160,height:100,borderRadius:20}} source={{uri:business?.images?.url}}/>
    <View style={{padding:7,display:'flex',gap:3}}>
    <Text style={{fontFamily:'outfit',fontSize:17}}>{business?.name}</Text>
    <Text style={{fontFamily:'outfit-medium',fontSize:13}}>{business?.contactPerson}</Text>
      <Text style={{fontFamily:'outfit',fontSize:10,padding:3,backgroundColor:colors.oree,color:colors.ore,
    borderRadius:3,alignSelf:'flex-start',paddingHorizontal:7
    
    }}>{business?.category.name}</Text>
      </View>
    </View>
  )
}