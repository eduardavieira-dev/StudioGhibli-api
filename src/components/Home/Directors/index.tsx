import goroMiyazaki from '@/assets/images/directors/goro-miyazaki.png';
import hayaoMiyazaki from '@/assets/images/directors/hayao-miyazaki.png';
import isaoTakahata from '@/assets/images/directors/isao-takahata.png';
import yoshifumiKondo from '@/assets/images/directors/yoshifumi-kondo.png';
import { DirectorCard } from './DirectorCard';

export function Directors() {
    return (
        <>
            <p className="font-libre font-normal text-center mx-10 mb-8 text-sm">
                Aqueles que tornaram reais os filmes que mudaram gerações.
            </p>
            <section className="w-3/4 mx-auto grid justify-center gap-6 sm:justify-evenly sm:grid-cols-2 lg:grid-cols-4">
                <DirectorCard name="Hayao Miyazaki" image={hayaoMiyazaki} />
                <DirectorCard name="Isao Takahata" image={isaoTakahata} />
                <DirectorCard name="Yoshifumi Kondo" image={yoshifumiKondo} />
                <DirectorCard name="Goro Miyazaki" image={goroMiyazaki} />
            </section>
        </>
    );
}
