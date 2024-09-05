import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
      const { message, data, token } = response.data;

      toast.success(message);

      // Save the token and user data to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('userEmail', data.email);
      
      navigate('/');
      window.location.reload();
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        toast.error(message);
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="bg-gray-300">
      <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto">
        <ToastContainer
          position="top-center"
          toastClassName="custom-toast"
          bodyClassName="custom-body"
        />
        <div className="flex flex-col items-center bg-white p-10 rounded-xl">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-[#3E4095] md:text-3xl mb-6">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="/forgotPassword" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-[rgb(129,196,8)] hover:bg-[rgba(130,196,8,0.82)] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2.5 text-center tracking-wider"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-[#3E4095]">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
