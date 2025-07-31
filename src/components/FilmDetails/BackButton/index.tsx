import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export function BackButton() {
    return (
        <Link
            to="/filmes"
            className="text-xl inline-flex justify-center items-center transition hover:text-white/70"
        >
            <FaArrowLeftLong className="mr-4" /> Voltar
        </Link>
    );
}
