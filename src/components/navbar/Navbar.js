import navCss from './Navbar.module.css'
import Link from 'next/link'
import Image from "next/image";

export default function Navbar() {
    return <div className={navCss.nav}>
        <ul>
            <li><Link className={navCss.link} href='/'>Home</Link> </li>
            <li><Link className={navCss.link} href='/projects'>Projects</Link> </li>
        </ul>
        <div className={navCss.linksContainer}>
            <a href='https://github.com/jimmylam1' target='_blank'>
                <Image className={navCss.icon} src={'/images/github.png'} width={40} height={40} alt='GitHub'/>
            </a>
        </div>
    </div>
}