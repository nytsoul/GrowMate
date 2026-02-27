import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, Zap } from 'lucide-react'
import Logo from '../components/Logo'

export default function Login() {
    const [tab, setTab] = useState<'login' | 'signup'>('login')
    const [showPass, setShowPass] = useState(false)

    return (
        <div className="min-h-screen bg-white dark:bg-dark-900 grid lg:grid-cols-2">
            {/* Left hero */}
            <div className="hidden lg:flex flex-col justify-center px-16 relative overflow-hidden">
                {/* BG glow */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />

                {/* Nav */}
                <div className="absolute top-8 left-16 right-8 flex items-center justify-between">
                    <Logo />
                    <div className="flex items-center gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-dark-900 dark:hover:text-white transition-colors">Features</a>
                        <a href="#" className="hover:text-dark-900 dark:hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="hover:text-dark-900 dark:hover:text-white transition-colors">About</a>
                        <Link to="/dashboard" className="btn-primary text-sm py-2 px-4">Get Started</Link>
                    </div>
                </div>

                <div className="relative mt-16">
                    <div className="inline-flex items-center gap-2 badge-green mb-6 text-xs">
                        <span className="glow-dot" /> Scale Your Presence
                    </div>
                    <h1 className="text-5xl font-black text-white leading-tight mb-5">
                        The AI Marketing
                        <br />
                        <span className="text-gradient">Assistant for India.</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-10">
                        Empowering creators and small businesses to reach millions with AI-driven content and marketing strategies tailored for the Indian market.
                    </p>

                    <div className="space-y-4">
                        {[
                            { icon: '🚀', title: 'Quick Setup', desc: 'Go live in under 5 minutes.' },
                            { icon: '🔤', title: 'Multi-lingual AI', desc: 'Support for Hindi, Tamil, Telugu & more.' },
                        ].map(({ icon, title, desc }) => (
                            <div key={title} className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-lg">
                                    {icon}
                                </div>
                                <div>
                                    <p className="font-semibold text-white text-sm">{title}</p>
                                    <p className="text-xs text-gray-500">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right: Auth form */}
            <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-16 relative">
                {/* Mobile logo */}
                <div className="lg:hidden mb-8">
                    <Logo size="lg" />
                </div>

                <div className="w-full max-w-md">
                    <div className="card p-8 shadow-card">
                        <h2 className="text-2xl font-black text-white text-center mb-1">Welcome back</h2>
                        <p className="text-sm text-gray-500 text-center mb-7">Log in to manage your growth</p>

                        {/* Tabs */}
                        <div className="flex border-b border-dark-500 mb-7">
                            {(['login', 'signup'] as const).map(t => (
                                <button
                                    key={t}
                                    onClick={() => setTab(t)}
                                    className={`flex-1 py-2.5 text-sm font-semibold capitalize transition-all ${tab === t
                                            ? 'text-brand-green border-b-2 border-brand-green -mb-px'
                                            : 'text-gray-500 hover:text-gray-300'
                                        }`}
                                >
                                    {t === 'login' ? 'Login' : 'Sign Up'}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {tab === 'signup' && (
                                <div>
                                    <label className="text-xs text-gray-500 mb-1.5 block">Full Name</label>
                                    <div className="relative">
                                        <input className="input-field pl-10" placeholder="Arpita Singh" />
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">👤</span>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Business Email</label>
                                <div className="relative">
                                    <input type="email" className="input-field pl-10" placeholder="name@company.com" />
                                    <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-1.5">
                                    <label className="text-xs text-gray-500">Password</label>
                                    {tab === 'login' && <a href="#" className="text-xs text-brand-green hover:underline">Forgot?</a>}
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        className="input-field pl-10 pr-10"
                                        placeholder="••••••••"
                                    />
                                    <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                                    >
                                        {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                                    </button>
                                </div>
                            </div>

                            <Link to="/dashboard">
                                <button className="w-full btn-primary py-3 text-base mt-2">
                                    {tab === 'login' ? 'Sign In to Dashboard' : 'Create Account'}
                                </button>
                            </Link>

                            <div className="flex items-center gap-3 py-1">
                                <div className="flex-1 h-px bg-gray-300 dark:bg-dark-500" />
                                <span className="text-xs text-gray-600 uppercase tracking-wider">or continue with</span>
                                <div className="flex-1 h-px bg-gray-300 dark:bg-dark-500" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Google', icon: '🔍' },
                                    { label: 'Cognito', icon: '☁️' },
                                ].map(({ label, icon }) => (
                                    <button key={label} className="btn-secondary flex items-center justify-center gap-2 py-2.5 text-sm">
                                        <span>{icon}</span> {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="text-center text-xs text-gray-500 mt-6">
                            {tab === 'login' ? "New to GrowMate AI? " : 'Already have an account? '}
                            <button onClick={() => setTab(tab === 'login' ? 'signup' : 'login')} className="text-brand-green hover:underline font-medium">
                                {tab === 'login' ? 'Create a business account' : 'Sign in'}
                            </button>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 w-full px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600 max-w-2xl mx-auto">
                    <p>© 2024 GrowMate AI. Built for the Indian Creator Economy.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">Help Center</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
