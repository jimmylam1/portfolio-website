"use client"

import Image from "next/image";
import Link from 'next/link';
import LinkButton from "@/components/linkButton/LinkButton"
import Tag from "../tag/Tag";
import projectCss from './Project.module.css'
import animations from '../animations.module.css'
import useWindowSize from "@/hooks/useWindowSize";
import { useRef } from "react";
import { useViewport } from "@/hooks/useViewport";
import useEffectNoInitialMount from "@/hooks/useEffectNoInitialMount";

export function Project({title, image, category, tags, bulletPoints, pageUrl, links, setProjectViewed, showHr=true, canStart=true, forceShow=false}) {
    const triggerRef = useRef(null)
    const { viewed } = useViewport(triggerRef, 0.2)

    useEffectNoInitialMount(() => {
        setProjectViewed()
    }, [viewed])

    const windowSize = useWindowSize()    
    if (windowSize.width > 1100) {
        return DesktopLayout({title, image, category, tags, bulletPoints, pageUrl, links, showHr, triggerRef, viewed: viewed || forceShow, canStart})
    }
    return MobileLayout({title, image, category, tags, bulletPoints, pageUrl, links, showHr, triggerRef, viewed: viewed || forceShow, canStart})
}

function getLinkButtons(links) {
    let linksArray = []
    for (let key of Object.keys(links)) {
        if (links[key]) {
            linksArray.push(<LinkButton key={key} name={key} linkUrl={links[key]} />)
        }
    }
    return linksArray
}

// ------------------------------------------------------------------------------------------
// list all projects

function DesktopLayout({title, image, category, tags, bulletPoints, pageUrl, links, showHr, triggerRef, viewed, canStart}) {
    const show = viewed && canStart
    const textCss = `${projectCss.textContainer} ${show ? animations.animateLtoR : animations.hidden}`
    const imgCss = `${projectCss.image} ${projectCss.useHeight} ${show ? animations.animateRtoL : animations.hidden}`
    const hrCss = `${projectCss.hr} ${show ? animations.animateFadeIn : animations.hidden}`

    return (
        <>
            <div ref={triggerRef} className={projectCss.desktopContainer}>
                <div className={textCss}>
                    <div className={projectCss.headerWrapper}>
                        <Link className={projectCss.noLinkUnderline} href={pageUrl}><h1>{title}</h1></Link>
                    </div>
                    <h2>{category}</h2>
                    <div className={projectCss.tagContainer}>
                        {tags.map((t, idx) => <Tag key={idx} name={t}/>)}
                    </div>
                    <ul>
                        {bulletPoints.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                    <Link className={projectCss.pageLink} href={pageUrl}>View More Detail</Link>
                    <div className={projectCss.linkContainer}>
                        {getLinkButtons(links)}
                    </div>
                </div>
                <Link className={projectCss.imageWrapper} href={pageUrl}>
                    <Image className={imgCss} src={image} width={200} height={200} alt={title}/>
                </Link>
            </div>
            {showHr && <hr className={hrCss}/>}
        </>
    )
}

function MobileLayout({title, image, category, tags, bulletPoints, pageUrl, links, showHr, triggerRef, viewed, canStart}) {
    const show = viewed && canStart
    const containerCss = `${projectCss.mobileContainer} ${show ? animations.animateRtoL : animations.hidden}`
    const hrCss = `${projectCss.hr} ${show ? animations.animateFadeIn : animations.hidden}`

    return (
        <>
            <div ref={triggerRef} className={projectCss.mobileWrapper}>
                <div className={containerCss}>
                    <div className={projectCss.textContainer}>
                        <div className={projectCss.headerWrapper}>
                            <Link className={projectCss.noLinkUnderline} href={pageUrl}><h1>{title}</h1></Link>
                        </div>
                        <h2>{category}</h2>
                        <div className={projectCss.tagContainer}>
                            {tags.map((t, idx) => <Tag key={idx} name={t}/>)}
                        </div>
                    </div>
                    <Link href={pageUrl}>
                        <Image className={projectCss.image} src={image} width={200} height={200} alt={title}/>
                    </Link>
                    <div className={projectCss.textContainer}>
                        <ul>
                            {bulletPoints.map((b, idx) => <li key={idx}>{b}</li>)}
                        </ul>
                        <Link className={projectCss.pageLink} href={pageUrl}>View More Detail</Link>
                        <div className={projectCss.linkContainer}>
                            {getLinkButtons(links)}
                        </div>
                    </div>
                </div>
            </div>
            {showHr && <hr className={hrCss}/>}
        </>
    )
}

// ------------------------------------------------------------------------------------------
// for individual project page

export function ProjectPage({title, image, category, tags, links={}}) {
    const {demo, github, website} = links
    const projectPageLinks = {demo, github, website} // no video
    
    return ( 
        <>
            <div className={projectCss.textContainer}>
                <h1>{title}</h1>
                <h2 className={projectCss.categoryText}>{category}</h2>
                <div className={projectCss.tagContainerCentered}>
                    {tags.map((t, idx) => <Tag key={idx} name={t}/>)}
                </div>
            </div>
            {image && <Image className={projectCss.mainImage} src={image} width={300} height={300} alt={title} />}
            <div className={projectCss.textContainer}>
                <div className={projectCss.pageLinkContainer}>
                    {getLinkButtons(projectPageLinks)}
                </div>
            </div>   
        </>
    )
}
