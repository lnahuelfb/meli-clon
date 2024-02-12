// import { useState } from "react"
import { Products } from "../interfaces/interfaces"

export const fetchProducts = async (limit: number = 20): Promise<Products[]> => {
  // const [isData, setData] = useState([])
  // const [loading, setLoading] = useState<boolean>(false)

  // setLoading(true)
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  const data: Products[] = await res.json()

  // setData(data)
  // setLoading(false)

  // return { isData, loading }
  return data
}