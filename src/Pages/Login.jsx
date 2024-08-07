import React, { useState } from 'react';
import LoginForm from './LoginComponents/LoginForm';
import RegisterForm from './LoginComponents/RegisterForm';

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:min-h-screen lg:py-0">
        <div className={`w-full ${activeTab === 'register' ? 'max-w-[80vw]' : 'max-w-md'} bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700`}>
          <div className="px-6 py-0 space-y-4 md:space-y-6 sm:p-8">

            <div className="flex justify-center space-x-4 ">
              <button
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === 'register' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
              <button
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${activeTab === 'login' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
            </div>
            {activeTab === 'login' && <LoginForm />}
            {activeTab === 'register' && <RegisterForm />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
