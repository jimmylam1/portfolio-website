"use client"

import Image from "next/image";
import Link from 'next/link';
import Tag from "../tag/Tag";
import LinkButton from "../linkButton/LinkButton";
import projectCss from './Project.module.css'
import { Poppins } from "next/font/google";
import useWindowSize from "@/hooks/useWindowSize";

const poppins400 = Poppins({ subsets: ['latin'], weight: "400" })
const poppins200 = Poppins({ subsets: ['latin'], weight: "200" })
const poppins300 = Poppins({ subsets: ['latin'], weight: "300" })

export default function Project({title, image, category, tags, bulletPoints, pageUrl, links}) {
    const windowSize = useWindowSize()
    if (windowSize.width > 1100) {
        return desktopLayout({title, image, category, tags, bulletPoints, pageUrl, links})
    }
    return mobileLayout({title, image, category, tags, bulletPoints, pageUrl, links})
}

function desktopLayout({title, image, category, tags, bulletPoints, pageUrl, links}) {
    return (
        <div className={projectCss.desktopContainer}>
            <div className={projectCss.textContainer}>
                <h1 className={poppins400.className}>{title}</h1>
                <h2 className={poppins200.className}>{category}</h2>
                <div className={projectCss.tagContainer}>
                    {tags.map((t, idx) => <Tag key={idx} name={t}/>)}
                </div>
                <ul className={poppins300.className}>
                    {bulletPoints.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>
                <Link className={projectCss.pageLink} href={pageUrl}>View More Detail</Link>
                <div className={projectCss.linkContainer}>
                    {getLinkButtons(links)}
                </div>
            </div>
            <Image className={projectCss.image} src={image} width={200} height={200} alt={title}/>
        </div>
    )
}

function mobileLayout({title, image, category, tags, bulletPoints, pageUrl, links}) {
    return (
        <div className={projectCss.mobileWrapper}>
            <div className={projectCss.mobileContainer}>
                <div className={projectCss.textContainer}>
                    <h1 className={poppins400.className}>{title}</h1>
                    <h2 className={poppins200.className}>{category}</h2>
                    <div className={projectCss.tagContainer}>
                        {tags.map((t, idx) => <Tag key={idx} name={t}/>)}
                    </div>
                </div>
                <Image className={projectCss.image} src={image} width={200} height={200} alt={title}/>
                <div className={projectCss.textContainer}>
                    <ul className={poppins300.className}>
                        {bulletPoints.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                    <Link className={projectCss.pageLink} href={pageUrl}>View More Detail</Link>
                    <div className={projectCss.linkContainer}>
                        {getLinkButtons(links)}
                    </div>
                </div>
            </div>
        </div>
    )
}

function getLinkButtons(links) {
    let linksArray = []
    for (let key of Object.keys(links)) {
        if (links[key]) {
            linksArray.push(<LinkButton name={key} linkUrl={links[key]} />)
        }
    }
    return linksArray
}
