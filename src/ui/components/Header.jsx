import { useState } from 'react';
import { 
  Search, Bell, Sun, Moon, Menu, User, 
  ChevronDown, LogOut, Heart, History, Settings 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ toggleSidebar, user, setUser }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogin = (provider) => {
    // Simulação de login
    setUser({
      name: 'Explorador',
      email: 'user@agentstudio.com',
      avatar: 'https://i.pravatar.cc/150?img=11',
      provider
    });
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowUserMenu(false);
  };

  return (
    <header className="glass border-b border-dark-700 px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button 
            onClick={toggleSidebar}
            className="p-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all"
          >
            <Menu size={24} />
          </button>

          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar qualquer coisa..."
                className="input-primary pl-12 pr-4 py-3"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-500" size={20} />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-all"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-3 p-2 hover:bg-dark-800 rounded-lg transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <ChevronDown size={16} className="text-dark-400" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-64 glass rounded-xl border border-dark-700 shadow-2xl z-50">
                  <div className="p-4 border-b border-dark-700">
                    <p className="text-sm text-dark-400">Entrar com</p>
                  </div>
                  
                  <div className="p-2">
                    <button 
                      onClick={() => handleLogin('google')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </button>
                    
                    <button 
                      onClick={() => handleLogin('facebook')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </button>
                  </div>

                  <div className="border-t border-dark-700 p-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all">
                      <User size={18} />
                      Perfil
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all">
                      <Heart size={18} />
                      Lista de desejos
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all">
                      <History size={18} />
                      Histórico
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-dark-300 hover:text-white transition-all">
                      <Settings size={18} />
                      Configurações
                    </button>
                  </div>

                  <div className="border-t border-dark-700 p-2">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-dark-800 rounded-lg text-red-400 hover:text-red-300 transition-all"
                    >
                      <LogOut size={18} />
                      Sair
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button className="btn-primary">
              <User size={18} />
              Fazer login
            </button>
          )}
        </div>
      </div>
    </header>
  );
                    }
