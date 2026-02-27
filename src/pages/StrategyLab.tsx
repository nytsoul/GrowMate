import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin, Users, Zap, Download, Lightbulb, ChevronRight, Calendar, BarChart2, Briefcase, Settings, ExternalLink } from 'lucide-react'
import Logo from '../components/Logo'

const sideNav = [
    { label: 'Strategy Lab', icon: Lightbulb, to: '/strategy' },
    { label: 'Content Calendar', icon: Calendar, to: '#' },
    { label: 'Brand Assets', icon: Briefcase, to: '#' },
]

const orgNav = [
    { label: 'Ad Campaigns', icon: BarChart2, to: '#' },
    { label: 'Settings', icon: Settings, to: '#' },
]

const pillars = [
    { num: 1, color: 'border-brand-green/40 bg-brand-green/5', badge: 'text-brand-green', title: 'Educational Tips', desc: "Position yourself as an expert by sharing 'How-to' guides relevant to Indian markets." },
    { num: 2, color: 'border-amber-400/30 bg-amber-400/5', badge: 'text-amber-400', title: 'Cultural Moments', desc: 'Leverage upcoming local festivals and regional trends to build community connection.' },
    { num: 3, color: 'border-violet-400/30 bg-violet-400/5', badge: 'text-violet-400', title: 'Social Proof', desc: 'Showcase success stories from local clients to build trust and authenticity.' },
]

const weeks = [
    { week: '01', theme: "The 'Local Problem' Hook", idea: '"Why [City] entrepreneurs struggle with [Goal]"', platform: 'LinkedIn / Reels' },
    { week: '02', theme: 'Desi Solutions Showcase', idea: 'Behind-the-scenes of your creative process', platform: 'Instagram' },
    { week: '03', theme: 'Festival Countdown', idea: 'Limited time festive offer and giveaway', platform: 'WhatsApp / Stories' },
    { week: '04', theme: 'Community Roundup', idea: 'Q&A Session with live audience interaction', platform: 'YouTube Live' },
]

