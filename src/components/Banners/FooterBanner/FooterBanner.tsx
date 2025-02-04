import './FooterBanner.css'

interface FooterBannerInterface {
    onClose: () => void
}

export const FooterBanner: React.FC<FooterBannerInterface> = ({ onClose }) => {
    return (
        <div className="footer-banner">
            <button onClick={onClose} aria-label="Close banner">×</button>
            <p>Это нижний баннер!</p>
        </div>
)
}

