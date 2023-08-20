'use client'

import { useEffect, useState } from 'react'
import navCss from './Navbar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    ['/projects', 'Projects'],
    ['/Resume.pdf', 'Resume'],
    ['https://github.com/jimmylam1', 'GitHub'],
    ['https://www.linkedin.com/in/jimmylamdev', 'LinkedIn']
]

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const pathname = usePathname()

    function openMobileMenu() {
        setShowMobileMenu(true)
    }
    function closeMobileMenu() {
        setShowMobileMenu(false)
    }

    useEffect(() => {
        closeMobileMenu()
    }, [pathname])

    return (
        <>
            <div className={navCss.nav}>
                <div className={navCss.menuContainer}>
                    <div onClick={openMobileMenu}>
                        <h1 className={navCss.openBtn}>☰</h1>
                    </div>
                    <div className={navCss.jimmyWrapper}>
                        <Link className={`${navCss.link} ${navCss.jimmy}`} href='/'>{"<Jimmy/>"}</Link>
                    </div>
                </div>
                <ul>
                    {links.map((i, idx) => (
                        <li key={idx}><Link className={navCss.link} href={i[0]}>{i[1]}</Link></li>
                    ))}
                </ul>
            </div>
            <div className={`${navCss.mobileMenuWrapper} ${showMobileMenu && navCss.showWrapper}`}>
                <div className={`${navCss.mobileMenu} ${showMobileMenu && navCss.showMenu}`}>
                    <Link className={`${navCss.link} ${navCss.jimmy}`} href='/'>{"<Jimmy/>"}</Link>
                    <div className={navCss.closeBtn} onClick={closeMobileMenu}>
                        &times;
                    </div>
                    <ul>
                        {links.map((i, idx) => (
                            <li key={idx}><Link className={navCss.link} href={i[0]}>{i[1]}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className={`${navCss.closeMobileMenuArea} ${showMobileMenu && navCss.showMobileMenuArea}`} onClick={closeMobileMenu}></div>
            </div>
        </>
    )
}
