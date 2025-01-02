'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

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

function ContactContent() {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan')

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <div className='mb-12 text-center'>
                <h1 className='mb-4 text-4xl font-bold md:text-5xl'>
                    İletişime Geçin
                </h1>
                <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                    Projeniz için ücretsiz danışmanlık alın. En kısa
                    sürede size dönüş yapalım.
                </p>
            </div>

            {/* Contact Cards */}
            <div className='mb-16 grid gap-8 md:grid-cols-3'>
                {contactInfo.map((item) => (
                    <motion.a
                        key={item.title}
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        className='group block rounded-2xl bg-white p-8 text-center shadow-lg transition-all hover:shadow-xl'>
                        <div className='mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white'>
                            {item.icon}
                        </div>
                        <h3 className='mb-2 text-lg font-bold'>
                            {item.title}
                        </h3>
                        <p className='text-gray-600'>
                            {item.description}
                        </p>
                    </motion.a>
                ))}
            </div>

            <div className='grid gap-8 rounded-2xl bg-white p-8 shadow-lg lg:grid-cols-2'>
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <h2 className='mb-6 text-2xl font-bold'>
                        Mesaj Gönderin
                    </h2>
                    <form className='space-y-6'>
                        <div className='grid gap-6 md:grid-cols-2'>
                            <div>
                                <label
                                    htmlFor='firstName'
                                    className='mb-2 block text-sm font-medium text-gray-700'>
                                    Ad
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                    placeholder='Adınız'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='lastName'
                                    className='mb-2 block text-sm font-medium text-gray-700'>
                                    Soyad
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                    placeholder='Soyadınız'
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor='email'
                                className='mb-2 block text-sm font-medium text-gray-700'>
                                E-posta
                            </label>
                            <input
                                type='email'
                                id='email'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='ornek@email.com'
                            />
                        </div>

                        <div>
                            <label
                                htmlFor='phone'
                                className='mb-2 block text-sm font-medium text-gray-700'>
                                Telefon
                            </label>
                            <input
                                type='tel'
                                id='phone'
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='(5XX) XXX XX XX'
                            />
                        </div>

                        {plan && (
                            <div>
                                <label
                                    htmlFor='plan'
                                    className='mb-2 block text-sm font-medium text-gray-700'>
                                    Seçilen Plan
                                </label>
                                <input
                                    type='text'
                                    id='plan'
                                    value={plan
                                        .split('-')
                                        .map(
                                            (word) =>
                                                word
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                word.slice(1),
                                        )
                                        .join(' ')}
                                    readOnly
                                    className='w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2.5'
                                />
                            </div>
                        )}

                        <div>
                            <label
                                htmlFor='message'
                                className='mb-2 block text-sm font-medium text-gray-700'>
                                Mesajınız
                            </label>
                            <textarea
                                id='message'
                                rows={4}
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='Mesajınızı yazın...'
                                defaultValue={
                                    plan ?
                                        `${plan} planı hakkında bilgi almak istiyorum.`
                                    :   ''
                                }
                            />
                        </div>

                        <Button
                            type='submit'
                            size='lg'
                            className='w-full'>
                            Gönder
                        </Button>
                    </form>
                </motion.div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='relative min-h-[400px] overflow-hidden rounded-xl'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100959.98406789821!2d27.142833399999998!3d38.418677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str'
                        width='100%'
                        height='100%'
                        style={{
                            border: 0,
                            position: 'absolute',
                            inset: 0,
                        }}
                        allowFullScreen
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default function ContactPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <Suspense fallback={<div>Loading...</div>}>
                <ContactContent />
            </Suspense>
        </main>
    )
}
