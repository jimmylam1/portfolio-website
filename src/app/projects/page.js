import { Roboto_Mono } from 'next/font/google'
import projectCss from './projects.module.css'
import { Project } from '@/components/project/Project'
import projectsArray from '../../data/projects'
import TypingHeader from '@/components/typingHeader/TypingHeader'

export default function Projects() {
    return (
        <div className={projectCss.projects}>
            <div style={{'padding-top': '120px', 'padding-bottom': '50px'}}>
                <TypingHeader header={'h2'} textInArray={['All', ' ', 'Pro', 'jects']} delayMs={250} />
            </div>
            {projectsArray.map((p, idx) => (
                <Project     
                    key={idx}
                    title={p.title}
                    image={p.image}
                    category={p.category}
                    tags={p.tags}
                    bulletPoints={p.bulletPoints}
                    pageUrl={p.pageUrl}
                    links={p.links}
                    showHr={idx !== projectsArray.length-1}
                />
            ))}
        </div>
    )
}