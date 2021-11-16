import {useRouter} from "next/router"


const Product = ({product}) => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const {id} = context.params
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()
    return {
      props: {
        product,
      },// In seconds
    }
}
export default Product