import React from 'react'
import banner from "../../public/Banner.png"
function Banner() {
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
       <div className="space-y-12">
       <h1 className="text-4xl font-bold">
            Hello, wecomes here to learn something{" "}
            <span className="text-pink-500">new everyday</span>
        </h1>
        <div>
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aliquid labore. Officia maiores numquam sapiente incidunt accusamus dolor, eius ex consequatur, obcaecati enim dolorem totam dolores possimus minima quisquam perspiciatis.
            </p>
       </div>
       <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
<div>
<button className="btn mt-3 btn-secondary">Secondary</button>
</div>
</div>
        </div>
        
        <div className="order-1 w-full md:w-1/2">
        <br />
        <br />
        <img src={banner} alt=""/>
        </div>
        </div> 
    </>
  )
}

export default Banner
