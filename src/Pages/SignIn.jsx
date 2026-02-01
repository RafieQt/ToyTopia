import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";


const SignIn = () => {
  const { logInUser, googleLogin, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;


    logInUser(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;

        toast(errorCode);
      });
  }

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate('/');  
        
      })
      .catch((error) => {
        toast(error.code);
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-700 to-blue-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleSignIn} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name='email'
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name='password'
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button

            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign In
          </button>
          
        </form>
        <button
            onClick={handleGoogleLogin}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-1"
          >
            <FaGoogle /><p> Continue with Google</p>
          </button>
        {/* Extra */}
        <div className=" text-center mt-5 items-center justify-center text-sm font-medium text-gray-700 mb-1">
          <p>New User? <a href="/register" className="text-sm text-blue-600 hover:underline">
            Register
          </a></p>

        </div>
      </div>
    </div>
  );
};




export default SignIn;