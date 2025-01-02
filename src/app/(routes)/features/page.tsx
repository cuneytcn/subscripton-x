'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
    BarChart3,
    Code2,
    Globe,
    Layers,
    LayoutGrid,
    Palette,
    Shield,
    Smartphone,
} from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        icon: <LayoutGrid className='h-6 w-6' />,
        title: 'Sürükle & Bırak Arayüz',
        description:
            'Kullanıcı dostu arayüz ile kolayca özelleştirilebilir tasarım imkanı.',
        image: '/images/features/drag-drop.webp',
    },
    {
        icon: <Smartphone className='h-6 w-6' />,
        title: 'Mobil Uyumluluk',
        description:
            'Tüm cihazlarda mükemmel görünen responsive tasarım desteği.',
        image: '/images/features/responsive.webp',
    },
    {
        icon: <Globe className='h-6 w-6' />,
        title: 'SEO Optimizasyonu',
        description:
            'Arama motorlarında üst sıralarda yer almanızı sağlayan SEO araçları.',
        image: '/images/features/seo.webp',
    },
    {
        icon: <Shield className='h-6 w-6' />,
        title: 'Gelişmiş Güvenlik',
        description:
            'SSL sertifikası ve güvenlik duvarı ile verileriniz güvende.',
        image: '/images/features/security.webp',
    },
    {
        icon: <BarChart3 className='h-6 w-6' />,
        title: 'Detaylı Analizler',
        description:
            'Ziyaretçi davranışlarını ve site performansını analiz edin.',
        image: '/images/features/analytics.webp',
    },
    {
        icon: <Code2 className='h-6 w-6' />,
        title: 'API Entegrasyonu',
        description:
            'Mevcut sistemlerinizle kolayca entegre edilebilir API desteği.',
        image: '/images/features/api.webp',
    },
]

export default function FeaturesPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        Özellikler ve Avantajlar
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Modern ve kullanıcı dostu çözümlerimizle işinizi
                        kolaylaştırıyoruz. İşte size sunduğumuz özellikler.
                    </p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='group rounded-2xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl'>
                            <div className='bg-primary-100 text-primary-600 mb-6 inline-block rounded-lg p-3'>
                                {feature.icon}
                            </div>
                            <div className='relative mb-6 h-48 overflow-hidden rounded-xl'>
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                                />
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

                <div className='mt-20 rounded-2xl bg-gray-50 p-8 text-center'>
                    <h2 className='mb-4 text-2xl font-bold'>
                        Daha Fazla Bilgi Mi Lazım?
                    </h2>
                    <p className='mb-8 text-gray-600'>
                        Özelliklerimiz hakkında detaylı bilgi almak için bizimle
                        iletişime geçin.
                    </p>
                    <Button size='lg'>İletişime Geç</Button>
                </div>
            </motion.div>
        </main>
    )
}
