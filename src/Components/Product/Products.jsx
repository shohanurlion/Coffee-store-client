import Container from '../Container'
import { RiCupLine } from "react-icons/ri";
import Coffecard from '../Coffecard/Coffecard';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the fetch function
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/coffe");
        const result = await response.json();
        setData(result); // Update state with the fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  const handleDelete = (id) => {
    // Update the state to remove the deleted item
    setData((prevData) => prevData.filter((item) => item._id !== id));
  };
  return (
   <div>
    <Container>
        <div className='flex justify-center items-center py-[100px]'>
            <div className='text-center'>
            <span className='font-rancho text-[20px] text-[#1B1A1A]'>--- Sip & Savor ---</span>
            <h3 className='font-rancho text-[55px] text-[#331A15]'>Our Popular Products</h3>
            <div className='flex justify-center items-center'>
                <Link to={'/addcofe'}>
                <button className='flex items-center gap-2 justify-center font-rancho px-[4px] text-[18px] text-white border-2 border-[#331A15] bg-[#E3B577] rounded-[5px]'>Add Coffee <RiCupLine className='text-[#331A15]'/>
                </button>
                </Link>
           
            </div>
            
            </div>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-3'>
            {
                data.map(coffeeData =>  <Coffecard key={coffeeData._id} coffeeData={coffeeData} onDelete={handleDelete}>

                </Coffecard>

                )
            }
           
        </div>
    </Container>
   </div>
  )
}

export default Products