'use client'

import { motion } from 'framer-motion'

const cookieCategories = [
    {
        title: 'Zorunlu Çerezler',
        description:
            'Web sitemizin temel işlevleri için gerekli olan çerezlerdir. Bu çerezler olmadan web sitemiz düzgün çalışmaz.',
        required: true,
    },
    {
        title: 'Analitik Çerezler',
        description:
            'Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Bu bilgiler sitemizi iyileştirmek için kullanılır.',
        required: false,
    },
    {
        title: 'Pazarlama Çerezleri',
        description:
            'Reklam ve pazarlama faaliyetlerimizi kişiselleştirmek için kullanılan çerezlerdir.',
        required: false,
    },
]

export default function CookiesPage() {
    return (
        <main className='container mx-auto px-4 py-32'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className='mb-6 text-4xl font-bold'>Çerez Politikası</h1>
                <div className='prose prose-lg max-w-none'>
                    <p>
                        Bu çerez politikası, web sitemizde kullanılan çerezler
                        hakkında bilgi vermek amacıyla hazırlanmıştır.
                    </p>

                    <h2>Çerez Nedir?</h2>
                    <p>
                        Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız
                        aracılığıyla cihazınıza yerleştirilen küçük metin
                        dosyalarıdır.
                    </p>

                    <h2>Çerez Türleri</h2>
                    <div className='space-y-6'>
                        {cookieCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className='rounded-lg border border-gray-200 p-6'>
                                <div className='mb-2 flex items-center justify-between'>
                                    <h3 className='text-xl font-bold'>
                                        {category.title}
                                    </h3>
                                    {category.required && (
                                        <span className='rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600'>
                                            Zorunlu
                                        </span>
                                    )}
                                </div>
                                <p className='text-gray-600'>
                                    {category.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <h2>Çerez Yönetimi</h2>
                    <p>
                        Tarayıcınızın ayarlarından çerezleri kabul etme veya
                        reddetme hakkına sahipsiniz. Ancak çerezleri devre dışı
                        bırakmanız durumunda web sitemizin bazı özelliklerinin
                        düzgün çalışmayabileceğini unutmayın.
                    </p>

                    <h2>Değişiklikler</h2>
                    <p>
                        Bu çerez politikasını dilediğimiz zaman değiştirme
                        hakkını saklı tutarız. Güncel politikaya her zaman bu
                        sayfadan ulaşabilirsiniz.
                    </p>
                </div>
            </motion.div>
        </main>
    )
}
