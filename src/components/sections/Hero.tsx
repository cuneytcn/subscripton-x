'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
    hero : any
}


export const Hero = ({ hero }: HeroProps) => {


    return (
        <section className='relative overflow-hidden bg-white pt-32 lg:pt-40'>
            <div className='container relative mx-auto px-4'>
                <div className='grid items-center gap-12 lg:grid-cols-2'>
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='relative z-10'>
                        {/* Badge */}
                        <div className='mb-8 hidden items-center gap-2 rounded-full bg-gray-50 px-4 py-2 md:inline-flex'>
                            <span className='text-primary-600 text-sm font-medium'>
                                {hero?.title}
                            </span>
                            <span className='h-1 w-1 rounded-full bg-gray-300' />
                            <span className='text-sm text-gray-600'>
                                {hero?.subtitle}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className='mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
                            İşletmeniz için{' '}
                            <span className='from-primary-600 to-primary-400 bg-gradient-to-r bg-clip-text text-transparent'>
                                modern web çözümleri
                            </span>
                        </h1>

                        {/* Description */}
                        <p className='mb-8 max-w-2xl text-lg text-gray-600 lg:text-xl'>
                            Profesyonel web tasarım ve yazılım hizmetlerimizle
                            işletmenizi dijital dünyada öne çıkarın. Ücretsiz
                            danışmanlık ve özel fiyatlarla yanınızdayız.
                        </p>

                        {/* CTAs */}
                        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
                            <Button size='lg' className='group'>
                                <Link
                                    href='/contact?source=hero'
                                    className='flex items-center gap-2'>
                                    Hemen Başlayalım
                                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                </Link>
                            </Button>
                            <Button variant='outline' size='lg'>
                                <Link href='/services?source=hero'>
                                    Hizmetleri İncele
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className='mt-12 hidden flex-wrap items-center gap-8 border-t border-gray-100 pt-8 md:flex'>
                            <div>
                                <div className='text-primary-600 mb-1 text-2xl font-bold'>
                                    500+
                                </div>
                                <div className='text-sm text-gray-600'>
                                    Tamamlanan Proje
                                </div>
                            </div>
                            <div>
                                <div className='text-primary-600 mb-1 text-2xl font-bold'>
                                    %100
                                </div>
                                <div className='text-sm text-gray-600'>
                                    Müşteri Memnuniyeti
                                </div>
                            </div>
                            <div>
                                <div className='text-primary-600 mb-1 text-2xl font-bold'>
                                    7/24
                                </div>
                                <div className='text-sm text-gray-600'>
                                    Destek
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='relative lg:ml-8'>
                        <div className='relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/3]'>
                            <Image
                                src='/images/hero-img.png'
                                alt='Web Tasarım ve Yazılım Hizmetleri'
                                fill
                                className='object-cover'
                                priority
                            />
                        </div>
                        {/* Floating Card */}
                        <div className='absolute -right-4 -top-4 hidden rounded-lg bg-white p-4 shadow-lg lg:block'>
                            <div className='flex items-center gap-3'>
                                <div className='bg-primary-50 rounded-lg p-2'>
                                    <div className='text-primary-600 text-sm font-medium'>
                                        {hero?.discountPercentage}
                                    </div>
                                </div>
                                <div className='text-sm'>
                                    <div className='font-medium'>
                                        Yeni Yıla Özel İndirim
                                    </div>
                                    <div className='text-gray-600'>
                                        {hero?.discountEndDate}'a kadar
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
