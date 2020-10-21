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

function Navbar (props){
    // var blog = document.getElementById('blog');
    // if(props.index === "1") blog.classList.add("underline");


    return (
    <header className="flex justify-between bg-teal-900 py-4 px-8 lg:px-16 xl:px-16">
            <div className="flex justify-between y-1 px-2 mx-1 rounded-lg hover:bg-teal-800">
                <Link href="/">
                    <div className="font-semibold text-xl cursor-pointer flex">
                        <span className="  flex">
                            <h4 className="text-blue-300 ">C</h4>
                            <h4 className="text-orange-300">C</h4>
                            <h4 className="font-light pl-1 text-gray-300">advisory</h4>
                        </span>
                    </div></Link>
            </div>

            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
                <svg className="fill-current text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                    </path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden lg:flex lg:items-end lg:w-auto" id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700">
                        <li><NavButton text="Blog" id="blog" target="/blog"/></li>
                        <li><NavButton text="Tutoring" id="tutor" target="/course"/></li>
                        <li><NavButton text="Q&A" id="question" target="/questions"/></li>
                        <li><NavButton text="About Us" id="about" target="/about"/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;