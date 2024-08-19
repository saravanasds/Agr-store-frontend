import React, { useState } from 'react';
import axios from 'axios';
import data from './data.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';

function Register() {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [alternateMobileNumber, setAlternateMobileNumber] = useState('');
    const [adhaarNumber, setAdhaarNumber] = useState('');
    const [voterId, setVoterId] = useState('');
    const [district, setDistrict] = useState('');
    const [constituency, setConstituency] = useState('');
    const [address, setAddress] = useState('');
    const [familyMembers, setFamilyMembers] = useState('');
    const [voters, setVoters] = useState('');
    const [referredBy, setReferredBy] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // New state for confirm password

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeDistrict = (event) => {
        setDistrict(event.target.value);
        setConstituency(''); // Reset constituency when district changes
    };

    const handleChangeConstituency = (event) => {
        setConstituency(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const newErrors = {};

        if (!name) newErrors.name = 'Name is required';
        if (!fatherName) newErrors.fatherName = 'Father Name is required';
        if (!dob) newErrors.dob = 'Date of Birth is required';
        if (!gender) newErrors.gender = 'Gender is required';
        if (!email) newErrors.email = 'Email is required';
        if (!mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!alternateMobileNumber) newErrors.alternateMobileNumber = 'Alternate Mobile Number is required';
        if (!adhaarNumber) newErrors.adhaarNumber = 'Adhaar Number is required';
        if (!voterId) newErrors.voterId = 'VoterId is required';
        if (!district) newErrors.district = 'District is required';
        if (!constituency) newErrors.constituency = 'Constituency is required';
        if (!familyMembers) newErrors.familyMembers = 'Family Members are required';
        if (!voters) newErrors.voters = 'No of members above 18 years is required';
        if (!address) newErrors.address = 'Address is required';
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
            fatherName,
            dob,
            gender,
            email,
            mobileNumber,
            adhaarNumber,
            voterId,
            district,
            constituency,
            address,
            alternateMobileNumber,
            familyMembers,
            voters,
            referredBy,
            password
        };

        console.log(userData);

        try {
            const response = await axios.post('http://localhost:5000/api/user/register', userData);
            console.log('User registered:', response.data);
            toast.success('User registered successfully!');
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
                <form onSubmit={handleSubmit} className=' p-10'>
                    <div className="flex flex-col md:flex-row md:gap-10 justify-center ">
                        <div className='w-full md:w-[30%] '>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.name && <p className="text-red-500 text-xs -mt-2">{errors.name}</p>}
                            </div>
                            <div className='mb-3 flex flex-col items-center'>
                                <div className='w-full flex flex-col items-start gap-2'>
                                    <label htmlFor="dob" className='block'>DOB:</label>
                                    <input
                                        type="date"
                                        name='dob'
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className='border border-gray-400 rounded py-2 px-3 mb-3 w-full'
                                    />
                                </div>
                                {errors.dob && <p className="text-red-500 text-xs -mt-2 w-full">{errors.dob}</p>}
                            </div>
                            <div className='mb-4 flex flex-col items-center '>
                                <div className='w-full flex items-center justify-between'>
                                    <label className=''>Gender:</label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={gender === 'male'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Male</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={gender === 'female'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                    {/* <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            checked={gender === 'other'}
                                            onChange={handleChangeGender}
                                            className="form-radio"
                                        />
                                        <span className="ml-2">Others</span>
                                    </label> */}
                                </div>
                                {errors.gender && <p className="text-red-500 text-xs -mt-2 w-full">{errors.gender}</p>}
                            </div>

                            <div className='mb-3'>
                                <select
                                    name="district"
                                    value={district}
                                    onChange={handleChangeDistrict}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full'
                                >
                                    <option value="">Select District</option>
                                    {data.districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                                {errors.district && <p className="text-red-500 text-xs -mt-2">{errors.district}</p>}
                            </div>
                            <div className='mb-3'>
                                <select
                                    name="constituency"
                                    value={constituency}
                                    onChange={handleChangeConstituency}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full'
                                >
                                    <option value="">Select Constituency</option>
                                    {district && data.constituencies[district] && (
                                        data.constituencies[district].map((constituency, index) => (
                                            <option key={index} value={constituency}>{constituency}</option>)))
                                    }
                                </select>
                                {errors.constituency && <p className="text-red-500 text-xs -mt-2">{errors.constituency}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Referred By'
                                    value={referredBy}
                                    onChange={(e) => setReferredBy(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full'
                                />
                            </div>
                        </div>

                        <div className='w-full md:w-[30%]'>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Father Name'
                                    value={fatherName}
                                    onChange={(e) => setFatherName(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.fatherName && <p className="text-red-500 text-xs -mt-2">{errors.fatherName}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Mobile Number'
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.mobileNumber && <p className="text-red-500 text-xs -mt-2">{errors.mobileNumber}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Adhaar Number'
                                    value={adhaarNumber}
                                    onChange={(e) => setAdhaarNumber(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.adhaarNumber && <p className="text-red-500 text-xs -mt-2">{errors.adhaarNumber}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="number"
                                    placeholder='No of Family Members'
                                    value={familyMembers}
                                    onChange={(e) => setFamilyMembers(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.familyMembers && <p className="text-red-500 text-xs -mt-2">{errors.familyMembers}</p>}
                            </div>
                            <div className="mb-3">
                                <textarea
                                    type="text"
                                    placeholder='Address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full h-28'
                                />
                                {errors.address && <p className="text-red-500 text-xs -mt-2">{errors.address}</p>}
                            </div>
                        </div>

                        <div className='w-full md:w-[30%]'>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.email && <p className="text-red-500 text-xs -mt-2">{errors.email}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Alternate Mobile Number'
                                    value={alternateMobileNumber}
                                    onChange={(e) => setAlternateMobileNumber(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.alternateMobileNumber && <p className="text-red-500 text-xs -mt-2">{errors.alternateMobileNumber}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='Voter Id'
                                    value={voterId}
                                    onChange={(e) => setVoterId(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.voterId && <p className="text-red-500 text-xs -mt-2">{errors.voterId}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder='No of members above 18 years'
                                    value={voters}
                                    onChange={(e) => setVoters(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.voters && <p className="text-red-500 text-xs -mt-2">{errors.voters}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.password && <p className="text-red-500 text-xs -mt-2">{errors.password}</p>}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    placeholder='Confirm Password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className='border border-gray-400 rounded py-2 px-3 mb-3 w-full '
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs -mt-2">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-center items-center mt-4'>
                        <button type="submit" className="bg-[#3E4095] hover:bg-[#4e51d4] text-white py-2 px-20 rounded tracking-wider">
                            {loading ? (
                                <ClipLoader color={'#ffffff'} loading={loading} size={20} />
                            ) : (
                                'Register'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
