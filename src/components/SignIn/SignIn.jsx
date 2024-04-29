import React from 'react'
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const navigate = useNavigate();
    const handleClick = () => {

        navigate('/login');
    };
    return (
        <div className=''>

            <div className='flex flex-col lg:flex-row justify-between items-center lg:h-[80vh] pl-4 md:pl-8 lg:pl-44'>
                <div className='flex flex-col items-start justify-start lg:px-8'>
                    <div className='flex flex-col'>
                        <div><p className='font-bold uppercase text-2xl text-left text-blue-800'>Sign In into our Account</p></div>
                        <div className='flex'>
                            <hr class="w-24 sm:w-32 lg:w-72 h-1 bg-red-500 border-0 rounded text-left" /></div>
                        <div>
                            <p className='text-base text-gray-500 lg:w-full text-left my-8'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alte. </p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <form>
                            <div className='flex flex-col w-full lg:w-[400px]'>
                                <input type="email" placeholder="Email*" className="border-b outline-none py-2 mb-4" />
                                <input type="number" placeholder="Phone Number*" className="border-b outline-none py-2 mb-4" />
                                <input type="password" placeholder="Enter Password*" className="border-b outline-none py-2 mb-4" />
                                <input type="password" placeholder="Re-enter Password*" className="border-b outline-none py-2 mb-4" />
                            </div>
                            <button className="bg-black text-white flex px-6 py-2 cursor-pointer">Sign Up</button>
                            <p className="text-start py-2">Don't have an account? <button className='font-bold hover:underline' onClick={handleClick}>Login Now !</button></p>
                        </form>
                    </div>
                </div>
                <div className='flex items-center justify-center lg:justify-end mt-8 lg:mt-0'>
                    <img className='h-auto w-40 md:w-52 lg:w-auto' src="./images/Green_Juice.png" alt="" />
                </div>
            </div>

        </div>
    )
}

export default SignIn