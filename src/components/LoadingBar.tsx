'use client'
import {CSSProperties, useEffect, useState} from "react";

const LoadingBar = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 500)

        return () => clearTimeout(timeout);
    }, [])

    const loadingBarStyle: CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'red',
        zIndex: 9999,
        opacity: isLoading ? 1 : 0,
        transition: 'width 1s, opacity 1s'
    }

    return (
        <div style={loadingBarStyle}></div>
    )
}

export default LoadingBar