import { useState } from 'react'
import { Camera, Save, User, Mail, Phone, MapPin, Globe, Instagram, Linkedin, Twitter, Bell, Shield, Trash2, CheckCircle } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

export default function Profile() {
    const [saved, setSaved] = useState(false)
    const [activeTab, setActiveTab] = useState<'profile' | 'accounts' | 'notifications' | 'security'>('profile')

    const [name, setName] = useState('Arpita Singh')
    const [email, setEmail] = useState('arpita@growmate.in')
    const [phone, setPhone] = useState('+91 98765 43210')
    const [location, setLocation] = useState('Mumbai, Maharashtra')
    const [bio, setBio] = useState('Social media strategist & content creator. Building authentic brands for Bharat. 🇮🇳')
    const [website, setWebsite] = useState('www.arpitacreates.in')
    const [language, setLanguage] = useState('Hinglish (Default)')
    const [businessCategory, setBusinessCategory] = useState('Content Creator')

    const [instagram, setInstagram] = useState('@arpita.creates')
    const [linkedin, setLinkedin] = useState('linkedin.com/in/arpitasingh')
    const [twitter, setTwitter] = useState('@arpitacreates')

    const [weeklyReport, setWeeklyReport] = useState(true)
    const [postAlerts, setPostAlerts] = useState(true)
    const [aiTips, setAiTips] = useState(true)
    const [marketingEmails, setMarketingEmails] = useState(false)

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 2500)
    }

    const tabs = [
        { id: 'profile' as const, label: 'Profile Info', icon: User },
        { id: 'accounts' as const, label: 'Social Accounts', icon: Globe },
        { id: 'notifications' as const, label: 'Notifications', icon: Bell },
        { id: 'security' as const, label: 'Security', icon: Shield },
    ]

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 sm:ml-[210px] flex flex-col">
                <DashboardHeader />

                <main className="flex-1 p-5 overflow-y-auto">
                    {/* Page header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Profile</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Manage your personal details, social links, and preferences.</p>
                        </div>
                        <button
                            onClick={handleSave}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                                saved ? 'bg-green-500/20 text-green-500 border border-green-500/30' : 'bg-brand-green text-white hover:bg-green-400'
                            }`}
                        >
                            {saved ? <><CheckCircle size={15} /> Saved!</> : <><Save size={15} /> Save Changes</>}
                        </button>
                    </div>

                    {/* Avatar card */}
                    <div className="card mb-5 flex flex-col sm:flex-row items-center gap-5">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                                {name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <button className="absolute bottom-0 right-0 w-7 h-7 bg-brand-green rounded-full flex items-center justify-center text-white hover:bg-green-400 transition-colors shadow-lg">
                                <Camera size={13} />
                            </button>
                        </div>
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{businessCategory} · {location}</p>
                            <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                                <span className="text-xs text-brand-green font-medium border border-brand-green/30 bg-brand-green/5 rounded-full px-2.5 py-0.5">Pro Creator</span>
                                <span className="text-xs text-blue-500 dark:text-blue-400 font-medium border border-blue-500/20 bg-blue-500/5 rounded-full px-2.5 py-0.5">Bharat Mode</span>
                            </div>
                        </div>
                        <div className="sm:ml-auto text-center sm:text-right">
                            <p className="text-xs text-gray-500 mb-1">Member since</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">January 2024</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 border-b border-gray-200 dark:border-dark-500 mb-5 overflow-x-auto">
                        {tabs.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all border-b-2 -mb-px ${
                                    activeTab === id
                                        ? 'text-brand-green border-brand-green'
                                        : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                            >
                                <Icon size={14} />
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Profile Info Tab */}
                    {activeTab === 'profile' && (
                        <div className="grid lg:grid-cols-2 gap-5">
                            <div className="card space-y-5">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { label: 'Full Name', icon: User, value: name, setter: setName },
                                        { label: 'Email Address', icon: Mail, value: email, setter: setEmail, type: 'email' },
                                        { label: 'Phone Number', icon: Phone, value: phone, setter: setPhone },
                                        { label: 'Location', icon: MapPin, value: location, setter: setLocation },
                                        { label: 'Website', icon: Globe, value: website, setter: setWebsite },
                                    ].map(({ label, icon: Icon, value, setter, type }) => (
                                        <div key={label}>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">{label}</label>
                                            <div className="relative">
                                                <input
                                                    type={type || 'text'}
                                                    value={value}
                                                    onChange={e => setter(e.target.value)}
                                                    className="input-field pl-10"
                                                />
                                                <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="card">
                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">About & Brand</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Bio / Brand Description</label>
                                            <textarea
                                                rows={4}
                                                value={bio}
                                                onChange={e => setBio(e.target.value)}
                                                className="input-field resize-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Business Category</label>
                                            <select
                                                value={businessCategory}
                                                onChange={e => setBusinessCategory(e.target.value)}
                                                className="select-field"
                                            >
                                                <option>Content Creator</option>
                                                <option>Small Business Owner</option>
                                                <option>Freelancer</option>
                                                <option>Brand Manager</option>
                                                <option>Digital Marketer</option>
                                                <option>E-commerce Seller</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Preferred Language</label>
                                            <select
                                                value={language}
                                                onChange={e => setLanguage(e.target.value)}
                                                className="select-field"
                                            >
                                                <option>Hinglish (Default)</option>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Tamil</option>
                                                <option>Telugu</option>
                                                <option>Marathi</option>
                                                <option>Bengali</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Plan info card */}
                                <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 rounded-xl p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Current Plan</p>
                                            <p className="text-base font-bold text-gray-900 dark:text-white">Pro Creator</p>
                                        </div>
                                        <span className="bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-semibold rounded-full px-3 py-1 border border-indigo-500/30">Active</span>
                                    </div>
                                    <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                        <p>✓ Unlimited AI content generation</p>
                                        <p>✓ All regional languages</p>
                                        <p>✓ Advanced analytics</p>
                                    </div>
                                    <button className="w-full bg-indigo-600 text-white text-xs font-semibold py-2 rounded-lg hover:bg-indigo-500 transition-colors">
                                        Manage Subscription
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Social Accounts Tab */}
                    {activeTab === 'accounts' && (
                        <div className="grid lg:grid-cols-2 gap-5">
                            <div className="card">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Connected Social Accounts</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Instagram', icon: Instagram, color: 'text-pink-500 dark:text-pink-400', value: instagram, setter: setInstagram, placeholder: '@yourusername' },
                                        { label: 'LinkedIn', icon: Linkedin, color: 'text-blue-500 dark:text-blue-400', value: linkedin, setter: setLinkedin, placeholder: 'linkedin.com/in/yourname' },
                                        { label: 'X (Twitter)', icon: Twitter, color: 'text-sky-500 dark:text-sky-400', value: twitter, setter: setTwitter, placeholder: '@yourusername' },
                                    ].map(({ label, icon: Icon, color, value, setter, placeholder }) => (
                                        <div key={label}>
                                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 flex items-center gap-2">
                                                <Icon size={13} className={color} /> {label}
                                            </label>
                                            <input
                                                value={value}
                                                onChange={e => setter(e.target.value)}
                                                placeholder={placeholder}
                                                className="input-field"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Platform Analytics</h3>
                                <div className="space-y-3">
                                    {[
                                        { platform: 'Instagram', followers: '24.5K', engagement: '6.2%', posts: 142, color: 'bg-pink-500' },
                                        { platform: 'LinkedIn', followers: '8.1K', engagement: '4.8%', posts: 87, color: 'bg-blue-500' },
                                        { platform: 'X (Twitter)', followers: '5.2K', engagement: '2.9%', posts: 203, color: 'bg-sky-500' },
                                    ].map(({ platform, followers, engagement, posts, color }) => (
                                        <div key={platform} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-800 rounded-lg">
                                            <div className={`w-2 h-10 ${color} rounded-full flex-shrink-0`} />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">{platform}</p>
                                                <p className="text-xs text-gray-500">{posts} posts</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-gray-900 dark:text-white">{followers}</p>
                                                <p className="text-xs text-green-500">{engagement} eng.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full mt-4 btn-secondary text-xs py-2">
                                    + Connect More Platforms
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Notifications Tab */}
                    {activeTab === 'notifications' && (
                        <div className="max-w-xl">
                            <div className="card">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Notification Preferences</h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Weekly Performance Report', desc: 'Get a weekly summary of your content performance', value: weeklyReport, setter: setWeeklyReport },
                                        { label: 'Post Scheduling Alerts', desc: 'Remind me 30 mins before a scheduled post', value: postAlerts, setter: setPostAlerts },
                                        { label: 'AI Optimization Tips', desc: 'Daily tips to improve your content strategy', value: aiTips, setter: setAiTips },
                                        { label: 'Marketing Emails', desc: 'Product updates, offers, and newsletter', value: marketingEmails, setter: setMarketingEmails },
                                    ].map(({ label, desc, value, setter }) => (
                                        <div key={label} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-dark-500 last:border-0">
                                            <div>
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                                            </div>
                                            <button
                                                onClick={() => setter(!value)}
                                                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${value ? 'bg-brand-green' : 'bg-gray-300 dark:bg-dark-500'}`}
                                            >
                                                <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? 'translate-x-5' : 'translate-x-0'}`} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Tab */}
                    {activeTab === 'security' && (
                        <div className="max-w-xl space-y-5">
                            <div className="card">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-5">Change Password</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Current Password</label>
                                        <input type="password" placeholder="••••••••" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">New Password</label>
                                        <input type="password" placeholder="••••••••" className="input-field" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block">Confirm New Password</label>
                                        <input type="password" placeholder="••••••••" className="input-field" />
                                    </div>
                                    <button className="btn-primary">Update Password</button>
                                </div>
                            </div>

                            <div className="card">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Two-Factor Authentication</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Add an extra layer of security to your account using your phone.</p>
                                <button className="border border-brand-green/40 text-brand-green text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-green/10 transition-colors">
                                    Enable 2FA
                                </button>
                            </div>

                            <div className="bg-red-50 dark:bg-red-500/5 border border-red-200 dark:border-red-500/20 rounded-xl p-6">
                                <h3 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Danger Zone</h3>
                                <p className="text-xs text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                <button className="flex items-center gap-2 border border-red-300 dark:border-red-500/30 text-red-500 dark:text-red-400 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-red-500/10 transition-colors">
                                    <Trash2 size={14} /> Delete Account
                                </button>
                            </div>
                        </div>
                    )}
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
