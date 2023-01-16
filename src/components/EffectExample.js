import { useEffect, useState } from 'react'

const EffectExample = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log('effecto ejecutado')
    
        return () => console.log('efecto limpiado')
    }, [count])

    return (
        <>
            <div>Example</div>
            <button onClick={() => setCount(prev => prev + 1)}>sumar</button>
        </>
    )
}

export default EffectExample