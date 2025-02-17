import Image from "next/image"
import css from './demo.module.css'
import {interactiveDemos, videoDemos} from '../../data/demos'

export default function Demos() {
    return (
        <div className={css.page}>
            <h1>Interactive Demos</h1>
            <p>Click on a project below to try it out in your browser!</p>
            <div className={css.grid}>
                {interactiveDemos.map((i, idx) => (
                    <DemoItem 
                        thumbnailUrl={i.thumbnailUrl}
                        title={i.title}
                        description={i.description}
                        link={i.link}
                        key={idx}
                    />
                ))}
            </div>
            <h1 style={{marginTop: '50px'}}>Video Demos</h1>
            <p>Click on a project below to see a video demonstration!</p>
            <div className={css.grid}>
                {videoDemos.map((i, idx) => (
                    <DemoItem 
                        thumbnailUrl={i.thumbnailUrl}
                        title={i.title}
                        description={i.description}
                        link={i.link}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    )
}

function DemoItem({thumbnailUrl, title, description, link}) {
    return (
        <a href={link} className={css.demo} target="_blank">
            <div className={css.imageWrapper}>
                <Image className={css.image} src={thumbnailUrl} width={300} height={169} />
            </div>
            <h1>{title}</h1>
            <p>{description}</p>
        </a>
    )
}
