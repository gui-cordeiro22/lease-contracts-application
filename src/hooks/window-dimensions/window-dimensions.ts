// Dependencies
import { useEffect, useState } from "react";

// Types
import { WindowDimensionsProps } from "./window-dimensions.types";

export function useWindowDimensions(): WindowDimensionsProps {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensionsProps>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width, innerHeight: height } = window;
            return { width, height };
        }

        function handleResize() {
            const newDimensions = getWindowDimensions();
            setWindowDimensions((prevDimensions) => {
                if (prevDimensions.width !== newDimensions.width || prevDimensions.height !== newDimensions.height) {
                    return newDimensions;
                }
                return prevDimensions;
            });
        }
        setWindowDimensions(getWindowDimensions());

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