export default function StrategyLab() {
    const [generated, setGenerated] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleGenerate = () => {
        setLoading(true)
        setTimeout(() => { setLoading(false); setGenerated(true) }, 1800)
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-dark-900">
            {/* Left sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-52 bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-dark-600 flex flex-col z-40">
                <div className="px-4 py-5 border-b border-dark-600">
                    <Logo />
                </div>
                <nav className="flex-1 px-3 py-4">
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest px-3 mb-2">Planning</p>
                    <div className="space-y-1 mb-6">
                        {sideNav.map(({ label, icon: Icon, to }) => (
                            <NavLink key={label} to={to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? 'text-brand-green bg-brand-green/10 border border-brand-green/20' : 'text-gray-600 hover:text-dark-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-600'
                                    }`
                                }
                            >
                                <Icon size={16} /> {label}
                            </NavLink>
                        ))}
                    </div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest px-3 mb-2">Organization</p>
                    <div className="space-y-1">
                        {orgNav.map(({ label, icon: Icon, to }) => (
                            <NavLink key={label} to={to}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-dark-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-600 transition-all"
                            >
                                <Icon size={16} /> {label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            </aside>

            <div className="flex-1 ml-52">
                {/* Top nav */}
                <nav className="flex items-center justify-between px-8 py-3.5 border-b border-gray-200 dark:border-dark-600 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md sticky top-0 z-30">
                    <div className="flex items-center gap-8 text-sm font-medium text-gray-400">
                        {['Dashboard', 'Strategy Lab', 'Content Roadmap', 'Analytics'].map(item => (
                            <Link key={item} to={item === 'Dashboard' ? '/dashboard' : '#'}
                                className={`hover:text-dark-900 dark:hover:text-white transition-colors ${item === 'Strategy Lab' ? 'text-brand-green border-b border-brand-green pb-0.5' : ''}`} >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative flex items-center">
                            <input className="bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-500 text-sm text-dark-900 dark:text-gray-400 placeholder-gray-600 rounded-lg px-3 py-2 pl-8 outline-none focus:border-brand-green w-44 transition-colors" placeholder="Search strategies..." />
                            <span className="absolute left-2.5 text-gray-500">🔍</span>
                        </div>
                        <button className="btn-primary flex items-center gap-2 text-sm py-2 px-4">
                            <Zap size={14} className="fill-current" /> New Project
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                    </div>
                </nav>

                <main className="px-8 py-8 max-w-5xl">
                    <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-1">AI Marketing Strategy Generator</h1>
                    <p className="text-gray-400 text-sm mb-8">Define your vision. We'll build your localized Indian market roadmap.</p>

                    {/* Form Card */}
                    <div className="card mb-8 p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-7 h-7 rounded-full bg-brand-green flex items-center justify-center text-dark-900 text-sm font-black">1</div>
                            <h2 className="font-bold text-dark-900 dark:text-white text-lg">Campaign Foundations</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Monthly Goal</label>
                                <input className="input-field" placeholder="e.g., Increase sales by 20% during Diwali" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Target Location</label>
                                <div className="relative">
                                    <input className="input-field pl-9" placeholder="e.g., Mumbai, Maharashtra" />
                                    <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5 items-end">
                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Primary Audience</label>
                                <div className="relative">
                                    <select className="select-field pr-10">
                                        {['Young Professionals (22-35)', 'Small Business Owners', 'Gen-Z Students', 'Homemakers', 'Senior Professionals'].map(a => (
                                            <option key={a}>{a}</option>
                                        ))}
                                    </select>
                                    <Users size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className={`py-3 rounded-xl font-bold text-dark-900 flex items-center justify-center gap-2 transition-all duration-200 ${loading ? 'bg-brand-green/60 cursor-not-allowed' : 'bg-brand-green hover:bg-brand-green-light shadow-green active:scale-[0.98]'
                                    }`}
                            >
                                <Zap size={16} className="fill-current" />
                                {loading ? 'Generating...' : 'Generate Content Roadmap'}
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    {generated && (
                        <>
                            {/* Roadmap header */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-3">
                                    <span className="text-xl">🗺️</span>
                                    <h2 className="text-xl font-black text-dark-900 dark:text-white">Your Content Roadmap</h2>
                                </div>
                                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                    <Download size={14} /> Export PDF
                                </button>
                            </div>

                            {/* Pillars */}
                            <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                {pillars.map(({ num, color, badge, title, desc }) => (
                                    <div key={num} className={`rounded-xl border p-5 ${color}`}>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${badge} flex items-center gap-1`}>
                                                <span>🏔️</span> Pillar {num}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-dark-900 dark:text-white mb-1.5">{title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Weekly Table */}
                            <div className="card mb-6 overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-dark-500">
                                            {['Week', 'Weekly Theme', 'Campaign Idea', 'Primary Platform'].map(h => (
                                                <th key={h} className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold text-left px-5 py-3">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {weeks.map(({ week, theme, idea, platform }) => (
                                            <tr key={week} className="border-b border-gray-200/50 dark:border-dark-600/50 hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors">
                                                <td className="px-5 py-4 text-brand-green font-black">{week}</td>
                                                <td className="px-5 py-4 text-sm font-medium text-dark-900 dark:text-white">{theme}</td>
                                                <td className="px-5 py-4 text-sm text-gray-400 italic">"{idea}"</td>
                                                <td className="px-5 py-4">
                                                    <span className="badge bg-gray-200 dark:bg-dark-600 text-gray-600 dark:text-gray-300 text-[11px] px-2.5 py-1">{platform}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Insight Banner */}
                            <div className="card border-brand-green/20 bg-white/50 dark:bg-dark-700/50 flex gap-5 items-center relative overflow-hidden hover:border-brand-green/40 transition-colors cursor-pointer group">
                                <div className="absolute inset-0 bg-glow-green opacity-20" />
                                <div className="relative w-14 h-14 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-2xl flex-shrink-0">
                                    💡
                                </div>
                                <div className="relative flex-1">
                                    <p className="font-bold text-dark-900 dark:text-white mb-1">GrowMate Insight: Regional Peak</p>
                                    <p className="text-sm text-gray-400">Based on your location (Mumbai), user activity spikes on Sunday afternoons between 2 PM and 5 PM. Plan your 'Social Proof' content for these slots for 35% higher engagement.</p>
                                </div>
                                <ExternalLink size={18} className="text-gray-500 group-hover:text-brand-green transition-colors relative flex-shrink-0" />
                            </div>
                        </>
                    )}
                </main>
            </div>
        </div>
    )
}
