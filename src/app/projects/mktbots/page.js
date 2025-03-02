import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'
import Link from 'next/link'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 1)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        <a href='https://mktbots.com' target='_blank'>mktbots.com</a> is a website I created for my <Link href='/projects/discordbots'>Mario Kart Tour Discord bots</Link>. The website collectively shows the highlighted features for each bot, and more importantly, contains detailed documentation of every command available. I also designed the site to be mobile friendly.
                    </p>

                    <p>
                        The website was built using only HTML, CSS, and JavaScript. The reason for not using a library or framework was to gain experience building a large project with only HTML and CSS, and this allows me to be familiar with them in a more fundamental level.
                    </p>

                </div>
            </div>
        </div>
    )
}
