'use client'

import { useEffect, useRef, useState } from 'react'
import heroCss from './Hero.module.css'
import { Canvas, useFrame } from "@react-three/fiber";
import useWindowSize from '@/hooks/useWindowSize';
import { MeshPhongMaterial } from 'three';

export default function Hero({children}) {
    const [hasStarted, setHasStarted] = useState(false)
    const [starOverlayClasses, setStarOverlayClasses] = useState(`${heroCss.starOverlay}`)
    const windowSize = useWindowSize()

    useEffect(() => {
        setTimeout(() => {
            setHasStarted(true)
        }, 3000);
        // updateCanvas(bgRef.current, windowSize.width, windowSize.height)
        setStarOverlayClasses(`${heroCss.starOverlay} ${heroCss.showStarOverlay}`)
    }, [])

    let toroidClasses = `${heroCss.canvasWrapper}`
    if (hasStarted)
        toroidClasses += ` ${heroCss.show}`

    return (
        <div className={heroCss.hero}>
            <div className={starOverlayClasses}></div>
            <div className={heroCss.starDots}></div>
            <div className={toroidClasses}>
                <Canvas
                    shadows
                    camera={{position: [0, 0, -20]}}
                >
                    {/* <ambientLight intensity={0.5} color={0x489dff}/> */}
                    {/* <pointLight position={[-10, 0, -25]} intensity={3000} color={0x489dff}/>
                    <pointLight position={[10, 0, -25]} intensity={12000} color={0xff0000}/> */}
                    <pointLight position={[-10, 0, -25]} intensity={3000} color={0x0077ff}/>
                    <pointLight position={[10, 0, -25]} intensity={3000} color={0xff0000}/>
                    <Torus scale={Math.min(1, 1.3 * windowSize.width / windowSize.height)}/>
                    {/* <Test /> */}
                </Canvas>
            </div>
            <div className={heroCss.children}>
                {children}
            </div>
        </div>
    )
}

function Torus({scale=1}) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        return (
            meshRef.current.rotation.x += 0.003,
            meshRef.current.rotation.y += 0.003,
            meshRef.current.rotation.z += 0.008
        )
    })
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            position={[0, 1, 0]}
            ref={meshRef}
            scale={scale}
            rotation={[0.5, -0.5, 0]}
        >
            <torusGeometry args={[8, 2, 25, 100]} />
            {/* <meshStandardMaterial color={0x489dff} wireframe/> */}
            <meshStandardMaterial color={0xffffff} wireframe/>
        </mesh>
    )
}

function Test() {
    const meshRef = useRef()

    useFrame((state, delta) => {
        return (
            meshRef.current.rotation.y += 0.0003
        )
    })

    let points = []
    // const size = 9
    // const space = 3
    // for (let x = -size; x <= size; x += space) {
    //     for (let y = -size; y <= size; y += space) {
    //         for (let z = -size; z <= size; z += space) {
    //             if (Math.abs(x) === size || Math.abs(y) === size || Math.abs(z) === size)
    //                 points.push(<Point props={{position: [x, y, z]}} radius={0.2} />)
    //         }
    //     }
    // }
    function getCoordinates() {
        return [0, 0, 0].map(i => {
            const sign = Math.random() < 0.5 ? -1 : 1
            return sign * (50 + Math.random()*250)
        })
    }
    for (let i = 0 ; i < 750; i++) {
        points.push(<Point props={{position: getCoordinates()}} emissive={0xffffff}/>)
    }

    return (
        <group>
            <mesh
                position={[0, 0, 0]}
                ref={meshRef}
                scale={1}
            >
                {points}
            </mesh>
        </group>

    )
}

function Point({props, radius=0.25, emissive=0x000000}) {
    return (
        <mesh
            {...props}
            scale={1}
        >
            <sphereGeometry args={[radius, 25, 25]} />
            <meshStandardMaterial color={0x489dff} emissive={emissive}/>
        </mesh>
    )
}
