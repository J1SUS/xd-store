import Head from 'next/head'
import Navbar from '../components/NavBar'

export default function Home({categories}) {
  return (
    <div>
        <h1>yes</h1>
      
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products/categories')
  const categories = await res.json()
  return {
    props: {
      categories,
    },// In seconds
  }
}