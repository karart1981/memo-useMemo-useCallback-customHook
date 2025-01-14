import { useEffect, useState } from "react"

export const useFetch = url =>{
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> setResult(data))
        .catch(err=> setError(err))
        .finally(()=> setLoading(false))
      },1000)
    },[])

    return {
        loading, error, result
    }
}