import { nanoid } from 'nanoid'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            throw new Error('RESEND_API_KEY is not defined')
        }

        const data = await request.json()
        const id = nanoid()

        try {
            const result = await resend.emails.send({
                from: 'Subscriptionx <onboarding@resend.dev>',
                to: ['cuneytcn@hotmail.com'],
                replyTo: data.email,
                subject: `Yeni Form Başvurusu: ${data.type || 'İletişim Formu'}`,
                html: `
                    <h2>Form Detayları</h2>
                    <p><strong>ID:</strong> ${id}</p>
                    <p><strong>Tip:</strong> ${data.type || 'İletişim Formu'}</p>
                    <p><strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}</p>
                    <hr/>
                    <h3>Başvuru Bilgileri</h3>
                    <p><strong>Ad:</strong> ${data.firstName}</p>
                    <p><strong>Soyad:</strong> ${data.lastName}</p>
                    <p><strong>E-posta:</strong> ${data.email}</p>
                    <p><strong>Telefon:</strong> ${data.phone}</p>
                    <p><strong>Plan:</strong> ${data.plan || '-'}</p>
                    <p><strong>Mesaj:</strong></p>
                    <p>${data.message}</p>
                `,
            })

            console.log('Email sent:', result)
            return NextResponse.json({ success: true, id })
        } catch (emailError: any) {
            console.error('Resend error:', emailError)
            throw new Error(emailError.message)
        }
    } catch (error: any) {
        console.error('Form submission error:', error)
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Form gönderilemedi',
                details:
                    process.env.NODE_ENV === 'development' ?
                        error.stack
                    :   undefined,
            },
            { status: 500 },
        )
    }
}
