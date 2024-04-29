import React, { useState } from 'react'


const Message = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [message, setMessage] = useState()

    return (
        <div>
            {/* <div className='flex flex-row justify-between items-center h-[80vh] pl-44'>
                <div className='flex flex-col items-start justify-start px-8'>
                    <div className='flex flex-col'>
                        <div><p className='font-bold uppercase text-2xl text-left text-blue-800'>LEAVE US A MESSAGE</p></div>
                        <div className='flex'>
                            <hr class="w-72 h-1 bg-red-500 border-0 rounded text-left" /></div>
                        <div>
                            <p className='text-base text-gray-500 w-full text-left my-8'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alte. </p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <form>

                            <div className='flex flex-col w-[400px]'>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name*" className="border-b outline-none py-2 mb-4" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email*" className="border-b outline-none py-2 mb-4" />
                                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} required placeholder="Phone*" className="border-b outline-none py-2 mb-4" />
                                <input type="textarea" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message*" className="border-b outline-none py-2 mb-4" />
                            </div>
                            <button className="bg-black text-white flex px-4 py-1 rounded-md curosr-pointer">Submit</button>
                        </form>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-auto' src="./images/LeaveUsMessage.png" alt="" />
                </div>
            </div > */}
            <div className='flex flex-col lg:flex-row justify-between items-center lg:h-[80vh] pl-4 md:pl-8 lg:pl-44 pt-8'  >
                <div className='flex flex-col items-start justify-start lg:px-8'>
                    <div className='flex flex-col'>
                        <div><p className='font-bold uppercase text-2xl text-left text-blue-800'>LEAVE US A MESSAGE</p></div>
                        <div className='flex'>
                            <hr class="w-24 md:w-32 lg:w-72 h-1 bg-red-500 border-0 rounded text-left" /></div>
                        <div>
                            <p className='text-base text-gray-500 lg:w-full text-left my-8'>There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alte. </p>
                        </div>
                    </div>
                    <div className='flex items-start'>
                        <form>
                            <div className='flex flex-col w-full lg:w-[400px]'>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name*" className="border-b outline-none py-2 mb-4" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email*" className="border-b outline-none py-2 mb-4" />
                                <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} required placeholder="Phone*" className="border-b outline-none py-2 mb-4" />
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message*" className="border-b outline-none py-2 mb-4 resize-none h-40"></textarea>
                            </div>
                            <button className="bg-black text-white flex px-4 py-1 rounded-md cursor-pointer">Submit</button>
                        </form>
                    </div>
                </div>
                <div className='flex items-center justify-center lg:justify-end mt-8 lg:mt-0'>
                    <img className='h-auto w-40 md:w-52 lg:w-auto' src="./images/LeaveUsMessage.png" alt="" />
                </div>
            </div>


        </div>
    )
}

export default Message