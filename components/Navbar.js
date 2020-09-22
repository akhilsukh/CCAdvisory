import Link from 'next/link'

function NavButton (props) {
    return(
        <Link href={props.target}>
            <button className="focus:outline-none hover:bg-teal-800 text-sm text-white py-1 px-2 mx-1 rounded-lg">
                {props.text}
            </button>
        </Link>
    )
}

function Navbar (){
    return (
    <header className="flex justify-between bg-teal-900 py-4 px-8 lg:px-16 xl:px-16">
            <div className="flex justify-between">
                <Link href="/"><h4 className="text-gray-100 hover:text-white font-medium text-xl cursor-pointer">
                        CCPlanner
                        </h4></Link>
            </div>

            <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                <svg className="fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                    </path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden lg:flex lg:items-end lg:w-auto" id="menu">
                <nav>
                <ul class="lg:flex items-center justify-between text-base text-gray-700">
                    <li><NavButton text="Transfer" target="/transfer"/></li>
                    <li><NavButton text="Tutoring" target="/tutor"/></li>
                    <li><NavButton text="Q&A" target="/questions"/></li>
                    <li><NavButton text="About Us" target="/about"/></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;