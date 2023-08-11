'use client'

import projectsArray from '../../data/projects'
import pageStyle from './ProjectList.module.css'
import animationCss from '../animations.module.css'
import { Project } from '../project/Project'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useViewport } from '@/hooks/useViewport'
import TypingHeader from '../typingHeader/TypingHeader'
import useEffectNoInitialMount from '@/hooks/useEffectNoInitialMount'

export default function ProjectList({headerTextArray, onlyHighlight=false}) {
    const highlightedProjectsRef = useRef(null)
    const { viewed: headerViewed, isVisible: headerIsVisible } = useViewport(highlightedProjectsRef, 0.9, '0px 0px -100px 0px')
    const [projectViewed, setProjectViewed] = useState(false) // true if >= 1 projects were viewed, false otherwise
    const [canStart, setCanStart] = useState(true)

    useEffectNoInitialMount(() => {
        const delay = onlyHighlight ? 700 : 1300

        if (!projectViewed) {
            setCanStart(false)
            setTimeout(() => {
                setCanStart(true)
            }, delay);
        }
    }, [headerViewed])

    const highlightedProjectsClasses = `${pageStyle.h2} ${pageStyle.highlightedProjects} ${headerViewed ? animationCss.animateFloatUp : animationCss.hidden}`
    
    let header = <h2 ref={highlightedProjectsRef} className={highlightedProjectsClasses}>{headerTextArray.join("")}</h2>
    if (!onlyHighlight) {
        header = (
            <div ref={highlightedProjectsRef} style={{'paddingTop': '120px', 'paddingBottom': '50px'}}>
                <TypingHeader header={'h2'} textInArray={headerTextArray} delayMs={250} delayCharMs={75}/>
            </div>
        )
    }

    const filteredProjectsArray = projectsArray.filter(p => onlyHighlight ? p.isHighlight : true)

    return (
        <div className={pageStyle.projects}>
            {header}
            {filteredProjectsArray.map((p, idx) => (
                <Project
                    key={idx}
                    title={p.title}
                    image={p.image}
                    category={p.category}
                    tags={p.tags}
                    bulletPoints={p.bulletPoints}
                    pageUrl={p.pageUrl}
                    links={p.links}
                    showHr={onlyHighlight ? true : idx !== filteredProjectsArray.length-1}
                    setProjectViewed={() => !projectViewed && setProjectViewed(true)}
                    canStart={canStart}
                />
            ))}
            {onlyHighlight && <Link className={pageStyle.allProjectsBtn} href='/projects'>View All Projects</Link> }
        </div>
    )

}