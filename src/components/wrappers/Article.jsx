import "./Article.scss"
import React, {useEffect, useRef, useState} from 'react'
import StylizedTitle from "/src/components/generic/StylizedTitle.jsx"
import {useUtils} from "/src/helpers/utils.js"

function Article({ title, children, className }) {
    const utils = useUtils()
    const articleRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    /** Fade the article in when it scrolls into view, and reset it when its section is hidden **/
    useEffect(() => {
        const element = articleRef.current
        if(!element || !('IntersectionObserver' in window)) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting)
                    setIsVisible(true)
                else if(entry.boundingClientRect.height === 0)
                    setIsVisible(false)
            })
        }, {threshold: 0.1})

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <article ref={articleRef} className={`${className} article-reveal ${isVisible ? 'article-reveal-visible' : ''} w-100`}>
            {title && (
                <StylizedTitle text={utils.parseJsonText(title)} size={`default`} classList={`mb-3`}/>
            )}

            <div className={`article-content-wrapper mx-2 mx-md-3 text-4`}>
                {children}
            </div>
        </article>
    )
}

export default Article
