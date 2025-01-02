'use client'

import { motion } from 'framer-motion'
import { Lock, Shield, UserCheck, Zap } from 'lucide-react'

const securityFeatures = [
    {
        icon: <Shield className='h-6 w-6' />,
        title: 'SSL Şifreleme',
        description:
            'Tüm verileriniz SSL sertifikası ile şifrelenerek güvenli bir şekilde iletilir.',
    },
    {
        icon: <Lock className='h-6 w-6' />,
        title: 'Güvenli Altyapı',
        description:
            'En son güvenlik teknolojileri ile korunan sunucu altyapısı.',
    },
    {
        icon: <UserCheck className='h-6 w-6' />,
        title: 'Veri Gizliliği',
        description:
            'Kişisel verileriniz KVKK ve GDPR standartlarına uygun olarak işlenir.',
    },
    {
        icon: <Zap className='h-6 w-6' />,
        title: 'Sürekli İzleme',
        description:
            '7/24 güvenlik izleme ve tehdit önleme sistemleri ile koruma.',
    },
]

export default function SecurityPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                        Güvenlik Politikası
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Verilerinizin güvenliği bizim için öncelikli. En yüksek
                        güvenlik standartları ile hizmet veriyoruz.
                    </p>
                </div>

                {/* Güvenlik Özellikleri */}
                <div className='mb-20 grid gap-8 md:grid-cols-2'>
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='rounded-2xl bg-white p-6 shadow-lg'>
                            <div className='bg-primary-100 text-primary-600 mb-4 inline-block rounded-lg p-3'>
                                {feature.icon}
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

                {/* Detaylı Bilgi */}
                <div className='rounded-2xl bg-gray-50 p-8 md:p-12'>
                    <h2 className='mb-6 text-3xl font-bold'>
                        Güvenlik Taahhüdümüz
                    </h2>
                    <div className='prose prose-lg max-w-none'>
                        <p>
                            Müşterilerimizin güvenliği bizim için en önemli
                            önceliktir. Bu nedenle:
                        </p>
                        <ul>
                            <li>
                                Düzenli güvenlik testleri ve denetimleri
                                yapıyoruz
                            </li>
                            <li>
                                En son güvenlik güncellemelerini takip ediyoruz
                            </li>
                            <li>
                                Çalışanlarımıza düzenli güvenlik eğitimleri
                                veriyoruz
                            </li>
                            <li>
                                Veri güvenliği politikalarımızı sürekli
                                güncelliyoruz
                            </li>
                        </ul>
                        <p>
                            Herhangi bir güvenlik endişeniz veya sorunuz için
                            bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </div>
            </motion.div>
        </main>
    )
}
