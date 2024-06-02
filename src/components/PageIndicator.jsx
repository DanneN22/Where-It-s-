import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledPageIndicator } from '../Styled/styled/PageIndicator.styled.jsx'

// Component 
import IndicatorDot from './IndicatorDot'

export default function PageIndicator() {
    const [pages, setPages] = useState([])

    useEffect(() => {
        checkActivePage()
    }, [])

    const checkActivePage = () => {
        const currentPath = location.pathname
        const newPages = [
            { path: '/', isActive: false, value: 'Home' },
            { path: '/events', isActive: false, value: 'Events' },
            { path: '/tickets', isActive: false, value: 'Tickets' }
        ]
        for (let i = 0; i < newPages.length; i++) {
            if (newPages[i].path === currentPath) {
                setPages(newPages[i].isActive = true)
            }
        }
        setPages(newPages)
    }

    return (
        <StyledPageIndicator>
            {
                pages.map((item) => {
                    return (
                        <Link to={item.path} key={item.path} style={{ textDecoration: 'none' }}>
                            <IndicatorDot isActive={item.isActive} value={item.value} />
                        </Link>
                    )
                })
            }
        </StyledPageIndicator >
    )
}