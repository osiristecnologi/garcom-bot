import { NavLink } from 'react-router-dom';
import { 
  Home, Search, LayoutDashboard, Gamepad2, 
  Bitcoin, MapPin, Newspaper, Cloud, 
  Wrench, Clock, Star, Settings, LogOut 
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Início', path: '/' },
  { icon: Search, label: 'Buscar', path: '/buscar' },
  { icon: LayoutDashboard, label: 'Dashboards', path: '/dashboards' },
  { icon: Gamepad2, label: 'Jogos', path: '/jogos' },
  { icon: Bitcoin, label: 'Cripto', path: '/cripto' },
  { icon: MapPin, label: 'Mapas', path: '/mapas' },
  { icon: Newspaper, label: 'Notícias', path: '/noticias' },
  { icon: Cloud, label: 'Clima', path: '/clima' },
  { icon: Wrench, label: 'Ferramentas', path: '/ferramentas' },
  { icon: Clock, label: 'Histórico', path: '/historico' },
  { icon: Star, label: 'Favoritos', path: '/favoritos' },
  { icon: Settings, label: 'Configurações', path: '/configuracoes' },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`fixed left-0 top-0 h-full bg-dark-900 border-r border-dark-700 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <span className="text-xl font-bold text-white">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Agent Studio</h1>
            <p className="text-xs text-dark-400">Seu agente, seus dados.</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary-600 text-white' 
                    : 'text-dark-300 hover:bg-dark-800 hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-dark-700">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-dark-300 hover:bg-dark-800 hover:text-white rounded-lg transition-all duration-200">
          <LogOut size={20} />
          <span className="font-medium">Sair</span>
        </button>
        <p className="text-xs text-dark-500 text-center mt-4">Versão 1.0.0</p>
      </div>
    </aside>
  );
}
