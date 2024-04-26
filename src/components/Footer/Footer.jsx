import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (

        <footer class="bg-gray-50 text-gray-600 body-font py-4">
            <div class="container-fluid mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center px-44 py-4">
                <img src="./images/Tastebites.svg" alt="logo-img" />
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" class="mr-10 hover:text-gray-900 cursor-pointer">Home</Link>
                    <Link to="/about" class="mr-10 hover:text-gray-900 cursor-pointer">About Us</Link>
                    <Link to="/contact" class="mr-10 hover:text-gray-900 cursor-pointer">Contact</Link>
                    <Link class="mr-10 hover:text-gray-900 cursor-pointer">Article</Link>
                </nav>

            </div>
            <hr class="h-px my-8 mx-48 bg-gray-200 border-0"></hr>
            <div><p className="py-4 text-black text-sm font-medium">2024 © Copyright | All Rights Reserved</p></div>

        </footer>

    )
}

export default Footer