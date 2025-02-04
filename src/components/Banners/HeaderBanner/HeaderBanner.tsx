import './HeaderBanner.css';
import { DotSeparatorIcon } from "../../../icons/DotSeparatorIcon.tsx";
import headerBannerDesktop  from '../../../assets/headerBannerDesktop.png'
import headerBannerTablet from '../../../assets/headerBannerTablet.png'
import headerBannerMobile from '../../../assets/headerBannerMobile.png'
import {MenuIcon} from "../../../icons/MenuIcon.tsx";
import {useScreenSize} from "../../../hooks/useScreenSize.ts";
import {CloseIcon} from "../../../icons/CloseIcon.tsx";
import {useState} from "react";

export const HeaderBanner = () => {
    const { isMobile, isSmallScreen, isVerySmallScreen, isSpecialScreenWidth } = useScreenSize();
    const [isVisibleHeaderBanner, setIsVisibleHeaderBanner] = useState(true)

    return (
        <div style={{display: isVisibleHeaderBanner ? 'flex' : 'none'}} className="header-banner" role="banner">
            <picture>
                <source srcSet={headerBannerMobile} media="(max-width: 690px)" />
                <source srcSet={headerBannerTablet} media="(max-width: 890px)" />
                <img src={headerBannerDesktop} alt="Header Banner" className="header-banner-image" />
            </picture>
            <div style={{display: 'flex', gap: isMobile ? '4px' : '12px', alignItems: 'center'}}>
                <div style={{display: 'flex', gap: '0', alignItems: 'center'}}>
                    <p className='text-primary-l'>Black Friday</p>
                    <p style={{display: isMobile ? 'block' : 'none' }}>,</p>
                    <p style={{display: isSmallScreen ? 'none' : 'block' }} className='text-primary-m'>, 24-27 Nov</p>
                </div>
                <DotSeparatorIcon style={{display: isMobile ? 'none' : 'block'}} />
                <p className='text-gold'>10%OFF</p>
                <DotSeparatorIcon style={{display: isMobile ? 'none' : 'block'}} />
                <div style={{display: isMobile ? 'none' : 'flex', gap: '4px', alignItems: 'center'}}>
                    <p className="text-primary-m">Use code</p>
                    <p className="text-gold">10FRIDAY</p>
                    <p className="text-primary-m" style={{display: isSmallScreen ? 'none' : 'block' }}>at checkout</p>
                </div>
            </div>
            <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
                <button style={{display: isVerySmallScreen ? 'none' : 'flex'}} className="header-banner-button">
                    <p className='text-button'>Shop now</p>
                </button>
                <CloseIcon onClick={() => setIsVisibleHeaderBanner(false)} style={{display: isSpecialScreenWidth ? 'none' : 'block'}} />
            </div>

            <MenuIcon  style={{display: isVerySmallScreen ? 'block' : 'none'}} />
        </div>
    );
};
