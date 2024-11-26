import React from 'react'
import Container from '../Container'
import Logo from '../../../public/img/logo1.png'
const Navbar = () => {
  return (
    <>
    <div className='bg-[#352525]'>
    <Container>
    <div>
        <div className='flex items-center justify-center gap-2 py-[15px]'>
          <img src={Logo} alt="" className='w-[80px] h-[80px]'/>
          <h1 className='font-rancho text-[60px] text-white'>Espresso Emporium</h1>
        </div>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Navbar