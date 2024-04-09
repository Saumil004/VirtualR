import React from 'react'
import { testimonials } from '../constants'

function Testimonials() {
  return (
    <div className='tracking-wide mt-20'>

    <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
        What People are saying
    </h2>
    <div className="flex flex-wrap justify-center ">
        {testimonials.map((item,index)=>(
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
                <div className="bg-neutral rounded-md p-6 text-md  border border-neutral-800 ">
                    <p>{item.text}</p>
                    <div className="flex mt-8 items-center">
                        <img className="w-12 h-12 mr-6 rounded-full" src={item.image} alt={item.user} />
                        <div>
                            <h6>{item.user}</h6>
                            <span className='text-sm font-normal italic text-neutral-600'>{item.company}</span>
                        </div>
                    </div>
                </div>
            </div>

        ))}
    </div>
    </div>
  )
}

export default Testimonials
