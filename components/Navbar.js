import Link from 'next/link'

function NavButton (props) {
    return(
        <Link href={props.target}>
            <button className="focus:outline-none hover:bg-gray-800 text-sm text-white py-1 px-2 mx-1 rounded-lg">
                {props.text}
            </button>
        </Link>
    )
}

function Navbar (){
    return (
        <nav className="justify-around flex p-4 bg-gray-900">
            <Link href="/"><h4 className="text-gray-100 hover:text-white font-medium text-xl cursor-pointer">CC Planner</h4></Link>
            <div>
                <NavButton text="Transfer" target="/transfer"/>
                <NavButton text="Tutoring" target="/tutor"/>
                <NavButton text="Q&A" target="/questions"/>
                <NavButton text="About Us" target="/about"/>
            </div>
        </nav>
    )
}

export default Navbar;