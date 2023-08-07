'use client'

import pageStyle from './Skills.module.css'
import skills from '../../data/skills'
import { useEffect, useRef, useState } from 'react'
import sleep from '@/scripts/sleep'
import { useViewport } from '@/hooks/useViewport'

import Image from "next/image";
import animations from '../animations.module.css'

export default function Skills() {
    const [visibleArray, setVisibleArray] = useState(skills.map(i => false))
    const [hasTriggered, setHasTriggered] = useState(false)
    const triggerRef = useRef(null)
    const { viewed } = useViewport(triggerRef, 0.1)

    const skillsArray = skills.map((s, idx) => (
        <SkillIcon 
            key={s.id} 
            imgPath={s.path} 
            name={s.name} 
            visible={visibleArray[idx]}
        />)
    )

    async function showSkills() {
        if (hasTriggered || !viewed)
            return

        setHasTriggered(true)
        for (let i = 0; i < skills.length; i++) {
            setVisibleArray(skills.map((_, idx) => idx <= i))
            await sleep(70)
        }
    }

    useEffect(() => {
        showSkills()
    }, [viewed])

    return (
        <div ref={triggerRef} className={pageStyle.iconContainer}>
            {skillsArray}
        </div>
    )
}

function SkillIcon({imgPath, name, visible=false}) {
    const containerClass = `${pageStyle.container} ${visible ? animations.animateRtoL : animations.hidden}`

    return (
        <div className={containerClass}>
            <Image src={imgPath} width={125} height={125} alt={name}/>
            <h4>{name}</h4>
        </div>
    )
}