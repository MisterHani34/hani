import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

export default function BusinessPhoto({business}) {
  return  (
    <View style={{padding:7}}>
      <Heading text={'photos'}/>
      <View style={{alignItems:'center'}}>
         <Image source={{uri:business.images.url}} style={{height:150,width:'80%',borderRadius:15,alignItems:'center'}}/>
      </View>   
      </View>
  )
}