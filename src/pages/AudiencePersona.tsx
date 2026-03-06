import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { Edit3, Plus, Users, ShoppingCart, AlertTriangle, TrendingUp, Sparkles } from 'lucide-react'

const segments = [
    {
        id: 'eco',
        name: 'Eco-conscious Gen Z',
        desc: 'Ages 18-25',
        location: 'Tier 1 Cities',
        tags: ['Sustainability', 'Tech'],
        badge: 'Top Performing Segment',
        tagline: '"Value-driven digital natives looking for authenticity."',
        demographics: { age: '18-25 Years Old', location: 'Tier 1 Metros (Bangalore, Delhi)', spend: '₹5,000 - ₹15,000', spendNote: 'Disposable income for lifestyle' },
        interests: ['Sustainable & Slow Fashion', 'Vegan/Plant-based Diets', 'Fintech & Crypto Investing', 'Mental Health Wellness'],
        buying: ['Prefers Instagram/Snapchat ads', "Checks brand's social impact", 'Heavy reliance on influencer reviews', 'Quick UPI-based checkout preferred'],
        pains: ['High Shipping Costs', 'Lack of Size Inclusivity', 'Greenwashing Labels', 'Slow Website UX'],
        hook: '"Target with educational short-form video content emphasizing transparent sourcing and \'Behind the Scenes\' footage of your sustainable practices."',
        avatar: 'from-purple-400 to-violet-600',
    },
    {
        id: 'smb',
        name: 'Mumbai SMB Owners',
        desc: 'Ages 30-45',
        location: 'Mumbai Metro',
        tags: ['Scaling', 'Logistics'],
        badge: null,
        tagline: '"Growth-hungry entrepreneurs seeking digital leverage."',
        demographics: { age: '30-45 Years Old', location: 'Mumbai Metropolitan', spend: '₹25,000 - ₹75,000', spendNote: 'Business growth budget' },
        interests: ['Digital Marketing Tools', 'B2B Networking', 'Logistics & Supply Chain', 'GST & Finance'],
        buying: ['Prefers LinkedIn/WhatsApp outreach', 'Values ROI-focused messaging', 'Prefers reviews and case studies', 'Wire transfer or corporate card'],
        pains: ['High employee turnover', 'Digital skill gap in team', 'Rising ad costs', 'Logistics delays'],
        hook: '"Create LinkedIn case studies showing 2x revenue growth for similar Mumbai SMBs using your solution."',
        avatar: 'from-blue-400 to-cyan-600',
    },
    {
        id: 'creators',
        name: 'Regional Content Creators',
        desc: 'Ages 20-30',
        location: 'Tier 2/3 Cities',
        tags: ['Video', 'Local Dialects'],
        badge: null,
        tagline: '"Authenticity-first creators growing in vernacular markets."',
        demographics: { age: '20-30 Years Old', location: 'Tier 2/3 Cities', spend: '₹3,000 - ₹10,000', spendNote: 'Creator tools budget' },
        interests: ['Short-form Video', 'Gaming & Esports', 'Regional Music', 'Local News & Trends'],
        buying: ['Discovers via YouTube/Shorts', 'Price-sensitive, seeks deals', 'Peer reviews & tutorials key', 'UPI & cash on delivery'],
        pains: ['Low brand deal rates in regional', 'Limited analytics in local languages', 'Editing tools not vernacular-friendly', 'Low discoverability'],
        hook: '"Offer free vernacular dashboard & content analytics in local language with onboarding in 5 minutes."',
        avatar: 'from-amber-400 to-orange-500',
    },
]

const hubs = [
    { city: 'Bengaluru (Tech Hub)', pct: 42, color: 'bg-brand-green' },
    { city: 'South Mumbai (Urban Affluence)', pct: 28, color: 'bg-brand-green/70' },
    { city: 'New Delhi (NCR Regions)', pct: 19, color: 'bg-brand-green/50' },
    { city: 'Others', pct: 11, color: 'bg-dark-400' },
]

