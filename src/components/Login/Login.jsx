import "./login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();
    const handleClick = () => {

        navigate('/signin');
    };

    return (
        <div className=''>
            <div className='flex flex-row justify-between items-center h-[80vh] pl-44'>
                <div className='flex flex-col items-start justify-start px-8'>
                    <div className='flex flex-col'>
                        <div><p className='font-bold uppercase text-2xl text-left text-blue-800'>Log In into our Account</p></div>
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

                                <input type="email" placeholder="Email*" className="border-b outline-none py-2 mb-4" />
                                <input type="number" placeholder="Phone Number*" className="border-b outline-none py-2 mb-4" />
                                <input type="textarea" placeholder="Enter Password*" className="border-b outline-none py-2 mb-4" />
                                <input type="textarea" placeholder="Re-enter Password*" className="border-b outline-none py-2 mb-4" />
                            </div>
                            <button className="bg-black text-white flex px-6 py-2 curosr-pointer">Login</button>
                            <p className="text-start py-2">Don't have an account? <button className='font-bold hover:bolder-b-2' onClick={handleClick}>Register Now</button></p>
                        </form>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-auto' src="./images/Green_Juice.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login