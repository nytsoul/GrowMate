import { Bell, ChevronDown, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

interface DashboardHeaderProps {
    title?: string
    userName?: string
}

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    )
}

export default function DashboardHeader({
    userName = 'Arpita Singh',
}: DashboardHeaderProps) {
    const navigate = useNavigate()
    return (
        <header className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white dark:border-dark-600 dark:bg-dark-800 sticky top-0 z-30">
            {/* Left: Logo */}
            <Logo size="sm" />

            {/* Right */}
            <div className="flex items-center gap-2">
                <ThemeToggle />

                {/* Language badge */}
                <button className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-500 border border-gray-300 dark:text-gray-400 dark:border-dark-500 rounded-full px-3 py-1.5 hover:border-gray-400 dark:hover:border-dark-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                    <Globe size={13} className="text-brand-green" />
                    English (Bharat Mode)
                    <ChevronDown size={11} />
                </button>

                {/* Bell */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 text-gray-500 dark:text-gray-400 transition-colors">
                    <Bell size={16} />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-green rounded-full" />
                </button>

                {/* Avatar — navigates to profile */}
                <button
                    onClick={() => navigate('/profile')}
                    className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg px-2 py-1.5 transition-colors"
                >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {userName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <ChevronDown size={12} className="hidden sm:block text-gray-500" />
                </button>
            </div>
        </header>
    )
}
