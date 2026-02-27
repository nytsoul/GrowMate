import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, ChevronDown, Instagram, Linkedin, Youtube, MessageSquare, Hash, Calendar, Save, RefreshCw, Share2, BookImage } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import Logo from '../components/Logo'

const platforms = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
    { id: 'youtube', label: 'YouTube', icon: Youtube },
]

const businessTypes = ['E-commerce / D2C', 'B2B Services', 'Local Business', 'Freelancer', 'Creator / Influencer']
const campaignGoals = ['Sales & Conversions', 'Brand Awareness', 'Community Growth', 'Lead Generation']
const languages = ['Hinglish', 'Hindi', 'English', 'Tamil', 'Telugu', 'Marathi']

export default function ContentCreator() {
    const [selectedPlatform, setSelectedPlatform] = useState('instagram')
    const [selectedLang, setSelectedLang] = useState('Hinglish')
    const [generated, setGenerated] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleGenerate = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setGenerated(true)
        }, 1500)
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 ml-52 flex flex-col">
                <DashboardHeader title="Creator Tool" />
                <main className="flex-1 p-8">
                    <div className="max-w-7xl mx-auto px-8 py-8 grid lg:grid-cols-[1fr_400px] gap-8">
                {/* Left: Form */}
                <div>
                    <h1 className="text-3xl font-black text-white mb-1">AI Content Creator</h1>
                    <p className="text-gray-400 mb-8 text-sm">Generate high-converting marketing content for your Indian business in seconds.</p>

                    {/* Bharat Mode */}
                    <div className="card border-brand-green/30 bg-brand-green/5 flex items-center justify-between mb-6 p-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center text-brand-green">
                                <Hash size={16} />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">Bharat Mode</p>
                                <p className="text-xs text-gray-500">Optimize for local Indian languages</p>
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                value={selectedLang}
                                onChange={e => setSelectedLang(e.target.value)}
                                className="select-field pl-3 pr-8 py-1.5 text-sm appearance-none bg-gray-100 dark:bg-dark-700 border border-gray-300 dark:border-dark-400 text-dark-900 dark:text-white rounded-lg"
                            >
                                {languages.map(l => <option key={l}>{l}</option>)}
                            </select>
                            <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Step 1: Platform */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green text-xs font-bold">1</div>
                            <h3 className="font-bold text-white">Platform & Strategy</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {platforms.map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => setSelectedPlatform(id)}
                                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${selectedPlatform === id
                                            ? 'border-brand-green bg-brand-green/10 text-brand-green'
                                            : 'border-gray-300 bg-gray-100 text-gray-600 hover:border-gray-500 dark:border-dark-500 dark:bg-dark-700 dark:text-gray-400'
                                        }`}
                                >
                                    <Icon size={24} />
                                    <span className="text-xs font-medium">{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Step 2: Business */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-6 h-6 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center text-brand-green text-xs font-bold">2</div>
                            <h3 className="font-bold text-white">Business & Goals</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Business Type</label>
                                <div className="relative">
                                    <select className="select-field pr-10">
                                        {businessTypes.map(b => <option key={b}>{b}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1.5 block">Campaign Goal</label>
                                <div className="relative">
                                    <select className="select-field pr-10">
                                        {campaignGoals.map(g => <option key={g}>{g}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">Target Audience Description</label>
                            <textarea
                                className="input-field resize-none h-24"
                                placeholder="e.g. Gen-Z students in Mumbai looking for sustainable fashion"
                            />
                        </div>
                    </div>

                    {/* Generate button */}
                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className={`w-full py-4 rounded-xl font-bold text-dark-900 flex items-center justify-center gap-2 text-base transition-all duration-200 ${loading
                                ? 'bg-brand-green/60 cursor-not-allowed'
                                : 'bg-brand-green hover:bg-brand-green-light shadow-green hover:shadow-green-lg active:scale-[0.98]'
                            }`}
                    >
                        {loading ? (
                            <><RefreshCw size={18} className="animate-spin" /> Generating...</>
                        ) : (
                            <><Zap size={18} className="fill-current" /> Generate Content</>
                        )}
                    </button>
                </div>

                {/* Right: Preview */}
                <div className="card h-fit sticky top-24">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="glow-dot" />
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Live Draft Preview</span>
                        </div>
                        <div className="flex gap-2">
                            {[BookImage, Share2].map((Icon, i) => (
                                <button key={i} className="w-8 h-8 rounded-lg bg-dark-600 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                    <Icon size={14} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Image placeholder */}
                    <div className="aspect-square rounded-xl bg-dark-800 border border-dark-500 flex items-center justify-center mb-4 relative overflow-hidden">
                        {generated ? (
                            <div className="inset-0 absolute bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="text-4xl mb-2">👗✨</div>
                                    <p className="text-sm text-gray-300 font-medium">Utsav Collection</p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-dark-400">
                                <BookImage size={40} className="mx-auto mb-2 opacity-30" />
                                <p className="text-xs text-gray-600">Suggested Creative</p>
                            </div>
                        )}
                        {generated && (
                            <span className="absolute bottom-3 left-3 text-xs text-gray-400 bg-dark-900/80 px-2 py-1 rounded-lg">Suggested Creative</span>
                        )}
                    </div>

                    {generated ? (
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] text-brand-green uppercase tracking-widest mb-1.5 font-semibold">The Hook</p>
                                <p className="font-bold text-white text-sm leading-snug">Kya aap bhi boring outfit se thak gaye hain? 👗✨</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-brand-green uppercase tracking-widest mb-1.5 font-semibold">Caption</p>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Stop settling for basic! GrowMate Essentials introduces the 'Utsav Collection' designed for the modern Bharat creator. 🇮🇳
                                    <br /><br />
                                    Authentic fabrics, Gen-Z designs, and prices that don't hurt your wallet. Limited drops only!
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] text-brand-green uppercase tracking-widest mb-1.5 font-semibold">Recommended Hashtags</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {['#MakeInIndia', '#SustainableFashion', '#HinglishCreatives', '#GrowMateStyle'].map(h => (
                                        <span key={h} className="text-[11px] bg-dark-600 text-gray-300 px-2 py-0.5 rounded-full">{h}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-1">
                                <span className="text-[11px] text-gray-500">AI confidence score: <strong className="text-white">94%</strong></span>
                                <button className="text-[11px] text-brand-green hover:underline flex items-center gap-1">
                                    <RefreshCw size={11} /> Refresh Variation
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-2 border-t border-dark-600 pt-4">
                                <button className="flex items-center justify-center gap-1.5 btn-secondary text-xs py-2">
                                    <Calendar size={12} /> Schedule Post
                                </button>
                                <button className="flex items-center justify-center gap-1.5 btn-secondary text-xs py-2">
                                    <Save size={12} /> Save Template
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8 text-gray-600">
                            <Zap size={32} className="mx-auto mb-3 opacity-20" />
                            <p className="text-sm">Fill in the form and click Generate to preview your content here.</p>
                        </div>
                    )}
                </div>
                </div> {/* end grid wrapper */}
            </main>
        </div>
    </div>
    )
}
