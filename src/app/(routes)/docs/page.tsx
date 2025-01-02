export default function DocumentationPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <h1 className='mb-6 text-4xl font-bold'>Dokümantasyon</h1>
            <p className='mb-8 text-xl text-gray-600'>
                Ürün ve hizmetlerimiz hakkında detaylı bilgi ve kullanım
                kılavuzları.
            </p>

            <div className='prose prose-lg max-w-none'>
                <h2>Başlangıç Kılavuzu</h2>
                <p>
                    Ürünlerimizi kullanmaya başlamak için temel bilgiler ve adım
                    adım talimatlar.
                </p>

                <h2>API Dokümantasyonu</h2>
                <p>
                    API entegrasyonları ve teknik detaylar için kapsamlı
                    dokümantasyonumuz.
                </p>
            </div>
        </main>
    )
}
