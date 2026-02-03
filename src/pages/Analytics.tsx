import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Zap, UserPlus, Wifi, Download, Calendar, Instagram, Linkedin, ChevronRight } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

const statCards = [
    { label: 'Total Engagement', value: '124.5K', change: '+14.2%', up: true, icon: <Heart size={16} className="text-brand-green" /> },
    { label: 'Avg. Hit Score', value: '88/100', change: '-2.1%', up: false, icon: <Zap size={16} className="text-brand-green fill-current" /> },
    { label: 'Follower Growth', value: '+12,400', change: '+5.4%', up: true, icon: <UserPlus size={16} className="text-brand-green" /> },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.8%', up: true, icon: <Wifi size={16} className="text-brand-green" /> },
]

const posts = [
    { title: 'How AI is changing the creator economy in...', platform: 'Instagram', score: 96, engagement: '12.4K', status: 'VIRAL', statusColor: 'text-brand-green bg-brand-green/10' },
    { title: 'Top 5 tips for scaling your small business...', platform: 'LinkedIn', score: 82, engagement: '8.2K', status: 'STEADY', statusColor: 'text-amber-400 bg-amber-400/10' },
    { title: 'Behind the scenes: Growing GrowMate AI with...', platform: 'Instagram', score: 75, engagement: '5.1K', status: 'STEADY', statusColor: 'text-amber-400 bg-amber-400/10' },
]

// SVG Engagement Chart
function EngagementChart() {
    const points = [20, 35, 30, 45, 80, 60, 85]
    const width = 420
    const height = 130
    const padX = 20
    const padY = 10

    const xs = points.map((_, i) => padX + (i / (points.length - 1)) * (width - padX * 2))
    const ys = points.map(v => height - padY - ((v / 100) * (height - padY * 2)))
    const pathD = xs.map((x, i) => `${i === 0 ? 'M' : 'C'} ${x},${ys[i]}`).join(' ')

    // Smooth curve using bezier
    const smooth = () => {
        let d = `M ${xs[0]},${ys[0]}`
        for (let i = 1; i < xs.length; i++) {
            const cpx1 = xs[i - 1] + (xs[i] - xs[i - 1]) / 2
            const cpx2 = xs[i] - (xs[i] - xs[i - 1]) / 2
            d += ` C ${cpx1},${ys[i - 1]} ${cpx2},${ys[i]} ${xs[i]},${ys[i]}`
        }
        return d
    }

    const fillD = `${smooth()} L ${xs[xs.length - 1]},${height} L ${xs[0]},${height} Z`

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-36">
            <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                </linearGradient>
            </defs>
            {/* Dashed guide lines */}
            {[0.25, 0.5, 0.75].map(t => (
                <line key={t} x1={padX} y1={padY + t * (height - padY * 2)} x2={width - padX} y2={padY + t * (height - padY * 2)}
                    stroke="#1c2b1e" strokeWidth="1" strokeDasharray="4 4" />
            ))}
            {/* Area fill */}
            <path d={fillD} fill="url(#chartGrad)" />
            {/* Line */}
            <path d={smooth()} fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Dots */}
            {xs.map((x, i) => (
                <circle key={i} cx={x} cy={ys[i]} r={i === xs.length - 1 ? 5 : 3}
                    fill={i === xs.length - 1 ? '#22c55e' : '#111a12'}
                    stroke="#22c55e" strokeWidth="2" />
            ))}
        </svg>
    )
}

