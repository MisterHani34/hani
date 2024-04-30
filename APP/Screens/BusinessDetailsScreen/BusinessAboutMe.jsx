import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Heading from '../../Components/Heading'
import colors from '../../Util/colors';

export default function BusinessAboutMe({business}) {
    
    const [isReadMore,setisReadMore]=useState(false);
  return business&&(
    <View>
     
        <View style={{padding:7}}>
      <Heading text={'About Me'}/>
      <Text style={{lineHeight:28,color:'#9DA3A3',fontSize:16}}numberOfLines={isReadMore?20:5}>{business.about}</Text>
     <TouchableOpacity onPress={()=>setisReadMore(!isReadMore)}>
      <Text style ={{fontSize:16,color:colors.ore}}>{isReadMore?'Read Less':'Read More'}</Text>
      </TouchableOpacity>
      </View>
      
      <View style={{borderWidth:0.2,borderColor:'#B8BFBF'}}></View>
    </View>
  )
}