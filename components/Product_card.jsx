import Link from "next/link"


function ProductCard({product}) {
    return (
        <li key={product.id} className="border-2 border-gray-600 my-3 w-2/3 md:w-1/3 md:mx-5 md:p-4 shadow-xl rounded-xl p-2">
          <Link href="">
          <div className="items-center">
            <img src={product.image} alt="product" className="p-4 radius-sm bg-indigo-700"/>
            <h1 className="text-sm text-center mt-2">{product.title}</h1>
            <h2 className="text-xl text-center font-semibold mt-2">{"Price:" + product.price}</h2>
            <h4 className="text-lg text-center mt-5">Category: <span><Link href={"/products/categories/" + product.category}><a className="text-indigo-700 font-semibold">{product.category}</a></Link></span></h4>
          </div>
          </Link>
        </li>
      )
}

export default ProductCard