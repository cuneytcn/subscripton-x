'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const siteMap = [
    {
        title: 'Ana Menü',
        links: [
            { name: 'Ana Sayfa', href: '/' },
            { name: 'Hizmetler', href: '/services' },
            { name: 'Hakkımızda', href: '/about' },
            { name: 'İletişim', href: '/contact' },
        ],
    },
    {
        title: 'Hizmetler',
        links: [
            { name: 'Web Tasarım', href: '/services/web-design' },
            { name: 'E-Ticaret', href: '/services/e-commerce' },
            { name: 'Mobil Uygulama', href: '/services/mobile-apps' },
            { name: 'Özel Yazılım', href: '/services/custom-software' },
        ],
    },
    {
        title: 'Kurumsal',
        links: [
            { name: 'Kariyer', href: '/careers' },
            { name: 'Blog', href: '/blog' },
            { name: 'Basın', href: '/press' },
            { name: 'İş Ortakları', href: '/partners' },
        ],
    },
    {
        title: 'Destek',
        links: [
            { name: 'Yardım Merkezi', href: '/help' },
            { name: 'Dokümantasyon', href: '/docs' },
            { name: 'SSS', href: '/faq' },
            { name: 'İletişim', href: '/contact' },
        ],
    },
    {
        title: 'Yasal',
        links: [
            { name: 'Gizlilik Politikası', href: '/privacy' },
            { name: 'Kullanım Koşulları', href: '/terms' },
            { name: 'KVKK', href: '/kvkk' },
            { name: 'Çerez Politikası', href: '/cookies' },
        ],
    },
]

export default function SitemapPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className='mb-12 text-4xl font-bold'>Site Haritası</h1>

                <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
                    {siteMap.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}>
                            <h2 className='mb-4 text-xl font-bold'>
                                {section.title}
                            </h2>
                            <ul className='space-y-2'>
                                {section.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className='text-gray-600 hover:text-gray-900'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </main>
    )
}
