import { NavLink, useNavigate } from 'react-router-dom'
import {
    LayoutDashboard, Sparkles, Target, CalendarDays, Settings, LogOut, ChevronLeft, Menu,
    Zap, BarChart3, Eye, Image
} from 'lucide-react'
import clsx from 'clsx'
import Logo from './Logo'
import { useState } from 'react'

const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { label: 'AI Creator', icon: Sparkles, to: '/creator' },
    { label: 'Hit Prediction', icon: Zap, to: '/prediction' },
    { label: 'Strategy', icon: Target, to: '/strategy' },
    { label: 'Planner', icon: CalendarDays, to: '/calendar' },
    { label: 'Analytics', icon: BarChart3, to: '/analytics' },
    { label: 'Audience Personas', icon: Sparkles, to: '/personas' },
    { label: 'Competitor Engine', icon: Eye, to: '/competitors' },
    { label: 'Visual Prompts', icon: Image, to: '/visual' },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            {/* Mobile hamburger */}
            <button
                className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 dark:bg-dark-800 dark:border-dark-600 rounded-md shadow-sm text-gray-600 dark:text-gray-300"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={18} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-30 sm:hidden" onClick={() => setIsOpen(false)} />
            )}

            <aside className={clsx(
                'fixed left-0 top-0 h-screen w-[210px] bg-white border-r border-gray-200 dark:bg-dark-800 dark:border-dark-600 flex flex-col z-40 transform transition-transform duration-200',
                isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
            )}>
                {/* Logo */}
                <div className="px-5 pt-5 pb-4 border-b border-gray-200 dark:border-dark-600">
                    <Logo />
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                    {navItems.map(({ label, icon: Icon, to }) => (
                        <NavLink
                            key={label}
                            to={to}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                clsx(
                                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                                    isActive
                                        ? 'bg-brand-green/10 text-brand-green border border-brand-green/20'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-200'
                                )
                            }
                        >
                            <Icon size={16} />
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom actions */}
                <div className="px-3 pb-4 border-t border-gray-200 dark:border-dark-600 pt-3 space-y-1">
                    <NavLink
                        to="/settings"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                                isActive ? 'bg-brand-green/10 text-brand-green' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-dark-600 dark:hover:text-gray-200'
                            )
                        }
                    >
                        <Settings size={16} />
                        Settings
                    </NavLink>
                    <button
                        onClick={() => { navigate('/login'); setIsOpen(false) }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all duration-150"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>

                    {/* Collapse button */}
                    <button
                        className="sm:hidden w-full flex items-center justify-center p-2 mt-1 text-gray-500 hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                    >
                        <ChevronLeft size={18} />
                    </button>
                </div>
            </aside>
        </>
    )
}
