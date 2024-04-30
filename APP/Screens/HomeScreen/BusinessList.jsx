import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Util/GlobalApi'
import Heading from '../../Components/Heading';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {
    const[businessLists,setBusinessList]=useState([]);
   
    useEffect(()=>{ 
           getBusinessList();

    },[])

    const getBusinessList =()=>{
        GlobalApi.getBusinessList().then(resp=>{
         console.log(resp);
            setBusinessList(resp.businessLists)
    })
}
  return (
    <View style={{marginTop:10}}>
        <Heading text={'Lalist Business'} isViewAll={true}/>
     <FlatList 
     data={businessLists}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     renderItem={({item,index})=>(
        <View>
         <View >
      
       <BusinessListItemSmall business={item}/>
       
        </View>
        
        </View>
        
     )}
     
     
     
     />
     </View>

  )
}