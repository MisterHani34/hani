import { request, gql } from 'graphql-request'


const MASTER_URL="https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clv015ckk1cx508ux9xs25x1e/master"
const getSlider =async ()=>{
    const query = gql`
    query GetSlide {
        sliders {
          id
          name 
          image {
            url
          
        }
      }
      }
`
const result = await request(MASTER_URL, query);
return result ;
}
 
const getCategories=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  
  `

  const result = await request(MASTER_URL, query);
  return result ;
  } 




const getBusinessList =async()=>{
    const query=gql
    `query getBusnissList {
      businessLists(where: {category: {name: "Clearning"}}) {
        name
        address
        contactPerson
        about
        category {
          name
        }
        email
        images {
          url
        }
      }
    }
    
    
   
    
    `
    const result = await request(MASTER_URL, query);
    return result ;
}
const getBusinessListByCategory =async(category)=>{
  const query=gql
  `query getBusnissList {
    businessLists(where: {category: {name:"`+category+`"}}) {
      id
      name
      address
      contactPerson
      about
      category {
        name
      }
      email
      images {
        url
      }
    }
  }
  
  
 
  ` 
  const result = await request(MASTER_URL, query);
  return result ;
}
const createBooking=async(data)=>{
         const mutationQuery=gql`
         mutation createBooking {
          createBooking(
            data: {bookingStatus: Booked, businessList: 
              {connect: {id: "`+data.businessId+`"}}, 
              date: "`+data.date+`", 
              time: "`+data.time+`", 
              userEmail: "`+data.userEmail+`", 
              userName: "`+data.userName+`"}
          ) {
            id
          }
          publishManyBookings(to: PUBLISHED) {
            count
          }
        }
         `
         const result = await request(MASTER_URL, mutationQuery);
         return result ;
          
        }

      const getUserBookings=async(userEmail)=>{

        const query=gql`
        query GetUserBookings {
          bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
            time
            userEmail
            userName
            date
            bookingStatus
            id
            businessList {
              id
              images {
                url
              }
              name
              address
              contactPerson
              email
            }
          }
        }
        `
        const result = await request(MASTER_URL, query);
         return result ;
      }





         




export default{
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
  getUserBookings
}

