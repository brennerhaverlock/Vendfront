import {useEffect, useState} from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        })
    }, [windowSize])

    return [windowSize];
};

export default useWindowSize;