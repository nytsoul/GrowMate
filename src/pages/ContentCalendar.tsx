import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { Plus, ChevronLeft, ChevronRight, Calendar, Clock, Edit3, Trash2, Share2, Instagram, Lightbulb } from 'lucide-react'

const scheduledPosts = [
    { day: 14, time: '10:00', title: '5 Tips for Str...', score: 92, color: 'bg-indigo-600' },
    { day: 14, time: '02:00', title: 'Quick Marke...', score: 85, color: 'bg-brand-green' },
    { day: 15, time: '', title: 'BEST SLOT', score: 0, color: 'bg-blue-500' },
    { day: 16, time: '06:30', title: 'New Product...', score: 88, color: 'bg-indigo-600' },
    { day: 18, time: '09:00', title: 'Weekly Roun...', score: 65, color: 'bg-amber-500' },
]

const daysInMonth = 30
const startDay = 5 // Nov 2024 starts on Friday (0=Sun)

export default function ContentCalendar() {
    const [, setSelectedPost] = useState<typeof scheduledPosts[0] | null>(scheduledPosts[0])
    const [view, setView] = useState<'Month' | 'Week' | 'Day'>('Month')

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const blanks = Array.from({ length: startDay }, (_, i) => i)
    const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const getPostsForDay = (day: number) => scheduledPosts.filter(p => p.day === day)

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Planner" />

                <main className="flex-1 p-5 sm:p-8 overflow-y-auto">
                    <div className="w-full px-2 sm:px-0 space-y-5">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Content Planner</h1>
                            <div className="flex items-center gap-3">
                                {/* View toggle */}
                                <div className="flex bg-gray-100 dark:bg-dark-700 rounded-lg p-0.5">
                                    {(['Month', 'Week', 'Day'] as const).map(v => (
                                        <button
                                            key={v}
                                            onClick={() => setView(v)}
                                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                                                view === v
                                                    ? 'bg-white dark:bg-dark-500 text-gray-900 dark:text-white shadow-sm'
                                                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                            }`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>

                                {/* Month navigation */}
                                <div className="flex items-center gap-2">
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-500 transition-colors">
                                        <ChevronLeft size={16} />
                                    </button>
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white min-w-[130px] text-center">November 2024</span>
                                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-500 transition-colors">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>

                                <Link to="/creator">
                                    <button className="btn-primary text-sm flex items-center gap-1.5">
                                        <Plus size={14} /> Create Post
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* AI Suggestion Banner */}
                        <div className="card border-brand-green/20 bg-brand-green/5 dark:bg-brand-green/10 flex items-center gap-3 p-4">
                            <Lightbulb size={16} className="text-brand-green flex-shrink-0" />
                            <div className="flex-1">
                                <span className="text-xs text-brand-green font-semibold">AI Optimization Active</span>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Based on your niche, 14th Nov (Children's Day) is high-traffic. Consider adding a Bharat-centric festive post.</p>
                            </div>
                            <button className="text-xs text-brand-green font-semibold hover:underline whitespace-nowrap">See Suggestions</button>
                        </div>

                        <div className="grid lg:grid-cols-[1fr_320px] gap-5">
                            {/* Calendar Grid */}
                            <div className="card p-0 overflow-hidden">
                                {/* Week day headers */}
                                <div className="grid grid-cols-7 border-b border-gray-200 dark:border-dark-500">
                                    {weekDays.map(d => (
                                        <div key={d} className="text-center text-[10px] font-semibold text-gray-500 uppercase tracking-wider py-2.5">
                                            {d}
                                        </div>
                                    ))}
                                </div>

                                {/* Calendar cells */}
                                <div className="grid grid-cols-7">
                                    {blanks.map(b => (
                                        <div key={`blank-${b}`} className="min-h-[90px] border-b border-r border-gray-100 dark:border-dark-600" />
                                    ))}
                                    {days.map(day => {
                                        const posts = getPostsForDay(day)
                                        const isToday = day === 14
                                        return (
                                            <div
                                                key={day}
                                                className={`min-h-[90px] p-1.5 border-b border-r border-gray-100 dark:border-dark-600 hover:bg-gray-50 dark:hover:bg-dark-600/50 transition-colors cursor-pointer`}
                                                onClick={() => posts.length > 0 && setSelectedPost(posts[0])}
                                            >
                                                <span className={`text-xs font-medium inline-flex items-center justify-center w-6 h-6 rounded-full ${
                                                    isToday ? 'bg-indigo-600 text-white' : 'text-gray-600 dark:text-gray-400'
                                                }`}>
                                                    {day}
                                                </span>
                                                <div className="mt-1 space-y-1">
                                                    {posts.map((post, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={e => { e.stopPropagation(); setSelectedPost(post) }}
                                                            className={`w-full text-left text-[10px] ${post.color} text-white rounded px-1.5 py-0.5 truncate flex items-center gap-1`}
                                                        >
                                                            {post.time && <span>{post.time}</span>}
                                                            {post.score > 0 && <span className="font-bold">{post.score}%</span>}
                                                            <span className="truncate">{post.title}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Post Preview Sidebar */}
                            <div className="space-y-4">
                                <div className="card">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Post Preview</h3>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <Instagram size={12} /> Instagram
                                            <ChevronRight size={12} />
                                        </div>
                                    </div>

                                    {/* Preview image */}
                                    <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 aspect-[4/3] flex items-center justify-center mb-4 relative overflow-hidden">
                                        <span className="absolute top-2 right-2 text-[10px] bg-black/40 text-white rounded px-1.5 py-0.5 font-bold">IMAGE</span>
                                        <div className="text-center text-white p-4">
                                            <p className="text-lg font-bold">5 Tips for</p>
                                            <p className="text-lg font-bold">Small Business</p>
                                        </div>
                                    </div>

                                    {/* AI Hit Score */}
                                    <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-3 mb-4">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                                                <span className="text-brand-green">✦</span> AI HIT SCORE
                                            </span>
                                            <span className="text-sm font-bold text-brand-green">92%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                                            <div className="h-full bg-brand-green rounded-full" style={{ width: '92%' }} />
                                        </div>
                                        <p className="text-[10px] text-gray-500 mt-2">This post is predicted to go viral in your niche! The timing and hashtags are optimized for Bharat-Mode engagement.</p>
                                    </div>

                                    {/* Caption/Hashtags tabs */}
                                    <div className="flex gap-0 mb-3">
                                        <button className="flex-1 text-xs font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-dark-600 py-2 rounded-l-lg">Caption</button>
                                        <button className="flex-1 text-xs font-medium text-gray-500 bg-gray-50 dark:bg-dark-800 py-2 rounded-r-lg">Hashtags</button>
                                    </div>

                                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                        Doston, kya aap apne business ko scale karna chahte hain? 🚀 Here are 5 battle-tested strategies that every Indian entrepreneur needs to know. From local SEO to Bharat-centric marketing, we've got you covered! #StartupIndia #VocalForLocal
                                    </p>

                                    {/* Schedule details */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-1">Scheduled Date</p>
                                            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                                <Calendar size={11} className="text-red-400" /> November 14, 2024
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 mb-1">Best Time Slot</p>
                                            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                                <Clock size={11} className="text-brand-green" /> 10:00 AM
                                            </p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="flex items-center justify-center gap-1.5 border border-gray-200 dark:border-dark-500 text-gray-600 dark:text-gray-300 text-xs font-medium py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors">
                                            <Edit3 size={12} /> Edit
                                        </button>
                                        <button className="flex items-center justify-center gap-1.5 bg-brand-green text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-green-400 transition-colors">
                                            <Share2 size={12} /> Publish Now
                                        </button>
                                    </div>

                                    <button className="w-full mt-3 text-xs text-red-400 hover:text-red-300 flex items-center justify-center gap-1 py-2">
                                        <Trash2 size={12} /> Delete Schedule
                                    </button>
                                </div>
                            </div>
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
