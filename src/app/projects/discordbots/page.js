import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 0)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        For some background, Mario Kart Tour is a mobile game available on Android and iOS devices, and Discord is a messaging platform where conversations take place in communities called "servers". Unlike other messaging apps, Discord allows developers to create "bots" to enhance the platform. Whenever someone uses a command, the bot will reply with something useful.
                        <br/><br/>
                        {/* I've created a separate website, <a href='https://mktbots.com' target='_blank'>mktbots.com</a>, that goes in depth for each bot. There, you can see see a list of all their features and commands.
                        <br/><br/> */}
                        All of the bots are built using JavaScript/TypeScript with Node.js and Discord.js.
                        <br/><br/>
                        Collectively, my Discord bots have been added to 1,000+ Discord servers, and they are used by hundreds of users every day.
                    </p>

                    <h2>Common Features</h2>
                    <ul>
                        <li>Many commands return a custom generated <a href='https://www.npmjs.com/package/canvas' target='_blank'>Canvas</a> image</li>
                        <li>Web scraping, such as from the <a href='https://www.mariowiki.com/Mario_Kart_Tour' target='_blank'>Mario Wiki</a></li>
                        <li>Google Sheets integration to fetch and edit spreadsheets</li>
                        <li>Custom promise-based child process handling for computationally heavy tasks</li>
                    </ul>

                    <h2>Specifics</h2>
                    <h3>Ice Mario</h3>
                    <ul>
                        <li>Primarily built for multiplayer matches</li>
                        <li>Reaction-based scheduling with custom date parser</li>
                        <li>Score tracker for multiple competition formats</li>
                        <li>Results table maker with support for custom logos, flags, fonts, and colors</li>
                        <li>Handles player stats for 1000+ players across 15+ seasons. Fetches data from Google Sheets and a custom API</li>
                    </ul>

                    <h3>ACR Bot</h3>
                    <ul>
                        <li>Primarily built for All Cup Ranking (ACR) where players compete for the global ranking system</li>
                        <li>Extensive use of custom images, both prerendered as well as generated on the spot</li>
                        <li>Responsible for keeping track of action count world records</li>
                        <li>Support for people to submit high scores to a leaderboard</li>
                    </ul>
                    
                    <h3>MKT Time Trial Bot</h3>
                    <ul>
                        <li>Primarily built for a time trial leaderboard</li>
                        <li>Fetches and edits data stored on Google Sheets</li>
                        <li>Custom built Optical Character Recognition (OCR) system to parse submissions from screenshots</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
