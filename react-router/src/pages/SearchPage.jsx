import { useEffect } from "react"

export default function SearchPage({routerParams}) {
    useEffect(() => {
        document.title = `Search ${routerParams.query}`
    }, [])
    
    return (
        <h1>Search {routerParams.query}</h1>
    )
}