import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const { randomString } = useParams();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newPassword || !confirmPassword) {
            alert('Please fill out all fields');
            return;
        }
        setError("");
        setSuccess("");
        setLoading(true);

    
       

        if (newPassword === confirmPassword) {
            try {
                const response = await axios.post(`http://localhost:5000/api/user/resetpassword/${randomString}`, { password: newPassword });
                setSuccess(response.data.message);
            } catch (err) {
                setError("Failed to reset password");
            }
        } else {
            setError("Passwords do not match");
        }

        setLoading(false);
    }

    return (
        <div className='w-full min-h-[60vh] flex justify-center items-center bg-gray-200'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center border-[1px] shadow-lg shadow-slate-600 border-black p-10 w-[80%] md:w-[40%] rounded bg-slate-300'>
                <h1 className='text-2xl font-semibold tracking-wider'>Reset Password</h1>
                <input
                    type="password"
                    id='newPassword'
                    placeholder='New Password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className='w-full rounded p-2'
                    disabled={loading}
                />
                <input
                    type="password"
                    id='confirmPassword'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='w-full rounded p-2'
                    disabled={loading}
                />
                <button type='submit' className='py-1 px-10 bg-blue-700 rounded-lg text-white shadow-md shadow-gray-600 flex justify-center items-center' disabled={loading}>
                    {loading ? <ClipLoader size={20} color={"#fff"} /> : "Submit"}
                </button>
                {error && <p className='text-red-500 font-semibold'>{error}</p>}
                {success && <p className='text-green-500 font-semibold'>{success}</p>}
            </form>
        </div>
    )
}

export default ResetPassword;
