import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import {toast} from "react-toastify"

const List = ({url}) => {
 

   const [list , setList] = useState([]);

   const fetchList =async ()=>{
    const response = await axios.get(`${url}/api/food/list`)
  
    if (response.data.success) {
      setList(response.data.data)
    }else{
     toast.error("Error");
      
    }
   }

   const removeFood = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }else{
       toast.error("Error");
    }
   }

   useEffect(()=>{
    fetchList();
   },[])




  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b className='name'>Name</b>
          <b className='category'>Category</b>
          <b className='price'>Price</b>
          <b className='action'>Action</b>

        </div>
        {list.map((item , idx)=>{
          return(
            <div key={idx} className='list-table-format font'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=>removeFood(item._id)}><button>delete</button></p>

            </div>
          )

        })}
      </div>
     
    </div>
  )
}

export default List
