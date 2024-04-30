import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './APP/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './APP/Navigations/TabNavigation';
import * as SecureStore from "expo-secure-store";
import { useFonts } from 'expo-font';
import "react-native-gesture-handler";


 



export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-black': require('./assets/fonts/Outfit-Black.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'outfit-extrabold': require('./assets/fonts/Outfit-ExtraBold.ttf'),
    'outfit-extralight': require('./assets/fonts/Outfit-ExtraLight.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-thin': require('./assets/fonts/Outfit-Thin.ttf'),
  });
  return (
    <ClerkProvider 
    
    publishableKey='pk_test_Y2VudHJhbC1zdGFsbGlvbi0xNy5jbGVyay5hY2NvdW50cy5kZXYk'>
    
    <View style={styles.container}>

    <SignedIn>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </SignedIn>
    
    <SignedOut>
          <Login/>
    </SignedOut>
        
          
        
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:35,
    
    
  },
   Text :{
      color: '#000'   

  }
});
