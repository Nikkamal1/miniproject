import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className='test-2xl md:text-4x1'>We're delighted tp have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat impedit atque dolore nihil enim quos, dolores aspernatur consequatur ab cumque harum eveniet. Error quis repellat voluptatibus porro placeat corrupti!
            </p>
            <Link to='/'>
            <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default Course
