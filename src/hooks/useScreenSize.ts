import { useMediaQuery } from "react-responsive";
const mobileWidth = 690
const tabletWidth = 890
const smallScreenWidth = 500
const specialScreenWidth = 940

export const useScreenSize = () => {
    const isMobile = useMediaQuery({ maxWidth: mobileWidth });
    const isTablet = useMediaQuery({ maxWidth: tabletWidth });
    const isSmallScreen = isTablet || isMobile;
    const isVerySmallScreen = useMediaQuery({ maxWidth: smallScreenWidth });
    const isSpecialScreenWidth= useMediaQuery({ maxWidth: specialScreenWidth });

    return { isMobile, isTablet, isSmallScreen, isVerySmallScreen, isSpecialScreenWidth };
};
