import { TrendingUp, Cloud, Car, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickAccessItems = [
  {
    icon: Bitcoin,
    title: 'Bitcoin (BTC)',
    value: 'R$ 343.126,00',
    change: '+2,35%',
    positive: true,
    color: 'orange',
    path: '/cripto'
  },
  {
    icon: Cloud,
    title: 'Clima em São Paulo',
    value: '26°C',
    subtitle: 'Parcialmente nublado',
    color: 'blue',
    path: '/clima'
  },
  {
    icon: Car,
    title: 'Trânsito em SP',
    value: 'Trânsito leve',
    subtitle: 'Bom fluxo nas principais vias',
    color: 'green',
    path: '/mapas'
  },
  {
    icon: Gamepad2,
    title: 'Lançamentos de Jogos',
    value: 'Ver agora',
    subtitle: 'Novos jogos da semana',
    color: 'purple',
    path: '/jogos'
  }
];

const recentSearches = [
  { query: 'melhores jogos de mundo aberto 2024', time: 'Hoje, 10:30' },
  { query: 'preço do ethereum hoje', time: 'Hoje, 09:15' },
  { query: 'notícias de tecnologia', time: 'Ontem, 21:45' },
  { query: 'mapa de rotas São Paulo - Rio', time: 'Ontem, 18:20' },
];

const popularNow = [
  {
    title: 'Elden Ring: Shadow of the Erdtree',
    category: 'Aventura, RPG',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    path: '/jogos'
  },
  {
    title: 'Bitcoin ultrapassa $70k',
    category: 'Mercado em alta',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=300&fit=crop',
    path: '/cripto'
  },
  {
    title: 'Descoberta de exoplaneta',
    category: 'Ciência e Espaço',
    image: 'https://images.unsplash.com/photo-1614728853913-1e22ba0e982b?w=400&h=300&fit=crop',
    path: '/noticias'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900/50 via-dark-900 to-dark-900 border border-dark-700 p-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Olá, explorador! 👋
          </h1>
          <p className="text-lg text-dark-300 mb-6">
            Pergunte qualquer coisa e seu agente vai buscar as melhores respostas em vários mundos.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['Cripto', 'Mapas', 'Notícias', 'Jogos', 'Clima'].map((tag) => (
              <button 
                key={tag}
                className="px-4 py-2 bg-dark-800/80 hover:bg-dark-700 border border-dark-600 rounded-lg text-sm font-medium text-dark-200 hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bot decoration */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="w-48 h-48 animate-float">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl shadow-primary-500/30">
              <span className="text-8xl">🤖</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Acesso rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className="card hover:bg-dark-800/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-3 rounded-lg bg-${item.color}-500/20 text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                  <item.icon size={24} />
                </div>
                {item.change && (
                  <span className={`text-sm font-medium ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {item.change}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-lg font-bold text-white">{item.value}</p>
              {item.subtitle && (
                <p className="text-sm text-dark-400 mt-1">{item.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Searches & Popular */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Searches */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Pesquisas recentes</h2>
            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
              Ver tudo
            </button>
          </div>
          <div className="card">
            <div className="space-y-3">
              {recentSearches.map((search, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 hover:bg-dark-800/50 rounded-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <ClockIcon className="text-dark-500 group-hover:text-primary-400 transition-colors" size={18} />
                    <span className="text-dark-300 group-hover:text-white transition-colors">{search.query}</span>
                  </div>
                  <span className="text-sm text-dark-500">{search.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Now */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">Populares agora</h2>
            <button className="text-primary-400 hover:text-primary-300 text-sm font-medium">
              Ver tudo
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {popularNow.map((item, index) => (
              <Link 
                key={index}
                to={item.path}
                className="group relative overflow-hidden rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="aspect-video">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold text-white mb-1 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-dark-300">{item.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ClockIcon({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function Bitcoin({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.279 5.307m2.145 3.284-.347 1.97M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"/>
    </svg>
  );
        }
