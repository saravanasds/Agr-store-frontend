import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [referredBy, setReferredBy] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        if (!mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match'; // Password match validation

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        setErrors({}); // Clear errors if validation passes

        const userData = {
            name,
            email,
            mobileNumber,
            referredBy,
            password
        };

        console.log(userData);

        try {
            const response = await axios.post('http://localhost:5000/api/user/register', userData);
            // console.log('User registered:', response.data);
            toast.success('User registered successfully!');
            navigate('/login');
        } catch (error) {
            if (error.response) {
                const { message } = error.response.data;

                if (message === 'Aadhaar number is already registered') {
                    setErrors({ adhaarNumber: message });
                } else if (message === 'Email already registered') {
                    setErrors({ email: message });
                } else {
                    console.error('There was an error registering the user!', error);
                    toast.error('There was an error registering the user!');
                }

                toast.error(message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center relative">
            <ToastContainer className='w-full flex justify-center items-center' />

            <div className='w-full bg-gray-300 '>
                {/* <h1 className='text-center text-4xl font-bold tracking-widest pt-10 text-gray-700'>User Register </h1> */}
                <form onSubmit={handleSubmit} className=' sm:p-10'>
                    <div className="w-full xs:w-[70%] sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto flex flex-col md:gap-10 justify-center items-center p-6 px-12 border border-black rounded-lg shadow-lg shadow-gray-500 bg-gray-200">
                        <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold tracking-wider mb-4 md:mb-0'>Sign Up </h1>
                        <div className='w-full text-sm sm:text-[16px]'>

                            <div className="mb-1">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full'
                                />
                                {errors.name && <p className="text-red-500 text-xs -mt-2">{errors.name}</p>}
                            </div>


                            <div className="mb-1">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full '
                                />
                                {errors.email && <p className="text-red-500 text-xs -mt-2">{errors.email}</p>}
                            </div>


                            <div className="mb-1">
                                <input
                                    type="number"
                                    placeholder='Mobile Number'
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full '
                                />
                                {errors.mobileNumber && <p className="text-red-500 text-xs -mt-2">{errors.mobileNumber}</p>}
                            </div>


                            <div className="mb-1">
                                <input
                                    type="text"
                                    placeholder='Referred By'
                                    value={referredBy}
                                    onChange={(e) => setReferredBy(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full'
                                />
                            </div>

                            <div className="mb-1">
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full '
                                />
                                {errors.password && <p className="text-red-500 text-xs -mt-2">{errors.password}</p>}
                            </div>

                            <div className="mb-1">
                                <input
                                    type="password"
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-1 w-full '
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs -mt-2">{errors.confirmPassword}</p>}
                            </div>

                            <div className=' flex justify-center items-center mt-4'>
                                <button type="submit" className="bg-[#3E4095] hover:bg-[#4e51d4] text-white py-2 px-20 rounded tracking-wider font-semibold">
                                    {loading ? (
                                        <ClipLoader color={'#ffffff'} loading={loading} size={20} />
                                    ) : (
                                        'Register'
                                    )}
                                </button>
                            </div>
                        </div>



                    </div>


                </form>
            </div>
        </div>
    );
}

export default Register;
