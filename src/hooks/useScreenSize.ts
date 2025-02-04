import { useMediaQuery } from "react-responsive";
import {
    DEFAULT_MOBILE_WIDTH,
    DEFAULT_SMALL_SCREEN_WIDTH,
    DEFAULT_SPECIAL_SCREEN_WIDTH,
    DEFAULT_TABLET_WIDTH
} from "../utils/consts.ts";


export const useScreenSize = () => {
    const isMobile = useMediaQuery({ maxWidth: DEFAULT_MOBILE_WIDTH });
    const isTablet = useMediaQuery({ maxWidth: DEFAULT_TABLET_WIDTH });
    const isSmallScreen = isTablet || isMobile;
    const isVerySmallScreen = useMediaQuery({ maxWidth: DEFAULT_SMALL_SCREEN_WIDTH });
    const isSpecialScreenWidth= useMediaQuery({ maxWidth: DEFAULT_SPECIAL_SCREEN_WIDTH });

    return { isMobile, isTablet, isSmallScreen, isVerySmallScreen, isSpecialScreenWidth };
};
