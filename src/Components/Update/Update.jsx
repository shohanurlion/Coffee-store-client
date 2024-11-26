import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const coffe = useLoaderData()
  const {_id , name , chef , supplier , taste , category , details , photo} = coffe
  const Updatecoffehandel = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatecoffe = {name, chef , supplier, taste , category , details , photo};
    console.log(updatecoffe);
    fetch(`http://localhost:5000/coffe/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatecoffe)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount > 0){
          console.log('successfully updated');
          Swal.fire({
            title: 'Success!',
            text: 'Coffee updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        event.target.reset(); 
        }
      
    })
 
}
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-[100px]">
    <div className="max-w-4xl w-full p-6 bg-[#F4F3F0] rounded shadow-md">
      <h1 className="font-rancho text-3xl font-bold text-center mb-4 text-gray-700">
        Update Coffee
      </h1>
      <p className="font-rancho text-center text-gray-500 mb-8">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className="space-y-6" onSubmit={Updatecoffehandel}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" defaultValue={name}
              placeholder="Enter coffee name"
            />
          </div>
          <div>
            <label
              htmlFor="chef"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Chef
            </label>
            <input
              type="text"
              id="chef"
              name="chef"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={chef}
              placeholder="Enter coffee chef"
            />
          </div>
          <div>
            <label
              htmlFor="supplier"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Supplier
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
            />
          </div>
          <div>
            <label
              htmlFor="taste"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Taste
            </label>
            <input
              type="text"
              id="taste"
              name="taste"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={taste}
              placeholder="Enter coffee taste"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={category}
              placeholder="Enter coffee category"
            />
          </div>
          <div>
            <label
              htmlFor="details"
              className="font-rancho block text-gray-600 font-medium mb-2"
            >
              Details
            </label>
            <input
              type="text"
              id="details"
              name="details"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue={details}
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="photo"
            className="font-rancho block text-gray-600 font-medium mb-2"
          >
            Photo
          </label>
          <input
            type="text"
            id="photo"
            name="photo"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={photo}
            placeholder="Enter photo URL"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-black font-rancho border-2 border-black w-full py-2 rounded-[5px] duration-700 ease-in-out hover:bg-[#D2B48C]"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Update