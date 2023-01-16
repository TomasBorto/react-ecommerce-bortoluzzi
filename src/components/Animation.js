import { useState, useEffect, useRef } from 'react'

const Animation = () => {
    const [background, setBackground] = useState('pink')
    
    const divRef = useRef()

    useEffect(() => {
        const handleOnScroll = () => {
            console.log(divRef)
            // const div = document.getElementById('scroll-color')
            const div = divRef.current
            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'orange' : 'pink'

            setBackground(backgroundColor)
        }

        window.addEventListener('scroll', handleOnScroll)

        return () => {
            window.removeEventListener('scroll', handleOnScroll)
        }
    })

    return (
        <div>
            <div 
                ref={divRef}
                // id="scroll-color" 
                style={{ height: '180vh', background}}>
                <h1>Animation Scroll</h1>
            </div>
        </div>
    )
}

export default Animation