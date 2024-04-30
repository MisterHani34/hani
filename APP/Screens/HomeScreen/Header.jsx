import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import colors from '../../Util/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const{user,isLoading}=useUser();
  return user&&(
  <View style={styles.container}>
    <View style={styles.profileMainContainer}>
       <View style={styles.profileContainer}>
          <Image  source={{uri:user?.imageUrl}} style={styles.userImage} />
        <View>
          <Text style={{fontSize:15,color:'#ffffff',fontFamily:'outfit'}} >Welcome</Text>
          <Text style={{fontSize:18,color:'#ffffff',fontFamily:'outfit-bold'}}>{user?.fullName}</Text>
        </View>
       </View>
      <FontAwesome5 name="bookmark" size={28} color="white" />    
   </View>
   <View style={styles.searcheBarContainer}>
          <TextInput placeholder='Search'
          style={styles.TextInput}/>
          <FontAwesome name="search" size={24} color="black" style={styles.searchbtn}/>
   </View>
</View>
  )
}


const styles = StyleSheet.create({
    
        container:{
                padding:20,
                paddingTop:40,
                backgroundColor:colors.ore,
                borderBottomRightRadius:35,
                borderBottomLeftRadius:35,
                
    
        } ,
        TextInput:{
                backgroundColor:'#ffffff',
                width:'85%',
                borderRadius:9,
                padding:7,
                paddingHorizontal:10,
                fontSize:15,
                fontWeight:'bold',
                
                 
              



        },
        searcheBarContainer:{
            display:'flex',
            flexDirection:'row',
            marginTop:10,
            gap:11,
            marginBottom:15




        },
        searchbtn:{
               backgroundColor:'white',
               padding:10,
               borderRadius:9
                  




        },

    
    
              userImage:{
                     width:45,
                     height:45,
                     borderRadius:50,
                     


              },
              profileMainContainer:{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'



              },

              profileContainer:{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:10



              }
             


})
