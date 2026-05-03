import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AppLayout from './ui/layout/AppLayout';
import Dashboard from './ui/pages/Dashboard';

// Placeholder pages
const PlaceholderPage = ({ title }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-dark-400">Em desenvolvimento...</p>
    </div>
  </div>
);

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="buscar" element={<PlaceholderPage title="Buscar" />} />
          <Route path="dashboards" element={<PlaceholderPage title="Dashboards" />} />
          <Route path="jogos" element={<PlaceholderPage title="Jogos" />} />
          <Route path="cripto" element={<PlaceholderPage title="Cripto" />} />
          <Route path="mapas" element={<PlaceholderPage title="Mapas" />} />
          <Route path="noticias" element={<PlaceholderPage title="Notícias" />} />
          <Route path="clima" element={<PlaceholderPage title="Clima" />} />
          <Route path="ferramentas" element={<PlaceholderPage title="Ferramentas" />} />
          <Route path="historico" element={<PlaceholderPage title="Histórico" />} />
          <Route path="favoritos" element={<PlaceholderPage title="Favoritos" />} />
          <Route path="configuracoes" element={<PlaceholderPage title="Configurações" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
