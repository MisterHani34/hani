import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Util/GlobalApi'
import Heading from '../../Components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function Categoriess() {

   const [categories,setCategoriess]=useState([]);
const navigation=useNavigation()
   useEffect(()=>{
      getCategories();

   },[])
   
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>
             setCategoriess (resp?.categories))
    }
  return (
    <View style={{marginTop:10,}}>
      <Heading text={'Categories'} isViewAll={true} />
      
      <FlatList
      data={categories}
      numColumns={4}
     
      renderItem={({item,index})=>index<=3&&(
        <TouchableOpacity style={{flex:1,alignItems:'center'}} onPress={()=>navigation.push('business-list',{category:item.name})}>
          <View style={styles.icone}>
                  <Image source={{uri:item?.icon?.url}}
                  style={{width:35,height:35,}}
                  />
                  
        </View>
        <Text style={{fontFamily:'outfit-medium',marginTop:5}}>{item?.name}</Text>
        </TouchableOpacity>
                   


      )}
      
      
      
      />
    </View>
  )
}
const styles = StyleSheet.create({
   icone:{
    backgroundColor:'#EDEDED',
    
    padding:18,
    borderRadius:99
    




   }



})
