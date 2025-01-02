'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
    Code2,
    Layout,
    Palette,
    PenTool,
    Smartphone,
    Video,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Stats } from '@/components/sections/Stats'

const services = [
    {
        icon: <Palette className='h-8 w-8' />,
        title: 'UI/UX Tasarım',
        description:
            'Kullanıcı dostu ve etkileyici arayüzler ile müşterilerinize en iyi deneyimi sunun.',
        image: '/images/services/digital-advertising.png',
        features: [
            'Kullanıcı Araştırması',
            'Wireframe ve Prototip',
            'Görsel Tasarım',
            'Kullanılabilirlik Testleri',
        ],
    },
    {
        icon: <Layout className='h-8 w-8' />,
        title: 'Web Tasarım',
        description:
            'Tüm cihazlarda mükemmel görünen ve işletmenizi en iyi şekilde yansıtan web siteleri.',
        image: '/images/services/web-design.png',
        features: [
            'Responsive Tasarım',
            'Özel WordPress',
            'E-ticaret Çözümleri',
            'SEO Optimizasyonu',
        ],
    },
    {
        icon: <Smartphone className='h-8 w-8' />,
        title: 'Mobil Tasarım',
        description:
            'Kullanıcılarınıza kesintisiz bir deneyim sunan native mobil uygulamalar.',
        image: '/images/services/mobile-design.png',
        features: [
            'iOS ve Android Tasarım',
            'Uygulama UI/UX',
            'Tasarım Sistemleri',
            'App Store Materyalleri',
        ],
    },
    {
        icon: <PenTool className='h-8 w-8' />,
        title: 'SEO Optimizasyonu',
        description:
            'Google arama sonuçlarında daha üst sıralarda yer almak için tasarımınızı optimize ediyoruz.',
        image: '/images/services/seo.png',
        features: ['Google SEO', 'Google Ads', 'Yandex SEO', 'Yandex Ads'],
    },
    {
        icon: <Code2 className='h-8 w-8' />,
        title: 'Yazılım Geliştirme',
        description:
            'Tasarımları tam işlevsel web sitelerine ve uygulamalara dönüştürüyoruz.',
        image: '/images/services/development.png',
        features: [
            'Frontend Geliştirme',
            'Backend Geliştirme',
            'API Entegrasyonu',
            'Performans Optimizasyonu',
        ],
    },
    {
        icon: <Video className='h-8 w-8' />,
        title: 'Sosyal Medya Reklamciligi',
        description:
            'Sosyal medya platformlarında reklam yönetimi ve performans izleme.',
        image: '/images/services/social-media.png',
        features: [
            'Facebook Ads',
            'Instagram Ads',
            'Youtube Ads',
            'Tiktok Ads',
        ],
    },
]

export default function ServicesPage() {
    return (
        <main className='pb-20 pt-32'>
            <div className='container mx-auto px-4'>
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='mb-20 text-center'
                >
                    <h1 className='mb-6 text-5xl font-bold md:text-6xl'>
                        Hizmetlerimiz
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        İşletmenizin dijital dünyada başarılı olması için
                        ihtiyaç duyduğu tüm tasarım ve yazılım hizmetlerini
                        sunuyoruz.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1 + 0.3,
                            }}
                            className='group rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl'
                        >
                            <div className='mb-6 inline-block rounded-lg bg-primary-100 p-3 text-primary-600'>
                                {service.icon}
                            </div>
                            <h3 className='mb-4 text-2xl font-bold'>
                                {service.title}
                            </h3>
                            <p className='mb-6 text-gray-600'>
                                {service.description}
                            </p>
                            <div className='relative mb-6 aspect-[16/9] overflow-hidden rounded-lg'>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                            </div>
                            <ul className='mb-6 space-y-2'>
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className='flex items-center gap-2 text-gray-600'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-primary-100' />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {/* <Button size='lg'>
                                <Link href='/contact?source=services-page'>
                                    Teklif Al
                                </Link>
                            </Button> */}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </main>
    )
}
