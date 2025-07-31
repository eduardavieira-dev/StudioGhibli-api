// src/hooks/useScrolled.ts
import { useEffect, useState } from 'react';

export function useScrolled(threshold = 16) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            const y = window.scrollY || document.documentElement.scrollTop;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(y > threshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        onScroll(); // define o estado correto já no mount
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [threshold]);

    return scrolled;
}
