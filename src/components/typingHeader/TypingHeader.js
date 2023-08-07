'use client'

import sleep from "@/scripts/sleep"
import { useEffect, useRef, useState } from "react"
import textStyle from './TypingHeader.module.css'
import { useViewport } from "@/hooks/useViewport"


export default function TypingHeader({header, textInArray, delayMs=0}) {
    const [text, setText] = useState("")
    const [hasStarted, setHasStarted] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const triggerRef = useRef(null)
    const { viewed } = useViewport(triggerRef, 0.9)

    async function startTyping() {
        if (hasStarted)
            return
        setHasStarted(true)

        await sleep(delayMs)
        setIsTyping(true)
        for (let word of textInArray) {
            for (let char of word) {
                setText(prev => prev + char)
                await sleep(65)
            }
            await sleep(50)
        }
        setIsTyping(false)
        await sleep(3500)
        setIsDone(true)
    }

    useEffect(() => {
        if (viewed) {
            startTyping()
        }
    }, [viewed])

    let classes = [textStyle.text]
    if (!isTyping && !isDone)
        classes.push(textStyle.blink)
    if (isDone)
        classes.push(textStyle.noBlink)
    if (header === 'h2')
        classes.push(textStyle.h2)
    else if (header === 'h4')
        classes.push(textStyle.h4)

    return (
        <div className={textStyle.wrapper}>
            <p ref={triggerRef} className={classes.join(" ")}>{text}</p>
        </div>
    )
}