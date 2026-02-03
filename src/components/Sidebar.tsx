import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard, PlusSquare, Compass, CalendarDays, BarChart2, Settings,
    Users, Swords, Image, Menu, X
} from 'lucide-react'
import clsx from 'clsx'
import Logo from './Logo'
import { useState } from 'react'

const navSections = [
    {
        label: null,
        items: [
            { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
            { label: 'Create', icon: PlusSquare, to: '/creator' },
            { label: 'Post Lab', icon: BarChart2, to: '/prediction' },
        ],
    },
    {
        label: 'Plan',
        items: [
            { label: 'Calendar', icon: CalendarDays, to: '/calendar' },
            { label: 'Analytics', icon: BarChart2, to: '/analytics' },
        ],
    },
    {
        label: 'Grow',
        items: [
            { label: 'Personas', icon: Users, to: '/personas' },
            { label: 'Competitors', icon: Swords, to: '/competitors' },
            { label: 'Visual Gen', icon: Image, to: '/visual' },
        ],
    },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile hamburger */}
            <button
                className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
                onClick={() => setIsOpen(true)}
            >
                <Menu size={20} />
            </button>

            {/* overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 sm:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`fixed left-0 top-0 h-screen w-52 bg-white border-r border-gray-200 dark:bg-dark-800 dark:border-dark-700 flex flex-col z-40 shadow-sm transform transition-transform duration-200 ease-in-out
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
                {/* close button mobile */}
                <button
                    className="sm:hidden absolute top-4 right-4 p-2"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={20} />
                </button>

                {/* Logo / Brand */}
                <div className="px-4 py-5 border-b border-gray-100 dark:border-dark-700">
                    <Logo />
                    <p className="text-[11px] text-brand-green mt-1 pl-11">Creator Suite</p>
                </div>

                {/* Nav */}
                <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
                    {navSections.map(({ label, items }) => (
                        <div key={label ?? 'main'}>
                            {label && (
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest px-3 mb-1.5">{label}</p>
                            )}
                            <div className="space-y-1">
                                {items.map(({ label: itemLabel, icon: Icon, to }) => (
                                    <NavLink
                                        key={itemLabel}
                                        to={to}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            clsx(
                                                'relative flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200',
                                                isActive && to !== '#'
                                                    ? 'text-brand-green bg-brand-green/10 border border-brand-green/20'
                                                    : 'text-gray-600 hover:text-dark-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-700'
                                            )
                                        }
                                    >
                                        <Icon size={16} />
                                        {itemLabel}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Bottom */}
                <div className="px-4 pb-4 pt-4 border-t border-gray-100 dark:border-dark-700">
                    <NavLink
                        to="/settings"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:text-dark-900 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-dark-700 transition-all duration-200"
                    >
                        <Settings size={16} />
                        Settings
                    </NavLink>

                    {/* Storage */}
                    <div className="px-3 pt-3">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Storage</p>
                        <div className="w-full h-1.5 bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-green rounded-full" style={{ width: '65%' }} />
                        </div>
                        <p className="text-[11px] text-gray-500 mt-1.5">650 of 1000 AI Credits</p>
                    </div>
                </div>
            </aside>
        </>
    )
}
