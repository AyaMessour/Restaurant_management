import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Logo from "../photos/L.png"; // Ensure the path is correct

export default function Register({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [focusedField, setFocusedField] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="min-h-screen bg-gray-900  text-white flex flex-col">
            <Head title="Register" />
            
            {/* Modern header */}
            <header className="py-6 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="h-13 w-24" />
                    <nav>
                        <Link href="/" className="text-white hover:text-orange-500 transition-colors">Home</Link>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    {/* Status message */}
                    {status && (
                        <div className="mb-6 p-4 bg-green-900/50 text-green-400 rounded-lg">
                            {status}
                        </div>
                    )}

                    {/* Auth card */}
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Card header */}
                        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 p-8 border-b border-gray-700">
                            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                            <p className="text-orange-100">Sign in to access your account</p>
                        </div>

                        {/* Card body */}
                        <div className="p-8">
                            <form onSubmit={submit} className="space-y-6">
                                {/* Name field */}
                                <div>
                                    <label 
                                        htmlFor="name" 
                                        className={`block text-sm font-medium mb-2 transition-all duration-200 ${
                                            focusedField === 'name' ? 'text-orange-500' : 'text-white'
                                        }`}
                                    >
                                        Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className={`w-full bg-gray-700/50 border ${
                                                errors.name ? 'border-red-500' : 'border-gray-800'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('name', e.target.value)}
                                            autoComplete="name"
                                        />
                                        {errors.name && (
                                            <div className="absolute right-3 top-3 text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email field */}
                                <div>
                                    <label 
                                        htmlFor="email" 
                                        className={`block text-sm font-medium mb-2 transition-all duration-200 ${
                                            focusedField === 'email' ? 'text-orange-500' : 'text-white'
                                        }`}
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className={`w-full bg-gray-900/50 border ${
                                                errors.email ? 'border-red-500' : 'border-gray-800'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('email', e.target.value)}
                                            autoComplete="email"
                                        />
                                        {errors.email && (
                                            <div className="absolute right-3 top-3 text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                                    )}
                                </div>

                                {/* Password field */}
                                <div>
                                    <label 
                                        htmlFor="password" 
                                        className={`block text-sm font-medium mb-2 transition-all duration-200 ${
                                            focusedField === 'password' ? 'text-orange-500' : 'text-white'
                                        }`}
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={data.password}
                                            className={`w-full bg-gray-900/50 border ${
                                                errors.password ? 'border-red-500' : 'border-gray-800'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                            onFocus={() => setFocusedField('password')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('password', e.target.value)}
                                            autoComplete="new-password"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-3 top-3 text-white hover:text-orange-500 transition-colors"
                                        >
                                            {showPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                        {errors.password && (
                                            <div className="absolute right-12 top-3 text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                                    )}
                                </div>

                                {/* Password confirmation field */}
                                <div>
                                    <label 
                                        htmlFor="password_confirmation" 
                                        className={`block text-sm font-medium mb-2 transition-all duration-200 ${
                                            focusedField === 'password_confirmation' ? 'text-orange-500' : 'text-gray-400'
                                        }`}
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password_confirmation"
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className={`w-full bg-gray-900/50 border ${
                                                errors.password_confirmation ? 'border-red-500' : 'border-gray-800'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
                                            onFocus={() => setFocusedField('password_confirmation')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            autoComplete="new-password"
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleConfirmPasswordVisibility}
                                            className="absolute right-3 top-3 text-gray-400 hover:text-orange-500 transition-colors"
                                        >
                                            {showConfirmPassword ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            )}
                                        </button>
                                        {errors.password_confirmation && (
                                            <div className="absolute right-12 top-3 text-red-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    {errors.password_confirmation && (
                                        <p className="mt-2 text-sm text-red-500">{errors.password_confirmation}</p>
                                    )}
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    {processing ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Registering...
                                        </span>
                                    ) : (
                                        'Register'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Login link */}
                    <div className="mt-8 text-center text-sm text-gray-400">
                        Already have an account?{' '}
                        <Link href={route('login')} className="font-medium text-orange-500 hover:text-orange-400 transition-colors">
                            Sign in
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 px-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </footer>
        </div>
    );
}