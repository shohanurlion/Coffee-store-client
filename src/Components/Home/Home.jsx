import React from 'react'
import CoffeeHero from '../Coffe/CoffeeHero'
import Service from '../Service/Service'
import Products from '../Product/Products'
import { useLoaderData } from 'react-router-dom'
const Home = () => {
  const allCoffee = useLoaderData()

  
  return (
    <>
      <CoffeeHero></CoffeeHero>
      <Service></Service>
      <Products></Products>
    </>
  )
}

export default Home