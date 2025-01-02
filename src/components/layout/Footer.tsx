'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
    {
        title: 'Şirket',
        links: [
            { name: 'Hakkımızda', href: '/about' },
            { name: 'Kariyer', href: '/careers' },
            { name: 'Blog', href: '/blog' },
            { name: 'Basın', href: '/press' },
        ],
    },
    {
        title: 'Ürünler',
        links: [
            { name: 'Özellikler', href: '/features' },
            { name: 'Fiyatlandırma', href: '/pricing' },
            { name: 'Güvenlik', href: '/security' },
            { name: 'Kurumsal', href: '/enterprise' },
        ],
    },
    {
        title: 'Kaynaklar',
        links: [
            { name: 'Dokümantasyon', href: '/docs' },
            { name: 'Yardım Merkezi', href: '/help' },
            { name: 'İletişim', href: '/contact' },
            { name: 'İş Ortakları', href: '/partners' },
        ],
    },
    {
        title: 'Yasal',
        links: [
            { name: 'Gizlilik', href: '/privacy' },
            { name: 'Kullanım Koşulları', href: '/terms' },
            { name: 'Güvenlik', href: '/security' },
            { name: 'Site Haritası', href: '/sitemap' },
        ],
    },
]

const socialLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/subscriptionx',
        icon: Twitter,
    },
    {
        name: 'Facebook',
        href: 'https://facebook.com/subscriptionx',
        icon: Facebook,
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/subscriptionx',
        icon: Instagram,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/company/subscriptionx',
        icon: Linkedin,
    },
]

export const Footer = () => {
    return (
        <footer className='bg-gray-50 pt-24'>
            <div className='container mx-auto px-4'>
                {/* Main Content */}
                <div className='mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-6'>
                    {/* Newsletter Section */}
                    <div className='lg:col-span-2'>
                        <Link href='/' className='mb-6 inline-block'>
                            <Image
                                src='/images/logos/logo-dark.svg'
                                alt='SubscriptionX'
                                width={180}
                                height={40}
                                className='h-8 w-auto sm:h-9 md:h-10'
                            />
                        </Link>
                        <p className='mb-8 text-gray-600'>
                            En son güncellemeler ve hizmetlerimiz hakkında bilgi
                            almak için bültenimize abone olun.
                        </p>
                        <form className='flex flex-col gap-2 md:flex-row'>
                            <input
                                type='email'
                                placeholder='E-posta adresiniz'
                                className='focus:border-primary-500 focus:ring-primary-500/20 flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2'
                            />
                            <Button type='submit'>Abone Ol</Button>
                        </form>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className='mb-6 font-bold'>{section.title}</h3>
                            <ul className='space-y-4'>
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className='text-gray-600 hover:text-gray-900'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className='border-t border-gray-200 py-8'>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                        <p className='text-sm text-gray-600'>
                            © {new Date().getFullYear()} SubscriptionX. Tüm
                            hakları saklıdır.
                        </p>
                        <div className='flex gap-4'>
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    className='text-gray-600 hover:text-gray-900'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <social.icon className='h-5 w-5' />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
