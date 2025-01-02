'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
    {
        name: 'Basic',
        price: '999',
        description: 'Perfect for small businesses and startups',
        features: [
            'One design request at a time',
            '3-5 day turnaround time',
            'Unlimited revisions',
            'Source files included',
            'Commercial usage rights',
        ],
    },
    {
        name: 'Pro',
        price: '1,999',
        description: 'Best for growing businesses',
        features: [
            'Two design requests at a time',
            '2-3 day turnaround time',
            'Unlimited revisions',
            'Source files included',
            'Commercial usage rights',
            'Priority support',
            'Custom illustrations',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: '3,999',
        description: 'For larger organizations',
        features: [
            'Four design requests at a time',
            '1-2 day turnaround time',
            'Unlimited revisions',
            'Source files included',
            'Commercial usage rights',
            'Priority support',
            'Custom illustrations',
            'Dedicated designer',
            'API access',
        ],
    },
]

export const Pricing = () => {
    return (
        <section className='py-32'>
            <div className='container mx-auto px-4'>
                <div className='mb-20 text-center'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-4xl font-bold md:text-5xl'>
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className='mx-auto max-w-2xl text-xl text-gray-600'>
                        No hidden fees. Cancel anytime. All plans include
                        unlimited requests and revisions.
                    </motion.p>
                </div>

                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const PricingCard = ({
    name,
    price,
    description,
    features,
    popular,
    index,
}: {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
    index: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${
                popular ? 'ring-primary-500 ring-2' : ''
            }`}>
            {popular && (
                <span className='bg-primary-500 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-sm font-medium text-white'>
                    Most Popular
                </span>
            )}
            <div className='mb-8'>
                <h3 className='mb-2 text-2xl font-bold'>{name}</h3>
                <p className='mb-6 text-gray-600'>{description}</p>
                <div className='mb-6 flex items-baseline'>
                    <span className='text-4xl font-bold'>₺{price}</span>
                    <span className='ml-2 text-gray-600'>/month</span>
                </div>
                <Button
                    size='lg'
                    variant={popular ? 'default' : 'outline'}
                    className='w-full'>
                    Get started
                </Button>
            </div>
            <div className='space-y-4'>
                {features.map((feature, i) => (
                    <div key={i} className='flex items-center gap-3'>
                        <Check className='text-primary-500 h-5 w-5' />
                        <span className='text-gray-600'>{feature}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
