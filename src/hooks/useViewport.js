import { useEffect, useState } from "react";

export function useViewport(element, threshold=1.0, rootMargin='0px') {
    const [isVisible, setIsVisible] = useState(false)
    const [viewed, setViewed] = useState(false)

    useEffect(() => {
        const current = element?.current;
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold, rootMargin })
        current && observer?.observe(current);

        return () => current && observer.unobserve(current);
    }, [])

    useEffect(() => {
        if (isVisible)
            setViewed(true)
    }, [isVisible])

    return {isVisible, viewed}
}