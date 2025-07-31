interface DirectorCardProps {
    name: string;
    image: string;
}

export function DirectorCard({ name, image }: DirectorCardProps) {
    return (
        <div className="inline-flex flex-col items-center text-center">
            <img
                src={image}
                alt={`${name} profile image`}
                className="w-40 h-40 sm:w-44 sm:h-4w-44 object-cover rounded-lg"
            />
            <p className="mt-4">{name}</p>
        </div>
    );
}
