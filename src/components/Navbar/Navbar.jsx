import React from 'react'
import "./Navbar.css"
// import { Link } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {

        navigate('/login');
    };
    const handleClickHome = () => {

        navigate('/');
    };
    return (
        <div>
            <header class="text-gray-600 body-font shadow-md h-[12vh]">
                <div class="container-fluid mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-44 py-4">
                    <img className='cursor-pointer' onClick={handleClickHome} src="./images/Tastebites.svg" alt="logo-img" />
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
                        <Link to="/" class="mr-10 hover:text-gray-900 cursor-pointer">Home</Link>
                        <Link to="/about" class="mr-10 hover:text-gray-900 cursor-pointer">About Us</Link>
                        <Link to="/contact" class="mr-10 hover:text-gray-900 cursor-pointer">Contact</Link>
                    </nav>
                    <button class="inline-flex text-white items-center bg-gray-700 border-0 py-3 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 curosr-pointer" onClick={handleClick}>Login/Register
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar