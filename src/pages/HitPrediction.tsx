import { Share2, Download, Crown, Clock, Lightbulb, Hash, Eye, TrendingUp, BarChart3, CheckCircle2, ChevronRight, Zap } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import CircularRing from '../components/CircularRing'

const strengths = [
    { icon: <CheckCircle2 size={16} />, title: 'Strong Hook', desc: 'The first 3 seconds are highly captivating for your target audience.' },
    { icon: <Hash size={16} />, title: 'Optimized Hashtags', desc: 'Niche tags selected are currently trending in Mumbai & Delhi.' },
    { icon: <Eye size={16} />, title: 'Visual Clarity', desc: 'High contrast and brand-consistent colors detected.' },
    { icon: <TrendingUp size={16} />, title: 'Viral Topic', desc: 'Topic alignment with current small-biz trends in India.' },
]

const tips = [
    { color: 'bg-amber-400', icon: '💬', title: 'Add a clear CTA in the caption', sub: 'Try: "Comment \'GROW\' to get our free guide!"' },
    { color: 'bg-blue-400', icon: '🎵', title: 'Use Trending Audio', sub: "Switch to 'Udd Jaa Parindey (Remix)' for 2x reach." },
    { color: 'bg-brand-green', icon: '📝', title: 'Bold Captions', sub: 'Ensure captions are visible on dark background themes.' },
]

export default function HitPrediction() {
    return (
        <div className="flex min-h-screen bg-[#0d1117]">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Post Lab - Hit Prediction" />
                <main className="flex-1 p-8">
                    <div className="w-full px-2 sm:px-0 space-y-6">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                            <span className="hover:text-dark-900 dark:hover:text-white transition-colors cursor-pointer">Post Lab</span>
                            <ChevronRight size={14} />
                            <span className="text-dark-900 dark:text-white">Prediction Analysis</span>
                        </div>

                {/* Title */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-black text-white mb-1">Post Hit Prediction</h1>
                        <p className="text-gray-400 text-sm">AI-powered analysis for your upcoming Instagram Reel</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="btn-secondary flex items-center gap-2 text-sm py-2">
                            <Share2 size={14} /> Share
                        </button>
                        <button className="btn-secondary flex items-center gap-2 text-sm py-2">
                            <Download size={14} /> Export Report
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-6 mb-6">
                    {/* Hit Score card */}
                    <div className="card flex flex-col items-center gap-4 p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-glow-green opacity-50" />
                        <div className="relative w-full flex items-center justify-between mb-1">
                            <p className="font-bold text-white">Hit Score</p>
                            <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green">
                                <BarChart3 size={16} />
                            </div>
                        </div>
                        <div className="relative">
                            <CircularRing score={78} size={160} label="/ 100" sublabel="High Potential" />
                            {/* Sparkle icon */}
                            <span className="absolute -top-1 -right-1 text-brand-green text-lg animate-pulse-slow">✦</span>
                        </div>
                        <p className="text-xs text-gray-400 text-center relative">
                            Your post is trending 12% higher than your average engagement rates for this time slot.
                        </p>
                        <div className="grid grid-cols-2 gap-3 w-full relative">
                            <div className="bg-dark-800 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-gray-500 uppercase mb-1">Recommended Format</p>
                                <p className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                                    <Crown size={13} className="text-amber-400" /> Instagram Reel
                                </p>
                            </div>
                            <div className="bg-dark-800 rounded-xl p-3 text-center">
                                <p className="text-[10px] text-gray-500 uppercase mb-1">Best Time to Post</p>
                                <p className="text-sm font-bold text-white flex items-center justify-center gap-1.5">
                                    <Clock size={13} className="text-brand-green" /> 7:30 PM Today
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content Strengths */}
                    <div className="card">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="text-xl">👍</span>
                            <h2 className="font-bold text-white text-lg">Content Strengths</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {strengths.map(({ icon, title, desc }) => (
                                <div key={title} className="bg-white dark:bg-dark-800 rounded-xl p-4 flex gap-3 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                                        {icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white text-sm mb-0.5">{title}</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* AI Improvement Tips */}
                    <div className="card">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                                <Lightbulb size={18} className="text-brand-green" />
                                <h2 className="font-bold text-white">AI Improvement Tips</h2>
                            </div>
                            <span className="badge-green text-[10px]">AI Generated</span>
                        </div>
                        <div className="space-y-4">
                            {tips.map(({ color, icon, title, sub }) => (
                                <div key={title} className="flex gap-3">
                                    <div className={`w-1 rounded-full flex-shrink-0 ${color}`} />
                                    <div className="flex items-start gap-3 flex-1">
                                        <div className="w-8 h-8 rounded-lg bg-gray-300 dark:bg-dark-600 flex items-center justify-center text-sm flex-shrink-0">
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white text-sm">{title}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Viral Potential */}
                    <div className="card flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <Zap size={18} className="text-brand-green fill-current" />
                                    <h2 className="font-bold text-white">Viral Potential Probability</h2>
                                </div>
                                <span className="text-2xl font-black text-brand-green">78%</span>
                            </div>
                            <div className="relative w-full h-3 bg-gray-300 dark:bg-dark-600 rounded-full overflow-hidden mb-4">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-brand-green-dark to-brand-green shadow-green"
                                    style={{ width: '78%', transition: 'width 1s ease-in-out' }}
                                />
                            </div>
                            <p className="text-xs text-gray-500 italic">Confidence level based on last 30 days of market trends.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="card border-brand-green/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/50 dark:bg-dark-700/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-glow-green opacity-30" />
                    <div className="relative">
                        <h3 className="text-xl font-black text-white mb-1">Ready to publish?</h3>
                        <p className="text-sm text-gray-400">Post now to capture the peak evening audience in India.</p>
                    </div>
                    <div className="flex gap-3 relative">
                        <button className="btn-secondary text-sm px-6 py-2.5">Schedule Post</button>
                        <button className="btn-primary text-sm px-6 py-2.5">Post Now</button>
                    </div>
                </div>

                        {/* Footer */}
                        <div className="text-center text-xs text-gray-600 dark:text-gray-400 mt-10">
                            © 2024 GrowMate · Empowering Bharat's Creators. Made with ❤️ in Bangalore.
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
