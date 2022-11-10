import NotFound from 'pages/notfound/NotFound';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import MainPage from '../pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }: { to: To }) => <Navigate to={to} />;

export default Router;
