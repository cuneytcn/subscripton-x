'use client'

import { Button } from '@/components/ui/button'
import { CareerModal } from '@/components/modals/CareerModal'
import { useState } from 'react'

export default function CareerPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <main className="container mx-auto px-4 py-32">
            {/* Diğer kariyer sayfası içeriği */}
            
            <Button 
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="mx-auto"
            >
                Özgeçmiş Gönder
            </Button>

            <CareerModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </main>
    )
} 