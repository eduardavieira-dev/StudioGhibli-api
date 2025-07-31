import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Common/Container';
import { Header } from '../../components/Common/Header';
import { Footer } from '../../components/Common/Footer';

export function BasePage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    );
}