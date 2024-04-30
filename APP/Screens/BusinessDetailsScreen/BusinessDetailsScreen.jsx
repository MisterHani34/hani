import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../Util/colors';
import { MaterialIcons } from '@expo/vector-icons';
//import Heading from '../../Components/Heading';
import BusinessAboutMe from './BusinessAboutMe';
import BusinessPhoto from './BusinessPhoto';
import BookingModel from './BookingModel';

export default function BusinessDetailsScreen() {
    const navigation=useNavigation();
    const[showModal,setShowModal]=useState(false);
    const param=useRoute().params;
    const [business,setBusiness]=useState(param.business);
    
    useEffect(()=>{
          
         

    },[])

        const onMessageBtnClick=()=>{

  Linking.openURL('mailto:'+business?.email+"?subject=Welcome Hani=Hi There,");
}
    
  return business&&(
    <View>
    <ScrollView style={{height:'90%'}}>
        <TouchableOpacity style={styles.BackBtnConteiner} onPress={()=>navigation.goBack()} >
        <Ionicons name="arrow-back" size={24} color="black" />
       </TouchableOpacity>
      <Image source={{uri:business?.images?.url}}
      style={{height:300,width:'100%'}}
      />
      <View  style={styles.info}>
           <Text style={{fontSize:25,fontFamily:'outfit-medium'}}>{business.name}</Text>
           <View style={{display:'flex',flexDirection:'row',gap:3,alignItems:'center'}}>
    
           <Text style={{fontSize:20,fontFamily:'outfit',color:colors.ore}}>{business.contactPerson}⭐</Text>
           <Text style={{backgroundColor:colors.oree,color:colors.ore,padding:5,borderRadius:5}}>{business.category.name}</Text>
           </View>
           
           <Text style={{fontSize:17,fontFamily:'outfit',color:'#B8BFBF'}}><MaterialIcons name="location-on"  size={19} color='#BD6213'  />{business.address}</Text>
      </View>
      <View style={{borderWidth:0.2,borderColor:'#B8BFBF'}}></View>

             <BusinessAboutMe business={business}/>
             <BusinessPhoto  business={business}/>
    </ScrollView>
    <View style={{
            display:'flex',
            flexDirection:'row',
            margin:8,
            gap:8

    }}>
      <TouchableOpacity style={styles.Messagebtn} onPress={()=>onMessageBtnClick()}>
         <Text style={{textAlign:'center',fontSize:16,fontFamily:'outfit-bold',color:colors.ore}}>Message</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Bookingbtn} onPress={()=>setShowModal(true)}>
         <Text style={{textAlign:'center',fontSize:16,fontFamily:'outfit-bold',color:colors.ore}}>Book Now</Text>
      </TouchableOpacity>
    </View>
    <Modal animationType='slide'
    visible={showModal} >
        <BookingModel 
        businessId={business.id}
        hideModal={()=>setShowModal(false)} />
    </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  
  BackBtnConteiner:{
 
       position:'absolute',
       zIndex:10,padding:6,
       backgroundColor:'white',
       borderRadius:50,
       margin:10



  },
  info:{
    display:'flex',
    gap:10,
    padding:15



  },
  Messagebtn:{
        padding:12,
        borderColor:colors.ore,
        backgroundColor:'white',
        borderWidth:1,
        borderRadius:99,
        flex:1
        

  },
        Bookingbtn:{
          padding:12,
        borderColor:colors.ore,
        backgroundColor:colors.oree,
        borderWidth:1,
        borderRadius:99,
        flex:1,


        }



})