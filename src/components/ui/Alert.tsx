import { motion } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

interface AlertProps {
    type: 'success' | 'error'
    message: string
    onClose: () => void
}

export function Alert({ type, message, onClose }: AlertProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed right-4 top-4 z-50 flex items-center gap-2 rounded-lg p-4 shadow-lg ${
                type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
        >
            {type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
            ) : (
                <XCircle className="h-5 w-5" />
            )}
            <p className="text-sm font-medium">{message}</p>
            <button
                onClick={onClose}
                className="ml-4 rounded-lg p-1 hover:bg-black/5"
            >
                ✕
            </button>
        </motion.div>
    )
} 