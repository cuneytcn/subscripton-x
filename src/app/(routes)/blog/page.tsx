'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
    {
        slug: 'design-system-benefits',
        title: 'The Benefits of Using a Design System',
        excerpt:
            'Learn how design systems can improve consistency, speed up development, and create better user experiences.',
        image: '/images/blog/design-system.webp',
        date: 'Mar 15, 2024',
        readTime: '5 min read',
        category: 'Design',
    },
    {
        slug: 'unlimited-design-services',
        title: 'Why Unlimited Design Services are the Future',
        excerpt:
            'Discover how unlimited design services are changing the way businesses approach their design needs.',
        image: '/images/blog/unlimited-design.webp',
        date: 'Mar 12, 2024',
        readTime: '4 min read',
        category: 'Business',
    },
    {
        slug: 'mobile-first-design',
        title: 'The Importance of Mobile-First Design',
        excerpt:
            'With mobile traffic continuing to grow, learn why designing for mobile first is crucial for success.',
        image: '/images/blog/mobile-first.webp',
        date: 'Mar 10, 2024',
        readTime: '6 min read',
        category: 'Mobile',
    },
]

export default function BlogPage() {
    return (
        <main className='pb-20 pt-32'>
            <div className='container mx-auto px-4'>
                {/* Hero Section */}
                <div className='mb-16 text-center'>
                    <h1 className='mb-6 text-5xl font-bold md:text-6xl'>
                        Latest Updates & Insights
                    </h1>
                    <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600'>
                        Stay up to date with the latest trends in design,
                        development, and digital marketing.
                    </p>
                </div>

                {/* Featured Post */}
                <div className='mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='group relative overflow-hidden rounded-2xl bg-white shadow-lg'>
                        <div className='relative aspect-[2/1] w-full'>
                            <Image
                                src='/images/blog/featured-post.webp'
                                alt='Featured blog post'
                                fill
                                className='object-cover transition-transform duration-300 group-hover:scale-105'
                            />
                        </div>
                        <div className='p-8'>
                            <div className='mb-4 flex items-center gap-4'>
                                <span className='bg-primary-100 text-primary-600 rounded-full px-3 py-1 text-sm font-medium'>
                                    Featured
                                </span>
                                <span className='text-sm text-gray-600'>
                                    Mar 20, 2024
                                </span>
                                <span className='text-sm text-gray-600'>
                                    8 min read
                                </span>
                            </div>
                            <h2 className='mb-4 text-3xl font-bold'>
                                The Future of Digital Design: Trends to Watch in
                                2024
                            </h2>
                            <p className='mb-6 text-gray-600'>
                                Explore the emerging trends that are shaping the
                                future of digital design and how they'll impact
                                your business.
                            </p>
                            <Button>Read More</Button>
                        </div>
                    </motion.div>
                </div>

                {/* Blog Posts Grid */}
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            className='group overflow-hidden rounded-2xl bg-white shadow-lg'>
                            <Link href={`/blog/${post.slug}`}>
                                <div className='relative aspect-[16/9]'>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className='object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                </div>
                                <div className='p-6'>
                                    <div className='mb-4 flex items-center gap-4'>
                                        <span className='bg-primary-100 text-primary-600 rounded-full px-3 py-1 text-sm font-medium'>
                                            {post.category}
                                        </span>
                                        <span className='text-sm text-gray-600'>
                                            {post.date}
                                        </span>
                                        <span className='text-sm text-gray-600'>
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className='mb-4 text-xl font-bold'>
                                        {post.title}
                                    </h2>
                                    <p className='text-gray-600'>
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                {/* Load More Button */}
                <div className='mt-16 text-center'>
                    <Button variant='outline' size='lg'>
                        Load More Posts
                    </Button>
                </div>
            </div>
        </main>
    )
}
