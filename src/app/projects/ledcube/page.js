import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'
import Image from 'next/image'

export default function DiscordBots() {
    const {title, category, tags} = projectsArray.find(i => i.id === 6)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage title={title} category={category} tags={tags} />
                <div className={pageCss.videoWrapper}>
                    <iframe className={pageCss.videoLarge} width="704" height="396" src="https://www.youtube.com/embed/2x6tbyymKe0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        This 4x4 LED cube was built for my final project in Digital Electronics. I created the cube, the driver circuit, and code to generate the animations. This project does not use a microprocessor or a microcontroller, like an Arduino, because I wanted to use components I learned throughout the class. Instead, an EEPROM stores all the data used by the cube.
                        <br/><br/>
                        After the class ended, I redesigned the circuit to be compatable with an Arduino since it would be much easier to build, and similarly, I programmed an Arduino to display the cube animations.
                    </p>

                    <h2>How was it built?</h2>
                    <p>
                        The cube itself consists of 64 LEDs soldered together. Overall, the LED cube works by lighting one row at a time (16 LEDs), and at the same time, selecting which LED in the row should be on or off. By cycling through each row fast enough, above around 3 kHz, the cube appears like all the LEDs are on at the same time through persistence of vision.
                        <br/><br/>
                        The driver circuit was created using only logic ICs including counters, D-type flip-flops, EEPROM, multiplexers, demultiplexers, and shift registers.
                        <br/><br/>
                        I used Python to create a binary file for the EEPROM. First, I have a text file that contains part of the animations in hexadecimal format. For more complex animations, I wrote Python scripts to generate them. Then, I wrote a basic compiler to convert the text file to a binary file, where it would then be added to the EEPROM through a programmer.
                        <br/><br/>
                        A simulator program was built to aid in the development and debugging process, and this was also written using Python. The simulator reads in a binary file, then displays all the animations sequentially. A video of the simulator is shown below.
                        <div className={pageCss.videoWrapper}>
                            <iframe className={pageCss.videoLarge} width="800" height="450" src="https://www.youtube.com/embed/__pvptnB81A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        Coming up with the schematic diagram for the driver circuit took a very long time to complete. With such a circuit, each clock pulse is triggering multiple components, and if a single component is off the whole circuit will not work as intended. 
                        <br/><br/>
                        While building the circuit, it was challenging to debug at times. Unlike writing software, where if there's an issue the exact line of code is shown, a single misplaced wire in the whole circuit will cause everything to not work. Similarly, since the output of ICs are not instantaneous, it caused glitches (where an output pin goes +5V instead of 0V), and that caused timing issues. In the end, I resolved the glitches by adding a few D-type flop-flops to the circuit.
                    </p>

                    <h2>Gallery</h2>
                    <div className={pageCss.gallery}>
                        <h3>Image of the cube with the full circuit</h3>
                        <Image 
                            className={pageCss.galleryImage}
                            src='/images/ledcube/lab.jpg'
                            width={300}
                            height={300}
                            alt='Full circuit'
                        />
                        <h3>Full schematic diagram</h3>
                        <Image 
                            className={pageCss.galleryImage}
                            src='/images/ledcube/schematic.jpg'
                            width={300}
                            height={300}
                            alt='Full circuit'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
