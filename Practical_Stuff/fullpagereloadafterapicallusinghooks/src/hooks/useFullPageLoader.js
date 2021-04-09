import React from 'react'
import FullPageLoader from '../components/FullPageLoader'

const useFullPageLoader = () => {
    const [loading, setLoading] = useState(false)

    return [
        loading ? <FullPageLoader /> : null,
        ()=>setLoading(true),//display
        ()=>setLoading(false)//hide
    ]
}

export default useFullPageLoader
