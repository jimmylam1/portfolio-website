import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 7)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        This project is a trivia game built using React. Data is fetched using the <a href='https://opentdb.com/api_config.php' target='_blank'>Open Trivia Database API</a>, and the player is able to select the trivia category and difficulty of the questions. While everything was built myself, the original design credit goes to Scrimba.
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The project was created using create-react-app. Code wise, it uses JSX, HTML, and CSS.
                    </p>

                </div>
            </div>
        </div>
    )
}
