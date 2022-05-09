import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Libraries
import { Tabs, Badge, useTheme } from '@geist-ui/core'

const Submenu = () => {
    const router = useRouter()
    const theme = useTheme()

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const scrollHandler = () =>
            setSticky(document.documentElement.scrollTop > 54)
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [setSticky])

    return (
        <>
            <nav className="SubmenuWrapper">
                <div className={`Submenu ${sticky ? 'SubmenuSticky' : ''}`}>
                    <div className="SubmenuInner">
                        <Tabs
                            value={router.pathname}
                            onChange={(route) => router.push(route)}
                        >
                            <Tabs.Item ml={0} label={'HOME'} value="/" />
                            <Tabs.Item label="THREE" value="/three" />
                            <Tabs.Item label="PROJECTS" value="/projects" />
                            <Tabs.Item label="EXPERIENCE" value="/experience" />
                        </Tabs>
                    </div>
                </div>
            </nav>
            <style jsx global>
                {`
                    .scroll-container {
                        padding-left: 0px !important;
                        border: none !important;
                    }
                    .SubmenuWrapper {
                        height: 50px;
                        position: relative;
                        overflow: hidden;
                        box-shadow: inset 0 -1px ${theme.palette.border};
                    }
                    .SubmenuSticky {
                        transition: box-shadow 1s ease;
                    }
                    .SubmenuSticky {
                        position: fixed;
                        z-index: 1100;
                        top: 0;
                        right: 0;
                        left: 0;
                        background: ${theme.palette.background};
                        box-shadow: ${theme.type === 'dark'
                            ? `inset 0 -1px ${theme.palette.border}`
                            : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
                    }
                    .SubmenuInner {
                        display: flex;
                        width: ${theme.layout.pageWidthWithMargin};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        height: 50px;
                        box-sizing: border-box;
                        overflow-y: hidden;
                        overflow-x: auto;
                        overflow: -moz-scrollbars-none;
                        -ms-overflow-style: none;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .SubmenuInner::-webkit-scrollbar {
                        display: none;
                    }
                    .SubmenuInner .content {
                        display: none;
                    }
                    .SubmenuInner .tabs,
                    .SubmenuInner header {
                        height: 100%;
                        border: none !important;
                    }
                    .SubmenuInner .tab {
                        height: calc(100% - 2px);
                        padding-top: 0;
                        padding-bottom: 0;
                        color: ${theme.palette.accents_5};
                        font-size: 0.825rem;
                    }
                    .SubmenuInner .tab:hover {
                        color: ${theme.palette.foreground};
                    }
                    .SubmenuInner .active {
                        color: ${theme.palette.foreground};
                        border: none !important;
                    }
                    @media (max-width: ${theme.breakpoints.sm.max}) {
                        .headerOptions {
                            display: none;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Submenu