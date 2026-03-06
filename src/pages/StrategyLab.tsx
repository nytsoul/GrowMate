import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import { ArrowRight, Sparkles, MapPin, Target, Clock, Lightbulb } from 'lucide-react'

const steps = ['Discovery', 'Goals', 'Strategy']

export default function StrategyLab() {
    const [currentStep, setCurrentStep] = useState(0)
    const [businessType, setBusinessType] = useState('Handmade Jewelry Studio')
    const [location, setLocation] = useState('Jaipur, Rajasthan')
    const [monthlyGoal, setMonthlyGoal] = useState('Increase Direct Sales by 20%')
    const [generated, setGenerated] = useState(false)

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Strategy" />

                <main className="flex-1 p-5 sm:p-8 overflow-y-auto">
                    <div className="w-full px-2 sm:px-0 space-y-6">
                        {/* Header */}
                        <div>
                            <span className="badge-green text-[10px] mb-2 inline-block">Strategic Co-Pilot</span>
                            <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Strategy Architect</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-lg">Build a high-performance marketing roadmap for your Bharat-based brand.</p>
                        </div>

                        {/* Steps indicator */}
                        <div className="flex items-center justify-center gap-0">
                            {steps.map((step, i) => (
                                <div key={step} className="flex items-center">
                                    <div className="flex flex-col items-center">
                                        <button
                                            onClick={() => setCurrentStep(i)}
                                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                                                i <= currentStep
                                                    ? 'bg-indigo-600 border-indigo-600 text-white'
                                                    : 'border-gray-300 dark:border-dark-500 text-gray-400'
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                        <span className={`text-xs mt-1.5 font-medium ${i <= currentStep ? 'text-gray-900 dark:text-white' : 'text-gray-400'}`}>{step}</span>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={`w-20 h-0.5 mx-2 mb-5 rounded ${i < currentStep ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-dark-500'}`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Left: Form */}
                            <div className="card space-y-5">
                                {currentStep === 0 && (
                                    <>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                                                🏪 Business Discovery
                                            </h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Tell us about what you build and who you serve.</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Business Type</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🏪</span>
                                                    <input
                                                        className="input-field pl-9"
                                                        value={businessType}
                                                        onChange={e => setBusinessType(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Primary Location</label>
                                                <div className="relative">
                                                    <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                    <input
                                                        className="input-field pl-9"
                                                        value={location}
                                                        onChange={e => setLocation(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 block">Primary Monthly Goal</label>
                                            <div className="relative">
                                                <Target size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    className="input-field pl-9"
                                                    value={monthlyGoal}
                                                    onChange={e => setMonthlyGoal(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span className="flex items-center gap-1"><Clock size={12} /> Takes 2 mins</span>
                                            <span className="flex items-center gap-1"><Sparkles size={12} className="text-brand-green" /> AI Powered</span>
                                        </div>

                                        <button
                                            onClick={() => { setCurrentStep(1); setGenerated(true) }}
                                            className="btn-primary flex items-center gap-2"
                                        >
                                            Generate Strategy <ArrowRight size={16} />
                                        </button>
                                    </>
                                )}

                                {currentStep === 1 && (
                                    <>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">🎯 Goals & Metrics</h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Define your key performance indicators.</p>
                                        </div>
                                        <div className="space-y-4">
                                            {['Increase Social Followers by 30%', 'Boost Post Engagement to 5%', 'Generate 50 Leads/Month'].map((goal, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-800 rounded-lg">
                                                    <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-sm font-bold">{i + 1}</div>
                                                    <span className="text-sm text-gray-700 dark:text-gray-300">{goal}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-3">
                                            <button onClick={() => setCurrentStep(0)} className="btn-secondary">Back</button>
                                            <button onClick={() => setCurrentStep(2)} className="btn-primary flex items-center gap-2">Next <ArrowRight size={16} /></button>
                                        </div>
                                    </>
                                )}

                                {currentStep === 2 && (
                                    <>
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">📊 Your Strategy</h2>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">AI-generated 4-week roadmap.</p>
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { week: 'Week 1', title: 'Brand Foundation', tasks: ['Set up content pillars', 'Optimize profile bios', 'Create brand voice guide'] },
                                                { week: 'Week 2', title: 'Content Launch', tasks: ['Publish 5 hero posts', 'Start storytelling series', 'Engage with 50 accounts'] },
                                                { week: 'Week 3', title: 'Growth Push', tasks: ['Run targeted campaigns', 'Collaborate with micro-influencers', 'A/B test CTAs'] },
                                                { week: 'Week 4', title: 'Optimize & Scale', tasks: ['Analyze performance', 'Double-down on top content', 'Plan next month'] },
                                            ].map(({ week, title, tasks }) => (
                                                <div key={week} className="p-4 bg-gray-50 dark:bg-dark-800 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-xs font-bold text-brand-green">{week}</span>
                                                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{title}</span>
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {tasks.map(t => (
                                                            <li key={t} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                                                                <span className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" />
                                                                {t}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                        <button onClick={() => setCurrentStep(1)} className="btn-secondary">Back</button>
                                    </>
                                )}
                            </div>

                            {/* Right: Preview */}
                            <div className="card flex flex-col items-center justify-center min-h-[300px]">
                                {generated ? (
                                    <div className="text-center space-y-4">
                                        <div className="w-16 h-16 mx-auto rounded-full bg-brand-green/10 flex items-center justify-center">
                                            <Sparkles size={28} className="text-brand-green" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Strategy Generated!</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">Your personalized 4-week roadmap is ready. Navigate through the steps to see the full plan.</p>
                                        <div className="grid grid-cols-2 gap-3 mt-4">
                                            <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-3 text-center">
                                                <p className="text-xs text-gray-500">Business</p>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{businessType}</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-dark-800 rounded-lg p-3 text-center">
                                                <p className="text-xs text-gray-500">Location</p>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <Sparkles size={40} className="text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Your Strategy Awaits</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">Once you submit your details, our AI will craft a personalized 4-week roadmap tailored for your audience.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pro Tip */}
                        <div className="card border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
                            <Lightbulb size={20} className="text-indigo-400 flex-shrink-0" />
                            <div className="flex-1">
                                <p className="text-sm font-bold text-indigo-400">Pro Tip for Bharat Mode</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">Strategy Planner works best when you mention specific local contexts. Including "Wedding Season in Jaipur" yields 3x more relevant content pillars.</p>
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
