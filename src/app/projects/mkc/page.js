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
                        <a href='https://www.mariokartcentral.com/mkc/' target='_blank'>Mario Kart Central</a> is the central hub for Mario Kart tournaments and activities. With over 50,000 registered players, Mario Kart Central is the best place to play competetively with others all around the world.
                        <br/><br/>
                        The site is being rewritten from the ground up with in collaboration with a few developers. 
                    </p>

                    <p>
                        The new website uses the Python framework Starlette for the backend, and the frontend uses Svelte and TypeScript. Both SQLite and S3 compatable storage are used to store data. Docker is used to containerize the various services needed to run the site.  
                    </p>

                </div>
            </div>
        </div>
    )
}
