import { Roboto_Mono } from 'next/font/google'
import projectCss from './projects.module.css'
import Project from '@/components/project/Project'
import projectsArray from '../../data/projects'

const robotoMono600 = Roboto_Mono({ subsets: ['latin'], weight: '600'})

export default function Projects() {
    return (
        <div className={projectCss.projects}>
            <h2 className={robotoMono600.className}>All Projects</h2>
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
                />
            ))}
        </div>
    )
}