import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Util/GlobalApi';
import Heading from '../../Components/Heading';

export default function Sliderss() {
    
    const [slider,setSliderss]=useState([]);
    useEffect(()=>{
        getSliders();

    },[])
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{console.log("resp",resp.sliders);
        setSliderss(resp?.sliders)});
        
  }
 
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Offers For You'}/>
       <FlatList style={{marginTop:-10}} 
       data={slider}
      horizontal={true}
       showsHorizontalScrollIndicator={false}

       renderItem={({item,indexedDB})=>(
        <View style={{marginRight:20}}>
          <Image source={{uri:item?.image?.url}}
          style={styles.sliderImage}
          
          />

        </View>
               


       )}
       
       
       />
              
        
    </View>
  )
}
const styles = StyleSheet.create({
  
  heading:{
    marginLeft:15,
      fontSize:20,
      fontFamily:'outfit-bold',
      marginBottom:15,
       



  },
  sliderImage:{
     width:270,
     height:150,  
     borderRadius:30,
     objectFit:'contain'
   


  },



})