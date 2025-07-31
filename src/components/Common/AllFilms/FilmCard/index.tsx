interface FilmCardProps {
    title: string;
    image: string;
    releaseDate: string;
}

export function FilmCard({ title, image, releaseDate }: FilmCardProps) {
    return (
        <>
            <div className="inline-flex flex-col items-center my-4">
                <img
                    src={image}
                    alt={`Image from the film ${title}`}
                    className="w-52 h-80 object-cover rounded-lg"
                />
                <div className="w-52 text-left">
                    <h3 className="text-lg font-semibold mt-2">{title}</h3>
                    <p className="text-base font-light">{releaseDate}</p>
                </div>
            </div>
        </>
    );
}
