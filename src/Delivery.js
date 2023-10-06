import React from 'react'
import delivery3 from './images/delivery3.jpg'

const Delivery = () => {
  return (
       
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500  font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4 bg-transparent rounded-lg' alt='food app' src={delivery3}/>
            <div className='flex flex-col justify-center mt-[150px] mx-10'>
                <p className='text-[#00df9a] font-bold text-2xl'>Get The App & Get the food</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Restaurants in your Pocket</h1>
                <p>
                Order from your favorite food in favorite restaurants & track on the go, with the all-new FoodDay app.
                </p>
                <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery