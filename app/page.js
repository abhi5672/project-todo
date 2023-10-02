"use client"

import React, { useState } from 'react'

const page = () => {
      
     const [title, settitle] = useState('');
     const [description, setdescription] = useState('');
     const [mainTask, setmainTask] = useState([]);
     const deleteHandler = (i) =>{

       let copyData = [...mainTask]
          copyData.splice(i,1);
          setmainTask(copyData)
     }
     const submitHandler = (e)=>{
      e.preventDefault()
      setmainTask([...mainTask, {title, description }])
      settitle("")
      setdescription("")
     }

     let renderTask = <h2>No Task Available</h2>;
     if(mainTask.length>0){
       renderTask = mainTask.map((t,i)=>{
              return ( 
              <li key={i} className='flex items-center justify-between mb-5'>
               <div className='flex justify-between mb-5 w-2/3'>
               <h5 className='text-2xl font-semibold'>{t.title}</h5>
               <h6 className='text-lg font-medium'>{t.description}</h6>
              </div>
              <button 
              onClick={() =>{
                     deleteHandler(i)
              }}
              className='py-2 px-4 rounded-full bg-red-500 font-bold'>DELETE</button>
              </li>
              );
       
            })
     }

  return (
         <>
          
          <h1 className='bg-black text-white p-5 text-6xlfont-bold text-center'>ABHISHEK'S TO-DO LIST</h1>
          
          <form onSubmit={submitHandler}>
           <input className='text-2xl border-zinc-800 px-4 py-2 border-2 m-5' type="text" placeholder='Enter tasks here' 
           value={title} onChange={(e)=>{
           settitle(e.target.value);
           }}/>
           <input className='text-2xl border-zinc-800 px-4 py-2 border-2 m-5' type="text" placeholder='Enter Description here' 
           value={description}
           onChange={(e)=>{
            setdescription(e.target.value)
           }}/>
           <button className='bg-black text-white px-4 py-2 rounded-full text-2xl font-bold m-5'>ADD TASK</button>
          </form>


          <hr />


          <div className='p-8 bg-slate-200 mt-5' >
          <ul>
         { renderTask }
          </ul>
          </div>
          


         </>

  )
    
  
}

export default page;
