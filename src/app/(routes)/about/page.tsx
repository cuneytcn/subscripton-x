import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className='pb-20 pt-32'>
                <div className='container mx-auto px-4'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h1 className='mb-6 text-5xl font-bold md:text-6xl'>
                            We're on a mission to transform design services
                        </h1>
                        <p className='mb-8 text-xl text-gray-600'>
                            Founded in 2024 in İzmir, we're helping businesses
                            streamline their design process with unlimited
                            design services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='bg-gray-50 py-20'>
                <div className='container mx-auto px-4'>
                    <div className='grid gap-8 md:grid-cols-3'>
                        <div className='text-center'>
                            <div className='text-primary-600 mb-2 text-4xl font-bold'>
                                500+
                            </div>
                            <div className='text-gray-600'>Happy Clients</div>
                        </div>
                        <div className='text-center'>
                            <div className='text-primary-600 mb-2 text-4xl font-bold'>
                                5000+
                            </div>
                            <div className='text-gray-600'>
                                Projects Completed
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='text-primary-600 mb-2 text-4xl font-bold'>
                                50+
                            </div>
                            <div className='text-gray-600'>Team Members</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <div className='mb-16 text-center'>
                        <h2 className='mb-4 text-4xl font-bold'>Our Team</h2>
                        <p className='mx-auto max-w-2xl text-xl text-gray-600'>
                            Meet the talented people behind SubscriptionX who
                            make it all possible.
                        </p>
                    </div>
                    <div className='grid gap-8 md:grid-cols-3 lg:grid-cols-4'>
                        {/* Team members will go here */}
                    </div>
                </div>
            </section>
        </main>
    )
}
