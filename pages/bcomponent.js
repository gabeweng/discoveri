import { BuilderComponent, builder } from '@builder.io/react'
import { useEffect, useState } from 'react'

builder.init("ce66862eed914e0eb93f8fd47f834273")

export const BComponent = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null)

    useEffect(() => { 
        builder.get('page', { url: location.pathname })
        .promise().then(setBuilderContentJson)
    }, [])

    return <BuilderComponent model="page" content={builderContentJson} />
}

