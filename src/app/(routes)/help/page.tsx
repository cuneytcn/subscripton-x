'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone } from 'lucide-react'

const contactMethods = [
    {
        icon: <MessageCircle className='h-6 w-6' />,
        title: 'Canlı Destek',
        description: 'Anlık destek için canlı sohbet başlatın',
        action: 'Sohbet Başlat',
        available: true,
    },
    {
        icon: <Mail className='h-6 w-6' />,
        title: 'E-posta Desteği',
        description: 'destek@sirket.com adresine mail gönderin',
        action: 'E-posta Gönder',
        available: true,
    },
    {
        icon: <Phone className='h-6 w-6' />,
        title: 'Telefon Desteği',
        description: 'Hafta içi 09:00-18:00 arası',
        action: '0850 123 45 67',
        available: false,
    },
]

const faqItems = [
    {
        question: 'Hizmetlerinizin fiyatları nedir?',
        answer: 'Fiyatlarımız projenin kapsamına göre değişiklik göstermektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.',
    },
    {
        question: 'Proje teslim süreniz nedir?',
        answer: 'Proje teslim süremiz, projenin büyüklüğüne ve karmaşıklığına göre değişmektedir. Ortalama bir web sitesi projesi 4-6 hafta içerisinde tamamlanmaktadır.',
    },
    {
        question: 'Ödeme koşullarınız nelerdir?',
        answer: 'Projelerimizde genellikle %40 peşin, %30 tasarım onayında, %30 proje tesliminde olmak üzere 3 taksit şeklinde ödeme planı uygulanmaktadır.',
    },
]

export default function HelpPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        Yardım Merkezi
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Size nasıl yardımcı olabiliriz? Aşağıdaki destek
                        kanallarından bizimle iletişime geçebilirsiniz.
                    </p>
                </div>

                {/* İletişim Yöntemleri */}
                <div className='mb-20 grid gap-8 md:grid-cols-3'>
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='rounded-2xl bg-white p-6 text-center shadow-lg'>
                            <div className='bg-primary-100 text-primary-600 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg'>
                                {method.icon}
                            </div>
                            <h3 className='mb-2 text-xl font-bold'>
                                {method.title}
                            </h3>
                            <p className='mb-4 text-gray-600'>
                                {method.description}
                            </p>
                            <Button
                                variant={
                                    method.available ? 'default' : 'outline'
                                }
                                className='w-full'
                                disabled={!method.available}
                                onClick={() =>
                                    method.title === 'Canlı Destek' &&
                                    window.open('/chat')
                                }>
                                {method.action}
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* SSS */}
                <div className='rounded-2xl bg-gray-50 p-8 md:p-12'>
                    <h2 className='mb-8 text-3xl font-bold'>
                        Sık Sorulan Sorular
                    </h2>
                    <div className='space-y-6'>
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={item.question}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}>
                                <h3 className='mb-2 text-xl font-bold'>
                                    {item.question}
                                </h3>
                                <p className='text-gray-600'>{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
