import buttonCss from './LinkButton.module.css'

/**
 * @param {'demo'|'github'|'website'|'video'} name
 */
export default function LinkButton({name, linkUrl}) {
    const textLookup = {
        demo: 'Live Demo',
        github: 'View GitHub',
        website: 'View Website',
        video: 'Watch Video'
    }

    return (
        <a className={`${buttonCss.container}`} href={linkUrl} target='_blank'>
            <div className={`${buttonCss[name]} ${buttonCss.icon}`}></div>
            {textLookup[name]}
        </a>
    )
}