export default function AudiencePersona() {
    const [activeId, setActiveId] = useState('eco')
    const active = segments.find(s => s.id === activeId)!

    return (
        <div className="flex min-h-screen bg-[#0d1117]">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Audience Personas" />

                <main className="flex-1 p-8 space-y-8">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-1">Audience Persona Builder</h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">AI-generated deep insights for the Indian market.</p>
                        </div>
                        <button className="btn-primary flex items-center gap-2 text-sm">
                            <Plus size={15} /> Create New Persona
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 border-b border-dark-600">
                        {['All Personas', 'Drafts', 'Archived'].map((t, i) => (
                            <button key={t} className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all ${i === 0 ? 'text-brand-green border-b-2 border-brand-green -mb-px' : 'text-gray-500 hover:text-gray-300'
                                }`}>
                                <span>{i === 0 ? '👥' : i === 1 ? '📝' : '📁'}</span> {t}
                            </button>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-[280px_1fr] gap-6">
                        {/* Left: segment list */}
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Users size={13} /> Your Segments
                            </h3>
                            <div className="space-y-2">
                                {segments.map(seg => (
                                    <button
                                        key={seg.id}
                                        onClick={() => setActiveId(seg.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${activeId === seg.id
                                                ? 'border-brand-green/50 bg-brand-green/5'
                                                : 'border-gray-300 bg-gray-100 hover:border-gray-400 dark:border-dark-500 dark:bg-dark-700 dark:hover:border-dark-400'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${seg.avatar} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                                                {seg.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-dark-900 dark:text-white text-sm truncate">{seg.name}</p>
                                                <p className="text-[11px] text-gray-500">{seg.desc} • {seg.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {seg.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 dark:bg-dark-500 text-gray-600 dark:text-gray-400">{tag}</span>
                                            ))}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: detail */}
                        <div className="card p-6 space-y-6">
                            {/* Header */}
                            <div className="flex items-start gap-5">
                                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${active.avatar} flex-shrink-0 flex items-center justify-center text-dark-900 dark:text-white text-3xl font-black`}>
                                    {active.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        {active.badge ? (
                                            <span className="badge-green text-[10px]">⭐ {active.badge}</span>
                                        ) : <span />}
                                        <button className="text-gray-400 hover:text-brand-green transition-colors">
                                            <Edit3 size={16} />
                                        </button>
                                    </div>
                                    <h2 className="text-2xl font-black text-dark-900 dark:text-white mb-1">{active.name}</h2>
                                    <p className="text-brand-green text-sm italic">{active.tagline}</p>

                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Demographics</p>
                                            <p className="text-sm font-medium text-dark-900 dark:text-white">{active.demographics.age}</p>
                                            <p className="text-xs text-gray-500">{active.demographics.location}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-600 uppercase tracking-wider mb-0.5">Monthly Spend</p>
                                            <p className="text-sm font-medium text-dark-900 dark:text-white">{active.demographics.spend}</p>
                                            <p className="text-xs text-gray-500">{active.demographics.spendNote}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-5">
                                {/* Interests */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white text-sm mb-3">
                                        <span className="text-brand-green text-base">🎯</span> Interests
                                    </h3>
                                    <ul className="space-y-2">
                                        {active.interests.map(i => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" /> {i}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Buying behavior */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white text-sm mb-3">
                                        <ShoppingCart size={14} className="text-brand-green" /> Buying Behavior
                                    </h3>
                                    <ul className="space-y-2">
                                        {active.buying.map(b => (
                                            <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                                                <span className="w-4 h-4 rounded-full bg-brand-green flex-shrink-0 flex items-center justify-center mt-0.5">
                                                    <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5"><path d="M2 6l3 3 5-5" stroke="#0a0f0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                </span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pain points */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white text-sm mb-3">
                                        <AlertTriangle size={14} className="text-amber-400" /> Pain Points
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {active.pains.map(p => (
                                            <span key={p} className="text-[11px] px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">{p}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* AI Strategy Hook */}
                                <div>
                                    <h3 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white text-sm mb-3">
                                        <TrendingUp size={14} className="text-brand-green" /> AI Strategy Hook
                                    </h3>
                                    <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
                                        <p className="text-xs text-gray-300 leading-relaxed italic">{active.hook}</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="border-t border-dark-600 pt-5 flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-400">
                                    <Sparkles size={16} className="text-brand-green" /> Ready to reach this audience?
                                </div>
                                <div className="ml-auto flex gap-3">
                                    <button className="btn-secondary text-sm py-2 px-4">Export Segment</button>
                                    <button className="btn-primary text-sm py-2 px-4">Generate Campaign</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Regional Distribution */}
                    <section>
                        <h2 className="section-title mb-5">Regional Distribution</h2>
                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Map placeholder */}
                            <div className="card overflow-hidden p-0 h-64 relative">
                                <div className="absolute inset-0 bg-dark-800" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256'%3E%3Crect width='400' height='256' fill='%23111a12'/%3E%3Ctext x='200' y='128' text-anchor='middle' fill='%2322c55e' font-size='14' opacity='0.3' dy='0.3em'%3EIndia Map%3C/text%3E%3C/svg%3E")`
                                }}>
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">🗺️</div>
                                    {/* Dot markers */}
                                    <div className="absolute top-16 right-24 w-3 h-3 rounded-full bg-brand-green shadow-green animate-pulse-slow" />
                                    <div className="absolute top-12 left-28 w-2 h-2 rounded-full bg-brand-green/70" />
                                    <div className="absolute bottom-20 right-32 w-2.5 h-2.5 rounded-full bg-brand-green/80" />
                                </div>
                            </div>

                            {/* Bar list */}
                            <div className="card">
                                <h3 className="text-sm font-bold text-dark-900 dark:text-white mb-4">Top Hubs for '<span className="text-brand-green">{active.name}</span>'</h3>
                                <div className="space-y-4">
                                    {hubs.map(({ city, pct, color }) => (
                                        <div key={city}>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span className="text-sm text-gray-600 dark:text-gray-300">{city}</span>
                                                <span className="text-sm font-bold text-brand-green">{pct}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${color} transition-all duration-1000`} style={{ width: `${pct}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
