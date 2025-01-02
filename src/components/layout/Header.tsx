'use client'

import { Button } from '@/components/ui/button'
import { Dialog, Transition } from '@headlessui/react'
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useClickOutside } from '@/hooks/useClickOutside'
import { usePreventScroll } from '@/hooks/usePreventScroll'

const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Referanslar', href: '/references' },
    { name: 'Kurumsal', href: '/enterprise' },
    { name: 'İletişim', href: '/contact' },
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const addToRefs = useClickOutside(() => setIsOpen(false))

    // Menü açıkken scroll'u engelle
    usePreventScroll(isOpen)

    return (
        <header className='fixed left-0 right-0 top-0 z-50'>
            <div className='bg-white/80 backdrop-blur-sm'>
                <div className='container mx-auto px-4'>
                    <div className='flex h-20 items-center justify-between'>
                        <Link href='/' className='flex items-center'>
                            <Image
                                src='/images/logos/logo-dark.svg'
                                alt='Logo'
                                width={180}
                                height={40}
                                className='h-7 w-auto md:h-8'
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className='hidden items-center gap-8 lg:flex'>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className='text-gray-600 hover:text-gray-900'>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className='hidden items-center gap-4 md:flex ml-auto lg:ml-0'>
                            <Button
                                size='lg'
                                variant='outline'
                                className='group border-2 border-black hover:bg-black hover:text-white'>
                                <Link
                                    href='/contact?source=header'
                                    className='flex items-center gap-2'>
                                    <Sparkles className='h-4 w-4' />
                                    <span>Teklif Al</span>
                                    <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                </Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            ref={(el) => addToRefs(el)}
                            className='relative h-6 w-6 text-gray-600 hover:text-gray-900 lg:hidden ml-6'
                            onClick={() => setIsOpen(!isOpen)}>
                            <AnimatePresence mode='wait'>
                                {isOpen ?
                                    <motion.div
                                        key='close'
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}>
                                        <X className='h-6 w-6' />
                                    </motion.div>
                                :   <motion.div
                                        key='menu'
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}>
                                        <Menu className='h-6 w-6' />
                                    </motion.div>
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={(el) => addToRefs(el)}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className='absolute left-0 right-0 overflow-hidden bg-white shadow-lg lg:hidden'>
                            <nav className='container mx-auto flex flex-col gap-4 px-4 py-6'>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className='text-gray-600 hover:text-gray-900'
                                        onClick={() => setIsOpen(false)}>
                                        {link.name}
                                    </Link>
                                ))}
                                <Button
                                    size='lg'
                                    variant='outline'
                                    className='group mt-4 w-full border-2 border-black hover:bg-black hover:text-white'>
                                    <Link
                                        href='/contact?source=mobile-menu'
                                        className='flex items-center justify-center gap-2'>
                                        <Sparkles className='h-4 w-4' />
                                        <span>Teklif Al</span>
                                        <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                    </Link>
                                </Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
