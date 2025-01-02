import { useEffect, useRef } from 'react'

export const useClickOutside = (handler: () => void) => {
    const refs = useRef<Array<HTMLElement | null>>([])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !refs.current.some((ref) => ref?.contains(event.target as Node))
            ) {
                handler()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [handler])

    return (element: HTMLElement | null) => {
        if (element && !refs.current.includes(element)) {
            refs.current.push(element)
        }
    }
}
