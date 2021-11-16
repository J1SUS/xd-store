import Link from "next/link"
import { useState, useEffect } from "react";
import {faAddressBook, faEllipsisH, faEllipsisV} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [categories, setcategories] = useState([])
  async function loadData() {
    const res = await fetch("https://fakestoreapi.com/products/categories/")
    setcategories(await res.json())
  }
  useEffect(() => {
    loadData()
  }, [])
  
  const [isOpen, setisOpen] = useState(false)
    return (
      <nav className="w-full py-3 flex flex-row  items-center rounded-b-sm shadow-md lg: justify-between ">
        <h1 className="ml-5 text-purple-600 font-bold text-xl">
          <Link href="/">
            <a>
              XD <span className="brand-logo font-semibold text-black">Store</span>
            </a>
          </Link>{""}
        </h1>
        <ul className="menu-list hidden lg:flex flex-row justify-between">
          {categories.map((a) => (
            <li className="px-11 text-blue-white" key={categories.indexOf(a)}>
              <Link href={"/products/categories/" + a} >
                <a>{a}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setisOpen(!isOpen)} className="lg:hidden mr-4">{isOpen ? <FontAwesomeIcon icon={faEllipsisH} size="2x"/> : <FontAwesomeIcon icon={faEllipsisV}  size="2x"/>}</button>
        {(isOpen) ? SideMenu(categories, setisOpen, isOpen) : undefined}
      </nav>
    );
}


function SideMenu(categories, setisOpen, isOpen) {
  return(
    <div className="h-screen  fixed w-1/2 sm:w-1/4 top-14 lg:hidden bg-indigo-600">
<ul className=" menu-list flex flex-col justify-center items-center">
          {categories.map((a) => (
            <li className="py-2 hover:bg-indigo-400 hover:text-purple-200 text-white" key={a.index}>
              <button onClick={() => setisOpen(!isOpen)}>
              <Link href={"/products/categories/" + a} >
                <a>{a}</a>
              </Link>
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
}