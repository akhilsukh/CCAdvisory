import Navbar from './Navbar.js'
import Head from 'next/head'

function Layout (props) {
    return(
        <div>
            <Head>
                <title>{props.id} | CC Advisory</title>
            </Head>
            <Navbar index={props.index}/>
            <div className="flex justify-center py-10 px-8 md:py-16 md:px-16 lg:py-16 lg:px-16 xl:py-16 xl:px-16">{props.children}</div>
        </div>
    )
}

export default Layout;