// src/components/Header.tsx

import { Link } from 'react-router-dom';
import { useScrolled } from '../../../hooks/useScrolled';

export function Header() {
    const scrolled = useScrolled(24);

    return (
        <header
            className={[
                'fixed inset-x-0 top-0 z-50 h-20 px-10',
                'flex items-center',
                'transition-colors duration-300',
                'border-b',
                scrolled
                    ? 'bg-surface border-white/10 backdrop-blur-md'
                    : 'bg-transparent border-transparent',
            ].join(' ')}
        >
            <Link to="/" className="font-roboto font-semibold text-2xl">
                DevMovie
            </Link>
        </header>
    );
}