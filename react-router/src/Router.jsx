import { useEffect, useState } from "react";
import { EVENT } from "./const";
import { match } from 'path-to-regexp'

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
    useEffect(() => {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname);
      }
  
      window.addEventListener(EVENT.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENT.POPSTATE, onLocationChange)
  
      return () => {
        window.removeEventListener(EVENT.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENT.POPSTATE, onLocationChange)
      }
    },[])

    let routerParams = {}
  
    const Pages = routes.find(({path}) => {
        if(path === currentPath) return true
        const matchUrl = match(path, {decode: decodeURIComponent})  
        const matched = matchUrl(currentPath)
        if(!matched) return false

        routerParams = matched.params
        return true
    })?.Component
  
    return Pages 
        ? <Pages routerParams={routerParams} /> 
        : <DefaultComponent />
  }