import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
    const{pages,handlepage, totalpages}=useContext(AppContext);
  return (
    <div className='bottom-0 fixed bg-white dark:bg-black   w-full flex justify-center items-center border dark:border-gray-900'>
        <div className=' flex justify-between  py-2 shadow-2xl w-11/12 max-w-[700px] '>
        <div className=' flex gap-x-2 dark:text-yellow-50 cursor-pointer'>
        {
                pages>1 &&
                <button onClick={()=>handlepage(pages -1)} className=' rounded-md border px-3 py-1 dark:border-gray-900'>
                    previous
                </button>
            }
            {
                pages<totalpages &&
                <button onClick={()=>handlepage(pages+1)} className='rounded-md border px-3 py-1 dark:border-gray-900'>
                    next
                </button>
            }
        </div>
            
            <p className=' font-bold dark:text-yellow-50 py-1'>Page {pages} of {totalpages}</p>
        </div>
    </div>
  )
}

export default Pagination