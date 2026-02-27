import { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus, Calendar, Clock, Users, BarChart3 } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import DashboardHeader from '../components/DashboardHeader'

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

const mockEvents = [
    { date: 15, title: 'Product Launch Post', type: 'instagram', time: '10:00 AM' },
    { date: 18, title: 'Educational Story Series', type: 'stories', time: '2:30 PM' },
    { date: 22, title: 'Customer Testimonial Video', type: 'youtube', time: '6:00 PM' },
    { date: 25, title: 'Festive Season Campaign', type: 'instagram', time: '11:00 AM' },
    { date: 28, title: 'Behind the Scenes Reel', type: 'reels', time: '4:00 PM' }
]

const contentTypes = [
    { id: 'instagram', label: 'Instagram Post', color: 'bg-pink-500', icon: '📷' },
    { id: 'stories', label: 'Stories', color: 'bg-purple-500', icon: '📱' },
    { id: 'reels', label: 'Reels', color: 'bg-orange-500', icon: '🎬' },
    { id: 'youtube', label: 'YouTube Video', color: 'bg-red-500', icon: '🎥' }
]

export default function ContentCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date())

    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const prevMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
    }

    const nextMonth = () => {
        setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
    }

    const getDayEvents = (day: number) => {
        return mockEvents.filter(event => event.date === day)
    }

    const renderCalendarDays = () => {
        const days = []
        
        // Empty cells for days before the first day of month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>)
        }
        
        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const events = getDayEvents(day)
            const isToday = new Date().getDate() === day && 
                           new Date().getMonth() === currentMonth && 
                           new Date().getFullYear() === currentYear
            
            days.push(
                <div key={day} className={`p-2 min-h-[80px] border border-gray-200 dark:border-dark-600 relative cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-700 ${isToday ? 'bg-brand-green/10 border-brand-green' : ''}`}>
                    <span className={`text-sm font-medium ${isToday ? 'text-brand-green' : 'text-dark-900 dark:text-white'}`}>
                        {day}
                    </span>
                    <div className="mt-1 space-y-1">
                        {events.map((event, index) => {
                            const contentType = contentTypes.find(type => type.id === event.type)
                            return (
                                <div key={index} className={`text-xs p-1 rounded text-white ${contentType?.color || 'bg-gray-500'} truncate`}>
                                    {event.title}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        
        return days
    }

    return (
        <div className="flex min-h-screen bg-white dark:bg-dark-900">
            <Sidebar />
            <div className="flex-1 ml-52 flex flex-col">
                <DashboardHeader title="Content Calendar" />
                <main className="flex-1 p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-black text-dark-900 dark:text-white mb-2">Content Calendar</h1>
                                <p className="text-gray-600 dark:text-gray-400">Plan, schedule, and track your content across all platforms</p>
                            </div>
                            <button className="btn-primary flex items-center gap-2">
                                <Plus size={16} /> Schedule Content
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid md:grid-cols-4 gap-4 mb-6">
                            <div className="card">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                                        <p className="text-xl font-bold text-dark-900 dark:text-white">24 Posts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Scheduled</p>
                                        <p className="text-xl font-bold text-dark-900 dark:text-white">12 Posts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                                        <Users size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Engagement</p>
                                        <p className="text-xl font-bold text-dark-900 dark:text-white">+18.5%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                                        <BarChart3 size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Reach</p>
                                        <p className="text-xl font-bold text-dark-900 dark:text-white">2.4M</p>
                                    </div>
                                </div>
            </div>
                        </div>

                        {/* Calendar Header */}
                        <div className="card mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-4">
                                    <button onClick={prevMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg">
                                        <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
                                    </button>
                                    <h2 className="text-xl font-bold text-dark-900 dark:text-white">
                                        {months[currentMonth]} {currentYear}
                                    </h2>
                                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-lg">
                                        <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
                                    </button>
                                </div>
                                {/* Legend */}
                                <div className="flex items-center gap-4">
                                    {contentTypes.map(type => (
                                        <div key={type.id} className="flex items-center gap-2">
                                            <div className={`w-3 h-3 rounded ${type.color}`}></div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{type.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-0 border border-gray-200 dark:border-dark-600 rounded-lg overflow-hidden">
                                {/* Day headers */}
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                    <div key={day} className="p-3 bg-gray-100 dark:bg-dark-700 border-r border-gray-200 dark:border-dark-600 last:border-r-0">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{day}</span>
                                    </div>
                                ))}
                                {/* Calendar days */}
                                {renderCalendarDays()}
                            </div>
                        </div>

                        {/* Upcoming Content */}
                        <div className="card">
                            <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">Upcoming Content</h3>
                            <div className="space-y-3">
                                {mockEvents.slice(0, 3).map((event, index) => {
                                    const contentType = contentTypes.find(type => type.id === event.type)
                                    return (
                                        <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-dark-700 rounded-lg">
                                            <div className={`w-10 h-10 rounded-lg ${contentType?.color} flex items-center justify-center text-white`}>
                                                {contentType?.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-dark-900 dark:text-white">{event.title}</h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {months[currentMonth]} {event.date}, {currentYear} at {event.time}
                                                </p>
                                            </div>
                                            <span className="text-sm font-medium text-brand-green">{contentType?.label}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}