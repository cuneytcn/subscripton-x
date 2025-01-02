'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
    {
        avatar: '/images/testimonials/avatar-1.webp',
        name: 'Sarah Johnson',
        role: 'CEO at TechStart',
        rating: 5,
        content:
            'Working with SubscriptionX has been a game-changer for our brand. Their design team consistently delivers exceptional work that perfectly aligns with our vision.',
    },
    {
        avatar: '/images/testimonials/avatar-2.webp',
        name: 'Michael Chen',
        role: 'Marketing Director',
        rating: 5,
        content:
            'The unlimited design service has streamlined our creative process. Quick turnaround times and spot-on designs every time.',
    },
    {
        avatar: '/images/testimonials/avatar-3.webp',
        name: 'Emily Rodriguez',
        role: 'Product Manager',
        rating: 5,
        content:
            'Their attention to detail and creative approach have helped us stand out in a crowded market. Highly recommended!',
    },
]

export const Testimonials = () => {
    return (
        <section className='bg-gray-50 py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-20 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-4xl font-bold md:text-5xl'>
                        What our clients say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mx-auto max-w-2xl text-xl text-gray-600'>
                        Don't just take our word for it. Hear what our clients
                        have to say about their experience working with us.
                    </motion.p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            {...testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({
    avatar,
    name,
    role,
    rating,
    content,
    index,
}: {
    avatar: string
    name: string
    role: string
    rating: number
    content: string
    index: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='group rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl'>
            <div className='mb-6 flex items-center gap-4'>
                <div className='relative h-14 w-14 overflow-hidden rounded-full'>
                    <Image
                        src={avatar}
                        alt={name}
                        fill
                        className='object-cover'
                    />
                </div>
                <div>
                    <h3 className='font-bold'>{name}</h3>
                    <p className='text-sm text-gray-600'>{role}</p>
                </div>
            </div>
            <div className='mb-4 flex gap-1'>
                {Array(rating)
                    .fill(0)
                    .map((_, i) => (
                        <Star
                            key={i}
                            className='h-5 w-5 fill-yellow-400 text-yellow-400'
                        />
                    ))}
            </div>
            <p className='text-gray-600'>{content}</p>
        </motion.div>
    )
}
