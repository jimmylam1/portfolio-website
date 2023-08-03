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
                        This page is designed to highlight the major features, decisions I've made, and challenges I've faced when building the bots. To learn more about each bot in detail, visit <a href='https://mktbots.com' target='_blank'>mktbots.com</a> to see a list of all their features and commands.
                        <br/><br/>
                        Collectively, my Discord bots are used in over 1,000 Discord servers, and similarly, they are used by an equal, if not more, number of people every day.
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        All my bots are built using JavaScript with Node.js, and the Discord.js library is what I use to connect with Discord. In addition, MongoDB is the database used across all bots. Finally, the bots are all hosted on a DigitalOcean droplet.
                    </p>

                    <h2>Common features across all bots</h2>
                    <p>
                        All my Discord bots use image generation extensively. Since Discord bots can only display text in a few specific ways, images allow for them to have full control over how responses should look. The way this is accomplished is through the npm package Canvas, and this is a Node.js implementation of the HTML canvas element. For most bot commands, images can be generated on the spot because it takes less than a second to finish. However, there are some issues that arise for Ice Mario and ACR Bot, and they are described below.
                        <br/><br/>
                        Command responsiveness is a top priority. When someone uses a command, they shouldn't need to wait a long time for a response. Whenever necessary, data will be cached like when querying a database or fetching data.
                        <br/><br/>
                        Web scraping is an integral tool for all my bots. They all need images from Mario Kart Tour, and it would be a lot of work to manually add them one by one. In addition, new images are added every two weeks, so it would be a continuous task to do manually. By web scraping <a href='https://www.mariowiki.com/Mario_Kart_Tour' target='_blank'>Mario Wiki</a>, the bots are able to fetch all the required assets without my assistance.
                        <br/><br/>
                        Connecting to Google Sheets is an essential backend feature, and the Google Sheets API is used throughout to either fetch data or edit a spreadsheet. 
                    </p>

                    <h2>Main features and challenges</h2>

                    <h3>Ice Mario</h3>
                    <p>
                        The table maker is one of Ice Mario's most used command. The original code was made by <a href='https://github.com/hlorenzi/mk8d_ocr' target='_blank'>Lorenzi</a>, but I have made significant improvements as well as made it compatable with Node.js. Here are some of the features I've added compared to the original:
                    </p>
                    <ul>
                        <li>Make tables through Discord instead of using a website</li>
                        <li>Ability to add team logos without the need of Photoshop</li>
                        <li>Ability to add custom player flags</li>
                        <li>Ability to add a background image</li>
                        <li>Custom tournament color schemes</li>
                    </ul>
                    <p>
                        A challenge with having custom team logos and player flags is figuring out a way to display them. The best way to do so is to generate an image containing them, but it is a CPU heavy task. When there are hundreds of images, fetching and rendering them on a canvas causes the bot to lag significantly. The solution is to fork a child process. When the child process is done, it will save the resulting image to the file system, and the main process will be able to use this image whenever someone needs to view all the logos or flags. 
                        <br/><br/>
                        Ice Mario is an integral bot in the MKT Lounge Discord server, where it is responsible for player lounge stats. Originally, the server used a different bot to handle stats, but it was very basic and not customizable. These are some of the features Ice Mario improves over the previous bot:
                    </p>
                    <ul>
                        <li>Uses generated images for custom layout as well as display stats data using a graph</li>
                        <li>Ability to fetch stats from a previous season</li>
                        <li>List player ranking</li>
                        <li>Predict stats change after an event</li>
                    </ul>
                    <p>
                        A challenge with lounge stats is how the data is fetched. For the first 8 seasons of MKT Lounge, player stats were stored in a Google spreadsheet. Since there was a lot of data, fetching a sheet can take a very long time, often over 30 seconds, and this would be terrible to fetch on every command invocation. The solution is to cache all the fetched data, and this allows the bot to have immediate access to them. Starting with season 9, another developer created an API to store stats data, and this data is also cached to preserve speed and maintain reliability in the event the API is unavailable.
                    </p>

                    <h3>ACR Bot</h3>
                    <p>
                        Unlike Ice Mario, ACR Bot often requires 40 or more driver, kart, or glider images to generate the main response image for the <code>/trackinfo</code> command. While the command can be quick when the images are cached, it can take upwards of 30 seconds or more to generate if the bot were to restart. I quickly realized this approach of generating images was not sufficient for this bot. My solution was to generate all 800+ images, save them, then use them whenever someone uses the command. This significantly improves speed since the bot is now able to respond almost instantaneously. 
                        <br/><br/>
                        Another challenge relates to the newest command <code>/overlap</code>. Unlike <code>/trackinfo</code> where all the images can be pre-generated, the overlap command cannot do that due to the large number of possible images. My solution was to fork a child process to generate the images, and this prevents the main process from lagging.
                    </p>

                    <h3>MKT Time Trial Bot</h3>
                    <p>
                        A major feature of this bot is the ability to use Optical Character Recognition (OCR) to read a screenshot and extract text from it. I initially tried using Tesseract, an OCR engine, but it produced inconsistent results. Instead of attempting to train it, I decided to experiment and create my own OCR reader from analyzing pixel data. The video below is a conceptual overview on how it was done:
                    </p>
                    <div className={pageCss.videoWrapper}>
                        <iframe className={pageCss.video} width="560" height="315" src="https://www.youtube.com/embed/Z9gY5Hl13y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}
