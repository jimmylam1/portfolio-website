import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 3)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        This project is an endless runner game where the goal is to get as high of a score as possible while avoiding the vehicles on the road. 
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The game was built entirely using OpenGL and C++. Everything in the game is composed of either a cylinder, sphere, or cuboid, and each of these shapes are created using triangles.
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        Since this project did not use a game engine, everything had to be coded by hand, and one of the challenges was figuring out collision detection. My solution was to model each vehicle as a rectangle on the road, and that simplifies the problem from being 3D to being 2D. Then, to check if a collision has occurred, I would check if two rectanges from two vehicles overlap with each other.
                        <br/><br/>
                        Another challenge I had was figuring out how to display everything. Trying to instantiate one long road is impractical since the program would have to render all the objects, even if they are very far away. Instead, I use a finite number of road segments, including the fence, grass, and trees. Segments that travel behind the camera respawn to the back of the viewable road.
                        <br/><br/>
                        One more challenge I faced was with keyboard inputs. While OpenGL include callback functions to handle them, they were not able to be integrated with the game. Instead, I created my own callback function to handle key presses.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
