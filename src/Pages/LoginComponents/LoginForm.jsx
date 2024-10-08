import React from 'react';

function LoginForm() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-[#3E4095] md:text-3xl mb-6">
        Sign in to your account
      </h1>
      <form className="space-y-4 md:space-y-6 w-full max-w-md" action="#">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 mb-4 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 mb-4 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-[rgb(129,196,8)] hover:bg-[rgba(130,196,8,0.82)] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2.5 text-center tracking-wider"
        >
          Sign in
        </button>

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-[#3E4095]">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
