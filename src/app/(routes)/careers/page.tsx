'use client'

import { Button } from '@/components/ui/button'
import { CareerModal } from '@/components/modals/CareerModal'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const positions = [
    {
        title: 'Senior Frontend Geliştirici',
        type: 'Tam Zamanlı',
        location: 'Uzaktan',
        department: 'Yazılım Geliştirme',
        description:
            'React ve modern frontend teknolojileri konusunda deneyimli, kullanıcı deneyimini önemseyen takım arkadaşı arıyoruz.',
        requirements: [
            '5+ yıl React/Next.js deneyimi',
            'TypeScript ve modern JavaScript konularında uzmanlık',
            'Responsive tasarım ve cross-browser uyumluluk konularında deneyim',
            'UI/UX prensipleri hakkında bilgi sahibi olmak',
        ],
    },
    {
        title: 'UI/UX Tasarımcı',
        type: 'Tam Zamanlı',
        location: 'Hibrit',
        department: 'Tasarım',
        description:
            'Kullanıcı odaklı düşünen, modern tasarım trendlerini takip eden yaratıcı tasarımcı arıyoruz.',
        requirements: [
            'En az 3 yıl UI/UX tasarım deneyimi',
            'Figma ve Adobe Creative Suite konusunda uzmanlık',
            'Kullanıcı araştırması ve test süreçleri deneyimi',
            'Güçlü iletişim ve sunum becerileri',
        ],
    },
    {
        title: 'Backend Geliştirici',
        type: 'Tam Zamanlı',
        location: 'Uzaktan',
        department: 'Yazılım Geliştirme',
        description:
            'Node.js ve veritabanı sistemleri konusunda deneyimli, ölçeklenebilir sistemler geliştirebilen geliştirici arıyoruz.',
        requirements: [
            'Node.js ve Express.js konusunda 3+ yıl deneyim',
            'PostgreSQL ve MongoDB deneyimi',
            'RESTful API tasarımı ve geliştirmesi konusunda tecrübe',
            'AWS veya benzeri cloud servisleri deneyimi',
        ],
    },
    {
        title: 'Dijital Pazarlama Uzmanı',
        type: 'Tam Zamanlı',
        location: 'Ofis',
        department: 'Pazarlama',
        description:
            'Dijital pazarlama stratejileri oluşturabilen, analitik düşünebilen takım arkadaşı arıyoruz.',
        requirements: [
            'En az 2 yıl dijital pazarlama deneyimi',
            'Google Analytics ve SEO konularında uzmanlık',
            'Sosyal medya yönetimi ve içerik stratejisi deneyimi',
            'A/B testing ve veri analizi becerileri',
        ],
    },
]

const NoPositions = ({ onOpenModal }: { onOpenModal: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='rounded-2xl bg-gray-50 p-8 text-center md:p-12'>
            <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100'>
                <Mail className='h-8 w-8 text-gray-600' />
            </div>
            <h2 className='mb-4 text-2xl font-bold'>
                Şu anda açık pozisyonumuz bulunmuyor
            </h2>
            <p className='mx-auto mb-8 max-w-2xl text-gray-600'>
                Ancak her zaman yetenekli kişilerle tanışmaktan mutluluk
                duyarız. Özgeçmişinizi gönderin, uygun bir pozisyon açıldığında
                sizinle iletişime geçelim.
            </p>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                <Button size='lg' onClick={onOpenModal}>
                    Özgeçmişini Gönder
                </Button>
                <Button variant='outline' size='lg'>
                    Şirketi Keşfet
                </Button>
            </div>
        </motion.div>
    )
}

export default function CareersPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const hasOpenPositions = positions.length > 0

    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className='mb-6 text-4xl font-bold'>Kariyer Fırsatları</h1>
                <p className='mb-12 text-xl text-gray-600'>
                    Yetenekli ve tutkulu ekibimize katılın. Birlikte geleceği
                    şekillendirelim.
                </p>

                {hasOpenPositions ?
                    <>
                        <div className='mb-16 grid gap-6 md:grid-cols-2'>
                            {positions.map((position, index) => (
                                <motion.div
                                    key={position.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className='group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'>
                                    <div className='mb-4 flex items-start justify-between gap-4'>
                                        <div>
                                            <h3 className='mb-1 text-xl font-bold'>
                                                {position.title}
                                            </h3>
                                            <div className='flex flex-wrap gap-2 text-sm'>
                                                <span className='text-primary-600 font-medium'>
                                                    {position.department}
                                                </span>
                                                <span className='text-gray-600'>
                                                    •
                                                </span>
                                                <span className='text-gray-600'>
                                                    {position.type}
                                                </span>
                                                <span className='text-gray-600'>
                                                    •
                                                </span>
                                                <span className='text-gray-600'>
                                                    {position.location}
                                                </span>
                                            </div>
                                        </div>
                                        <Button
                                            variant='ghost'
                                            className='group-hover:bg-primary-50 -m-2 p-2'>
                                            <Link
                                                href={`/careers/${position.title.toLowerCase().replace(/ /g, '-')}`}>
                                                <ArrowRight className='h-5 w-5' />
                                            </Link>
                                        </Button>
                                    </div>
                                    <p className='mb-4 text-gray-600'>
                                        {position.description}
                                    </p>
                                    <div className='space-y-2'>
                                        <h4 className='font-medium'>
                                            Gereksinimler:
                                        </h4>
                                        <ul className='ml-5 list-disc space-y-1 text-sm text-gray-600'>
                                            {position.requirements.map(
                                                (req) => (
                                                    <li key={req}>{req}</li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className='rounded-2xl bg-gray-50 p-8 text-center'>
                            <h2 className='mb-2 text-2xl font-bold'>
                                Aradığınız Pozisyonu Bulamadınız mı?
                            </h2>
                            <p className='mb-6 text-gray-600'>
                                Özgeçmişinizi gönderin, uygun bir pozisyon
                                açıldığında sizinle iletişime geçelim.
                            </p>
                            <Button size='lg' onClick={() => setIsModalOpen(true)}>
                                Özgeçmişini Gönder
                            </Button>
                        </div>
                    </>
                :   <NoPositions onOpenModal={() => setIsModalOpen(true)} />}
            </motion.div>

            <CareerModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </main>
    )
}
