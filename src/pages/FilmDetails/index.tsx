import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from '../../components/FilmDetails/BackButton';
import { DetailText } from '../../components/FilmDetails/DetailText';
import { api } from '../../lib/axios';

interface Film {
    id: string;
    title: string;
    image: string;
    movie_banner: string;
    release_date: string;
    running_time: string;
    director: string;
    producer: string;
    description: string;
}

export function FilmDetails() {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        const loadFilm = async () => {
            try {
                const { data } = await api.get<Film>(`/films/${id}`, {
                    signal: controller.signal,
                });

                if (!data || Object.keys(data).length === 0) {
                    setNotFound(true);
                } else {
                    setFilm(data);
                }
            } catch (error) {
                if (axios.isAxiosError(error) && error.code === 'ERR_CANCELED') {
                    return;
                }

                console.error('Erro ao buscar detalhes do filme:', error);
                setNotFound(true);
            }
        };

        loadFilm();
        return () => controller.abort();
    }, [id]);

    if (notFound) {
        return (
            <main className="w-4/5 mt-32 mx-auto text-center">
                <BackButton />
                <p className="mt-10 text-lg text-gray-400">Filme não disponível.</p>
            </main>
        );
    }

    if (!film) {
        return (
            <main className="w-4/5 mt-32 mx-auto text-center">
                <p>Carregando detalhes do filme...</p>
            </main>
        );
    }

    return (
        <main className="w-4/5 mt-32 mx-auto">
            <BackButton />
            <section className="mt-6 flex flex-col text-center md:mb-52 lg:flex-row 2xl:mb-64">
                <div className="mx-auto mb-16 lg:w-screen 2xl:w-full lg:mb-0 lg:mr-14 2xl:mr-20">
                    <img
                        src={film.image}
                        alt={`Banner for the film ${film.title}`}
                        className="rounded-lg md:h-full object-cover 2xl:h-4/5"
                    />
                </div>
                <div className="text-xl 2xl:text-2xl">
                    <h1 className="font-libre font-semibold text-4xl lg:text-5xl lg:text-left mb-6 2xl:text-7xl">
                        {film.title}
                    </h1>
                    <div className="lg:flex gap-20">
                        <DetailText data="Ano de lançamento" value={film.release_date} />
                        <DetailText data="Duração" value={`${film.running_time} minutos`} />
                    </div>
                    <DetailText data="Diretor" value={film.director} />
                    <DetailText data="Produtor" value={film.producer} />
                    <p className="font-extralight mt-14 lg:mt-6 text-justify">{film.description}</p>
                </div>
            </section>
        </main>
    );
}
