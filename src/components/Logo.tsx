import { Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

interface LogoProps {
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function Logo({ size = 'md', className }: LogoProps) {
    const sizes = {
        sm: { icon: 16, text: 'text-base' },
        md: { icon: 20, text: 'text-xl' },
        lg: { icon: 28, text: 'text-2xl' },
    }

    return (
        <Link to="/" className={clsx('flex items-center gap-2 group', className)}>
            <div className="relative flex items-center justify-center w-9 h-9 bg-brand-green rounded-xl shadow-green group-hover:shadow-green-lg transition-all duration-300">
                <Zap size={sizes[size].icon} className="text-dark-900 fill-current" />
                <div className="absolute inset-0 rounded-xl bg-brand-green opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300" />
            </div>
            <span className={clsx('font-bold text-dark-900 dark:text-white', sizes[size].text)}>
                GrowMate <span className="text-brand-green">AI</span>
            </span>
        </Link>
    )
}
