import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
//*import { FontAwesome } from '@expo/vector-icons';
import colors from '../../Util/colors';
import { useUser } from '@clerk/clerk-expo';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//*import { Entypo } from '@expo/vector-icons';
//*import { useNavigation } from '@react-navigation/native';




export default function ProfileScreen() {
  const profileMenu=[
    {
      id:1,
      name:'Home',
      icon:'home'
    },
    {
     id:2,
     name:'My Booking',
     icon:'bookmark'
   },
   {
     id:3,
     name:'Contact Us',
     icon:'mail'
   },
   {
    id:3,
    name:'Logout',
    icon:'log-out'
  },
 
   ]
  const {user}=useUser();
  //*const navigation=useNavigation();
  return (
<View>
<View style={{padding:20,paddingTop:10,backgroundColor:colors.ore}}>
<Text style={{fontSize:35,fontFamily:'outfit-bold',color:colors.white}}>profile</Text>
<View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:15,backgroundColor:colors.ore}}>
  <Image source={{uri:user.imageUrl}} style={{width:90,height:90,borderRadius:99}}/>
   <Text style={{fontSize:20,fontFamily:'outfit-bold',color:colors.white,marginTop:8}}>{user?.fullName}</Text>
   <Text style={{fontSize:15,fontFamily:'outfit-bold',color:colors.white,marginTop:8}}>{user?.primaryEmailAddress.emailAddress}</Text>
</View>
</View>

<View style={{paddingTop:100}}> 
  <FlatList
  data={profileMenu}
  renderItem={({item,index})=>(
<TouchableOpacity style={{display:'flex',flexDirection:'row',alignItems:'center',gap:10,marginBottom:30,paddingHorizontal:110}}>
<Entypo name={item.icon} size={35} color={colors.ore} /> 
<Text style={{fontFamily:'outfit',fontSize:20}}>{item.name}</Text>  
</TouchableOpacity>

  )}/>
</View>
</View>




  )
}



const styles = StyleSheet.create({
   container:{
         width:100,
         height:100,
         backgroundColor:colors.ore,
         borderRadius:15,
         alignItems:'center',
         justifyContent:'center'



   },
   container1:{
    width:100,
    height:100,
    backgroundColor:colors.ore,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center'



}



})