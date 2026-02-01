import React, { use } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


const Register = () => {

  const navigate = useNavigate();
  const { createUser, setUser, updateUser, googleLogin } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const url = form.url.value;


    const hasUppercase = [...password].some(c => c >= "A" && c <= "Z");
    const hasLowercase = [...password].some(c => c >= "a" && c <= "z");

    if (!hasUppercase || !hasLowercase) {
      return toast("Password must have 1 upper and 1 lower case");
    }





    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: url }).
          then(() => {
            setUser({ ...user, displayName: name, photoURL: url || user.photoURL });

          }).catch((error) => {
            toast(error.code);
          });
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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

        <h2 className="text-2xl font-bold text-blue-700 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mt-2 mb-6">
          Sign up to get started
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="Your image URL"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Register
          </button>

        </form>
        <button
          onClick={handleGoogleLogin}
          className=" mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-1"
        >
          <FaGoogle /><p> Continue with Google</p>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline font-medium">
            Sign In
          </a>
        </p>

      </div>
    </div>
  );
};

export default Register;
