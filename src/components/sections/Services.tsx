'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Code2, Layout, Palette, Smartphone } from 'lucide-react'
import Link from 'next/link'

const services = [
    {
        icon: <Palette className='h-8 w-8' />,
        title: 'Dijital Reklam',
        description:
            'Hedef kitlenize ulaşmanızı sağlayan etkili dijital reklam çözümleri.',
        image: '/images/services/digital-advertising.png',
    },
    {
        icon: <Layout className='h-8 w-8' />,
        title: 'Sosyal Medya',
        description:
            'Markanızı öne çıkaran, dikkat çekici sosyal medya tasarımları.',
        image: '/images/services/social-media.png',
    },
    {
        icon: <Code2 className='h-8 w-8' />,
        title: 'Web Tasarım',
        description: 'Tüm cihazlarda mükemmel görünen, işlevsel web siteleri.',
        image: '/images/services/web-design.png',
    },
    {
        icon: <Smartphone className='h-8 w-8' />,
        title: 'Mobil Tasarım',
        description: 'Kullanıcı dostu ve modern arayüzlü mobil uygulamalar.',
        image: '/images/services/mobile-design.png ',
    },
]

export const Services = () => {
    return (
        <section className='py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-20 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-4xl font-bold md:text-5xl'>
                        Geniş Kapsamlı Tasarım Hizmetleri
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mx-auto max-w-2xl text-xl text-gray-600'>
                        İşletmenizin ihtiyaçlarına özel, kapsamlı dijital
                        çözümlerle online varlığınızı güçlendirin.
                    </motion.p>
                </div>

                <div className='grid gap-8 md:grid-cols-2'>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>

                <div className='mt-16 flex flex-col justify-center gap-4 md:flex-row'>
                    <Button size='lg'>
                        <Link href='/contact?source=services'>
                            İletişime Geç
                        </Link>
                    </Button>
                    <Button variant='outline' size='lg'>
                        <Link href='/services?source=services-section'>
                            Tüm Hizmetleri İncele
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

interface ServiceCardProps {
    icon: React.ReactNode
    image: string
    title: string
    description: string
    index: number
}

const ServiceCard = ({
    icon,
    image,
    title,
    description,
    index,
}: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl'>
            <div className='relative mb-6 h-60 overflow-hidden rounded-xl'>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
            </div>
            <h3 className='mb-4 text-2xl font-bold'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </motion.div>
    )
}
