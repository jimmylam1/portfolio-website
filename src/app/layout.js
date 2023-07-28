import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Jimmy Lam',
}

export default function RootLayout({ children }) {
    let classNames = [inter.className]
    if (false)
        classNames.push('dark-mode')

    return (
        <html lang="en">
            <body className={classNames.join(" ")}>
                <Navbar />
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}
