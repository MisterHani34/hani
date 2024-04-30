import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../Util/colors';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function BusinessListItem({business,booking}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.Container} 
    onPress={()=>navigation.push('Business-details',
     {
      business:business
     }) 
      }>

      <Image  source={{uri:business?.images?.url}} 
         style={styles.image}/>

      <View style={styles.subcontainer}>
    <Text style={{fontSize:15,fontFamily:'outfit',color:'#8B8F8F'}}>
      {business?.contactPerson}</Text>

     <Text style={{fontSize:19,fontFamily:'outfit-bold'}}>
      {business?.name}</Text>

     {!booking?.id?<Text style={{fontSize:14,fontFamily:'outfit',color:'#8B8F8F',marginBottom:2}}>
     <MaterialIcons name="location-on"  size={19} color='#BD6213'  />
    {business?.address}</Text>
    :
    <Text style={[{
        padding:5,borderRadius:5,fontSize:14,alignSelf:'flex-start'},
        booking?.bookingStatus=='Completed'?
        {backgroundColor:colors.oree,color:colors.lack}:
        booking.bookingStatus=='Canceled'?  
        {backgroundColor:colors.nahe,color:colors.white} :
        {color:colors.white,
        backgroundColor:colors.ore}]}>{booking?.bookingStatus}</Text>   
      }   

       
    {booking?.id?
    <Text style={{fontFamily:'outfit',color:'#000000',fontSize:16}}>
     <AntDesign name="calendar" size={24} color={colors.ore} style={{marginRight:10}}/>
      {booking.date} At {booking.time}</Text>:null}


      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
       image:{
        width:100,
        height:100,
        borderRadius:15,
    
       marginTop:7


       },
       subcontainer:{
            display:'flex',
            gap:10,
            paddingTop:7


       },
       Container:{
        marginTop:5,
              padding:10,
              backgroundColor:'white',
              borderRadius:15,
              marginBottom:10,
              display:'flex',
              flexDirection:'row',
              gap:10

       } 



})