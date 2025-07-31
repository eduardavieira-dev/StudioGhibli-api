import { Link } from 'react-router-dom';
import { AllFilms } from '../../components/Common/AllFilms';
import { Directors } from '../../components/Home/Directors';
import { Hero } from '../../components/Home/Hero';
import { Title } from '../../components/Home/Title';

export function Home() {
    return (
        <>
            <Hero />
            <Title text="Diretores" />
            <Directors />
            <hr className=" border-0 border-t-2 border-divider w-1/2 h-0.5 mx-auto my-14" />
            <Title text="Todos os Filmes" />
            <AllFilms limit={8} />
            <div className="mt-16 text-center">
                <Link
                    to="/filmes"
                    className="rounded-lg px-10 py-2 backdrop-blur bg-transparent border text-white text-center transition hover:bg-white hover:text-surface"
                >
                    Ver mais
                </Link>
            </div>
        </>
    );
}
