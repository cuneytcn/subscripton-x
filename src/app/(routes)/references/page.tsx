'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const references = [
    {
        name: 'Teknoloji A.Ş.',
        logo: '/images/references/logo1.svg',
        description:
            'E-ticaret platformu geliştirme ve dijital dönüşüm projesi.',
        industry: 'E-ticaret',
        services: ['Web Geliştirme', 'UI/UX Tasarım', 'Mobil Uygulama'],
        testimonial: {
            content:
                'Ekip ile çalışmak harikaydı. Projemizi zamanında ve bütçe dahilinde tamamladılar.',
            author: 'Ahmet Yılmaz',
            title: 'Teknoloji Direktörü',
        },
    },
    {
        name: 'Finans Bank',
        logo: '/images/references/logo2.svg',
        description:
            'Online bankacılık uygulaması yenileme ve güvenlik altyapısı.',
        industry: 'Finans',
        services: ['Güvenlik', 'Backend Geliştirme', 'Mobile Banking'],
        testimonial: {
            content:
                'Güvenlik konusundaki uzmanlıkları ve profesyonel yaklaşımları ile fark yarattılar.',
            author: 'Mehmet Kaya',
            title: 'IT Müdürü',
        },
    },
    {
        name: 'Eğitim Plus',
        logo: '/images/references/logo3.svg',
        description:
            'Online eğitim platformu ve öğrenci takip sistemi geliştirme.',
        industry: 'Eğitim',
        services: ['Web Platformu', 'Öğrenci Paneli', 'Video Streaming'],
        testimonial: {
            content:
                'Uzaktan eğitim sürecinde ihtiyaçlarımızı tam olarak karşılayan bir platform geliştirdiler.',
            author: 'Zeynep Demir',
            title: 'Eğitim Koordinatörü',
        },
    },
    {
        name: 'Sağlık Net',
        logo: '/images/references/logo4.svg',
        description: 'Hastane yönetim sistemi ve hasta takip uygulaması.',
        industry: 'Sağlık',
        services: ['Yazılım Geliştirme', 'Mobil Uygulama', 'Veri Güvenliği'],
        testimonial: {
            content:
                'Sağlık sektörünün hassasiyetlerini anlayan ve buna uygun çözümler üreten harika bir ekip.',
            author: 'Dr. Ali Yıldız',
            title: 'Başhekim',
        },
    },
    {
        name: 'Tech Startup',
        logo: '/images/references/logo5.svg',
        description: 'IoT cihazları için mobil uygulama ve yönetim paneli.',
        industry: 'Teknoloji',
        services: ['IoT Platformu', 'Mobile App', 'Dashboard'],
        testimonial: {
            content:
                'Teknik uzmanlıkları ve yenilikçi yaklaşımları ile projemize değer kattılar.',
            author: 'Can Özkan',
            title: 'CTO',
        },
    },
    {
        name: 'E-Shop Market',
        logo: '/images/references/logo6.svg',
        description: 'B2B ve B2C e-ticaret platformları entegrasyonu.',
        industry: 'E-ticaret',
        services: ['E-ticaret', 'Entegrasyon', 'Ödeme Sistemleri'],
        testimonial: {
            content:
                'Satışlarımızı %200 artıran muhteşem bir e-ticaret deneyimi tasarladılar.',
            author: 'Ayşe Kara',
            title: 'E-ticaret Müdürü',
        },
    },
]

const industries = [
    'Tümü',
    'E-ticaret',
    'Finans',
    'Sağlık',
    'Eğitim',
    'Teknoloji',
]

export default function ReferencesPage() {
    const [selectedIndustry, setSelectedIndustry] = useState('Tümü')

    const filteredReferences = references.filter(
        (ref) =>
            selectedIndustry === 'Tümü' || ref.industry === selectedIndustry,
    )

    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {/* Hero Section */}
                <div className='mb-16 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        Referanslarımız
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Farklı sektörlerden önde gelen markalarla çalışıyor,
                        başarılı projelere imza atıyoruz.
                    </p>

                    {/* Industry Filter */}
                    <div className='flex flex-wrap items-center justify-center gap-3'>
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => setSelectedIndustry(industry)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                                    selectedIndustry === industry ?
                                        'bg-primary-50 text-primary-600 shadow-md'
                                    :   'bg-white text-gray-600 shadow-sm hover:bg-gray-50 hover:shadow-md'
                                }`}>
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                {/* References Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {filteredReferences.map((reference, index) => (
                        <motion.div
                            key={reference.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='group rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl'>
                            {/* Logo */}
                            <div className='mb-6 flex h-16 items-center justify-center'>
                                <Image
                                    src={reference.logo}
                                    alt={reference.name}
                                    width={160}
                                    height={48}
                                    className='h-12 w-auto object-contain'
                                />
                            </div>

                            {/* Content */}
                            <div className='mb-6'>
                                <h3 className='mb-2 text-xl font-bold'>
                                    {reference.name}
                                </h3>
                                <p className='mb-4 text-gray-600'>
                                    {reference.description}
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {reference.services.map((service) => (
                                        <span
                                            key={service}
                                            className='bg-primary-50 text-primary-600 rounded-full px-3 py-1 text-sm'>
                                            {service}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className='rounded-xl bg-gray-50 p-6'>
                                <p className='mb-4 text-gray-600'>
                                    "{reference.testimonial.content}"
                                </p>
                                <div>
                                    <div className='font-medium'>
                                        {reference.testimonial.author}
                                    </div>
                                    <div className='text-sm text-gray-500'>
                                        {reference.testimonial.title}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    )
}
