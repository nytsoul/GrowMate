import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import StatCard from '../components/StatCard'
import { Users, Heart, Eye, Share2, Plus, Lightbulb, ChevronRight, ChevronLeft, Calendar, ExternalLink, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
    { label: 'Total Followers', value: '48.2K', change: 12.4, icon: <Users size={16} /> },
    { label: 'Engagement Rate', value: '5.4%', change: 8.1, icon: <Heart size={16} /> },
    { label: 'Profile Visits', value: '12.1K', change: -2.3, icon: <Eye size={16} /> },
    { label: 'Total Shares', value: '3.2K', change: 24.0, icon: <Share2 size={16} /> },
]

const leaderboard = [
    { rank: 1, title: '5 AI Tools for S...', platform: 'Instagram', ago: '2d ago', score: 98, color: 'bg-amber-400' },
    { rank: 2, title: 'Market Trends Q...', platform: 'LinkedIn', ago: '5d ago', score: 84, color: 'bg-teal-500' },
    { rank: 3, title: 'My Creator Jour...', platform: 'Twitter', ago: '1w ago', score: 72, color: 'bg-violet-500' },
]

const upcoming = [
    { date: 'TOMORROW • 10:00 AM', title: 'Product Showcase', platform: 'LinkedIn', status: 'Scheduled', statusColor: 'text-brand-green' },
    { date: 'NOV 14 • 06:00 PM', title: 'Weekly Tip Reel', platform: 'Instagram', status: 'Draft Ready', statusColor: 'text-amber-400' },
    { date: 'NOV 15 • 11:30 AM', title: 'FAQ Carousel', platform: 'LinkedIn', status: 'Idea Only', statusColor: 'text-gray-500' },
]

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-white dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-52 flex flex-col">
                <DashboardHeader />

                <main className="flex-1 p-8 space-y-8 overflow-y-auto">
                    {/* Stats */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="section-title">Recent Performance</h2>
                            <Link to="/prediction" className="text-sm text-brand-green hover:underline flex items-center gap-1 font-medium">
                                View Detailed Report <ChevronRight size={14} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {stats.map(s => <StatCard key={s.label} {...s} />)}
                        </div>
                    </section>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Quick Actions + Strategy */}
                        <div className="lg:col-span-2 space-y-5">
                            {/* Quick Actions */}
                            <div>
                                <h2 className="section-title mb-4">Quick Actions</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link to="/creator" className="card border-brand-green/40 bg-white dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-all duration-200 flex items-start gap-4 p-5 group">
                                        <div className="w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/30 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:bg-brand-green group-hover:text-dark-900 transition-all">
                                            <Plus size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark-900 dark:text-white mb-0.5">Create New Post</p>
                                            <p className="text-xs text-gray-500">Draft AI content for Instagram & LinkedIn</p>
                                        </div>
                                    </Link>
                                    <Link to="/creator" className="card hover:border-gray-300 hover:bg-gray-100 dark:hover:border-dark-400 dark:hover:bg-dark-600 transition-all duration-200 flex items-start gap-4 p-5 group">
                                        <div className="w-10 h-10 rounded-xl bg-dark-600 flex items-center justify-center text-brand-green flex-shrink-0 group-hover:bg-brand-green/10 transition-all">
                                            <Lightbulb size={18} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-dark-900 dark:text-white mb-0.5">Ideate Content</p>
                                            <p className="text-xs text-gray-500">Get 5 viral hook ideas based on trending topics</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* Current Strategy */}
                            <div className="card">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="badge-green">Current Strategy</span>
                                    <span className="text-xs text-gray-500">• Updated 2 days ago</span>
                                </div>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-black text-dark-900 dark:text-white mb-4">Scaling "Eco-Friendly Fashion"</h3>
                                        <ul className="space-y-2.5 mb-5">
                                            {[
                                                'Targeting small business owners in Mumbai & Delhi aged 22-35.',
                                                'Focusing on "Behind the Scenes" reels to build trust.',
                                                'Peak posting time: 7:30 PM IST (Tuesdays & Thursdays).',
                                            ].map(item => (
                                                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                                                    <span className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                                            <path d="M2 6l3 3 5-5" stroke="#0a0f0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex gap-3">
                                            <button className="btn-secondary text-sm px-5 py-2">Download PDF</button>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center text-dark-500">
                                        <Sparkles size={64} className="text-brand-green/20" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hit Score Leaderboard */}
                        <div className="card">
                            <div className="flex items-center justify-between mb-5">
                                <h2 className="section-title text-base">Hit Score Leaderboard</h2>
                                <button className="w-6 h-6 rounded-full border border-gray-300 dark:border-dark-400 text-gray-600 dark:text-gray-400 text-xs flex items-center justify-center hover:border-brand-green hover:text-brand-green transition-colors">i</button>
                            </div>
                            <div className="space-y-3">
                                {leaderboard.map(({ rank, title, platform, ago, score, color }) => (
                                    <div key={rank} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors group">
                                        <div className={`w-7 h-7 rounded-full ${color} flex items-center justify-center text-dark-900 text-xs font-black flex-shrink-0`}>
                                            {rank}
                                        </div>
                                        <div className="w-12 h-12 rounded-lg bg-gray-300 dark:bg-dark-600 flex-shrink-0 overflow-hidden">
                                            <div className={`w-full h-full ${color} opacity-30`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-dark-900 dark:text-white truncate">{title}</p>
                                            <p className="text-xs text-gray-500">{platform} • {ago}</p>
                                        </div>
                                        <span className="text-brand-green font-black text-lg">{score}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full text-center text-xs text-gray-500 hover:text-brand-green mt-4 transition-colors py-2">
                                Analyze more posts
                            </button>
                        </div>
                    </div>

                    {/* Upcoming Content */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="section-title">Upcoming Content</h2>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 hover:border-brand-green text-gray-600 dark:text-gray-400 hover:text-brand-green flex items-center justify-center transition-colors">
                                    <ChevronLeft size={14} />
                                </button>
                                <button className="w-8 h-8 rounded-lg bg-white dark:bg-dark-700 border border-gray-300 dark:border-dark-500 hover:border-brand-green text-gray-600 dark:text-gray-400 hover:text-brand-green flex items-center justify-center transition-colors">
                                    <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {upcoming.map(({ date, title, platform, status, statusColor }) => (
                                <div key={title} className="card-hover p-4">
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">{date}</p>
                                    <p className="font-bold text-dark-900 dark:text-white mb-1 text-sm">{title}</p>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-4 h-4 rounded bg-brand-green/20 flex items-center justify-center text-brand-green text-[9px] font-bold">
                                            {platform[0]}
                                        </div>
                                        <span className={`text-xs font-medium ${statusColor}`}>{status}</span>
                                    </div>
                                </div>
                            ))}
                            {/* Schedule New */}
                            <div className="card flex items-center justify-center gap-2 cursor-pointer hover:border-brand-green/40 transition-colors group p-4">
                                <Plus size={16} className="text-gray-500 group-hover:text-brand-green transition-colors" />
                                <span className="text-sm text-gray-500 group-hover:text-brand-green transition-colors font-medium">Schedule New</span>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
