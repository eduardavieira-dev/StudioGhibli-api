import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasePage } from './pages/BasePage';
import { Films } from './pages/Films';
import { Home } from './pages/Home';
import { FilmDetails } from './pages/FilmDetails';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/filmes" element={<Films />} />
                    <Route path="/filme/:id" element={<FilmDetails />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
