import { PiFire } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section className="h-screen relative isolate bg-[url('/home-image.png')] bg-cover bg-center bg-no-repeat flex items-center text-center md:text-left">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-surface" />

            <div className="container relative w-full mx-auto px-10 py-24">
                <h1 className="font-libre text-4xl leading-tight drop-shadow-sm md:text-6xl">
                    STUDIO GHIBLI
                </h1>
                <p className="max-w-lg text-base mt-4 md:text-xl">
                    Explore os filmes encantadores do Studio Ghibli e mergulhe em mundos mágicos.
                </p>
                <Link
                    to="/filmes"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 bg-white text-surface backdrop-blur hover:bg-transparent hover:border hover:text-white transition"
                >
                    <PiFire className="text-2xl" />
                    Descobrir filmes
                </Link>
            </div>
        </section>
    );
}
