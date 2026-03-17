import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '一般財団法人 阿部 亮 財団 - ABE RYO FOUNDATION -',
  description: 'すべての人が悔いのない人生を全うできる世界を目指します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
