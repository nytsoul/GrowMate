import { TrendingUp, TrendingDown } from 'lucide-react'
import clsx from 'clsx'

interface StatCardProps {
    label: string
    value: string
    change: number
    icon: React.ReactNode
}

export default function StatCard({ label, value, change, icon }: StatCardProps) {
    const isPositive = change >= 0

    return (
        <div className="card-hover group">
            <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-brand-green group-hover:bg-brand-green/10 transition-colors">
                    {icon}
                </div>
                <span className={clsx(
                    'flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full',
                    isPositive
                        ? 'text-brand-green bg-brand-green/10'
                        : 'text-red-400 bg-red-400/10'
                )}>
                    {isPositive ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {isPositive ? '+' : ''}{change}%
                </span>
            </div>
            <p className="text-2xl font-bold text-dark-900 dark:text-white mb-1">{value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        </div>
    )
}