export default function Analytics() {
    const [period, setPeriod] = useState('Last 30 Days')

    return (
        <div className="flex min-h-screen bg-white dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-52 flex flex-col">
                <DashboardHeader title="Analytics" />

                <main className="flex-1 p-8 space-y-7">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-1">Analytics & Performance</h1>
                            <p className="text-gray-400 text-sm">Real-time AI insights for your creative content across India's top platforms.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="btn-secondary flex items-center gap-2 text-sm py-2">
                                <Calendar size={14} /> Last 30 Days
                            </button>
                            <button className="btn-primary flex items-center gap-2 text-sm py-2 px-4">
                                <Download size={14} /> Export Report
                            </button>
                        </div>
                    </div>

                    {/* Stat cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {statCards.map(({ label, value, change, up, icon }) => (
                            <div key={label} className="card-hover p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-dark-600 flex items-center justify-center">
                                        {icon}
                                    </div>
                                    <p className={`text-xs font-bold flex items-center gap-1 ${up ? 'text-brand-green' : 'text-red-400'}`}>
                                        <span>{up ? '↑' : '↓'}</span> {change}
                                    </p>
                                </div>
                                <p className="text-2xl font-black text-dark-900 dark:text-white mb-0.5">{value}</p>
                                <p className="text-xs text-gray-500">{label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-[1fr_380px] gap-6">
                        {/* Engagement Trends Chart */}
                        <div className="card">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h2 className="font-bold text-dark-900 dark:text-white">Engagement Trends</h2>
                                    <p className="text-xs text-gray-500">Daily interaction metrics</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="glow-dot" />
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">Engagement</span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <EngagementChart />
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-600 uppercase tracking-wider pt-1 border-t border-dark-600/50">
                                {['Mon', 'Wed', 'Fri', 'Sun'].map(d => <span key={d}>{d}</span>)}
                            </div>
                        </div>

                        {/* Platform Comparison */}
                        <div className="card flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="font-bold text-dark-900 dark:text-white">Platform Comparison</h2>
                                    <p className="text-xs text-gray-500">Instagram vs LinkedIn performance</p>
                                </div>
                                <span className="badge-green text-[10px]">Monthly Reach</span>
                            </div>

                            <div className="flex-1 flex items-end justify-around gap-4 pb-6">
                                {[
                                    { platform: 'INSTAGRAM', reach: '84k', height: 80, icon: Instagram, color: 'from-pink-500 to-purple-600' },
                                    { platform: 'LINKEDIN', reach: '42k', height: 45, icon: Linkedin, color: 'from-blue-500 to-blue-700' },
                                ].map(({ platform, reach, height, icon: Icon, color }) => (
                                    <div key={platform} className="flex flex-col items-center gap-3 flex-1">
                                        <p className="text-lg font-black text-dark-900 dark:text-white">{reach}</p>
                                        <div
                                            className={`w-full rounded-t-xl bg-gradient-to-b ${color} opacity-80`}
                                            style={{ height: `${height}px` }}
                                        />
                                        <div className="flex flex-col items-center gap-1.5">
                                            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                                                <Icon size={14} className="text-dark-900 dark:text-white" />
                                            </div>
                                            <span className="text-[10px] text-gray-500 font-semibold tracking-widest">{platform}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Top Performing Posts */}
                    <div className="card overflow-hidden">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-bold text-dark-900 dark:text-white">Top Performing Posts</h2>
                            <button className="text-sm text-brand-green hover:underline flex items-center gap-1 font-medium">
                                View All Posts <ChevronRight size={13} />
                            </button>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-dark-500">
                                    {['Post Content', 'Platform', 'Hit Score', 'Engagement', 'Status'].map(h => (
                                        <th key={h} className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold text-left px-4 py-3">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ title, platform, score, engagement, status, statusColor }) => (
                                    <tr key={title} className="border-b border-gray-200/50 dark:border-dark-600/50 hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors group">
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-700 to-amber-500 flex-shrink-0" />
                                                <span className="text-sm text-gray-600 dark:text-gray-300 truncate max-w-[200px] group-hover:text-dark-900 dark:group-hover:text-white transition-colors">{title}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                {platform === 'Instagram'
                                                    ? <Instagram size={13} className="text-pink-400" />
                                                    : <Linkedin size={13} className="text-blue-400" />
                                                }
                                                {platform}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-20 h-1.5 bg-gray-300 dark:bg-dark-500 rounded-full overflow-hidden">
                                                    <div className="h-full bg-brand-green rounded-full" style={{ width: `${score}%` }} />
                                                </div>
                                                <span className="text-sm font-medium text-dark-900 dark:text-white">{score}/100</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm font-medium text-dark-900 dark:text-white">{engagement}</td>
                                        <td className="px-4 py-4">
                                            <span className={`badge text-[11px] px-2.5 py-1 rounded-full font-semibold ${statusColor}`}>{status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}
