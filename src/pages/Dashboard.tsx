import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { TrendingUp, TrendingDown, Copy, RefreshCw, Plus, ChevronDown, Clock, Calendar, Hash, BarChart3, Zap } from 'lucide-react'
import CircularRing from '../components/CircularRing'

const stats = [
    { label: 'TOTAL ENGAGEMENT', value: '42.8K', change: 12.5, up: true },
    { label: 'POST REACH', value: '125.2K', change: 0.2, up: false },
    { label: 'AI HIT ACCURACY', value: '94%', change: 2.1, up: true },
    { label: 'AVG. WATCH TIME', value: '18.5s', change: 0.4, up: false },
]

const recentPosts = [
    { title: 'Aloe Vera Launch', platform: 'Instagram', score: 92, engagement: '12.4K', status: 'Published' },
    { title: 'Summer Routine', platform: 'Facebook', score: 78, engagement: '4.2K', status: 'Scheduled' },
    { title: 'Product Reveal', platform: 'YouTube', score: 85, engagement: '25.9K', status: 'Published' },
    { title: 'Giveaway Alert', platform: 'Instagram', score: 64, engagement: '1.2K', status: 'Draft' },
    { title: 'Customer Review', platform: 'Facebook', score: 81, engagement: '6.8K', status: 'Published' },
]

const hashtags = ['#SkinCareIndia', '#OrganicBeauty', '#CleanBeautyIndia', '#AloeVera', '#HealthySkin', '#GlowUp', '#CreatorEconomy']

const optimizationTips = [
    'Add a direct question at the start of the caption to boost comment rate by ~15%.',
    'The first 3 seconds of your Reel are missing a clear "hook" text overlay.',
    'Hashtags are well-balanced. No changes needed for the current niche.',
]

