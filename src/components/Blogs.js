import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blog.css"

const Blogs = () => {

    const{loading,post}=useContext(AppContext);

  return (
    <div className=' w-11/12 max-w-[700px] mt-12 mb-20 '>
        {
            loading ? (<Spinner/>) :(
                post.length===0 ? (<div className=' dark:text-white'>No posts found</div>):
                (post.map((post)=>(
                    <div key={post.id} className='mt-5'>
                        <p className=' font-bold text-xl dark:text-yellow-50'>{post.title}</p>

                        <p className=' mt-2 text-[15px] dark:text-yellow-50'>
                            By  <span className=' italic '>{post.author}</span> on <span className=' font-bold underline'>{post.category}</span>
                        </p>

                        <p className=' dark:text-yellow-50'>
                            posted on <span className='text-[15px] font-bold'>{post.date}</span>
                        </p>
                        
                        <p className=' mt-2 text-justify text-[15px] dark:text-yellow-50'>{post.content}</p>
                        
                        <div className='flex gap-x-3'>
                            {
                            post.tags.map((tag,index)=>(
                                 <span className=' font-bold text-blue-600 underline mt-1 text-xs' key={index}>{`#${tag}`} </span>
                            ))
                            }
                        </div>

                        
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blogs