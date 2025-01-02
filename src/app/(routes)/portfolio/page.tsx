'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = ['All', 'Web Design', 'Mobile Apps', 'Branding', 'UI/UX']

const projects = [
    {
        title: 'E-commerce Website Redesign',
        category: 'Web Design',
        image: '/images/portfolio/ecommerce.webp',
        description:
            'Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.',
    },
    {
        title: 'Health & Fitness App',
        category: 'Mobile Apps',
        image: '/images/portfolio/fitness-app.webp',
        description:
            'A modern fitness tracking app with personalized workout plans and nutrition guidance.',
    },
    {
        title: 'Tech Startup Branding',
        category: 'Branding',
        image: '/images/portfolio/startup-brand.webp',
        description:
            'Full brand identity design including logo, guidelines, and marketing materials.',
    },
    {
        title: 'Banking Dashboard',
        category: 'UI/UX',
        image: '/images/portfolio/banking-dashboard.webp',
        description:
            'User-friendly dashboard design for a digital banking platform.',
    },
    {
        title: 'Restaurant Booking App',
        category: 'Mobile Apps',
        image: '/images/portfolio/restaurant-app.webp',
        description:
            'Mobile app design for restaurant reservations and food ordering.',
    },
    {
        title: 'Real Estate Platform',
        category: 'Web Design',
        image: '/images/portfolio/real-estate.webp',
        description:
            'Modern web platform for property listings and virtual tours.',
    },
]

export default function PortfolioPage() {
    return (
        <main className='pb-20 pt-32'>
            <div className='container mx-auto px-4'>
                {/* Hero Section */}
                <div className='mb-20 text-center'>
                    <h1 className='mb-6 text-5xl font-bold md:text-6xl'>
                        Our Work
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Explore our latest projects and see how we've helped
                        businesses achieve their digital goals.
                    </p>
                </div>

                {/* Categories Filter */}
                <div className='mb-12 flex flex-wrap justify-center gap-4'>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={category === 'All' ? 'default' : 'outline'}
                            className='min-w-[100px]'>
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='group overflow-hidden rounded-2xl bg-white shadow-lg'>
                            <div className='relative aspect-[4/3] overflow-hidden'>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                                <div className='absolute inset-0 flex items-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    <div className='text-white'>
                                        <span className='bg-primary-500 mb-2 inline-block rounded-full px-3 py-1 text-sm font-medium'>
                                            {project.category}
                                        </span>
                                        <h3 className='mb-2 text-xl font-bold'>
                                            {project.title}
                                        </h3>
                                        <p className='text-sm text-gray-200'>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className='mt-16 text-center'>
                    <Button variant='outline' size='lg'>
                        Load More Projects
                    </Button>
                </div>
            </div>
        </main>
    )
}
