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
                        For some background, Mario Kart Tour is a mobile game available on Android and iOS devices, and Discord is a messaging platform where conversations take place in communities called "servers". Unlike other messaging apps, Discord allows developers to create "bots" to enhance the platform. Whenever someone uses a bot command, the bot will reply with something useful.
                        <br/><br/>
                        I've created a separate website, <a href='https://mktbots.com' target='_blank'>mktbots.com</a>, that goes in depth for each bot. There, you can see see a list of all their features and commands.
                        <br/><br/>
                        Collectively, my Discord bots have been added to over 1,000 Discord servers, and they are used by 300+ unique users every day.
                    </p>

                    <h2>How are they built?</h2>
                    <p>
                        All my bots are built using JavaScript with Node.js, and the Discord.js library is what I use to connect with Discord. In addition, MongoDB is the database used across all bots. 
                        <br/><br/>
                        The bots were originally hosted on Heroku, but I have since transferred them to a  DigitalOcean droplet due to Heroku's policy changes.
                    </p>

                    <h2>Common features across all bots</h2>
                    <p>
                        All my Discord bots use image generation extensively. Since Discord bots can only display text in a few specific ways, images allow for full control over how responses should look. I use Canvas for all the image related needs.
                        <br/><br/>
                        Command responsiveness is a top priority. When someone uses a command, I try to minimize the time it takes for them to receive a response. Whenever necessary, data will be cached like when querying a database or fetching data.
                        <br/><br/>
                        Web scraping is an integral tool for all my bots. By web scraping <a href='https://www.mariowiki.com/Mario_Kart_Tour' target='_blank'>Mario Wiki</a>, the bots are able to fetch all the required assets without my assistance.
                        <br/><br/>
                        Connecting to Google Sheets is an essential backend feature, and the Google Sheets API is used throughout to either fetch data or edit a spreadsheet. 
                    </p>

                    <h2>Challenges faced</h2>

                    <h3>Ice Mario</h3>
                    <p>
                        A challenge I faced was figuring out how to display hundreds of team logos at once. The best method was to generate images containing them, but it is a CPU heavy task that takes a very long time to complete. The solution was to fork a child process, and that allows the child process to fetch and generate images without affecting the parent process. 
                        <br/><br/>
                        Another challenge focuses on player lounge stats and how the data is fetched. For the first 8 seasons of MKT Lounge, player stats were stored in a Google spreadsheet. Since there was a lot of data, fetching a sheet can take a very long time, often over 30 seconds, and this would be terrible to fetch on every command invocation. The solution is to cache all the fetched data, and this allows the bot to have immediate access to them.
                    </p>

                    <h3>ACR Bot</h3>
                    <p>
                        A challenge I faced was figuring out a way to generate an image that requires over 40 separate images. While the command <code>/trackinfo</code> can be quick when the images are cached, it can take 30 seconds or more to generate if the bot were to restart. I quickly realized this approach of generating images was not a good user experience. My solution was to generate all 800+ images, save them, then use them whenever someone uses the command. While it took some time to generate them up front, this significantly improves speed since the bot is now able to respond almost instantaneously. 
                        <br/><br/>
                        Another challenge relates to the newest command <code>/overlap</code>. Unlike <code>/trackinfo</code> where all the images can be pre-generated, the overlap command cannot do that due to the large number of possible input combinations. My solution was to fork a child process to generate the images, and this prevents the main process from running into performance issues.
                    </p>

                    <h3>MKT Time Trial Bot</h3>
                    <p>
                        A challenge I faced was figuring out how to use Optical Character Recognition (OCR) to read a screenshot and extract text from it. I initially tried using Tesseract, an OCR engine, but it produced inconsistent results. Instead of attempting to train it, I decided to experiment and create my own OCR reader from analyzing pixel data. The video below is a conceptual overview on how it was done:
                    </p>
                    <div className={pageCss.videoWrapper}>
                        <iframe className={pageCss.video} width="560" height="315" src="https://www.youtube.com/embed/Z9gY5Hl13y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}
