import pageStyle from './page.module.css'
import { Poppins, Roboto_Mono } from 'next/font/google'
import SkillIcon from '@/components/skillIcon/SkillIcon'
import skills from '../data/skills'
import projectsArray from '../data/projects'
import Project from '@/components/project/Project'
import Contact from '@/components/contact/Contact'
import Link from 'next/link'

const poppins600 = Poppins({ subsets: ['latin'], weight: "600" })
const robotoMono600 = Roboto_Mono({ subsets: ['latin'], weight: '600'})

export const metadata = {
    title: 'Jimmy Lam',
}

export default function Home() {
    const skillsArray = getSkills()

    return (
        <div className={pageStyle.container}>

            <div className={pageStyle.heroContainer}>
                <div className={pageStyle.hero}>
                    <h1 className={poppins600.className}>JIMMY LAM</h1>
                    <h4 className={robotoMono600.className}>Software Engineer</h4>
                </div>
                <div className={pageStyle.skillsWave1}></div>
            </div>

            <div className={pageStyle.skills}>
                <h2 className={robotoMono600.className}>Skills</h2>
                <div className={pageStyle.iconContainer}>
                    {skillsArray}
                </div>
            </div>

            <div className={pageStyle.projects}>
                <div className={pageStyle.skillsWave2}></div>
                <h2 className={robotoMono600.className}>Highlighted Projects</h2>
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
            </div>
            
            <div className={pageStyle.contact}>
                <h2 className={robotoMono600.className}>Contact</h2>
                <Contact />
            </div>
        </div>
    );
}

function getSkills() {
    return skills.map(s => <SkillIcon key={s.id} imgPath={s.path} name={s.name}/>)
}