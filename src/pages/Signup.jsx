import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/4497f5e7-5150-404e-bc23-53b54060e333/FI-en-20220523-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='my-2 p-3 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                        <input className='my-2 p-3 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <div className='flex justify-between items-center'>
                        <p className='py-4 text-gray-600'>Already subscribed to Netflix?</p>
                        <Link to='/login'><p>Sign In</p></Link>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Signup