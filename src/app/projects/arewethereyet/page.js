import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 4)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        Are We There Yet is a challenging game where the player must drive their car to the end of the level. 
                        <br/><br/>
                        The car contains two gauges: life and fuel, and the game ends when one of the two becomes empty. Every time the player runs into an obstacle, the life gauge decreases. Also, the fuel gauge depletes over time, and the only way to maintain it is to collect fuel scattered throughout each level.
                        <br/><br/>
                        There are three levels: City, Space, and Desert. For gameplay, the player can hop, shoot lasers, and use turbo. Do you have what it takes to complete all three levels?
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The game was built with Unity along with C#, and it was developed in collaboration with two other developers.
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        I was still fairly new to Unity, so figuring out how to do certain tasks took a bit longer to complete. In addition, finding suitable background music was a bit of a challenge since the audio had to last the whole level. I ultimately used audio from various Mario Kart tracks because they were the best fit overall.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
