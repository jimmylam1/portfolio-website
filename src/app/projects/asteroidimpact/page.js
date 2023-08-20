import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const {title, category, tags} = projectsArray.find(i => i.id === 5)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage title={title} category={category} tags={tags} />
                <div className={pageCss.videoWrapper}>
                    <iframe className={pageCss.videoLarge} width="560" height="315" src="https://www.youtube.com/embed/RuVAIJ_aFLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        This project dives into the visualization of a simulated astroid impact into a body of water. The video include isosurfaces as well as volume rendering of the asteroid, water, temperature, and pressure during impact. The dataset can be found <a href='https://oceans11.lanl.gov/deepwaterimpact/yA31_300x300x300-FourScalars_resolution.html' target='_blank'>here</a>. 
                    </p>

                    <h2>How was it made?</h2>
                    <p>
                        The visualization software used is called <a href='https://visit-dav.github.io/visit-website/' target='_blank'>VisIt</a>. The asteroid impact data was imported into VisIt, then various visualization techniques, including isosurfaces and volume rendering, were selected. Custom Python scripts were written to control the animations as well as to save each frame as an image.
                        <br/><br/>
                        Once all the images were rendered, FFmpeg was used to combine all the images into video clips. Then, iMovie was used to make the final video.
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        Using the visualization software was a bit of a challenge. At first, it took time to become familiar with the software itself. Afterwards, it was difficult complete some visualizations because the program would often crash due to the large data size (over 80GB). I ended up having to split the data into chunks instead of rendering them all at once. 
                        <br/><br/>
                        Rendering each scene proved to be a bit of a challenge. My computer was not able to see a preview of each scene, so I had to wait a few hours for the rendering to complete before I can see if I liked it or not. In some cases, I had to adjust my scripts and re-render the scene entirely.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
