'use client'
import { useState } from 'react'

type Item = { id: number, nome: string, desc: string, preco: number, img: string }
type Carrinho = { item: Item, qtd: number }

const WHATSAPP_NUMBER = '5562981443598'
const CHAVE_PIX = '7ccbec4f-851f-4b87-b5ee-a80959182dbb' // Tua chave aqui

const cardapio: Record<string, Item[]> = {
  PIZZAS: [
    { id: 1, nome: "Calabresa", desc: "Molho de tomate, mussarela, calabresa fatiada e orégano.", preco: 45.90, img: "🍕" },
    { id: 2, nome: "Frango com Catupiry", desc: "Molho de tomate, mussarela, frango desfiado e catupiry.", preco: 49.90, img: "🍕" },
    { id: 3, nome: "Portuguesa", desc: "Molho de tomate, mussarela, presunto, ovos, cebola e orégano.", preco: 47.90, img: "🍕" },
    { id: 4, nome: "Quatro Queijos", desc: "Molho de tomate, mussarela, parmesão, provolone e gorgonzola.", preco: 48.90, img: "🍕" }
  ],
  BEBIDAS: [
    { id: 5, nome: "Coca Cola 2L", desc: "Refrigerante gelado", preco: 12.00, img: "🥤" },
    { id: 6, nome: "Suco Laranja", desc: "Natural 500ml", preco: 8.00, img: "🧃" }
  ]
}

