import Navbar from './Navbar.js'
import Head from 'next/head'

function Layout (props) {
    return(
        <div>
            <Head>
                <title>{props.id} | CC Planner</title>
            </Head>
            <Navbar index={props.index}/>
            <div className="flex justify-center py-10 px-8 lg:py-20 lg:px-20 xl:py-20 xl:px-20">{props.children}</div>
        </div>
    )
}

export default Layout;