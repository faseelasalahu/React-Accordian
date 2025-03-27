import React, { useState } from 'react';

import './App.css';
function Accordian({accordianData}) {
   const [accordianIDs,setAccordianIDs] =useState([])

    const handlerAccordian=(new_id)=>{
      setAccordianIDs((prevAccID)=>{
        return accordianIDs.includes(new_id) ? accordianIDs.filter((acc_id)=>acc_id !== new_id) : [...prevAccID,new_id]
      })
    }
    console.log(accordianIDs)
  return (
    <>
    {
      accordianData && accordianData.map(({id,title,desc}) => (
        <div className='accordian' key={id}><span onClick={()=>handlerAccordian(id)}>+</span> 
        <div className="accordian-title" >
        <h3>{title}</h3> 
        </div>
      
      {
      accordianIDs?.map((acc_id,index)=>(
        acc_id === id &&(
        <div className="accordian-des" key={index}>
        <p>{desc}</p>
      </div>)

      ))
         
        
      }
    </div>
      ))
    }
    </>
  )
}

export default Accordian
