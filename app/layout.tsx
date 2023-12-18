import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './UI/Sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })
import styles from "./layout.module.css"
import Footer from './UI/Footer/Footer'


export const metadata: Metadata = {
  title: 'Multi form',
  description: 'By Racine14 Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} wrapperMain ${styles.container}`}>
        <div className={styles.flex}>
          <div className={styles.flex1}>
            <Sidebar />
          </div>
          <div className={styles.flex2}>
            <div className="content">
              <div>
                {children}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
