interface TitleProps {
    text: string;
}

export function Title({ text }: TitleProps) {
    return <h2 className="font-medium font-libre text-2xl text-center my-8 md:text-4xl">{text}</h2>;
}