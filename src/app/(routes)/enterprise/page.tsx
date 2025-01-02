'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const features = [
    {
        icon: <Shield className='h-6 w-6' />,
        title: 'Kurumsal Güvenlik',
        description:
            'ISO 27001 sertifikalı altyapımız ve gelişmiş güvenlik protokollerimizle verileriniz güvende.',
    },
    {
        icon: <Users className='h-6 w-6' />,
        title: 'Özel Destek Ekibi',
        description:
            '7/24 kurumsal müşterilerimize özel destek ekibi ile yanınızdayız.',
    },
    {
        icon: <Zap className='h-6 w-6' />,
        title: 'Yüksek Performans',
        description:
            'Ölçeklenebilir altyapımız ile yüksek trafikte bile kesintisiz hizmet.',
    },
]

const benefits = [
    'Özelleştirilebilir çözümler',
    'Öncelikli teknik destek',
    'SLA garantisi',
    'Özel eğitim ve danışmanlık',
    'API entegrasyonları',
    'Gelişmiş raporlama araçları',
    'Özel fiyatlandırma avantajları',
    'Yerinde kurulum desteği',
]

export default function EnterprisePage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        Kurumsal Çözümler
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        İşletmenizin ihtiyaçlarına özel, ölçeklenebilir ve
                        güvenli çözümler sunuyoruz.
                    </p>
                    <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                        <Button size='lg'>
                            <Link href='/contact?type=enterprise'>Hemen Görüşme Talep Et</Link>
                        </Button>
                        <Button variant='outline' size='lg'>
                            <Link href="/features">Çözümlerimizi İncele</Link>
                        </Button>
                    </div>
                </div>

                {/* Özellikler */}
                <div className='mb-20 grid gap-8 md:grid-cols-3'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='rounded-2xl bg-white p-6 shadow-lg'>
                            <div className='bg-primary-100 text-primary-600 mb-4 inline-block rounded-lg p-3'>
                                {feature.icon}
                            </div>
                            <h3 className='mb-2 text-xl font-bold'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-600'>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Avantajlar */}
                <div className='rounded-2xl bg-gray-50 p-8 md:p-12'>
                    <h2 className='mb-8 text-3xl font-bold'>
                        Kurumsal Avantajlar
                    </h2>
                    <div className='grid gap-4 md:grid-cols-2'>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className='flex items-center gap-3'>
                                <Check className='text-primary-600 h-5 w-5' />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
