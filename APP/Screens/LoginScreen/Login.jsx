import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../Util/colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/WarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';





WebBrowser.maybeCompleteAuthSession();
export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
     
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);

  return (
    <View style= {{alignItems:'center'}}> 
      <Text style={{fontWeight:'bold',color:'#000000',fontSize:20,marginTop:15}}> Boucenna Hani </Text>
      <Image source={require('./../../../assets/images/bou.png')}
      style={styles.loginImage}
      />
      <View style={styles.subContainer}>
         <Text style={{fontSize:26,color:'#fff',textAlign:"center"}}>Welcome to <Text style={{fontWeight:"bold",}}>application</Text></Text>
         <Text style={{fontSize:10,color:'#ffffff',textAlign:'center',marginTop:20}}>The best app for commercial services</Text>
         <TouchableOpacity style={styles.button} onPress={onPress}>
        
        <Text style={{color:'#000000',textAlign:'center',fontWeight:'bold'}}>Let's Go Start </Text>
 
       </TouchableOpacity>
       
      
      
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
              
           loginImage :{
                       width:'100%',
                       height:450,
                       marginTop:100,
                       borderColor:'#ffffff',
                       borderWidth:3,
                       borderRadius:20
           },

           subContainer:{
       
               width:'100%',
               backgroundColor:colors.nahe,
               height:'70%',
               marginTop:-30,
               borderTopLeftRadius:35,
               borderTopRightRadius:35,
               padding:25
              


           },
           button:{
            padding:15,
             backgroundColor :'#ffffff',
             borderRadius:99,
             marginTop:45,
             width:'70%',
             marginLeft:45


             
           }
         
          
          



})