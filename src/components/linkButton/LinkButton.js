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
        <a className={`${buttonCss.container} ${name}`} href={linkUrl} target='_blank'>
            {textLookup[name]}
        </a>
    )
}