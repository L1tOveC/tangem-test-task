import './FooterBanner.css';
import footerBannerDesktop from '../../../assets/footerBannerDesktop.png';
import footerBannerMobile from '../../../assets/footerBannerMobile.png';
import { CloseIcon } from '../../../icons/CloseIcon.tsx';
import { useMediaQuery } from 'react-responsive';
import {useCallback} from "react";

interface FooterBannerInterface {
    onClose: () => void;
}

export const FooterBanner: React.FC<FooterBannerInterface> = ({ onClose }) => {
    const isMobile = useMediaQuery({ maxWidth: 393 });

    const handleClickShop = useCallback(() => {
        console.log('Вы кликнули на кнопку, класс')
    },[])

    return (
        <div className="footer-banner">
            <img
                className="footer-banner-image"
                src={isMobile ? footerBannerMobile : footerBannerDesktop}
                alt="Footer Banner"
            />
            <CloseIcon onClick={onClose} className="close-button" />
            <div onClick={handleClickShop} className="shop-button"></div>
        </div>
    );
};
