import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'
import ToggleSwitch from '../components/ToggleSwitch'
import { useTheme } from '../context/ThemeContext'

export default function Settings() {
  const [businessName, setBusinessName] = useState('Rajesh Creative Hub')
  const [contactEmail, setContactEmail] = useState('rajesh@creator.in')
  const [bio, setBio] = useState('Small business owner based in Mumbai, focusing on sustainable handicraft marketing and digital storytelling.')

  const [bharatMode, setBharatMode] = useState(true)
  const [language, setLanguage] = useState('Hinglish (Default)')
  const [tone, setTone] = useState('Desi Friendly & Conversational')

  // theme from context
  const { theme, toggleTheme } = useTheme();

  const [weeklyReports, setWeeklyReports] = useState(true)
  const [ideaAlerts, setIdeaAlerts] = useState(true)
  const [socialEngagement, setSocialEngagement] = useState(false)

  return (
    <div className="flex min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white">
      <Sidebar />
      <div className="flex-1 sm:ml-52 flex flex-col">
        <DashboardHeader title="Settings" />
        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Profile Information */}
          <section className="card">
            <h2 className="section-title mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-1">Business Name</label>
                <input
                  className="input-field"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Contact Email</label>
                <input
                  className="input-field"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-1">Bio / Brand Description</label>
                <textarea
                  className="input-field h-24 resize-none"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <button className="btn-primary">Save Profile</button>
            </div>
          </section>

          {/* Linked Social Accounts */}
          <section className="card">
            <h2 className="section-title mb-4">Linked Social Accounts</h2>
            <div className="space-y-3">
              {[
                { name: 'Instagram', connected: true },
                { name: 'Facebook Business Page', connected: false },
                { name: 'LinkedIn Profile', connected: false },
              ].map((acc) => (
                <div key={acc.name} className="flex items-center justify-between">
                  <span className="text-sm">{acc.name}</span>
                  {acc.connected ? (
                    <button className="text-xs text-brand-green">Connected</button>
                  ) : (
                    <button className="text-xs text-brand-green">Connect</button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Bharat Mode & Language */}
          <section className="card">
            <h2 className="section-title mb-4">Bharat Mode & Language</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <ToggleSwitch
                  checked={bharatMode}
                  onChange={setBharatMode}
                  label="Bharat Mode"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  AI outputs tailored for the Indian audience
                </p>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Default Output Language</label>
                <select
                  className="select-field"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>Hinglish (Default)</option>
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Tone Preference</label>
                <select
                  className="select-field"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option>Desi Friendly & Conversational</option>
                  <option>Professional</option>
                  <option>Casual</option>
                </select>
              </div>
            </div>
          </section>

          {/* Interface Mode */}
          <section className="card">
            <h2 className="section-title mb-4">Interface Mode</h2>
            <div className="flex items-center gap-4">
              <ToggleSwitch
                checked={theme === 'dark'}
                onChange={() => toggleTheme()}
                label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              />
            </div>
          </section>

          {/* Interface Mode */}
          <section className="card">
            <h2 className="section-title mb-4">Interface Mode</h2>
            <div className="flex items-center gap-4">
              <ToggleSwitch
                checked={theme === 'dark'}
                onChange={() => toggleTheme()}
                label={theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
              />
            </div>
          </section>

          {/* Notification Preferences */}
          <section className="card">
            <h2 className="section-title mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <ToggleSwitch
                checked={weeklyReports}
                onChange={setWeeklyReports}
                label="Weekly Performance Reports"
              />
              <ToggleSwitch
                checked={ideaAlerts}
                onChange={setIdeaAlerts}
                label="AI Idea Generation Alerts"
              />
              <ToggleSwitch
                checked={socialEngagement}
                onChange={setSocialEngagement}
                label="Social Media Engagement"
              />
            </div>
          </section>

          {/* Billing & Plan section placeholder */}
          <section className="card">
            <h2 className="section-title mb-4">Subscription & Billing</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage your plan, invoices, and payment methods. (Page under construction)
            </p>
          </section>
        </main>
      </div>
    </div>
  )
}
