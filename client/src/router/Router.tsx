import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, To } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Redirect to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }: { to: To }) => <Navigate to={to} />;

export default Router;
