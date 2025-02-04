import { useState, useEffect, useCallback } from 'react'
import { HeaderBanner } from './components/Banners/HeaderBanner/HeaderBanner.tsx'
import { FooterBanner } from './components/Banners/FooterBanner/FooterBanner.tsx'

function App() {
    const [isFooterVisible, setFooterVisible] = useState(false)

    const isFooterBannerClosedByUser = localStorage.getItem('isFooterBannerClosedByUser') === 'true'

    useEffect(() => {
        if (isFooterBannerClosedByUser) {
            setFooterVisible(false)
        }
        else {
            const handleScroll = () => {
                const header = document.querySelector('.header-banner')
                if (header) {
                    const isHeaderVisible = header.getBoundingClientRect().bottom > 0
                    setFooterVisible(!isHeaderVisible)
                }
            }

            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    }, [isFooterBannerClosedByUser])

    const handleCloseFooter = useCallback(() => {
        setFooterVisible(false)
        localStorage.setItem('isFooterBannerClosedByUser', 'true')
    }, [])

    return (
        <div className="App">
            <HeaderBanner />
            <main style={{ height: '200vh' }} />
            {isFooterVisible && <FooterBanner onClose={handleCloseFooter} />}
        </div>
    )
}

export default App