'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Kurumsal Web Sitesi',
        price: '14.999',
        description: 'Profesyonel kurumsal web sitesi çözümleri',
        features: [
            'Özel Tasarım',
            'Mobil Uyumlu Tasarım',
            'SEO Optimizasyonu',
            'Yönetim Paneli',
            'İletişim Formu',
            'Google Analytics Entegrasyonu',
            '1 Yıl Ücretsiz Hosting',
            'SSL Sertifikası',
        ],
    },
    {
        name: 'E-Ticaret Sitesi',
        price: '24.999',
        description: 'Kapsamlı e-ticaret çözümleri',
        features: [
            'Özel E-ticaret Tasarımı',
            'Mobil Uyumlu Tasarım',
            'SEO Optimizasyonu',
            'Gelişmiş Yönetim Paneli',
            'Ödeme Sistemi Entegrasyonu',
            'Kargo Entegrasyonu',
            'Muhasebe Entegrasyonu',
            'Pazaryeri Entegrasyonları',
            'SSL Sertifikası',
            '1 Yıl Ücretsiz Hosting',
        ],
        popular: true,
    },
    {
        name: 'Özel Yazılım',
        price: '49.999',
        description: 'İşletmenize özel yazılım çözümleri',
        features: [
            'İhtiyaca Özel Analiz',
            'Özel Tasarım ve Geliştirme',
            'API Entegrasyonları',
            'Veritabanı Tasarımı',
            'Gelişmiş Güvenlik',
            'Performans Optimizasyonu',
            'Teknik Dokümantasyon',
            'Kapsamlı Test Süreçleri',
            'Proje Yönetimi',
            '1 Yıl Teknik Destek',
        ],
    },
]

const faqs = [
    {
        question: 'Fiyatlara KDV dahil mi?',
        answer: 'Belirtilen fiyatlar KDV hariç başlangıç fiyatlarıdır. Projenin kapsamına göre fiyatlar değişiklik gösterebilir.',
    },
    {
        question: 'Ödeme koşulları nelerdir?',
        answer: 'Genel olarak %40 peşin, %30 tasarım onayında, %30 teslimatta şeklinde ödeme planı uygulanmaktadır.',
    },
    {
        question: 'Proje teslim süresi ne kadar?',
        answer: 'Kurumsal web sitesi 20-30 iş günü, e-ticaret siteleri 30-45 iş günü, özel yazılımlar proje kapsamına göre değişmektedir.',
    },
    {
        question: 'Hosting ve domain dahil mi?',
        answer: '1 yıl hosting hizmeti ve SSL sertifikası dahildir. Domain ücreti ayrıca faturalandırılır.',
    },
    {
        question: 'Bakım ve destek hizmeti var mı?',
        answer: 'Tüm paketlerde 1 yıl ücretsiz teknik destek sunulmaktadır. Sonraki yıllar için uygun fiyatlı bakım paketleri mevcuttur.',
    },
]

export default function PricingPage() {
    return (
        <main className='py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-20 text-center'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-4xl font-bold md:text-5xl'>
                        Web Sitesi ve Yazılım Çözümleri
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mx-auto max-w-2xl text-xl text-gray-600'>
                        İşletmenizin ihtiyaçlarına özel, profesyonel web
                        çözümleri. Başlangıç fiyatlarımızı inceleyin.
                    </motion.p>
                </div>

                {/* Pricing Cards */}
                <div className='mb-32 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
                                plan.popular ? 'ring-primary-500 ring-2' : ''
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
                                        'dan başlayan fiyatlarla
                                    </span>
                                </div>
                                <Button
                                    size='lg'
                                    variant={
                                        plan.popular ? 'default' : 'outline'
                                    }
                                    className='w-full'>
                                    Teklif Al
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

                {/* FAQ Section */}
                <div className='mx-auto max-w-3xl'>
                    <h2 className='mb-12 text-center text-3xl font-bold'>
                        Sıkça Sorulan Sorular
                    </h2>
                    <div className='space-y-8'>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}>
                                <h3 className='mb-2 text-xl font-bold'>
                                    {faq.question}
                                </h3>
                                <p className='text-gray-600'>{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
