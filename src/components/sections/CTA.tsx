'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
    {
        icon: <Phone className='h-6 w-6' />,
        title: 'Telefon',
        description: '+90 531 747 65 04',
        href: 'tel:+905317476504',
    },
    {
        icon: <Mail className='h-6 w-6' />,
        title: 'E-posta',
        description: 'hello@subscriptionx.com',
        href: 'mailto:hello@subscriptionx.com',
    },
    {
        icon: <MapPin className='h-6 w-6' />,
        title: 'Adres',
        description: 'İzmir, Türkiye',
        href: 'https://maps.google.com/?q=İzmir',
    },
]

export const CTA = () => {
    return (
        <section className='overflow-hidden py-20'>
            <div className='container relative mx-auto px-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='relative rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-20 text-center text-white md:py-32'>
                    <div className='relative'>
                        <h2 className='mb-4 text-4xl font-bold md:text-5xl'>
                            Hayalinizdeki Projeyi Gerçekleştirelim
                        </h2>
                        <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-300'>
                            İşletmenizi dijital dünyada öne çıkarmak için
                            profesyonel çözümlerimizle yanınızdayız.
                        </p>
                        <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
                            <Button
                                size='lg'
                                className='min-w-[200px] bg-white text-gray-900 hover:bg-gray-100'>
                                <Link href='/contact?source=cta'>
                                    Hemen Başlayalım
                                </Link>
                            </Button>
                            <Button
                                variant='outline'
                                size='lg'
                                className='min-w-[200px] border-white text-white hover:bg-white hover:text-gray-900'>
                                <Link href='/services?source=cta'>
                                    Detaylı Bilgi Al
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
