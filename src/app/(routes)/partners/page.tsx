'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const partnerTypes = [
    {
        title: 'Teknoloji Partnerleri',
        description: 'Yazılım ve teknoloji çözümleri sunan iş ortaklarımız',
        benefits: [
            'Ortak ürün geliştirme fırsatları',
            'Teknik eğitim ve destek',
            'API ve entegrasyon desteği',
            'Ortak pazarlama faaliyetleri',
        ],
    },
    {
        title: 'Çözüm Ortakları',
        description: 'Müşterilerimize kapsamlı çözümler sunan iş ortaklarımız',
        benefits: [
            'Proje yönlendirmeleri',
            'Ortak proje geliştirme',
            'Satış ve pazarlama desteği',
            'İş geliştirme fırsatları',
        ],
    },
    {
        title: 'Danışmanlık Firmaları',
        description: 'Stratejik danışmanlık hizmeti sunan iş ortaklarımız',
        benefits: [
            'Endüstri uzmanlığı',
            'Stratejik planlama desteği',
            'Pazar analizi ve raporlama',
            'Networking fırsatları',
        ],
    },
]

export default function PartnersPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        İş Ortaklığı Programı
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Birlikte büyüyelim! İş ortaklığı programımıza katılarak
                        avantajlardan yararlanın ve başarıyı birlikte
                        yakalayalım.
                    </p>
                    <Button size='lg'>
                        <Link href='/contact?type=partnership'>
                            İş Ortağımız Olun
                        </Link>
                    </Button>
                </div>

                {/* Partner Tipleri */}
                <div className='mb-20 grid gap-8 md:grid-cols-3'>
                    {partnerTypes.map((type, index) => (
                        <motion.div
                            key={type.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='rounded-2xl bg-white p-6 shadow-lg'>
                            <h3 className='mb-4 text-xl font-bold'>
                                {type.title}
                            </h3>
                            <p className='mb-6 text-gray-600'>
                                {type.description}
                            </p>
                            <ul className='space-y-3'>
                                {type.benefits.map((benefit) => (
                                    <li
                                        key={benefit}
                                        className='flex items-center gap-2 text-sm text-gray-600'>
                                        <span className='bg-primary-100 text-primary-600 flex h-5 w-5 items-center justify-center rounded-full text-xs'>
                                            ✓
                                        </span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Başvuru CTA */}
                <div className='rounded-2xl bg-gray-50 p-8 text-center md:p-12'>
                    <h2 className='mb-4 text-2xl font-bold'>
                        İş Ortağımız Olmak İster misiniz?
                    </h2>
                    <p className='mx-auto mb-8 max-w-2xl text-gray-600'>
                        Hemen başvurun, ekibimiz sizinle iletişime geçsin ve iş
                        ortaklığı sürecini başlatalım.
                    </p>
                    <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Button size='lg'>
                            <Link href='/contact?type=partnership'>
                                Başvuru Yap
                            </Link>
                        </Button>
                        <Button variant='outline' size='lg'>
                            <Link href='/enterprise'>Detaylı Bilgi Al</Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
