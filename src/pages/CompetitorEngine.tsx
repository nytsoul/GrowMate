import { useState } from 'react'
import { Plus, Link2, Briefcase, TrendingUp, TrendingDown, Lightbulb, Target, Zap, Eye } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

const gaps = [
    { num: '01', title: 'Unsolved Regional Language Needs', desc: "Competitor only uses Hindi/English. There's a 40% higher engagement potential if you provide technical guides in Marathi or Bengali for this niche." },
    { num: '02', title: 'Post-9PM Content Void', desc: 'Tech Guru India never posts after 6 PM. Data shows your target audience is most active at 10:15 PM IST. Schedule your key reels then.' },
    { num: '03', title: 'Lack of Behind-the-Scenes', desc: "The competitor's feed is overly polished. Indian audiences are currently rewarding 'authentic/raw' setup tours. This is your leverage point." },
    { num: '04', title: 'Interactive Community Q&A', desc: 'Comment sentiment analysis shows followers are asking about "Tier-3 city logistics" which the competitor ignores. Target this specific pain point.' },
]

const matrix = [
    { metric: 'Avg. View Time', you: '42s', comp: '38s', verdict: 'You\'re Winning', win: true },
    { metric: 'Follower Growth', you: '+1.2%', comp: '+2.8%', verdict: 'Needs Attention', win: false },
    { metric: 'Comment Sentiment', you: 'Positive (92%)', comp: 'Neutral (64%)', verdict: 'You\'re Winning', win: true },
]

