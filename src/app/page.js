import pageStyle from './page.module.css'
import { Poppins, Roboto_Mono } from 'next/font/google'
import projectsArray from '../data/projects'
import { Project } from '@/components/project/Project'
import Contact from '@/components/contact/Contact'
import Link from 'next/link'
import Skills from '@/components/skills/Skills'
import TypingHeader from '@/components/typingHeader/TypingHeader'

const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })
const robotoMono600 = Roboto_Mono({ subsets: ['latin'], weight: '600'})

export const metadata = {
    title: 'Jimmy Lam',
}

export default function Home() {
    return (
        <div className={pageStyle.container}>

            <div className={pageStyle.heroContainer}>
                <div className={pageStyle.hero}>
                    <h1 className={poppins600.className}>JIMMY LAM</h1>
                    <TypingHeader header={'h4'} textInArray={['Soft', 'ware', ' ', 'En', 'gin', 'eer']} delayMs={1000} />
                </div>
                <div className={pageStyle.skillsWave1}></div>
            </div>

            <div className={pageStyle.skills}>
                <div style={{'padding-top': '50px'}}>
                    <TypingHeader header={'h2'} textInArray={['Sk', 'ills']} delayMs={250} />
                </div>
                <Skills />
            </div>

            <div className={pageStyle.projects}>
                <div className={pageStyle.skillsWave2}></div>
                <div style={{'padding-top': '100px', 'padding-bottom': '50px'}}>
                    <TypingHeader header={'h2'} textInArray={['High', 'light', 'ed', ' ', 'Pro', 'jects']} delayMs={250} />
                </div>
                {projectsArray.filter(p => p.isHighlight).map((p, idx) => (
                    <Project     
                        key={idx}
                        title={p.title}
                        image={p.image}
                        category={p.category}
                        tags={p.tags}
                        bulletPoints={p.bulletPoints}
                        pageUrl={p.pageUrl}
                        links={p.links}
                    />
                ))}
                <Link className={pageStyle.allProjectsBtn} href='/projects'>View All Projects</Link>
                <div className={pageStyle.skillsWave1}></div>
            </div>
            
            <div className={pageStyle.contact}>
                <div style={{'padding-top': '50px', 'padding-bottom': '100px'}}>
                    <TypingHeader header={'h2'} textInArray={['Con', 'tact']} delayMs={250}/>
                </div>
                <Contact />
            </div>
        </div>
    );
}
