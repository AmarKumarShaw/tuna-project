// import React from 'react'
// import { useNavigate } from "react-router-dom"


// const AboutUs = () => {
//     const navigate = useNavigate();
//     const handleClick = () => {

//         navigate('/about');
//     };

//     return (
//         <div>
//             <div className='lg:px-44 lg:py-12'>
//                 <div className='flex justify-between shadow-xl p-4 sm:flex-col lg:flex-row  '>
//                     <div className=''>
//                         <img className="h-96" src="./images/Onion.png" alt="" />
//                     </div>
//                     <div className='max-w-2xl text-left'>
//                         <p className='flex font-bold text-2xl'>About US</p>
//                         <p className=' py-6 text-base text-gray-500  leading-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
//                         <button className='cursor-pointer uppercase bg-black text-white rounded-md p-2' onClick={handleClick} >Read More </button>
//                     </div>
//                 </div>
//             </div>
//         </div>



//     )
// }

// export default AboutUs

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/about');
    };

    return (
        <div>
            <div className="px-4 py-6 lg:px-44">
                <div className="flex flex-col lg:flex-row justify-between shadow-xl p-4 sm:flex-col  ">
                    <div className="mb-4">
                        <img className=" sm:object-cover lg:h-96 lg:h-auto" src="./images/Onion.png" alt="" />
                    </div>
                    <div className="max-w-2xl lg:text-left">
                        <p className="font-bold text-2xl mb-4">About Us</p>
                        <p className="text-base text-gray-500 leading-7 mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="uppercase bg-black text-white rounded-md p-2" onClick={handleClick}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
