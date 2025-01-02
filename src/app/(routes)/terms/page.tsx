export default function TermsPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <h1 className='mb-6 text-4xl font-bold'>Kullanım Koşulları</h1>
            <div className='prose prose-lg max-w-none'>
                <p>
                    Bu kullanım koşulları, hizmetlerimizi kullanırken uyulması
                    gereken kuralları ve şartları belirtir.
                </p>

                <h2>Hizmet Kullanım Şartları</h2>
                <ul>
                    <li>Hizmetlerimizi yasal amaçlar için kullanmalısınız</li>
                    <li>Hesap güvenliğinizden siz sorumlusunuz</li>
                    <li>Telif haklarına saygı göstermelisiniz</li>
                </ul>

                <h2>Sorumluluk Reddi</h2>
                <p>
                    Hizmetlerimiz "olduğu gibi" sunulmaktadır. Kesintisiz veya
                    hatasız hizmet garantisi verilmez.
                </p>
            </div>
        </main>
    )
}
