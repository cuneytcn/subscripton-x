import { useEffect } from 'react'

export const usePreventScroll = (isActive: boolean) => {
    useEffect(() => {
        if (isActive) {
            // Scroll genişliğini hesapla
            const scrollbarWidth =
                window.innerWidth - document.documentElement.clientWidth

            // Body'yi kilitle ve padding ekle
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = `${scrollbarWidth}px`

            return () => {
                // Temizlik işlemi
                document.body.style.overflow = ''
                document.body.style.paddingRight = ''
            }
        }
    }, [isActive])
}
