import React from 'react'
import { FaEye } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const Coffecard = ({coffeeData , onDelete}) => {
  const {_id , name , chef , supplier , taste , category , details , photo}= coffeeData;
  const deleteCoffehandel = (_id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffe/${_id}`, {
          method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount> 0){
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        onDelete(_id);
          }
          
        })
      }
    });
      
  }
  return (
    <div className='w-[500px] h-[300px] bg-[#F5F4F1] flex justify-between items-center px-[25px] rounded-[8px]'>
        <div>
            <img src={photo} alt="" />
        </div>
        <div>
            <p className='font-bold'>Name: <span>{name}</span></p>
            <p className='font-bold'>Chef: <span>{chef}</span></p>
            <p className='font-bold'>Price:<span>890 Taka</span></p>
        </div>
        <div className=''>
        <button className='w-[40px] h-[40px] bg-[#D2B48C] text-white flex justify-center items-center mb-4 rounded-[5px]'> <FaEye /></button>
        <Link to={`/update/${_id}`}>
        <button className='w-[40px] h-[40px] bg-[#3C393B] text-white flex justify-center items-center mb-4 rounded-[5px]'> <FaPen /></button>
        </Link>
       
        <button className='w-[40px] h-[40px] bg-[#EA4744] text-white flex justify-center items-center mb-4 rounded-[5px]' onClick={()=>deleteCoffehandel(_id)}><AiFillDelete /></button>
        </div>

    </div>
  )
}

export default Coffecard