'use client'

import { motion } from 'framer-motion'

const stats = [
    {
        value: '500+',
        label: 'Tamamlanan Proje',
    },
    {
        value: '50+',
        label: 'Aktif Müşteri',
    },
    {
        value: '10+',
        label: 'Yıllık Deneyim',
    },
]

interface StatsProps {
    className?: string
    variant?: 'default' | 'white'
}

export const Stats = ({ className = '', variant = 'default' }: StatsProps) => {
    return (
        <div className={`py-16 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative text-center"
                        >
                            <div className="relative mb-4">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">
                                    {stat.value}
                                </span>
                                <span className="absolute -right-4 top-0 h-3 w-3 rounded-full bg-primary-500/20" />
                            </div>
                            <p className="text-base font-medium text-gray-600">
                                {stat.label}
                            </p>
                            {index < stats.length - 1 && (
                                <div className="absolute right-0 top-1/2 hidden h-1/2 w-px -translate-y-1/2 bg-gray-200 md:block" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
