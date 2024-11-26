import React from 'react'
import Container from '../Container'

const Service = () => {
    const services =[
        {
            id:1,
            title:"Awesome Aroma",
            dic:"You will definitely be a fan of the design & aroma of your coffee",
            img:"/public/icons/1.png"
        },
        {
            id:2,
            title:"High Quality",
            dic:"We served the coffee to you maintaining the best quality",
            img:"/public/icons/2.png"
        },
        {
            id:3,
            title:"Pure Grades",
            dic:"The coffee is made of the green coffee beans which you will love",
            img:"/public/icons/3.png"
        },
        {
            id:4,
            title:"Proper Roasting",
            dic:"Your coffee is brewed by first roasting the green coffee beans",
            img:"/public/icons/4.png"
        },
    ]
  return (
   <>
   <div className='bg-[#ECEAE3] py-[56px]'>
   <Container>
        <div className=' grid grid-cols-1 md:grid-cols-4 gap-2 '>
               {
                services.map( item => <div key={item.id} className='px-4'>
                    <img src={item.img} alt="" />
                    <h4 className='font-rancho text-[35px] text-[#331A15]'>{item.title}</h4>
                    <p className='font-rancho text-[16px] text-[#1B1A1A]'>{item.dic}</p>
                </div>)
               }
        </div>
   </Container>
   </div>
  
   </>
  )
}

export default Service