function StatCard({ label, value, change, up }: { label: string; value: string; change: number; up: boolean }) {
    return (
        <div className="bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 rounded-xl p-4 flex items-center justify-between">
            <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mb-1">{label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${up ? 'text-green-500' : 'text-red-400'}`}>
                    {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {up ? '+' : '-'}{change}%
                </div>
            </div>
            <div className="w-16 h-10 flex items-end justify-end opacity-70">
                <svg viewBox="0 0 64 40" className="w-full h-full">
                    <polyline
                        points={up ? "0,35 10,28 20,30 30,20 40,22 50,12 64,8" : "0,10 10,15 20,12 30,20 40,18 50,25 64,30"}
                        fill="none"
                        stroke={up ? "#22c55e" : "#f87171"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    )
}

export default function Dashboard() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader />

                <main className="flex-1 p-5 space-y-5 overflow-y-auto">
                    {/* Page title + project selector */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Creator Dashboard</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Welcome back! Your AI-generated content is ready for review.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <select className="appearance-none bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:border-brand-green cursor-pointer">
                                    <option>Organic Skincare Launch</option>
                                    <option>Summer Campaign</option>
                                </select>
                                <ChevronDown size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                            </div>
                            <Link to="/creator">
                                <button className="bg-brand-green text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-green-400 transition-colors flex items-center gap-1.5">
                                    <Plus size={14} /> Generate New
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map(s => <StatCard key={s.label} {...s} />)}
                    </div>

                    {/* Caption + Hit Score */}
                    <div className="grid lg:grid-cols-3 gap-5">
                        {/* AI Caption */}
                        <div className="lg:col-span-2 card">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Zap size={15} className="text-brand-green" />
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">AI Generated Caption (Bilingual)</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-500 rounded-md px-2.5 py-1 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                                    >
                                        <Copy size={11} /> {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                    <button className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-500 rounded-md px-2.5 py-1 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                                        <RefreshCw size={11} /> Regenerate
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                <p>🌿 Transforming my skincare routine with the magic of pure Aloe! 🌱</p>
                                <p className="text-gray-400 dark:text-gray-500">Ab payein glowing skin bina kisi chemicals ke. Mera favorite organic secret ab aapke liye bhi available hai! 🌟</p>
                                <p>Check the link in bio for the launch discount! 🛍️</p>
                                <p className="text-brand-green text-xs">#SkinCareIndia #OrganicBeauty #GlowingSkin #AloeVeraMagic</p>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-dark-500">
                                <p className="text-xs text-gray-500">Optimized for: <span className="font-medium text-gray-700 dark:text-gray-300">Instagram &amp; Facebook</span></p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 rounded-full px-2.5 py-0.5 font-medium">Friendly Tone</span>
                                    <span className="text-[10px] bg-purple-500/10 text-purple-500 dark:text-purple-400 border border-purple-500/20 rounded-full px-2.5 py-0.5 font-medium">Sales Focused</span>
                                </div>
                            </div>
                        </div>

                        {/* Hit Score Panel */}
                        <div className="card space-y-4">
                            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest text-center">Predicted Hit Score</p>
                            <div className="flex justify-center">
                                <CircularRing score={82} size={130} label="Hit Score" sublabel="Excellent" />
                            </div>
                            <p className="text-xs text-gray-500 text-center">Based on your previous 10 posts and current Sunday morning trends.</p>
                            <button className="w-full text-xs border border-gray-200 dark:border-dark-500 text-gray-500 dark:text-gray-400 rounded-lg py-2 hover:border-brand-green hover:text-brand-green transition-colors">
                                Improve Score Strategy
                            </button>

                            <div className="border-t border-gray-200 dark:border-dark-500 pt-3">
                                <div className="flex items-center gap-1.5 mb-2">
                                    <Clock size={12} className="text-brand-green" />
                                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Posting Opportunity</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 text-xs">
                                        <Calendar size={11} className="text-gray-500" />
                                        <span className="text-gray-500 dark:text-gray-400">Today, 7:30 PM IST</span>
                                    </div>
                                    <span className="text-[10px] bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 rounded-full px-2 py-0.5 font-medium">Peak Reach</span>
                                </div>

                                <p className="text-xs text-gray-500 mt-3 mb-2">Platform Recommendation</p>
                                <div className="flex gap-2">
                                    <button className="flex-1 text-xs border border-brand-green/40 text-brand-green rounded-lg py-1.5 font-medium bg-brand-green/5 hover:bg-brand-green/10 transition-colors">Instagram</button>
                                    <button className="flex-1 text-xs border border-gray-200 dark:border-dark-500 text-gray-500 dark:text-gray-400 rounded-lg py-1.5 font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Facebook</button>
                                </div>

                                <Link to="/calendar">
                                    <button className="w-full mt-3 bg-blue-600 text-white text-xs font-semibold rounded-lg py-2 hover:bg-blue-500 transition-colors">
                                        Add to Planner
                                    </button>
                                </Link>
                            </div>

                            <div className="border-t border-gray-200 dark:border-dark-500 pt-3">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-1.5">
                                        <Hash size={12} className="text-brand-green" />
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Smart Hashtags</span>
                                    </div>
                                    <button className="text-[10px] text-gray-500 hover:text-brand-green transition-colors">Copy all</button>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {hashtags.map(h => (
                                        <span key={h} className="text-[11px] bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 rounded-full px-2.5 py-0.5">{h}</span>
                                    ))}
                                </div>
                                <button className="w-full mt-3 text-xs border border-gray-200 dark:border-dark-500 text-gray-500 dark:text-gray-400 rounded-lg py-1.5 hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
                                    Get More Variations
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* AI Optimization Tips */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm">💡</span>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">AI Optimization Tips</h3>
                        </div>
                        <div className="space-y-2">
                            {optimizationTips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                                        {['⚡', '🎯', '✅'][i]}
                                    </span>
                                    {tip}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Post Performance */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <BarChart3 size={15} className="text-gray-400" />
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Recent Post Performance</h3>
                            </div>
                            <Link to="/analytics" className="text-xs text-brand-green font-medium hover:underline">View All Activity</Link>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-dark-500">
                                        {['Post Content', 'Platform', 'Hit Score', 'Engagement', 'Status', 'Actions'].map(h => (
                                            <th key={h} className="text-left text-xs text-gray-500 font-medium pb-2 pr-4">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-dark-600">
                                    {recentPosts.map(({ title, platform, score, engagement, status }) => (
                                        <tr key={title} className="hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors">
                                            <td className="py-3 pr-4">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-7 h-7 rounded-md bg-gray-100 dark:bg-dark-600 flex items-center justify-center text-xs">📄</div>
                                                    <span className="font-medium text-gray-700 dark:text-gray-200">{title}</span>
                                                </div>
                                            </td>
                                            <td className="py-3 pr-4 text-gray-500 dark:text-gray-400">{platform}</td>
                                            <td className="py-3 pr-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-20 h-1.5 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                                                        <div
                                                            className="h-full rounded-full bg-brand-green"
                                                            style={{ width: `${score}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-green-500 font-semibold">{score}%</span>
                                                </div>
                                            </td>
                                            <td className="py-3 pr-4 text-gray-700 dark:text-gray-300 font-medium">{engagement}</td>
                                            <td className="py-3 pr-4">
                                                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                                                    status === 'Published' ? 'bg-green-500/10 text-green-500 dark:text-green-400' :
                                                    status === 'Scheduled' ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400' :
                                                    'bg-gray-200/50 dark:bg-gray-700/50 text-gray-500'
                                                }`}>
                                                    {status === 'Draft' ? '⚪ Draft' : status}
                                                </span>
                                            </td>
                                            <td className="py-3">
                                                <button className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">•••</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="px-5 py-3 border-t border-gray-200 dark:border-dark-500 bg-white dark:bg-dark-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-600">
                        <p>© 2024 GrowMate. Built for Bharat's Creators.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Terms of Service</a>
                            <a href="#" className="hover:text-gray-600 dark:hover:text-gray-400">Help Center</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
