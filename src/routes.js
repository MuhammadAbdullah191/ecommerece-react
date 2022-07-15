import React from 'react';
import App from './App';
import Carts from './pages/carts';
import { Route, Routes, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/Cart" element={<Carts/>} />
      </Routes>
    </div>
  );
};
