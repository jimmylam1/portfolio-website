import '../styles/globals.css'
import { Inter, Poppins, Roboto, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-poppins' })
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '500', '700'], variable: '--font-roboto' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-roboto-mono' })

export const metadata = {
    title: 'Jimmy Lam',
}

export default function RootLayout({ children }) {
    let classNames = [inter.className, poppins.variable, roboto.variable, robotoMono.variable]
    if (false)
        classNames.push('dark-mode')

    return (
        <html lang="en">
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1Y0MVFCFNR"></Script>
            <Script id="google-analytics">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1Y0MVFCFNR');`}
            </Script>
            <body className={classNames.join(" ")}>
                <Navbar />
                <div>
                    {children}
                </div>
            </body>
        </html>
    )
}
