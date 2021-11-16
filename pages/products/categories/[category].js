import {useRouter} from "next/router";
import ProductCard from "../../../components/Product_card";


const Products = ({products}) => {
    const router = useRouter()
    const { category } = router.query
    return (
        <div className="md:mx-3 mx-1 mt-4 flex flex-col items-center flex-nowrap">
        <h1 className=" bg-indigo-700 mb-5 text-white font-bold text-2xl md:text-5xl w-8/12 text-center p-4">{category.toUpperCase()}</h1>
        <ul className="flex flex-col md:flex-row items-center justify-evenly flex-wrap">
        {
        products.map((a) => {
         return <ProductCard product={a}/>
      }
    )
  }
        </ul>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const {category} = context.params
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const products = await res.json()
    return {
      props: {
        products,
      },// In seconds
    }
}
export default Products