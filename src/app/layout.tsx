import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ProgressBar from '@/components/ProgressBar'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://subscriptionx.com'

export const metadata: Metadata = {
    title: 'SubscriptionX | Web Tasarım & Yazılım Hizmetleri',
    description:
        'Profesyonel web tasarım ve yazılım hizmetleri. İşletmeniz için modern, kullanıcı dostu ve etkili dijital çözümler sunuyoruz.',
    keywords: [
        'web tasarım',
        'web yazılım',
        'e-ticaret',
        'kurumsal web sitesi',
        'mobil uygulama',
        'dijital pazarlama',
        'seo',
        'sosyal medya',
        'izmir',
        'türkiye',
    ],
    authors: [{ name: 'SubscriptionX' }],
    creator: 'SubscriptionX',
    publisher: 'SubscriptionX',
    robots: 'index, follow',
    alternates: {
        canonical: baseUrl,
    },
    openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: baseUrl,
        title: 'SubscriptionX | Web Tasarım & Yazılım Hizmetleri',
        description:
            'Profesyonel web tasarım ve yazılım hizmetleri. İşletmeniz için modern, kullanıcı dostu ve etkili dijital çözümler sunuyoruz.',
        siteName: 'SubscriptionX',
    },
    metadataBase: new URL(baseUrl),
    icons: {
        icon: '/favicon.svg',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='tr'>
            <body>
                <ProgressBar />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
