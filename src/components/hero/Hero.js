'use client'

import { useEffect, useState } from 'react'
import heroCss from './Hero.module.css'
import Image from 'next/image';

export default function Hero({children, showToroid=false}) {
    const [starOverlayClasses, setStarOverlayClasses] = useState(`${heroCss.starOverlay}`)

    useEffect(() => {
        setStarOverlayClasses(`${heroCss.starOverlay} ${heroCss.showStarOverlay}`)
    }, [])

    let toroidClasses = `${heroCss.canvasWrapper}`
    if (showToroid)
        toroidClasses += ` ${heroCss.show}`

    return (
        <div className={heroCss.hero}>
            <div className={starOverlayClasses}></div>
            <div className={heroCss.starDots}></div>
            <div className={toroidClasses}>
                <div className={heroCss.toroidWrapper}>
                    <Image 
                        src='/images/output.gif'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'min(100%, 70vh)', height: 'auto' }}
                    />
                </div>
            </div>
            <div className={heroCss.children}>
                {children}
            </div>
        </div>
    )
}