export default function CompetitorEngine() {
    const [analyzed, setAnalyzed] = useState(false)

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Competitor Engine" />
                <main className="flex-1 p-5">
                    <div className="w-full px-2 sm:px-0 space-y-8">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-1">Advanced Competitor Intelligence</h1>
                                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg">Analyze competitor strategies across Instagram and YouTube. Get AI-powered insights and discover untapped opportunities in the Indian market.</p>
                            </div>
                            <button className="btn-secondary flex items-center gap-2 text-sm">
                                <Plus size={14} /> Add Competitor
                            </button>
                        </div>

                        {/* Enhanced Insights Panel */}
                        {analyzed && (
                            <div className="card bg-gradient-to-r from-brand-green/10 to-brand-green/5 border-brand-green/30">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-green/20 flex items-center justify-center">
                                            <Eye size={20} className="text-brand-green" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-dark-900 dark:text-white">Live Market Insights</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Real-time competitor analysis & trending opportunities</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-brand-green/20 px-3 py-1.5 rounded-full">
                                        <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                                        <span className="text-xs font-medium text-brand-green">LIVE</span>
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white dark:bg-dark-800 p-4 rounded-lg border border-gray-200 dark:border-dark-600">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target size={16} className="text-orange-500" />
                                            <h4 className="font-medium text-dark-900 dark:text-white">Engagement Rate</h4>
                                        </div>
                                        <p className="text-2xl font-bold text-orange-500">4.8%</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">vs your 3.2% avg</p>
                                    </div>
                                    
                                    <div className="bg-white dark:bg-dark-800 p-4 rounded-lg border border-gray-200 dark:border-dark-600">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap size={16} className="text-purple-500" />
                                            <h4 className="font-medium text-dark-900 dark:text-white">Viral Potential</h4>
                                        </div>
                                        <p className="text-2xl font-bold text-purple-500">8.3/10</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Based on 30-day trends</p>
                                    </div>
                                    
                                    <div className="bg-white dark:bg-dark-800 p-4 rounded-lg border border-gray-200 dark:border-dark-600">
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp size={16} className="text-green-500" />
                                            <h4 className="font-medium text-dark-900 dark:text-white">Growth Rate</h4>
                                        </div>
                                        <p className="text-2xl font-bold text-green-500">+2.8%</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">followers/month</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Input form */}
                        <div className="card p-5 grid sm:grid-cols-[1fr_1fr_auto] gap-4 items-end">
                            <div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Competitor Profile Link</p>
                                <div className="relative">
                                    <input className="input-field pl-9" placeholder="e.g. instagram.com/tech_guru_india" />
                                    <Link2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Industry/Niche</p>
                                <div className="relative">
                                    <input className="input-field pl-9" placeholder="e.g. EdTech / Finance" />
                                    <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                                </div>
                            </div>
                            <button onClick={() => setAnalyzed(true)}
                                className="btn-primary text-sm py-3 px-6 whitespace-nowrap tracking-wider">
                                ANALYZE NOW
                            </button>
                        </div>

                {/* Results */}
                {analyzed && (
                    <>
                        {/* Benchmarking overview */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-dark-900 dark:text-white">
                                    Benchmarking Overview: <span className="text-brand-green">@tech_guru_india</span>
                                </h2>
                                <span className="badge-green flex items-center gap-1.5 text-[10px]">
                                    <span className="glow-dot" /> Live Data
                                </span>
                            </div>

                            <div className="grid sm:grid-cols-3 gap-4">
                                {/* Content Style */}
                                <div className="card">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg">🎨</span>
                                        <p className="font-semibold text-dark-900 dark:text-white text-sm">Content Style</p>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-3 leading-relaxed">High-energy, Hinglish commentary, focuses on budget smartphones with fast-cut editing.</p>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-[10px] text-gray-500">Visual Appeal</span>
                                            <span className="text-[10px] text-brand-green font-bold">85%</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-300 dark:bg-dark-600 rounded-full">
                                            <div className="h-full bg-brand-green rounded-full" style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Posting Frequency */}
                                <div className="card">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg">📅</span>
                                        <p className="font-semibold text-dark-900 dark:text-white text-sm">Posting Frequency</p>
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className="text-3xl font-black text-dark-900 dark:text-white">4.2</span>
                                        <span className="text-xs text-gray-500">posts/week</span>
                                    </div>
                                    <div className="flex items-end gap-1 h-10">
                                        {[4, 3, 3, 2, 4, 3, 5].map((h, i) => (
                                            <div key={i} className="flex-1 rounded-sm bg-brand-green/60 hover:bg-brand-green transition-colors" style={{ height: `${h * 16}%` }} />
                                        ))}
                                    </div>
                                </div>

                                {/* Engagement Trend */}
                                <div className="card">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-lg">📈</span>
                                        <p className="font-semibold text-dark-900 dark:text-white text-sm">Engagement Trend</p>
                                    </div>
                                    <div className="flex items-end gap-1 h-14 mb-2">
                                        {[2, 2, 3, 2, 3, 4, 5].map((h, i) => (
                                            <div key={i} className={`flex-1 rounded-sm transition-colors ${i === 6 ? 'bg-brand-green' : 'bg-brand-green/30'}`} style={{ height: `${h * 18}%` }} />
                                        ))}
                                    </div>
                                    <p className="text-[11px] text-brand-green font-semibold">+12.4% vs last month</p>
                                </div>
                            </div>
                        </div>

                        {/* AI Gaps */}
                        <div className="card">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-2 h-2 rounded-full bg-brand-green" />
                                <h2 className="font-bold text-dark-900 dark:text-white text-sm uppercase tracking-widest">AI-Suggested Opportunities (Gaps)</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {gaps.map(({ num, title, desc }) => (
                                    <div key={num} className="bg-white dark:bg-dark-800 rounded-xl p-4 flex gap-4 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors group">
                                        <div className="w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green text-xs font-black flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                                            {num}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-dark-900 dark:text-white text-sm mb-1">{title}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Comparison Matrix */}
                        <div className="card overflow-hidden">
                            <h2 className="font-bold text-dark-900 dark:text-white mb-4">Direct Comparison Matrix</h2>
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-dark-500">
                                        {['Metric', 'You (GrowMate User)', 'Competitor', 'The Verdict'].map(h => (
                                            <th key={h} className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold text-left px-4 py-3">{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {matrix.map(({ metric, you, comp, verdict, win }) => (
                                        <tr key={metric} className="border-b border-gray-200/50 dark:border-dark-600/50 hover:bg-gray-100 dark:hover:bg-dark-700/50 transition-colors">
                                            <td className="px-4 py-4 text-sm text-gray-300">{metric}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-dark-900 dark:text-white">{you}</td>
                                            <td className="px-4 py-4 text-sm text-gray-400">{comp}</td>
                                            <td className="px-4 py-4">
                                                <span className={`flex items-center gap-1.5 text-sm font-semibold ${win ? 'text-brand-green' : 'text-amber-400'}`}>
                                                    {win ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
                                                    {verdict}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-xs text-gray-600 border-t border-dark-600 pt-6">
                            <span className="flex items-center gap-2"><span className="text-brand-green text-base">⚡</span> 2024 GrowMate. Tailored for Indian Creators.</span>
                            <div className="flex gap-5">
                                <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Contact Support</a>
                            </div>
                        </div>
                    </>
                )}

                        {!analyzed && (
                            <div className="text-center py-20 text-gray-600 dark:text-gray-400">
                                <Lightbulb size={48} className="mx-auto mb-4 opacity-20" />
                                <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Enter a competitor profile link to analyze</p>
                                <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">Get AI-powered gap analysis in seconds</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}
