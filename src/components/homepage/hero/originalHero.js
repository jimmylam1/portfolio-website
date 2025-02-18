'use client'

import { useEffect, useRef, useState } from 'react'
import heroCss from './Hero.module.css'
import { Canvas, useFrame } from "@react-three/fiber";
import useWindowSize from '@/hooks/useWindowSize';
import { MeshPhongMaterial } from 'three';
import Image from 'next/image';

export default function Hero({children, showToroid=false}) {
    const [starOverlayClasses, setStarOverlayClasses] = useState(`${heroCss.starOverlay}`)
    const windowSize = useWindowSize()
    const canvasRef = useRef();
    const [frame, setFrame] = useState(0)

    useEffect(() => {
        // updateCanvas(bgRef.current, windowSize.width, windowSize.height)
        setStarOverlayClasses(`${heroCss.starOverlay} ${heroCss.showStarOverlay}`)
    }, [])

    let toroidClasses = `${heroCss.canvasWrapper}`
    if (showToroid)
        toroidClasses += ` ${heroCss.show}`

    const saveImage = () => {
        if (canvasRef.current) {
          const dataURL = canvasRef.current.toDataURL();
          // Do something with the dataURL, e.g., download it as an image
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = 'toroid.png';
          link.click();
        }
      };

    return (
        <div className={heroCss.hero}>
            <div className={starOverlayClasses}></div>
            <div className={heroCss.starDots}></div>
            <div className={toroidClasses}>
                {/* <Canvas
                    shadows
                    camera={{position: [0, 0, -20]}}
                    ref={canvasRef}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <pointLight position={[-30, 0, -25]} intensity={5000} color={0x0077ff}/>
                    <pointLight position={[30, 0, -25]} intensity={5000} color={0xff0000}/>
                    <Torus scale={Math.min(1, 1.3 * windowSize.width / windowSize.height)} frame={frame}/>
                </Canvas> */}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image 
                        src='/images/output.gif'
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'min(100%, 70vh)', height: 'auto' }} // optional
                    />
                </div>
            </div>
            {/* <button style={{position: 'absolute', top: '100px', zIndex: '9999'}} onClick={saveImage}>Save Image</button> */}
            {/* <button style={{position: 'absolute', top: '150px', zIndex: '9999'}} onClick={() => setFrame(prev => prev - 1)}>-1</button> */}
            {/* <button style={{position: 'absolute', top: '150px', left: '50px', zIndex: '9999'}} onClick={() => setFrame(prev => prev + 1)}>+1</button> */}
            {/* <div style={{position: 'absolute', top: '150px', left: '100px', zIndex: '9999', color: 'white'}}>Frame {frame}</div> */}

            <div className={heroCss.children}>
                {children}
            </div>
        </div>
    )
}

function Torus({scale=1, frame=0}) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()
    // Set up state for the hovered and active state
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => {
    //     return (
    //         // meshRef.current.rotation.x += 0.003,
    //         // meshRef.current.rotation.y += 0.003
    //         meshRef.current.rotation.z -= 0.06281*2 + frame*0.00001
    //     )
    // })
    // Return view, these are regular three.js elements expressed in JSX

    // below for static image
    return (
        <mesh
            position={[3, 1.5, 0]}
            ref={meshRef}
            scale={1.35}
            // 15 frames, .04
            rotation={[0.3, -0.5, 0.06281 * (frame/10)]} // z = 0.06281 is one period OLD: z = 0.25133 is one period
            // rotation={[0,0, 0]}      30fps 
        >
            <torusGeometry args={[8, 2, 25, 100]} />
            {/* <meshStandardMaterial color={0x489dff} wireframe/> */}
            <meshStandardMaterial color={0xffffff} wireframe/>
        </mesh>
    )
}

function Torus_original({scale=1}) {
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
