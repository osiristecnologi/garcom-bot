export const metadata = {
  title: 'Garcom Bot',
  description: 'Bot do garçom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
