import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    message: "Garcom Bot API no ar" 
  })
}
