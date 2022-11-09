import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SickSearchPage } from './pages/SickSearchPage';

export function Routert() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SickSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
