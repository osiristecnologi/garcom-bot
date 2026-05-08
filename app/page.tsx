'use client'
import { useState } from 'react'

type Categoria = {
  id: number
  nome: string
  icone: string
}

type Produto = {
  id: number
  categoria_id: number
  nome: string
  desc: string
  preco: number
  foto_url: string
}

type ItemCarrinho = Produto & { qtd: number }

const CATEGORIAS: Categoria[] = [
  { id: 1, nome: 'PIZZAS', icone: '🍕' },
  { id: 2, nome: 'SANDUÍCHES', icone: '🍔' },
  { id: 3, nome: 'PORÇÕES', icone: '🍟' },
  { id: 4, nome: 'BEBIDAS', icone: '🥤' },
  { id: 5, nome: 'SUCOS', icone: '🧃' },
  { id: 6, nome: 'CERVEJAS', icone: '🍺' },
  { id: 7, nome: 'CREMES', icone: '🍨' },
]

const PRODUTOS: Produto[] = [
  { id: 1, categoria_id: 1, nome: 'Calabresa', desc: 'Molho, mussarela, calabresa e cebola', preco: 45.90, foto_url: 'https://placehold.co/400x300/orange/white?text=Pizza+Calabresa' },
  { id: 2, categoria_id: 1, nome: 'Marguerita', desc: 'Molho, mussarela, tomate e manjericão', preco: 42.90, foto_url: 'https://placehold.co/400x300/red/white?text=Marguerita' },
  { id: 3, categoria_id: 1, nome: 'Portuguesa', desc: 'Ovo, cebola, presunto, ervilha', preco: 48.90, foto_url: 'https://placehold.co/400x300/yellow/black?text=Portuguesa' },
  { id: 4, categoria_id: 2, nome: 'X-Salada', desc: 'Pão, hambúrguer, queijo, alface, tomate', preco: 18.00, foto_url: 'https://placehold.co/400x300/green/white?text=X-Salada' },
  { id: 5, categoria_id: 2, nome: 'X-Tudo', desc: 'Completo com tudo que tem direito', preco: 25.00, foto_url: 'https://placehold.co/400x300/brown/white?text=X-Tudo' },
  { id: 6, categoria_id: 2, nome: 'X-Bacon', desc: 'Pão, hambúrguer, queijo e muito bacon', preco: 22.00, foto_url: 'https://placehold.co/400x300/red/white?text=X-Bacon' },
  { id: 7, categoria_id: 3, nome: 'Batata Frita', desc: 'Porção 500g com cheddar e bacon', preco: 32.00, foto_url: 'https://placehold.co/400x300/yellow/black?text=Batata' },
  { id: 8, categoria_id: 4, nome: 'Coca-Cola 2L', desc: 'Refrigerante gelado', preco: 12.00, foto_url: 'https://placehold.co/400x300/black/white?text=Coca+2L' },
  { id: 9, categoria_id: 6, nome: 'Heineken 600ml', desc: 'Cerveja long neck gelada', preco: 14.00, foto_url: 'https://placehold.co/400x300/green/white?text=Heineken' },
]

export default function Home() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria | null>(null)
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false)

  const produtosFiltrados = categoriaAtiva 
    ? PRODUTOS.filter(p => p.categoria_id === categoriaAtiva.id) 
    : []

  const addCarrinho = (produto: Produto) => {
    setCarrinho(prev => {
      const existe = prev.find(i => i.id === produto.id)
      if (existe) {
        return prev.map(i => i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i)
      }
      return [...prev, { ...produto, qtd: 1 }]
    })
  }

  const removerCarrinho = (id: number) => {
    setCarrinho(prev => prev.filter(i => i.id !== id))
  }

  const total = carrinho.reduce((acc, i) => acc + i.preco * i.qtd, 0)
  const totalItens = carrinho.reduce((acc, i) => acc + i.qtd, 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 p-4 text-white">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Garçom Bot</h1>
        <p className="text-center text-blue-200 mb-6">Toque na categoria</p>

        {!categoriaAtiva ? (
          <div className="grid grid-cols-2 gap-4">
            {CATEGORIAS.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoriaAtiva(cat)}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 flex flex-col items-center hover:bg-white/20 transition"
              >
                <span className="text-5xl mb-2">{cat.icone}</span>
                <span className="font-bold text-sm">{cat.nome}</span>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={() => setCategoriaAtiva(null)}
              className="mb-4 text-blue-200 hover:text-white"
            >
              ← Voltar
            </button>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>{categoriaAtiva.icone}</span> {categoriaAtiva.nome}
            </h2>
            <div className="space-y-3">
              {produtosFiltrados.map(prod => (
                <div key={prod.id} className="bg-white/10 backdrop-blur rounded-xl p-3 flex gap-3">
                  <img src={prod.foto_url} alt={prod.nome} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold">{prod.nome}</h3>
                    <p className="text-xs text-blue-200">{prod.desc}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-green-400">R$ {prod.preco.toFixed(2)}</span>
                      <button 
                        onClick={() => addCarrinho(prod)}
                        className="bg-green-500 px-3 py-1 rounded-lg text-sm font-bold hover:bg-green-600"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {totalItens > 0 && (
          <button
            onClick={() => setMostrarCarrinho(true)}
            className="fixed bottom-4 left-4 right-4 max-w-md mx-auto bg-green-500 py-4 rounded-xl font-bold text-lg shadow-lg"
          >
            Ver Carrinho • {totalItens} {totalItens === 1 ? 'item' : 'itens'} • R$ {total.toFixed(2)}
          </button>
        )}

        {mostrarCarrinho && (
          <div className="fixed inset-0 bg-black/70 flex items-end" onClick={() => setMostrarCarrinho(false)}>
            <div className="bg-blue-800 w-full max-w-md mx-auto rounded-t-2xl p-4" onClick={e => e.stopPropagation()}>
              <h2 className="text-xl font-bold mb-4">Seu Pedido</h2>
              {carrinho.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-2 bg-white/10 p-2 rounded">
                  <div>
                    <p className="font-bold">{item.nome}</p>
                    <p className="text-sm text-blue-200">R$ {item.preco.toFixed(2)} x {item.qtd}</p>
                  </div>
                  <button onClick={() => removerCarrinho(item.id)} className="text-red-400 font-bold">X</button>
                </div>
              ))}
              <div className="border-t border-white/20 mt-4 pt-4">
                <div className="flex justify-between text-xl font-bold mb-4">
                  <span>Total:</span>
                  <span className="text-green-400">R$ {total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => {
                    alert(`Pedido enviado! Total: R$ ${total.toFixed(2)}`)
                    setCarrinho([])
                    setMostrarCarrinho(false)
                    setCategoriaAtiva(null)
                  }}
                  className="w-full bg-green-500 py-3 rounded-xl font-bold"
                >
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
