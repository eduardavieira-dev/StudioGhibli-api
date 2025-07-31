export function Footer() {
    return (
        <footer className="h-14 mt-16 bg-footer-bg text-footer-color flex justify-center items-center">
            <p className="font-light">
                Desenvolvido por{' '}
                <a
                    href="https://www.arturbomtempo.dev/"
                    target="_blank"
                    className="hover:underline underline-offset-4 decoration-1 transition"
                >
                    Artur Bomtempo
                </a>
            </p>
        </footer>
    );
}
