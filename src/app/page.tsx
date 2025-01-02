'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { CTA } from '@/components/sections/CTA'
import { Stats } from '@/components/sections/Stats'

const plans = [
    {
        name: 'Kurumsal Web Sitesi',
        price: '14.999',
        slug: 'kurumsal-web-sitesi',
        description: 'Profesyonel kurumsal web sitesi çözümleri',
        features: [
            'Özel Tasarım',
            'Mobil Uyumlu Tasarım',
            'SEO Optimizasyonu',
            'Yönetim Paneli',
            'İletişim Formu',
            'Google Analytics Entegrasyonu',
        ],
    },
    {
        name: 'E-Ticaret Sitesi',
        price: '24.999',
        slug: 'e-ticaret-sitesi',
        description: 'Kapsamlı e-ticaret çözümleri',
        features: [
            'Özel E-ticaret Tasarımı',
            'Mobil Uyumlu Tasarım',
            'SEO Optimizasyonu',
            'Gelişmiş Yönetim Paneli',
            'Ödeme Sistemi Entegrasyonu',
            'Kargo Entegrasyonu',
        ],
        popular: true,
    },
    {
        name: 'Özel Yazılım',
        price: '49.999',
        slug: 'ozel-yazilim',
        description: 'İşletmenize özel yazılım çözümleri',
        features: [
            'İhtiyaca Özel Analiz',
            'Özel Tasarım ve Geliştirme',
            'API Entegrasyonları',
            'Veritabanı Tasarımı',
            'Gelişmiş Güvenlik',
            'Performans Optimizasyonu',
        ],
    },
]

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Services />
            <Process />
            <Stats className='container mx-auto mb-32 px-4' variant='white' />
            <section className='bg-gray-50 py-32'>
                <div className='container mx-auto px-4'>
                    <div className='mb-20 text-center'>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='mb-4 text-4xl font-bold md:text-5xl'>
                            Web Sitesi ve Yazılım Çözümleri
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className='mx-auto max-w-2xl text-xl text-gray-600'>
                            İşletmenizin ihtiyaçlarına özel, profesyonel web
                            çözümleri. Başlangıç fiyatlarımızı inceleyin.
                        </motion.p>
                    </div>

                    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={`relative rounded-2xl bg-white p-8 shadow-lg ${
                                    plan.popular ?
                                        'ring-primary-500 ring-2'
                                    :   ''
                                }`}>
                                {plan.popular && (
                                    <span className='bg-primary-500 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-medium text-white'>
                                        En Çok Tercih Edilen
                                    </span>
                                )}
                                <div className='mb-8'>
                                    <h3 className='mb-2 text-2xl font-bold'>
                                        {plan.name}
                                    </h3>
                                    <p className='mb-6 text-gray-600'>
                                        {plan.description}
                                    </p>
                                    <div className='mb-6 flex items-baseline'>
                                        <span className='text-4xl font-bold'>
                                            ₺{plan.price}
                                        </span>
                                        <span className='ml-2 text-gray-600'>
                                            dan başlayan fiyatlarla
                                        </span>
                                    </div>
                                    <Button
                                        size='lg'
                                        variant={
                                            plan.popular ? 'default' : 'outline'
                                        }
                                        className='w-full'>
                                        <Link
                                            href={`/contact?plan=${plan.slug}&price=${plan.price}&source=pricing${
                                                plan.popular ?
                                                    '&recommended=true'
                                                :   ''
                                            }`}>
                                            Hemen Teklif Al
                                        </Link>
                                    </Button>
                                </div>
                                <div className='space-y-4'>
                                    {plan.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className='flex items-center gap-3'>
                                            <Check className='text-primary-500 h-5 w-5' />
                                            <span className='text-gray-600'>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className='mt-12 text-center'>
                        <Button
                            variant='outline'
                            size='lg'
                            className='min-w-[200px]'>
                            <Link href='/pricing?source=home-pricing'>
                                Tüm Özellikleri İncele
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    )
}
