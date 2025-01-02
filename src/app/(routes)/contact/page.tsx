import { ContactForm } from '@/components/sections/ContactForm'
import { reader } from '@/lib/keystatic'
import { Suspense } from 'react'

export default async function ContactPage() {
    const contact = await reader.singletons.contact.read()

    return (
        <main className='container mx-auto px-4 py-32'>
            <Suspense fallback={<div>Loading...</div>}>
                <ContactForm contact={contact} />
            </Suspense>
        </main>
    )
}
