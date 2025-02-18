'use client'

import pageStyle from './page.module.css'
import Contact from '@/components/homepage/contact/Contact'
import Skills from '@/components/homepage/skills/Skills'
import TypingHeader from '@/components/typingHeader/TypingHeader'
import Hero from '@/components/homepage/hero/Hero'
import ProjectList from '@/components/projectList/ProjectList'
import { useState } from 'react'

export default function Home() {
    const [headerDone, setHeaderDone] = useState(false)
    const [skillsHeaderViewed, setSkillsHeaderViewed] = useState(false)
    const [skillsDone, setSkillsDone] = useState(false)

    return (
        <div className={pageStyle.container}>

            <Hero showToroid={headerDone}>
                <div className={pageStyle.hero}>
                    <h1>JIMMY LAM</h1>
                    <TypingHeader header={'h4'} textInArray={['Software ', 'Engineer']} delayMs={1000} delayCharMs={100} setFinished={setHeaderDone} shadow/>
                </div>
                <div className={pageStyle.skillsWave1}></div>
            </Hero>

            <div className={pageStyle.skills}>
                <div style={{'paddingTop': '50px'}}>
                    <TypingHeader header={'h2'} textInArray={['Skills']} delayCharMs={85} delayMs={0} setViewed={setSkillsHeaderViewed} setFinished={setSkillsDone}/>
                </div>
                <Skills headerViewed={skillsHeaderViewed} headerDone={skillsDone}/>
            </div>

            <div className={pageStyle.projects}>
                <div className={pageStyle.skillsWave2}></div>
                <ProjectList headerTextArray={['Highlighted ', 'Projects']} onlyHighlight/>
                <div className={pageStyle.skillsWave1}></div>
            </div>
            
            <div className={pageStyle.contact}>
                <div style={{'paddingTop': '50px', 'paddingBottom': '100px'}}>
                    <TypingHeader header={'h2'} textInArray={['Con', 'tact']} delayCharMs={75} delayMs={0}/>
                </div>
                <Contact />
            </div>
        </div>
    );
}
