import Link from 'next/link'
import { useRouter } from 'next/router'

function NavButton (props) {
    return(
        <Link href={props.target}>
            <button className={props.active == true ? "active-nav-button" : "inactive-nav-button"}>
                {props.text}
            </button>
        </Link>
    )
}

function Navbar (props){
    const router = useRouter();
    var pathnameArray = router.pathname.split("/")
    

    return (      
        <header className="flex justify-between bg-pacific-800 py-3 px-8 lg:px-16 xl:px-16 items-center">
               <div className="flex justify-between p-1 mx-1 rounded-lg hover:bg-pacific-900">
                   <Link href="/">
                       <div className="font-semibold text-xl cursor-pointer flex items-center">
                           <img className="h-6 m-1 mx-1" src={require("../public/icon.png")}></img>
                           <span className="flex mx-1">
                               <h1 className="text-yellow-300">C</h1>
                               <h1 className="text-blue-100">C</h1>
                               <h1 className="font-light pl-1 text-gray-200">advisory</h1>
                               {/* <div className="text-white">
                                   <p className="xs:block md:hidden lg:hidden xl:hidden 2xl:hidden">- XS</p>
                                   <p className="xs:hidden md:block lg:hidden xl:hidden 2xl:hidden">- MD</p>
                                   <p className="xs:hidden md:hidden lg:block xl:hidden 2xl:hidden">- LG</p>
                                   <p className="xs:hidden md:hidden lg:hidden xl:block 2xl:hidden">- XL</p>
                                   <p className="xs:hidden md:hidden lg:hidden xl:hidden 2xl:block">- 2XL</p>
                               </div> */}
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
               <input className="hidden" type="checkbox" id="menu-toggle"/>

               <div className="hidden lg:flex lg:items-end lg:w-auto" id="menu">
                   <nav>
                       <ul className="lg:flex items-center justify-between text-base text-gray-700">
                           <li><NavButton active={pathnameArray[1] === "blog" ? true : false} text="Blog" target="/blog"/></li>
                           <li><NavButton active={pathnameArray[1] === "course" ? true : false} text="Tutoring" target="/course"/></li>
                           <li><NavButton active={pathnameArray[1] === "questions" ? true : false} text="Q&A" target="/questions"/></li>
                           <li><NavButton active={pathnameArray[1] === "about" ? true : false} text="About Us" target="/about"/></li>
                       </ul>
                   </nav>
               </div>
           </header>
    )
}

export default Navbar;