import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text,isViewAll=false}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll&& <Text> View All</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
         display:'flex',
         flexDirection:'row',
         alignContent:'center',
         justifyContent:'space-between',
         



  },
    heading:{
      marginLeft:15,
        fontSize:20,
        fontFamily:'outfit-bold',
        marginBottom:15
    }
}) 