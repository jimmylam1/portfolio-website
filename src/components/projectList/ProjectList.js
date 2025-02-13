'use client'

import projectsArray from '../../data/projects'
import pageStyle from './ProjectList.module.css'
import animationCss from '../animations.module.css'
import { Project } from '../project/Project'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useViewport } from '@/hooks/useViewport'
import useEffectNoInitialMount from '@/hooks/useEffectNoInitialMount'

export default function ProjectList({headerTextArray, onlyHighlight=false}) {
    const highlightedProjectsRef = useRef(null)
    // const { viewed: headerViewed, isVisible: headerIsVisible } = useViewport(highlightedProjectsRef, 0.9, '0px 0px -100px 0px')
    const { viewed: headerViewed, isVisible: headerIsVisible } = useViewport(highlightedProjectsRef, 0.3, '0px 0px -300px 0px')
    const [projectViewed, setProjectViewed] = useState(false) // true if >= 1 projects were viewed, false otherwise
    const [canStart, setCanStart] = useState(true)

    useEffectNoInitialMount(() => {
        // const delay = onlyHighlight ? 700 : 1300
        const delay = 0

        if (!projectViewed) {
            setCanStart(false)
            setTimeout(() => {
                setCanStart(true)
            }, delay);
        }
    }, [headerViewed])

    const highlightedProjectsClasses = `${pageStyle.h2} ${pageStyle.highlightedProjects} ${headerViewed ? animationCss.animateFloatUp : animationCss.hidden}`
    const header = <h2 ref={highlightedProjectsRef} className={highlightedProjectsClasses}>{headerTextArray.join("")}</h2>
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
                    forceShow={projectViewed}
                />
            ))}
            {onlyHighlight && <Link className={pageStyle.allProjectsBtn} href='/projects'>View All Projects</Link> }
        </div>
    )

}