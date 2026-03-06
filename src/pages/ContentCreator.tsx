import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import CircularRing from '../components/CircularRing'
import { Instagram, Linkedin, Twitter, Youtube, ChevronDown, Sparkles, Info } from 'lucide-react'

const platforms = [
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { id: 'twitter', label: 'X (Twitter)', icon: Twitter },
    { id: 'youtube', label: 'YT Shorts', icon: Youtube },
]

export default function ContentCreator() {
    const [topic, setTopic] = useState('')
    const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['instagram'])
    const [contentGoal, setContentGoal] = useState('Engagement')
    const [language, setLanguage] = useState('Hindi')
    const [targetAudience, setTargetAudience] = useState('')
    const [attentionHook, setAttentionHook] = useState(true)
    const [callToAction, setCallToAction] = useState(true)
    const [hashtagBundle, setHashtagBundle] = useState(true)
    const [generated, setGenerated] = useState(false)

    const togglePlatform = (id: string) => {
        setSelectedPlatforms(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        )
    }

    const handleGenerate = () => {
        setGenerated(true)
    }

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="AI Creator" />

                <main className="flex-1 p-5 sm:p-8 overflow-y-auto">
                    <div className="w-full px-2 sm:px-0 space-y-6">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">AI Creator Engine</h1>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Generate high-impact content in English or your regional language.</p>
                            </div>
                            <span className="badge-green text-[10px] flex items-center gap-1.5">
                                <span className="glow-dot" /> Bharat Mode Active
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-[1fr_1fr] gap-6">
                            {/* Left: Content Parameters */}
                            <div className="card space-y-5">
                                <div>
                                    <h2 className="font-bold text-gray-900 dark:text-white mb-1">Content Parameters</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell the AI what you want to create</p>
                                </div>

                                {/* Topic */}
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Topic or Product</label>
                                    <input
                                        className="input-field"
                                        placeholder="e.g., Launching a new range of organic skincare for winter..."
                                        value={topic}
                                        onChange={e => setTopic(e.target.value)}
                                    />
                                </div>

                                {/* Target Platforms */}
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">Target Platforms</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {platforms.map(({ id, label, icon: Icon }) => (
                                            <button
                                                key={id}
                                                onClick={() => togglePlatform(id)}
                                                className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border transition-all ${
                                                    selectedPlatforms.includes(id)
                                                        ? 'border-brand-green bg-brand-green/10 text-brand-green'
                                                        : 'border-gray-200 dark:border-dark-500 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-dark-400'
                                                }`}
                                            >
                                                <Icon size={16} />
                                                {label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Goal & Language */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Content Goal</label>
                                        <div className="relative">
                                            <select
                                                className="select-field"
                                                value={contentGoal}
                                                onChange={e => setContentGoal(e.target.value)}
                                            >
                                                <option>Engagement</option>
                                                <option>Brand Awareness</option>
                                                <option>Lead Generation</option>
                                                <option>Sales</option>
                                            </select>
                                            <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Language</label>
                                        <div className="relative">
                                            <select
                                                className="select-field"
                                                value={language}
                                                onChange={e => setLanguage(e.target.value)}
                                            >
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Hinglish</option>
                                                <option>Tamil</option>
                                                <option>Marathi</option>
                                            </select>
                                            <ChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Target Audience */}
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Target Audience</label>
                                    <input
                                        className="input-field"
                                        placeholder="e.g., Working professionals, 25-35"
                                        value={targetAudience}
                                        onChange={e => setTargetAudience(e.target.value)}
                                    />
                                </div>

                                {/* Toggles */}
                                <div className="space-y-3">
                                    {[
                                        { label: 'Attention Hook', desc: 'Start with a scroll-stopping line', checked: attentionHook, setter: setAttentionHook },
                                        { label: 'Call to Action', desc: 'Drive users to specific actions', checked: callToAction, setter: setCallToAction },
                                        { label: 'Hashtag Bundle', desc: 'Optimized tags for reach', checked: hashtagBundle, setter: setHashtagBundle },
                                    ].map(({ label, desc, checked, setter }) => (
                                        <div key={label} className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-semibold text-red-400">{label}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
                                            </div>
                                            <button
                                                onClick={() => setter(!checked)}
                                                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${checked ? 'bg-blue-500' : 'bg-gray-300 dark:bg-dark-500'}`}
                                            >
                                                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Generate Button */}
                                <button
                                    onClick={handleGenerate}
                                    className="w-full bg-indigo-600 text-white font-semibold rounded-lg py-3 text-sm hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Sparkles size={16} /> Generate Bharat-Mode Content
                                </button>

                                {/* Info note */}
                                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 flex items-start gap-2">
                                    <Info size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs text-indigo-300">GrowMate automatically adjusts tone and cultural context based on your selected language for a native feel.</p>
                                </div>
                            </div>

                            {/* Right: Results */}
                            <div className="space-y-5">
                                {/* Predicted Performance */}
                                <div className="grid grid-cols-[1fr_auto] gap-4">
                                    <div className="card">
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Predicted Performance</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Based on current platform trends and audience behavior.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">→ High Potential</p>
                                        <p className="text-xs text-brand-green mb-3">⏰ Ideal at 6:00 PM</p>

                                        <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mb-2">AI Quick Fixes</p>
                                        <div className="space-y-2">
                                            <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <Sparkles size={12} className="text-brand-green mt-0.5 flex-shrink-0" />
                                                Shorten the hook by 10 characters for better mobile retention.
                                            </div>
                                            <div className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                                <Info size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
                                                Add 3 more emojis to match current Instagram trends.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card flex flex-col items-center justify-center px-6">
                                        <p className="text-xs text-gray-500 mb-1">Est. Reach Increase</p>
                                        <p className="text-3xl font-black text-brand-green">+24%</p>
                                        <div className="mt-3 flex flex-col items-center gap-1 text-[10px] text-gray-500">
                                            <span>Current Baseline: <strong className="text-gray-700 dark:text-gray-300">4.2k</strong></span>
                                            <span>AI Augmented: <strong className="text-brand-green">5.5k+</strong></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hit Score */}
                                <div className="card flex items-center justify-center py-6">
                                    <CircularRing score={generated ? 78 : 0} size={120} label="Hit Score" sublabel={generated ? 'High Potential' : ''} />
                                </div>

                                {/* Generated Content Preview */}
                                {generated ? (
                                    <div className="card space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="font-bold text-gray-900 dark:text-white">Primary Asset</h3>
                                            <div className="flex items-center gap-2">
                                                <button className="text-xs text-gray-500 hover:text-brand-green transition-colors">📋 Copy All</button>
                                                <button className="btn-primary text-xs py-1.5 px-3">Refine</button>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">The Hook</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">क्या आप भी सर्दियों में त्वचा की समस्या से जूझ रही हैं 🌿 ✨</p>
                                            <p className="text-xs text-gray-400 italic mt-1">(Eng: Are you also facing your skin's glow the winter?)</p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Body Caption</p>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">प्रकृति की शक्ति प्राकृतिक सामग्री से बेहतर कुछ नहीं है। जैविक एलोवेरा और कच्ची हल्दी का ये खास मिश्रण है, खासे आपकी त्वचा के लिए ✨</p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Key Points</p>
                                            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                                <li>🟢 100% प्राकृतिक सामग्री</li>
                                                <li>🟢 कोई रासायनिक पदार्थ नहीं</li>
                                                <li>🟢 सर्दी में देखभाल करें ले अपनी त्वचा</li>
                                            </ul>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Call to Action</p>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">अभी ऑर्डर करो और पाओ 🤩</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Smart Hashtags</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {['#WinterSkincare', '#SkinCareIndia', '#OrganicBeauty', '#NaturalGlow', '#DesiBrands'].map(tag => (
                                                        <span key={tag} className="text-[10px] bg-gray-100 dark:bg-dark-600 text-gray-500 dark:text-gray-400 rounded-full px-2 py-0.5">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 dark:border-dark-500 pt-3 flex items-center justify-between text-xs text-gray-500">
                                            <span>Generated in 1.2s · Optimized for Instagram</span>
                                            <button className="text-brand-green hover:underline">Save to Drafts →</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="card flex flex-col items-center justify-center py-16 text-center">
                                        <Sparkles size={40} className="text-gray-300 dark:text-gray-600 mb-4" />
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Content Generated Yet</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">Fill out the form on the left to see your AI-powered marketing strategy come to life.</p>
                                    </div>
                                )}
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
