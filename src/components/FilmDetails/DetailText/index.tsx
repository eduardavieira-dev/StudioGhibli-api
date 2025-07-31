interface DetailTextProps {
    data: string;
    value: string;
}

export function DetailText({ data, value }: DetailTextProps) {
    return (
        <p className="font-extralight my-3 lg:my-1 lg:text-left">
            <span className="font-bold">{data}:</span> {value}
        </p>
    );
}