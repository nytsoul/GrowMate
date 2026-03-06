import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, Globe, ChevronDown } from 'lucide-react'
import Logo from '../components/Logo'

export default function Login() {
    const [showPass, setShowPass] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex flex-col">
            {/* Language selector top-right */}
            <div className="flex justify-end p-4">
                <button className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 rounded-full px-3 py-1.5 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <Globe size={14} className="text-brand-green" />
                    English
                    <ChevronDown size={12} />
                </button>
            </div>

            {/* Centered card */}
            <div className="flex-1 flex items-center justify-center px-4 py-8">
                <div className="w-full max-w-sm bg-white dark:bg-transparent rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-transparent p-8 dark:p-0">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Logo size="md" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-1">Welcome Back</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Sign in to access your AI marketing dashboard</p>

                    {/* Google */}
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-dark-500 bg-white dark:bg-dark-700 rounded-lg py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors mb-4">
                        <span className="text-base font-bold">G</span>
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-dark-500" />
                        <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider">or continue with email</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-dark-500" />
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-lg px-4 py-2.5 pl-10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all"
                                    placeholder="name@example.com"
                                />
                                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                                <a href="#" className="text-xs text-brand-green font-medium hover:underline">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPass ? 'text' : 'password'}
                                    className="w-full bg-gray-50 dark:bg-dark-700 border border-gray-300 dark:border-dark-500 rounded-lg px-4 py-2.5 pl-10 pr-10 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/30 transition-all"
                                    placeholder="••••••••"
                                />
                                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                                >
                                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </div>

                        {/* Keep signed in */}
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-700 accent-brand-green" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">Keep me signed in</span>
                        </label>

                        {/* Sign in button */}
                        <Link to="/dashboard" className="block">
                            <button className="w-full bg-indigo-600 text-white font-semibold rounded-lg py-3 text-sm hover:bg-indigo-500 transition-colors">
                                Sign In
                            </button>
                        </Link>
                    </div>

                    {/* Sign up link */}
                    <p className="text-center text-sm text-gray-500 mt-5">
                        Don't have an account?{' '}
                        <Link to="/dashboard" className="text-brand-green font-semibold hover:underline">Sign up for free</Link>
                    </p>

                    {/* Bharat mode badge */}
                    <div className="flex justify-center mt-4">
                        <span className="inline-flex items-center gap-1.5 text-xs text-brand-green font-medium border border-brand-green/30 bg-brand-green/5 rounded-full px-3 py-1">
                            <span className="glow-dot" /> BHARAT MODE ACTIVE
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-4 px-6">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-600">
                    <p>© 2024 GrowMate. Built for Bharat's Creators.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
