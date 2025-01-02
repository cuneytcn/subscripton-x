'use client'

import { motion } from 'framer-motion'
import { ClipboardList, MessageSquare, Paintbrush, Rocket } from 'lucide-react'

const steps = [
    {
        icon: <MessageSquare className='h-8 w-8' />,
        title: 'Keşif Görüşmesi',
        description:
            'İhtiyaç ve hedeflerinizi anlamak için detaylı bir görüşme yapıyoruz.',
    },
    {
        icon: <ClipboardList className='h-8 w-8' />,
        title: 'Planlama',
        description:
            'Projeniz için kapsamlı bir plan ve zaman çizelgesi oluşturuyoruz.',
    },
    {
        icon: <Paintbrush className='h-8 w-8' />,
        title: 'Tasarım & Geliştirme',
        description:
            'Ekibimiz vizyonunuzu düzenli güncellemelerle hayata geçiriyor.',
    },
    {
        icon: <Rocket className='h-8 w-8' />,
        title: 'Yayına Alma',
        description:
            'Sorunsuz bir lansman ve ihtiyaç duyduğunuz sürekli destek sağlıyoruz.',
    },
]

export const Process = () => {
    return (
        <section className='bg-gray-50 py-20'>
            <div className='container mx-auto px-4'>
                <div className='mb-16 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-3xl font-bold md:text-4xl'>
                        Çalışma Sürecimiz
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='text-xl text-gray-600'>
                        Kanıtlanmış sürecimiz başarılı proje teslimatını garanti
                        eder
                    </motion.p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='relative text-center'>
                            <div className='mb-4 inline-block rounded-full bg-white p-4 shadow-lg'>
                                <div className='bg-primary-100 text-primary-600 rounded-full p-3'>
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className='mb-2 text-xl font-bold'>
                                {step.title}
                            </h3>
                            <p className='text-gray-600'>{step.description}</p>
                            {index < steps.length - 1 && (
                                <div className='absolute right-0 top-12 hidden h-0.5 w-1/2 bg-gray-300 lg:block'></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
