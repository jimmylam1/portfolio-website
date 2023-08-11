import { useEffect, useRef } from "react";

export default function useEffectNoInitialMount(callback, dependencyList) {
    const isInitialMount = useRef(true)

    useEffect(() => {
        if (!isInitialMount.current) {
            return callback()
        }
        isInitialMount.current = false
    }, dependencyList)

}