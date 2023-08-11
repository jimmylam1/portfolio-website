import pageStyle from './page.module.css'
import Contact from '@/components/contact/Contact'
import Skills from '@/components/skills/Skills'
import TypingHeader from '@/components/typingHeader/TypingHeader'
import Hero from '@/components/hero/Hero'
import ProjectList from '@/components/projectList/ProjectList'

export default function Home() {
    return (
        <div className={pageStyle.container}>

            <Hero>
                <div className={pageStyle.hero}>
                    <h1>JIMMY LAM</h1>
                    <TypingHeader header={'h4'} textInArray={['Software ', 'Engineer']} delayMs={1000} delayCharMs={100} shadow/>
                </div>
                <div className={pageStyle.skillsWave1}></div>
            </Hero>

            <div className={pageStyle.skills}>
                <div style={{'paddingTop': '50px'}}>
                    <TypingHeader header={'h2'} textInArray={['Skills']} delayCharMs={85} delayMs={250} />
                </div>
                <Skills />
            </div>

            <div className={pageStyle.projects}>
                <div className={pageStyle.skillsWave2}></div>
                <ProjectList headerTextArray={['Highlighted ', 'Projects']} onlyHighlight/>
                <div className={pageStyle.skillsWave1}></div>
            </div>
            
            <div className={pageStyle.contact}>
                <div style={{'paddingTop': '50px', 'paddingBottom': '100px'}}>
                    <TypingHeader header={'h2'} textInArray={['Con', 'tact']} delayCharMs={75} delayMs={250}/>
                </div>
                <Contact />
            </div>
        </div>
    );
}
