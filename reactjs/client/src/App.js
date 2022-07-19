import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';

import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Productions from './pages/productions';
import Products from './pages/products';
import Materials from './pages/materials';
import Formulas from './pages/formulas';
import NotFound from './pages/404';
import Layout from './layout';
import Settings from './pages/settings';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/formulas" element={<Formulas />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
}
