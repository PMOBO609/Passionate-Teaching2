import './globals.css'

export const metadata = {
  title: 'Passionate Teaching — Learn Without Limits',
  description: 'Master in-demand skills with world-class instructors.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}