'use client'
import { useState, useEffect } from 'react'

type Produto = { id: string, nome: string, desc: string, preco: number, imagem: string }
type Categoria = { id: string, nome: string, icone: string, produtos: Produto[] }
type ItemCarrinho = { produtoId: string, nome: string, preco: number, qtd: number }

export default function Home() {
  const [cats, setCats] = useState<Categoria[]>([])
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([])
  const [checkout, setCheckout] = useState(false)
  const [tipo, setTipo] = useState<'mesa'|'entrega'>('mesa')
  const [mesa, setMesa] = useState('')
  const [end, setEnd] = useState({ setor:'', rua:'', quadra:'', lote:'', casa:'' })
  const [tel, setTel] = useState('')
  const [pag, setPag] = useState<'pix'|'dinheiro'|'cartao'>('pix')
  const [whatsLoja, setWhatsLoja] = useState('')
  const [chavePix, setChavePix] = useState('')

  useEffect(() => {
    fetch('/api/cardapio').then(r=>r.json()).then(d=> {
      setCats(d.categorias)
      setWhatsLoja(d.whatsapp)
      setChavePix(d.chavePix)
    })
  }, [])

  const add = (p: Produto) => {
    setCarrinho(c => {
      const ex = c.find(i => i.produtoId === p.id)
      if(ex) return c.map(i => i.produtoId === p.id ? {...i, qtd: i.qtd+1} : i)
      return [...c, { produtoId: p.id, nome: p.nome, preco: p.preco, qtd: 1 }]
    })
  }

  const total = carrinho.reduce((s,i) => s + i.preco * i.qtd, 0)

  const finalizar = async () => {
    const res = await fetch('/api/pedidos', {
      method: 'POST',
      body: JSON.stringify({
        tipo, mesa: tipo==='mesa' ? mesa : undefined,
        endereco: tipo==='entrega' ? end : undefined,
        telefone: tel, pagamento: pag,
        itens: carrinho.map(i => ({ produtoId: i.produtoId, qtd: i.qtd }))
      })
    })
    const { id, total, whatsappLoja, chavePix } = await res.json()
    
    const texto = `🍕 *PEDIDO #${id}*\n\n*${tipo==='mesa'?'MESA '+mesa:'ENTREGA'}*\n${tipo==='entrega'?`Setor: ${end.setor}\nRua: ${end.rua}, Qd ${end.quadra}, Lt ${end.lote}, Casa ${end.casa}\n`:''}Tel: ${tel}\n\n*ITENS:*\n${carrinho.map(i=>`${i.qtd}x ${i.nome} - R$ ${(i.preco*i.qtd).toFixed(2)}`).join('\n')}\n\n*TOTAL: R$ ${total.toFixed(2)}*\n\n*PAGAMENTO:* ${pag}\nChave Pix: ${chavePix}`
    
    window.open(`https://wa.me/55${whatsappLoja}?text=${encodeURIComponent(texto)}`)
    setCarrinho([])
    setCheckout(false)
  }

  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white p-4 font-['DM_Sans']">
      <h1 className="text-2xl font-bold mb-4">GARÇOM <span className="text-[#FF7A00]">BOT</span></h1>
      
      {!checkout ? <>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {cats.map(c=>(
            <div key={c.id} className="bg-[#1A1A1A] p-4 rounded-2xl text-center">
              <div className="text-3xl mb-2">{c.icone}</div>
              <div className="text-sm font-bold">{c.nome}</div>
            </div>
          ))}
        </div>

        {cats.map(c=>c.produtos.map(p=>(
          <div key={p.id} className="bg-[#1A1A1A] p-3 rounded-2xl flex gap-3 mb-3">
            <img src={p.imagem} className="w-20 h-20 rounded-xl object-cover"/>
            <div className="flex-1">
              <div className="font-bold">{p.nome}</div>
              <div className="text-xs text-gray-400 line-clamp-2">{p.desc}</div>
              <div className="text-[#FF7A00] font-bold mt-1">R$ {p.preco.toFixed(2)}</div>
            </div>
            <button onClick={()=>add(p)} className="bg-[#FF7A00] w-10 h-10 rounded-full text-2xl">+</button>
          </div>
        )))}

        {carrinho.length>0 && <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] p-4 rounded-t-2xl">
          <div className="flex justify-between mb-3"><span>SEU PEDIDO</span><span>{carrinho.length} itens</span></div>
          {carrinho.map(i=>(
            <div key={i.produtoId} className="flex justify-between text-sm"><span>{i.qtd}x {i.nome}</span><span>R$ {(i.preco*i.qtd).toFixed(2)}</span></div>
          ))}
          <div className="flex justify-between font-bold mt-2"><span>TOTAL</span><span className="text-[#FF7A00]">R$ {total.toFixed(2)}</span></div>
          <button onClick={()=>setCheckout(true)} className="bg-[#25D366] w-full py-3 rounded-xl mt-3 font-bold">ENVIAR PEDIDO PELO WHATSAPP</button>
        </div>}
      </> : 
      <div className="bg-[#1A1A1A] p-4 rounded-2xl">
        <h2 className="font-bold mb-4">Finalizar Pedido</h2>
        <div className="flex gap-2 mb-4">
          <button onClick={()=>setTipo('mesa')} className={`flex-1 py-2 rounded-xl ${tipo==='mesa'?'bg-[#FF7A00]':'bg-[#0D0D0D]'}`}>Mesa - Presencial</button>
          <button onClick={()=>setTipo('entrega')} className={`flex-1 py-2 rounded-xl ${tipo==='entrega'?'bg-[#FF7A00]':'bg-[#0D0D0D]'}`}>Entrega</button>
        </div>
        {tipo==='mesa' ? 
          <input placeholder="Número da Mesa" value={mesa} onChange={e=>setMesa(e.target.value)} className="w-full bg-[#0D0D0D] p-3 rounded-xl mb-3"/>
          : <>
            <input placeholder="Setor" value={end.setor} onChange={e=>setEnd({...end,setor:e.target.value})} className="w-full bg-[#0D0D0D] p-3 rounded-xl mb-2"/>
            <input placeholder="Rua" value={end.rua} onChange={e=>setEnd({...end,rua:e.target.value})} className="w-full bg-[#0D0D0D] p-3 rounded-xl mb-2"/>
            <div className="flex gap-2 mb-2">
              <input placeholder="Quadra" value={end.quadra} onChange={e=>setEnd({...end,quadra:e.target.value})} className="flex-1 bg-[#0D0D0D] p-3 rounded-xl"/>
              <input placeholder="Lote" value={end.lote} onChange={e=>setEnd({...end,lote:e.target.value})} className="flex-1 bg-[#0D0D0D] p-3 rounded-xl"/>
              <input placeholder="Nº Casa" value={end.casa} onChange={e=>setEnd({...end,casa:e.target.value})} className="flex-1 bg-[#0D0D0D] p-3 rounded-xl"/>
            </div>
          </>
        }
        <input placeholder="Telefone WhatsApp" value={tel} onChange={e=>setTel(e.target.value)} className="w-full bg-[#0D0D0D] p-3 rounded-xl mb-3"/>
        <div className="flex gap-2 mb-4">
          {['pix','dinheiro','cartao'].map(p=>(
            <button key={p} onClick={()=>setPag(p as any)} className={`flex-1 py-2 rounded-xl capitalize ${pag===p?'bg-[#FF7A00]':'bg-[#0D0D0D]'}`}>{p}</button>
          ))}
        </div>
        {pag==='pix' && <div className="bg-[#0D0D0D] p-3 rounded-xl mb-3 text-sm">Chave Pix: {chavePix}</div>}
        <button onClick={finalizar} className="bg-[#25D366] w-full py-3 rounded-xl font-bold">CONFIRMAR E ABRIR WHATSAPP</button>
        <button onClick={()=>setCheckout(false)} className="w-full py-2 mt-2 text-gray-400">Voltar</button>
      </div>}
    </div>
  )
    }
