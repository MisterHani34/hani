import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from "react-native-calendar-picker";
import colors from '../../Util/colors';
import Heading from '../../Components/Heading';
import { format } from "date-fns";

import GlobalApi from '../../Util/GlobalApi';
import { useUser } from '@clerk/clerk-expo';




export default function BookingModel({businessId,hideModal}) {
  const [note,setNote]=useState();
  const [selctedDate,setSelctedDate]=useState();
  const [selctedTime,setSlectedTime]=useState();
  const [timelist,setTimelist]=useState();
  const{user}=useUser();
  useEffect(()=>{
      getTime(); 
       },[])
             const getTime=()=>{
                const timelist=[];
                for (let i=8;i<=12;i++)
                  {
                      timelist.push({
                          time:i+':00 AM'
                  })
                  timelist.push({
                    time:i+':30 AM'
                  })
                } 
                for (let i=1;i<=5;i++)
                {
                  timelist.push({
                    time:i+':00 PM'
                  })

                  timelist.push({
                  time:i+':30 PM'
                  })
                }      

                setTimelist(timelist);

             }
             const createNewBooking=()=>{
              if(!selctedTime||!selctedDate)
              {

                ToastAndroid.show('Please select Egain Time and date',ToastAndroid.LONG)

                return ;
              }

              const data ={
                userName:user?.fullName,
                userEmail:user?.primaryEmailAddress.emailAddress,
                time:selctedTime,
                date: format(selctedDate, "dd/MM/yyyy"),
                note:note,
                businessId:businessId
              }


                GlobalApi.createBooking(data).then(resp=>{
                  console.log("resp",resp)
                  ToastAndroid.show('Booking Created Successfully⭐',ToastAndroid.LONG)
                  hideModal();
                })

             }







  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding:20}}>
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center',marginBottom:20}}   onPress={()=>hideModal()}>
    <Ionicons name="arrow-back" size={26} color="black" />
    <Text style={{fontSize:20,fontFamily:'outfit-bold'}}>Booking</Text>
    </TouchableOpacity>
    <Heading text={'Select Date'}/>
    <View style={styles.calendarpicker}>
    <CalendarPicker onDateChange={setSelctedDate}
    width={360}
    minDate={Date.now()} 
    todayBackgroundColor={colors.ore}
    todayTextStyle={{color:colors.white}}
    selectedDayColor={colors.oree}
    selectedDayTextColor={colors.ore}
    />
    </View>
    <View style={{marginTop:5}}>
      <Heading text={'Select Time'}/>
         <FlatList
         data={timelist}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item,index})=>(
          <TouchableOpacity style={{marginRight:7}} 
          onPress={()=>setSlectedTime(item.time)}>
                <Text  style={[selctedTime==item.time?styles.selectedTime:styles.unSelectedTime]}>
                      {item.time}
                </Text>
          </TouchableOpacity>

         )}
         />
         <View style={{paddingTop:20}}>
          <Heading text={'Any Suggestion Note'} />
          <TextInput placeholder='Note'
          numberOfLines={4}
          multiline={true}
          style={styles.notetextarea}
          onChange={(text)=>setNote(text)}
          />
         </View>
       <TouchableOpacity >  
           <Text style={styles.Confirm} onPress={()=>createNewBooking()}> Confirm & Book </Text>


       </TouchableOpacity>


    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
} 

const styles = StyleSheet.create({
  calendarpicker:{
             backgroundColor:colors.oree,
             padding:15,
             borderRadius:10,
  
  },
  selectedTime:{
        
    padding:8,
    borderWidth:1,
    borderColor:colors.ore,
    borderRadius:50,
    backgroundColor:colors.ore,
    paddingHorizontal:15,
    color:colors.white,

  },
  unSelectedTime:{
        padding:8,
        borderWidth:1,
        borderColor:colors.ore,
        borderRadius:50,
        paddingHorizontal:15,
        color:colors.ore,
       

  },
  notetextarea:{
        borderWidth:1,
        borderRadius:15,
        textAlignVertical:'top',
        padding:25,
        fontSize:17,
        fontFamily:'outfit',
        borderColor:colors.ore

  },
  Confirm:{
      textAlign:'center',
      marginTop:10,
      fontSize:16,
      fontFamily:'outfit-bold',
      backgroundColor:colors.ore,
      color:colors.white,
      padding:10,
      borderRadius:18,
      elevation:3

  }





})