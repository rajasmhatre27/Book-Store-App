import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googlelogo from '../assets/BannerBooks/googlelogo.png'; 

const Login = () => {
    const { loginUser, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSuccess("Login successful!");
                setError("");
                setTimeout(() => {
                    navigate(from, { replace: true });
                }, 1500); 
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                setSuccess("");
            });
    };

    const handleGoogleLogin = () => {
        loginwithGoogle()
            .then((result) => {
                const user = result.user;
                alert("Login successfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold">Login Form</h1>
                        <form onSubmit={handleLogin} className="py-8 space-y-4">
                            <input 
                                id="email" 
                                name="email" 
                                type="text" 
                                placeholder="Email address"
                                className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2"
                            />
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                placeholder="Password"
                                className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2"
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            {success && <p className="text-green-500">{success}</p>}
                            <p>Don't have an account? <Link to="/sign-up" className="text-blue-500">Sign Up here</Link></p>
                            <button type="submit" className="w-full bg-blue-500 text-white rounded py-2 mt-2">Login</button>
                        </form>
                        <hr />
                        <button 
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center gap-2 bg-red-500 text-white rounded py-2 mt-4 w-full"
                        >
                            <img src={googlelogo} className='w-6 h-6' alt="Google Logo" />
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
