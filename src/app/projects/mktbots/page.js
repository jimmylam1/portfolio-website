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
                        <a href='https://mktbots.com' target='_blank'>mktbots.com</a> is a website I created for my <Link href='/projects/discordbots'>Mario Kart Tour Discord bots</Link>. The website collectively shows the highlighted features for each bot, and more importantly, contains detailed documentation of every command available. 
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The website was built using only HTML, CSS, and Vanilla JavaScript. The reason for not using a library or framework was to gain experience building a large project with only HTML and CSS, and this allows me to be familiar with them in a more fundamental level.
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        The biggest challenge was making the pages both desktop and mobile friendly. It is straightforward to implement the desktop layout. However, for mobile devices, I had to make sure everything was scaled correctly.
                        <br/><br/>
                        Another challenge I had was making the navigation bar responsive for both desktop and mobile layouts. For the desktop version, I made the navbar contain three categories: "Home", "Commands," and "Resources". Then, when a user hovers over them, a list of sections appear. For the mobile version, I made a Hamburger Menu where it displays all the categories as well as all the sections at once, and this was primarily because I wanted to minimize the number of taps required to navigate to different pages. 
                    </p>

                    
                </div>
            </div>
        </div>
    )
}
