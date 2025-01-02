export default function PrivacyPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <h1 className='mb-6 text-4xl font-bold'>Gizlilik Politikası</h1>
            <div className='prose prose-lg max-w-none'>
                <p>
                    Bu gizlilik politikası, hizmetlerimizi kullanırken toplanan
                    bilgilerin nasıl kullanıldığını açıklar.
                </p>

                <h2>Toplanan Bilgiler</h2>
                <p>
                    Hizmetlerimizi kullanırken aşağıdaki bilgiler toplanabilir:
                </p>
                <ul>
                    <li>İsim ve iletişim bilgileri</li>
                    <li>Kullanım istatistikleri</li>
                    <li>Cihaz bilgileri</li>
                </ul>

                <h2>Bilgilerin Kullanımı</h2>
                <p>
                    Toplanan bilgiler hizmet kalitemizi artırmak ve yasal
                    yükümlülüklerimizi yerine getirmek için kullanılır.
                </p>
            </div>
        </main>
    )
}