export default function Home() {
  const [categoria, setCategoria] = useState('PIZZAS')
  const [carrinho, setCarrinho] = useState<Carrinho[]>([])
  const [mostrarPix, setMostrarPix] = useState(false)

  const addCarrinho = (item: Item) => {
    setCarrinho(prev => {
      const existe = prev.find(p => p.item.id === item.id)
      if (existe) return prev.map(p => p.item.id === item.id? {...p, qtd: p.qtd + 1} : p)
      return [...prev, { item, qtd: 1 }]
    })
  }

  const removerItem = (id: number) => {
    setCarrinho(prev => prev.filter(p => p.item.id!== id))
  }

  const cancelarPedido = () => {
    if (confirm('Tem certeza que quer cancelar o pedido?')) {
      setCarrinho([])
      setMostrarPix(false)
    }
  }

  const total = carrinho.reduce((acc, p) => acc + p.item.preco * p.qtd, 0)
  const qtdTotal = carrinho.reduce((acc, p) => acc + p.qtd, 0)

  const enviarZap = () => {
    if (carrinho.length === 0) return
    const texto = carrinho.map(p => `• ${p.qtd}x ${p.item.nome} - R$ ${(p.item.preco * p.qtd).toFixed(2)}`).join('%0A')
    const msg = `*NOVO PEDIDO - GARÇOM BOT*%0A%0A${texto}%0A%0A*TOTAL: R$ ${total.toFixed(2)}*%0A%0A*PIX: ${CHAVE_PIX}*%0A%0ANome:%0AEndereço:%0AForma de pagamento:`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  const copiarPix = () => {
    navigator.clipboard.writeText(CHAVE_PIX)
    alert('Chave PIX copiada! 🔑')
  }

  return (
    <div style={{ fontFamily: 'system-ui', background: '#111', color: '#fff', minHeight: '100vh' }}>
      <header style={{ padding: '16px', background: '#000', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '500px', margin: '0 auto' }}>
          <h1 style={{ margin: 0, fontSize: '20px' }}>GARÇOM <span style={{ color: '#f97316' }}>BOT</span></h1>
          <div style={{ position: 'relative' }}>
            🛒 {qtdTotal > 0 && <span style={{ position: 'absolute', top: -8, right: -8, background: '#f97316', borderRadius: '50%', width: 18, height: 18, fontSize: 12, display: 'grid', placeItems: 'center' }}>{qtdTotal}</span>}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '500px', margin: '0 auto', padding: '16px', paddingBottom: mostrarPix? '280px' : '120px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto' }}>
          {Object.keys(cardapio).map(cat => (
            <button key={cat} onClick={() => setCategoria(cat)} style={{
              padding: '10px 16px', borderRadius: '8px', border: 'none',
              background: categoria === cat? '#f97316' : '#262626',
              color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer'
            }}>
              {cat}
            </button>
          ))}
        </div>

        {cardapio[categoria].map(item => (
          <div key={item.id} style={{ background: '#1a1a1a', borderRadius: '12px', padding: '12px', marginBottom: '12px', display: 'flex', gap: '12px' }}>
            <div style={{ fontSize: '40px' }}>{item.img}</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 4px', fontSize: '16px' }}>{item.nome}</h3>
              <p style={{ margin: '0 0 8px', fontSize: '13px', opacity: 0.7 }}>{item.desc}</p>
              <strong style={{ color: '#f97316' }}>R$ {item.preco.toFixed(2)}</strong>
            </div>
            <button onClick={() => addCarrinho(item)} style={{
              width: '36px', height: '36px', borderRadius: '50%', border: '2px solid #f97316',
              background: 'transparent', color: '#f97316', fontSize: '20px', alignSelf: 'center', cursor: 'pointer'
            }}>+</button>
          </div>
        ))}

        {carrinho.length > 0 && (
          <div style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            background: '#1a1a1a', borderTop: '1px solid #333',
            padding: '16px', maxWidth: '500px', margin: '0 auto'
          }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '16px' }}>🛍️ SEU PEDIDO - {qtdTotal} itens</h3>
            <div style={{ maxHeight: '100px', overflowY: 'auto', marginBottom: '12px' }}>
              {carrinho.map(p => (
                <div key={p.item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                  <span>{p.qtd}x {p.item.nome}</span>
                  <div>
                    <span>R$ {(p.item.preco * p.qtd).toFixed(2)}</span>
                    <button onClick={() => removerItem(p.item.id)} style={{ marginLeft: '8px', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #333', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '12px' }}>
              <span>TOTAL</span>
              <span style={{ color: '#f97316' }}>R$ {total.toFixed(2)}</span>
            </div>

            {mostrarPix && (
              <div style={{ background: '#0a0a0a', borderRadius: '8px', padding: '12px', marginBottom: '12px', border: '1px solid #22c55e' }}>
                <p style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: '#22c55e' }}>💸 PAGUE COM PIX</p>
                <div style={{ fontSize: '12px', wordBreak: 'break-all', background: '#1a1a1a', padding: '8px', borderRadius: '6px', marginBottom: '8px' }}>
                  {CHAVE_PIX}
                </div>
                <button onClick={copiarPix} style={{
                  width: '100%', padding: '8px', borderRadius: '6px',
                  border: '1px solid #22c55e', background: 'transparent',
                  color: '#22c55e', fontSize: '13px', cursor: 'pointer'
                }}>
                  📋 COPIAR CHAVE PIX
                </button>
              </div>
            )}

            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={cancelarPedido} style={{
                flex: 1, padding: '14px', borderRadius: '8px',
                border: '1px solid #ef4444', background: 'transparent',
                color: '#ef4444', fontWeight: 700, fontSize: '14px', cursor: 'pointer'
              }}>
                ❌ CANCELAR
              </button>
              <button onClick={() => setMostrarPix(!mostrarPix)} style={{
                flex: 1, padding: '14px', borderRadius: '8px',
                border: '1px solid #22c55e', background: 'transparent',
                color: '#22c55e', fontWeight: 700, fontSize: '14px', cursor: 'pointer'
              }}>
                {mostrarPix? '🔽 FECHAR PIX' : '💸 PIX'}
              </button>
              <button onClick={enviarZap} style={{
                flex: 2, padding: '14px', borderRadius: '8px',
                border: 'none', background: '#22c55e', color: '#000',
                fontWeight: 700, fontSize: '14px', cursor: 'pointer'
              }}>
                📲 ENVIAR ZAP
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
              }
