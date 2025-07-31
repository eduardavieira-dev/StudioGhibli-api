import { AllFilms } from '../../components/Common/AllFilms';

export function Films() {
    return (
        <>
            <section className="mt-40 text-center">
                <h1 className="font-libre leading-tight drop-shadow-sm text-3xl sm:text-4xl md:text-5xl">
                    STUDIO GHIBLI
                </h1>
                <p className="font-libre mb-10 text-white/90 text-sm sm:text-base md:text-lg mt-6">
                    Todos os filmes e produções
                </p>
            </section>
            <AllFilms />
        </>
    );
}
