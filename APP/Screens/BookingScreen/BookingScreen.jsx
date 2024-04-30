import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

import PageHeading from '../../Components/PageHeading'
import GlobalApi from '../../Util/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from '../BusinesListByCategoryScreen.jsx/BusinessListItem'

export default function BookingScreen() {
  useEffect(()=>{
 getUserBooking();
   
  },[user])
  const[loading,setLoading]=useState(false);
const {user}=useUser();
const[bookinglist,setBookingList]=useState([]);
        const getUserBooking=()=>{
                 setLoading(true)
                 GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
                  console.log(resp)
                  setBookingList(resp.bookings);
                  setLoading(false)
                 })



        }


  return (
    <View>
       <View>
      <PageHeading title={'My Booking'}/>
      </View>
      <FlatList 
      data={bookinglist}
      onRefresh={()=>getUserBooking()}
      refreshing={loading}
      renderItem={({item,index})=>( 
      <BusinessListItem business={item?.businessList}
      booking={item}
      
      />
      
      
      )}
      
      />
    </View>
  )
}