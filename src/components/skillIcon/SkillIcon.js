import React from "react";
import css from './SkillIcon.module.css'
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: '400'})

export default function SkillIcon({imgPath, name}) {
    return (
        <div className={css.container}>
            <Image src={imgPath} width={125} height={125} alt={name}/>
            <h4 className={robotoMono.className}>{name}</h4>
        </div>
    )
}