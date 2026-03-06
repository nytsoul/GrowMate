import { Link } from 'react-router-dom'
import { ArrowRight, Play, TrendingUp, Globe, Target, Zap } from 'lucide-react'
import Logo from '../components/Logo'
import CircularRing from '../components/CircularRing'

const features = [
    {
        icon: <Globe size={22} />,
        title: 'Content Creator',
        desc: 'AI-driven content strategies in regional languages that resonate with local audiences.',
    },
    {
        icon: <TrendingUp size={22} />,
        title: 'Hit Prediction',
        desc: 'Predict virality before you post with our proprietary Hit Score gauge and trend analysis.',
    },
    {
        icon: <Target size={22} />,
        title: 'Smart Positioning',
        desc: 'Find your unique niche in the competitive Indian market using data-driven insights.',
    },
    {
        icon: <Zap size={22} />,
        title: 'Strategy Generator',
        desc: 'End-to-end marketing roadmaps that scale with your business growth and budget.',
    },
]

const stats = [
    { value: '10k+', label: 'Creators Empowered' },
    { value: '45%', label: 'Avg Engagement Boost' },
    { value: '92%', label: 'Hit Accuracy' },
    { value: '12+', label: 'Regional Languages' },
]

export default function Landing() {
    return (
        <div className="min-h-screen bg-white dark:bg-dark-900 overflow-x-hidden">
            {/* Navbar */}
            <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-600">
                <Logo size="md" />
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    {['Features', 'Solutions', 'Pricing', 'Contact'].map(item => (
                        <a key={item} href="#" className="hover:text-dark-900 dark:hover:text-white transition-colors">{item}</a>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2">
                        Log in
                    </Link>
                    <Link to="/dashboard" className="btn-primary text-sm">
                        Get Started Free
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-hero-grid bg-grid opacity-60" />
                {/* Green glow */}
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-green/10 to-transparent blur-3xl pointer-events-none" />

                <div className="relative w-full px-2 sm:px-0 grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left copy */}
                    <div>
                        <div className="inline-flex items-center gap-2 badge-green mb-6 animate-float">
                            <span className="glow-dot" />
                            Introducing Bharat Mode
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
                            Your AI Marketing
                            <br />
                            Co-Pilot for{' '}
                            <span className="text-gradient">Digital Growth</span>
                        </h1>

                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                            Experience the power of Bharat Mode and Hit Prediction tailored specifically for Indian creators and small businesses. Break language barriers and dominate the market.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link to="/dashboard" className="btn-primary flex items-center gap-2 text-base px-7 py-3">
                                Get Started for Free <ArrowRight size={16} />
                            </Link>
                            <button className="flex items-center gap-2 text-dark-900 dark:text-white font-semibold hover:text-brand-green transition-colors">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 hover:border-brand-green transition-colors">
                                    <Play size={14} className="fill-current ml-0.5" />
                                </div>
                                Watch Demo
                            </button>
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-400">
                            <div className="flex -space-x-2">
                                {['bg-violet-500', 'bg-pink-500', 'bg-amber-500'].map((c, i) => (
                                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-dark-900`} />
                                ))}
                            </div>
                            <span><strong className="text-white">2,400+</strong> creators joined this week</span>
                        </div>
                    </div>

                    {/* Right: Virality Forecast card */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="card w-72 shadow-card animate-float">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Content Analysis</p>
                                    <p className="font-bold text-white">Virality Forecast</p>
                                </div>
                                <span className="badge-green flex items-center gap-1.5">
                                    <span className="glow-dot" /> Live API
                                </span>
                            </div>

                            <CircularRing score={92} size={140} label="Hit Score" sublabel="High Potential" />

                            <div className="grid grid-cols-2 gap-3 mt-5">
                                <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-3">
                                    <p className="text-[10px] text-gray-500 mb-1">Viral Reach</p>
                                    <p className="text-sm font-bold text-dark-900 dark:text-dark-900 dark:text-white">Very High</p>
                                </div>
                                <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-3">
                                    <p className="text-[10px] text-gray-500 mb-1">Positive</p>
                                    <p className="text-sm font-bold text-brand-green">98% Pos.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-gray-200 dark:border-dark-600">
                <div className="w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-3xl font-black text-gradient mb-1">{value}</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6">
                <div className="w-full px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl lg:text-4xl font-black mb-4">
                            Tailored for the <span className="text-gradient">Next Billion Users</span>
                        </h2>
                        <p className="text-gray-400 max-w-lg mx-auto">
                            GrowMate provides specialized tools to help you dominate the digital landscape through advanced regional intelligence.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {features.map(({ icon, title, desc }) => (
                            <div key={title} className="card-hover group p-6">
                                <div className="w-11 h-11 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green/20 transition-colors">
                                    {icon}
                                </div>
                                <h3 className="font-bold text-dark-900 dark:text-white mb-2">{title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="w-full px-6 text-center">
                    <div className="relative card p-12 overflow-hidden">
                        <div className="absolute inset-0 bg-glow-green" />
                        <div className="relative">
                            <h2 className="text-4xl font-black mb-4">
                                Ready to scale your <span className="text-gradient">digital presence?</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-8">
                                Join thousands of Indian businesses using GrowMate to turn their content into a conversion engine.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link to="/dashboard" className="btn-primary px-8 py-3">
                                    Get Started for Free
                                </Link>
                                <button className="btn-secondary px-8 py-3">
                                    Talk to Sales
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 mt-4">No credit card required. Free to start.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-gray-200 dark:border-dark-600 py-12">
                <div className="w-full px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
                        <div className="col-span-2 md:col-span-1">
                            <Logo className="mb-3" />
                            <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
                                AI marketing tools designed for the India-first creator economy.
                            </p>
                            <div className="flex gap-3 mt-4">
                                {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
                                    <a key={s} href="#" className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-dark-600 hover:bg-gray-300 dark:hover:bg-dark-500 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-dark-900 dark:hover:text-white transition-colors text-xs">
                                        {s[0]}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: 'Product', links: ['Features', 'Bharat Voice', 'Pricing', 'Roadmap'] },
                            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
                            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
                        ].map(({ title, links }) => (
                            <div key={title}>
                                <p className="text-sm font-semibold text-dark-900 dark:text-white mb-3">{title}</p>
                                <ul className="space-y-2">
                                    {links.map(l => (
                                        <li key={l}><a href="#" className="text-xs text-gray-500 hover:text-brand-green transition-colors">{l}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-dark-600 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                        <p>© 2024 GrowMate. Built for Bharat.</p>
                        <div className="flex items-center gap-4">
                            <span>🇮🇳 English</span>
                            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> All Systems Operational</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
