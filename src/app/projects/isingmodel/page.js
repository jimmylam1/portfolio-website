import projectsArray from '../../../data/projects'
import pageCss from '../projectPage.module.css'
import { ProjectPage } from '@/components/project/Project'
import Image from 'next/image'

export default function DiscordBots() {
    const project = projectsArray.find(i => i.id === 10)

    return (
        <div className={pageCss.main}>
            <div className={pageCss.container}>
                <ProjectPage {...project} />

                <div className={pageCss.content}>
                    <h2>About</h2>
                    <p>
                        The Ising model attempts to model the behavior of a ferromagnet in the absence of an external magnetic field. In particular, this model takes into account the tendency for neighboring dipoles in a lattice to align parallel to each other, and the model assumes that each dipole can only point either up or down. 
                        <br/><br/>
                        This project investigates the Ising model for different lattices, including a square, triangular, hexagonal, and random lattices, and it uses a Monte Carlo simulation to find the critical temperature (The point at which the lattice changes from having some net magnetization to zero net magnetization) for each lattice. 
                    </p>

                    <div className={pageCss.gallery}>
                        <Image 
                            className={pageCss.screenshot} 
                            src='/images/ising/lattices.png' 
                            alt='Lattices' 
                            width={10} 
                            height={10}
                        />
                    </div>

                    <h2>How was it built?</h2>
                    <p>
                        Everything was written in a Jupyter Notebook using Python.
                    </p>

                    <h2>Challenges faced</h2>
                    <p>
                        The hardest part of the simulation was figuring out how to model the different lattices. Each node in the Ising model is placed in a 2D NxN array, and the challenge was figuring out what each neighbor is. Some lattices, like the square or triangular lattice, were easy to figure out, but others, like the hexagonal lattice, took more time.
                    </p>

                    <h2>Results</h2>
                    <p>
                        Here are the results for some of the lattices I used. The critical temperature is the first data point, when going left to right, where the average magnetization is zero. Note: for temperatures below the critical temperature, the average magnetization seem to be either +1 or -1, and this just means the dipoles are mostly either pointing up or down. 
                    </p>
                    <div className={pageCss.gallery}>
                        <Image 
                            className={pageCss.screenshot} 
                            src='/images/ising/triangular.png' 
                            alt='Triangular lattice' 
                            width={10} 
                            height={10}
                        />
                        <Image 
                            className={pageCss.screenshot} 
                            src='/images/ising/square.png' 
                            alt='Square lattice' 
                            width={10} 
                            height={10}
                        />
                        <Image 
                            className={pageCss.screenshot} 
                            src='/images/ising/dilutedsquare.png' 
                            alt='Diluted square lattice' 
                            width={10} 
                            height={10}
                        />
                        <Image 
                            className={pageCss.screenshot} 
                            src='/images/ising/hexagonal.png' 
                            alt='Hexagonal lattice' 
                            width={10} 
                            height={10}
                        />
                    </div>

                    <h2>Conclusion</h2>
                    <p>
                        The overall trend, based on my results, is the more neighbors a dipole has the higher the critical temperature. 
                    </p>
                </div>
            </div>
        </div>
    )
}
