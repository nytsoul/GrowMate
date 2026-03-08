import { useState } from 'react'
import { Zap, Image, Sparkles, Copy, ExternalLink, Download, Shuffle } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

const styles = ['Minimalist', 'Cinematic', 'Warm Lighting', 'Desi Aesthetic', 'Flat Lay', 'Product Focus', 'Hyper-realistic']

const library = [
    {
        emoji: '🫙',
        bg: 'from-amber-900 to-amber-700',
        tags: 'WELLNESS • LIFESTYLE',
        title: 'Ayurvedic Skincare Layout',
        desc: 'Soft morning light, terracotta background, organic elements, minimalist composition.',
    },
    {
        emoji: '🍵',
        bg: 'from-orange-900 to-red-800',
        tags: 'FOOD • MODERN',
        title: 'Contemporary Chai Bar',
        desc: 'Neon signs, urban Indian aesthetic, moody contrast, high depth of field.',
    },
    {
        emoji: '🍡',
        bg: 'from-yellow-800 to-amber-600',
        tags: 'STREET • CULTURAL',
        title: 'Artisanal Street Snacks',
        desc: 'Vibrant colors, high saturation, bokeh street background, golden hour lighting.',
    },
]

export default function VisualPromptGenerator() {
    const [selectedStyle, setSelectedStyle] = useState('Minimalist')
    const [prompt, setPrompt] = useState('')
    const [generated, setGenerated] = useState(false)
    const [activeTab, setActiveTab] = useState('generator')
    const [savedPrompts, setSavedPrompts] = useState([
        { id: 1, title: 'Product Shot - Turmeric', prompt: 'A minimalist photography...', status: 'draft', date: '2024-02-25' },
        { id: 2, title: 'Lifestyle - Yoga Mat', prompt: 'Contemporary wellness scene...', status: 'archived', date: '2024-02-20' },
        { id: 3, title: 'Food - Street Snacks', prompt: 'Vibrant street food layout...', status: 'published', date: '2024-02-18' }
    ])

    const generatePrompt = () => {
        setGenerated(true)
        const generatedText = `A ${selectedStyle.toLowerCase()} product photography shot featuring authentic Indian elements. Professional lighting with warm, natural tones. High-quality commercial photography with subtle cultural details that resonate with Indian audiences. Clean composition with strategic use of traditional colors and textures.`
        setPrompt(generatedText)
    }
    
    const savePromptAsDraft = () => {
        if (prompt.trim()) {
            const newPrompt = {
                id: Date.now(),
                title: `Draft ${new Date().toLocaleDateString()}`,
                prompt: prompt,
                status: 'draft',
                date: new Date().toISOString().split('T')[0]
            }
            setSavedPrompts([newPrompt, ...savedPrompts])
            alert('Draft saved successfully!')
        }
    }
    
    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader title="Visual Prompt Generator" />
                <main className="flex-1 p-5">
                    <div className="w-full px-2 sm:px-0 space-y-8">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-2">AI Visual Prompt Generator</h1>
                                <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                                    Transform creative ideas into detailed visual prompts. Perfect for photographers, AI image generators, and brand visuals that resonate with Indian audiences.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="btn-secondary flex items-center gap-2 text-sm">
                                    <Download size={14} /> Export Prompts
                                </button>
                                <button className="btn-primary flex items-center gap-2 text-sm">
                                    <Sparkles size={14} /> Premium Library
                                </button>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex items-center gap-1 bg-gray-100 dark:bg-dark-700 p-1 rounded-lg">
                            {[
                                { id: 'generator', label: 'Generator', icon: Sparkles },
                                { id: 'drafts', label: 'Drafts', icon: Copy },
                                { id: 'archived', label: 'Archive', icon: Download }
                            ].map(({ id, label, icon: Icon }) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                                        activeTab === id
                                            ? 'bg-white dark:bg-dark-900 text-brand-green shadow-sm'
                                            : 'text-gray-600 dark:text-gray-400 hover:text-dark-900 dark:hover:text-white'
                                    }`}
                                >
                                    <Icon size={14} />
                                    {label}
                                    {id === 'drafts' && (
                                        <span className="bg-brand-green text-white text-xs px-1.5 py-0.5 rounded-full">
                                            {savedPrompts.filter(p => p.status === 'draft').length}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Generator Tab Content */}
                        {activeTab === 'generator' && (
                            <>
                        {/* Main input */}
                        <div className="card border-brand-green/20 p-5">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0 mt-0.5">
                                    <Sparkles size={14} />
                                </div>
                                <textarea
                                    value={prompt}
                                    onChange={e => setPrompt(e.target.value)}
                                    className="flex-1 bg-transparent text-sm text-dark-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-500 outline-none resize-none h-20 leading-relaxed"
                                    placeholder="Describe your visual idea (e.g., 'A vibrant product shot of organic turmeric honey in a glass jar, featuring traditional Indian kitchen elements with warm golden hour sunlight')"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <button className="text-gray-500 dark:text-gray-400 hover:text-brand-green transition-colors p-1.5 rounded-lg hover:bg-brand-green/10">
                                        <Image size={16} />
                                    </button>
                                    <button className="text-gray-500 dark:text-gray-400 hover:text-brand-green transition-colors p-1.5 rounded-lg hover:bg-brand-green/10">
                                        <Sparkles size={16} />
                                    </button>
                                    <button className="text-gray-500 dark:text-gray-400 hover:text-brand-green transition-colors p-1.5 rounded-lg hover:bg-brand-green/10">
                                        <Shuffle size={16} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={savePromptAsDraft}
                                        disabled={!prompt.trim()}
                                        className="btn-secondary flex items-center gap-2 text-sm px-4 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Copy size={14} /> Save Draft
                                    </button>
                                    <button
                                        onClick={generatePrompt}
                                        disabled={!prompt.trim()}
                                        className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Zap size={14} className="fill-current" /> Generate Prompt
                                    </button>
                                </div>
                            </div>
                </div>

                {/* Generated result */}
                {generated && (
                    <div className="card border-brand-green/30 bg-brand-green/5 p-5">
                        <div className="flex items-center justify-between mb-3">
                            <span className="badge-green text-[10px]">✨ AI Generated Prompt</span>
                            <button className="text-gray-500 hover:text-brand-green transition-colors flex items-center gap-1 text-xs">
                                <Copy size={12} /> Copy
                            </button>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed italic">
                            "A premium lifestyle photograph: {prompt}. Shot with a 85mm lens at f/1.8, shallow depth of field, golden hour lighting casting warm amber tones. Style: minimalist Indian aesthetic with organic textures. Background: earthy terracotta tones with subtle jute fabric. Color grading: warm, high contrast, HSL shifted towards amber and green. Mood: authentic, artisanal, trust-building. Suitable for Instagram feed post."
                        </p>
                    </div>
                )}

                {/* Style refine */}
                <div>
                    <h2 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white mb-4">
                        <span className="text-brand-green">🎨</span> Refine with Styles
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {styles.map(style => (
                            <button
                                key={style}
                                onClick={() => setSelectedStyle(style)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${selectedStyle === style
                                        ? 'bg-brand-green text-dark-900 border-brand-green shadow-green'
                                        : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-dark-900 dark:border-dark-500 dark:text-gray-400 dark:hover:text-white' 
                                    }`}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>
                            </>
                        )}

                        {/* Drafts Tab Content */}
                        {activeTab === 'drafts' && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-dark-900 dark:text-white">Draft Prompts</h3>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {savedPrompts.filter(p => p.status === 'draft').length} drafts saved
                                    </span>
                                </div>
                                
                                {savedPrompts.filter(p => p.status === 'draft').length === 0 ? (
                                    <div className="card text-center py-12">
                                        <Copy size={48} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                        <h4 className="font-medium text-dark-900 dark:text-white mb-2">No drafts yet</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            Create and save prompt drafts to continue working on them later.
                                        </p>
                                        <button 
                                            onClick={() => setActiveTab('generator')}
                                            className="btn-primary text-sm px-4 py-2"
                                        >
                                            Create First Draft
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid gap-4">
                                        {savedPrompts.filter(p => p.status === 'draft').map(item => (
                                            <div key={item.id} className="card p-4 hover:border-brand-green/30 transition-all">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-dark-900 dark:text-white">{item.title}</h4>
                                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Created {item.date}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 text-xs px-2 py-1 rounded-full">
                                                            Draft
                                                        </span>
                                                        <button className="text-gray-500 dark:text-gray-400 hover:text-brand-green p-1">
                                                            <Copy size={12} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                                    {item.prompt}
                                                </p>
                                                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-dark-600">
                                                    <button className="btn-secondary text-xs px-3 py-1.5">Edit</button>
                                                    <button className="btn-primary text-xs px-3 py-1.5">Generate</button>
                                                    <button className="text-gray-500 dark:text-gray-400 hover:text-red-500 text-xs px-3 py-1.5">Archive</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Archive Tab Content */}
                        {activeTab === 'archived' && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-dark-900 dark:text-white">Archived Prompts</h3>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        {savedPrompts.filter(p => p.status === 'archived').length} archived
                                    </span>
                                </div>
                                
                                {savedPrompts.filter(p => p.status === 'archived').length === 0 ? (
                                    <div className="card text-center py-12">
                                        <Download size={48} className="mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                                        <h4 className="font-medium text-dark-900 dark:text-white mb-2">No archived prompts</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Completed or old prompts will appear here for reference.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="grid gap-4">
                                        {savedPrompts.filter(p => p.status === 'archived').map(item => (
                                            <div key={item.id} className="card p-4 bg-gray-50 dark:bg-dark-800">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-gray-700 dark:text-gray-300">{item.title}</h4>
                                                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Archived {item.date}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="bg-gray-500/20 text-gray-600 dark:text-gray-400 text-xs px-2 py-1 rounded-full">
                                                            Archived
                                                        </span>
                                                        <button className="text-gray-500 dark:text-gray-400 hover:text-brand-green p-1">
                                                            <Copy size={12} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500 dark:text-gray-500 line-clamp-2">
                                                    {item.prompt}
                                                </p>
                                                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-dark-600">
                                                    <button className="btn-secondary text-xs px-3 py-1.5">Restore</button>
                                                    <button className="text-gray-500 dark:text-gray-400 hover:text-red-500 text-xs px-3 py-1.5">Delete</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Recent Library */}
                <div>
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="flex items-center gap-2 font-bold text-dark-900 dark:text-white">
                            <span className="text-brand-green">⊞</span> Recent Library
                        </h2>
                        <button className="text-sm text-brand-green hover:underline font-medium flex items-center gap-1">
                            View All <ExternalLink size={12} />
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        {library.map(({ emoji, bg, tags, title, desc }) => (
                            <div key={title} className="card-hover overflow-hidden group p-0">
                                {/* Thumbnail */}
                                <div className={`h-44 bg-gradient-to-br ${bg} relative flex items-center justify-center text-5xl`}>
                                    <span className="group-hover:scale-110 transition-transform duration-300">{emoji}</span>
                                    <button className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/50 dark:bg-dark-900/50 flex items-center justify-center text-gray-400 dark:text-gray-300 hover:text-dark-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
                                        <Copy size={12} />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <p className="text-[10px] text-brand-green font-semibold uppercase tracking-widest mb-1">{tags}</p>
                                    <p className="font-bold text-dark-900 dark:text-white text-sm mb-1">{title}</p>
                                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                        {/* Pro Tip */}
                        <div className="card border-gray-300 dark:border-dark-400 bg-white/50 dark:bg-dark-700/50 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5">
                            <div className="flex-1">
                                <p className="font-bold text-dark-900 dark:text-white text-sm mb-1">Pro Tip: Be Specific with Details</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                    The more specific you are about materials (jute, silk, brass) and lighting (golden hour, soft diffuse), the better AI can craft prompts for your creative team.
                                </p>
                            </div>
                            <button className="btn-secondary text-sm py-2 px-4 whitespace-nowrap">Learn More</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
