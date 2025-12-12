import './globals.css'

export const metadata = {
  title: 'Guilarte & Servicios | Reformas y Limpieza en Alicante',
  description:
    'Reformas integrales, cocinas y baños, y limpieza profesional en Alicante y Comunidad Valenciana. Gestión completa con calidad y confianza.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
