// Circular progress ring for Hit Score
interface CircularRingProps {
    score: number
    size?: number
    strokeWidth?: number
    label?: string
    sublabel?: string
}

export default function CircularRing({
    score,
    size = 160,
    strokeWidth = 10,
    label,
    sublabel,
}: CircularRingProps) {
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = (score / 100) * circumference
    const dashOffset = circumference - progress

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} className="-rotate-90">
                    {/* Background track */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#1c2b1e"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress arc */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                    />
                </svg>
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-black text-dark-900 dark:text-white">{score}</span>
                    {label && <span className="text-[11px] text-gray-400 uppercase tracking-widest">{label}</span>}
                </div>
            </div>
            {sublabel && (
                <span className="badge-green text-[11px]">{sublabel}</span>
            )}
        </div>
    )
}
