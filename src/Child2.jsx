import { useFetch } from "./useFetch"

const Child2 = () => {
    const {loading,result,error} = useFetch("https://fakestoreapi.com/products")
  return (
    <>
      <h2>Rundom hook - useFetch</h2>
      { loading && <p>loading...</p> }
      { result && <div>{result.map(product=> <div key={product.id}>
         {product.id}.{product.title}
      </div>)} </div>}
    
    </>
  )
}

export default Child2