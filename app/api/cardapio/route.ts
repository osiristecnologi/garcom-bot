import { NextResponse } from 'next/server'

let cardapio = [
  { id: 1, nome: "X-Burger", preco: 18.00, desc: "Pão, carne, queijo" },
  { id: 2, nome: "X-Salada", preco: 20.00, desc: "Com alface e tomate" },
  { id: 3, nome: "Coca 350ml", preco: 6.00, desc: "Lata gelada" }
]

export async function GET() {
  return NextResponse.json({ cardapio })
}
