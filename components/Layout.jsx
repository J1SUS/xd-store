import Navbar from "./NavBar";

function Body(props) {
    return (
        <div>
            <Navbar categories={props.categories}/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Body