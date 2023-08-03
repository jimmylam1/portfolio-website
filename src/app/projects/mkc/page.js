import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 2)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        <a href='https://www.mariokartcentral.com/mkc/' target='_blank'>Mario Kart Central</a> is the central hub for Mario Kart tournaments and activities. Tournaments are held throughout the year, and they consist of either team or solo events. With over 40,000 registered players, Mario Kart Central is the best place to play competetively with others all around the world.
                        <br/><br/>
                        Currently, Mario Kart central is in the process of being rewritten from the ground up with around 10 developers. The new site will continue to host tournaments, but it intends to expand by incorporating time trial world records currently being hosted on a separate website. 
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The new website uses Python and Starlette for the backend API, and SQLite is the primary database used. The frontend uses Svelte and TypeScript. Finally, Docker is the containerization platform used to run all the services.  
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        The biggest challenge was getting used to the tech stack. While I am already familiar with Python and writing APIs, everything else was new to me. For example, I had to learn SQL since I haven't used it before, and since I am primarily a backend developer for the website, it was essential for me to be familiar with it. 
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
