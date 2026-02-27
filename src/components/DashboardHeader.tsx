import { Bell, ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface DashboardHeaderProps {
    title?: string
    userName?: string
    subtitle?: string
}

function ThemeToggle() {
    const {theme, toggleTheme} = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors text-gray-400"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}

export default function DashboardHeader({
    title,
    userName = 'Arpita Singh',
    subtitle = 'Pro Creator',
}: DashboardHeaderProps) {
    // theme is accessed inside ThemeToggle when needed
    return (
        <header className="flex items-center justify-between px-6 py-3 border-b border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800/80 backdrop-blur-sm sticky top-0 z-30">
            {title ? (
                <h1 className="text-lg font-bold text-dark-900 dark:text-white">{title}</h1>
            ) : (
                <div>
                    <h1 className="text-xl font-bold text-dark-900 dark:text-white">
                        Namaste, {userName.split(' ')[0]}! 👋
                    </h1>
                </div>
            )}

            <div className="flex items-center gap-4">
                {/* theme toggle */}
                <ThemeToggle />
                <button className="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-400 hover:text-dark-900 dark:hover:text-white transition-colors">
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-green rounded-full" />
                </button>
                <button className="flex items-center gap-2.5 hover:bg-gray-200 dark:hover:bg-dark-600 rounded-lg px-3 py-2 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
                        {userName.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-left hidden sm:block">
                        <p className="text-sm font-semibold text-dark-900 dark:text-white leading-tight">{userName}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">{subtitle}</p>
                    </div>
                    <ChevronDown size={14} className="text-gray-400" />
                </button>
            </div>
        </header>
    )
}
