import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Logo from "../photos/L.png"; // Ensure the path is correct

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [focusedField, setFocusedField] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            <Head title="Login" />

            <header className="py-6 px-8">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="h-13 w-24" />
                    <nav>
                        <Link href="/" className="text-white hover:text-red-500 transition-colors duration-300">Home</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md">
                    {status && (
                        <div className="mb-6 p-4 bg-red-900/30 text-red-100 rounded-lg border border-red-800/50">
                            {status}
                        </div>
                    )}

                    <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 p-8 border-b border-gray-700">
                            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                            <p className="text-orange-100">Sign in to access your account</p>
                        </div>

                        <div className="p-8">
                            <form onSubmit={submit} className="space-y-6">
                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className={`block text-sm font-medium mb-2 ${
                                            focusedField === 'email' ? 'text-red-400' : 'text-orange-100'
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
                                            className={`w-full bg-gray-700/50 border ${
                                                errors.email ? 'border-red-500' : 'border-gray-600'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('email', e.target.value)}
                                            autoComplete="username"
                                        />
                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label
                                        htmlFor="password"
                                        className={`block text-sm font-medium mb-2 ${
                                            focusedField === 'password' ? 'text-red-400' : 'text-orange-100'
                                        }`}
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={data.password}
                                            className={`w-full bg-gray-700/50 border ${
                                                errors.password ? 'border-red-500' : 'border-gray-600'
                                            } rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all`}
                                            onFocus={() => setFocusedField('password')}
                                            onBlur={() => setFocusedField(null)}
                                            onChange={(e) => setData('password', e.target.value)}
                                            autoComplete="current-password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white"
                                            tabIndex={-1}
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
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-400">{errors.password}</p>
                                    )}
                                </div>

                                {/* Remember & Forgot */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-600 rounded bg-gray-700/50"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-orange-100">
                                            Remember me
                                        </label>
                                    </div>

                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-sm font-medium text-red-400 hover:text-red-300 transition-colors"
                                        >
                                            Forgot password?
                                        </Link>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    {processing ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z" />
                                            </svg>
                                            Signing in...
                                        </span>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Sign up suggestion */}
                    <p className="mt-6 text-center text-sm text-gray-400">
                        Don't have an account?{' '}
                        <Link href={route('register')} className="text-red-400 hover:text-red-300 font-medium">
                            Create one
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
