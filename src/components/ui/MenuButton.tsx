'use client'

import { motion } from 'framer-motion'

interface MenuButtonProps {
    isOpen: boolean
    onClick: () => void
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
    return (
        <button
            onClick={onClick}
            className="relative h-10 w-10 rounded-lg p-2 hover:bg-gray-100"
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
        >
            <div className="relative h-6 w-6">
                {/* Üst çizgi */}
                <motion.span
                    className="absolute left-0 top-0 h-0.5 w-6 bg-gray-900"
                    animate={{
                        rotate: isOpen ? 45 : 0,
                        y: isOpen ? 10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                />
                {/* Orta çizgi */}
                <motion.span
                    className="absolute left-0 top-[10px] h-0.5 w-6 bg-gray-900"
                    animate={{
                        opacity: isOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                />
                {/* Alt çizgi */}
                <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-6 bg-gray-900"
                    animate={{
                        rotate: isOpen ? -45 : 0,
                        y: isOpen ? -10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                />
            </div>
        </button>
    )
} 