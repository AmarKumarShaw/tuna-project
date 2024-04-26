import React from 'react'


const Message = () => {
    return (
        <div className='flex flex-row justify-between items-center h-[80vh] pl-44'>
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
                            <input type="text" placeholder="Name*" className="border-b outline-none py-2 mb-4" />
                            <input type="email" placeholder="Email*" className="border-b outline-none py-2 mb-4" />
                            <input type="number" placeholder="Phone*" className="border-b outline-none py-2 mb-4" />
                            <input type="textarea" placeholder="Message*" className="border-b outline-none py-2 mb-4" />
                        </div>
                        <button className="bg-black text-white flex px-4 py-1 rounded-md curosr-pointer">Submit</button>
                    </form>
                </div>
            </div>
            <div className='flex items-center'>
                <img className='h-auto' src="./images/LeaveUsMessage.png" alt="" />
            </div>
        </div >
    )
}

export default Message