import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../Util/GlobalApi';
import BusinessListItem from './BusinessListItem';

export default function BusinessListByCategoryScreen() {
  const navigation=useNavigation()
  const param=useRoute().params;
  const[businessLists,setBusinessListByCategoryScreen]=useState([]);
  useEffect(()=>{

          param&&getBusinessListByCategory()
  },[param])
  const getBusinessListByCategory =()=>{

    GlobalApi.getBusinessListByCategory(param.category).then(resp=>{setBusinessListByCategoryScreen(resp.businessLists);})
  }
  return (
    <View style={{padding:20,paddingTop:25}}>
       <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}   onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back" size={26} color="black" />
      <Text style={{fontSize:20,fontFamily:'outfit-bold'}}>{param?.category}</Text>
    </TouchableOpacity>
    {businessLists?.length>0? <FlatList 
    data={businessLists}
    style={{marginTop:17}}
    renderItem={({item,index})=>(
    <BusinessListItem business ={item}/> )}
    
    />: <Text style={{fontFamily:'outfit-medium',fontSize:25,textAlign:'center',color:'#AFB3B3',marginTop:'20%'}}>No Business Found</Text>} 
           
   
       



 
    
    
    
    
   
    </View>
  )
}