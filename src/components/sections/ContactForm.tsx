'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/Alert'
import { Mail, MapPin, Phone } from 'lucide-react'

interface ContactFormProps {
    contact: {
        readonly title: string
        readonly description: string
        readonly contactInfo: readonly {
            readonly icon: string
            readonly title: string
            readonly description: string
            readonly href: string
        }[]
        readonly mapUrl: string
    } | null
}

export function ContactForm({ contact }: ContactFormProps) {
    const searchParams = useSearchParams()
    const plan = searchParams.get('plan')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [alert, setAlert] = useState<{
        type: 'success' | 'error'
        message: string
    } | null>(null)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: plan ? `${plan} planı hakkında bilgi almak istiyorum.` : '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setAlert(null)

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'contact',
                    ...formData,
                    plan: plan || undefined,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                })

                setAlert({
                    type: 'success',
                    message:
                        'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
                })
            } else {
                throw new Error(result.error)
            }
        } catch (error: any) {
            console.error('Error submitting form:', error)
            setAlert({
                type: 'error',
                message:
                    error.message ||
                    'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {alert && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={() => setAlert(null)}
                />
            )}
            <div className='mb-12 text-center'>
                <h1 className='mb-4 text-4xl font-bold md:text-5xl'>
                    İletişime Geçin
                </h1>
                <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                    Projeniz için ücretsiz danışmanlık alın. En kısa sürede size
                    dönüş yapalım.
                </p>
            </div>

            {/* Contact Cards */}
            <div className='mb-16 grid gap-8 md:grid-cols-3'>
                {contact?.contactInfo?.map((item) => (
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
                            {item.icon === 'Phone' && (
                                <Phone className='h-6 w-6' />
                            )}
                            {item.icon === 'Mail' && (
                                <Mail className='h-6 w-6' />
                            )}
                            {item.icon === 'MapPin' && (
                                <MapPin className='h-6 w-6' />
                            )}
                        </div>
                        <h3 className='mb-2 text-lg font-bold'>{item.title}</h3>
                        <p className='text-gray-600'>{item.description}</p>
                    </motion.a>
                ))}
            </div>

            <div className='grid gap-8 rounded-2xl bg-white p-8 shadow-lg lg:grid-cols-2'>
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    <h2 className='mb-6 text-2xl font-bold'>Mesaj Gönderin</h2>
                    <form onSubmit={handleSubmit} className='space-y-6'>
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
                                    required
                                    className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                    placeholder='Adınız'
                                    value={formData.firstName}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            firstName: e.target.value,
                                        }))
                                    }
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
                                    required
                                    className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                    placeholder='Soyadınız'
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            lastName: e.target.value,
                                        }))
                                    }
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
                                required
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='ornek@email.com'
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        email: e.target.value,
                                    }))
                                }
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
                                required
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='(5XX) XXX XX XX'
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        phone: e.target.value,
                                    }))
                                }
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
                                                word.charAt(0).toUpperCase() +
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
                                required
                                className='w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20'
                                placeholder='Mesajınızı yazın...'
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        message: e.target.value,
                                    }))
                                }
                            />
                        </div>

                        <Button
                            type='submit'
                            size='lg'
                            className='w-full'
                            disabled={isSubmitting}>
                            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
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
