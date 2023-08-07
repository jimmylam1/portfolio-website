import { useEffect, useState } from 'react'
import modalCss from './Modal.module.css'

export default function Modal({color, header, content, handleClose}) {
    let _mainClasses = [modalCss.main]
    if (color === 'green')
        _mainClasses.push(modalCss.greenEdge)
    else if (color === 'red')
        _mainClasses.push(modalCss.redEdge)

    const [bgClasses, setBgClasses] = useState([modalCss.background])
    const [mainClasses, setMainClasses] = useState(_mainClasses)

    function handleClick() {
        setBgClasses(prev => [...prev, modalCss.hideBackground])
        setMainClasses(prev => [...prev, modalCss.hideMain])
        setTimeout(() => {
            handleClose()
        }, 450);
    }

    return (
        <div className={modalCss.container}>
            <div className={bgClasses.join(" ")} onClick={handleClick}>
                <div className={mainClasses.join(" ")}>
                    <h2>{header}</h2>
                    <p>{content}</p>
                    <div className={modalCss.buttonWrapper}>
                        <button onClick={handleClick}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}