import Navbar from './Navbar.js'
import Head from 'next/head'

function Layout (props) {
    return(
        <div>
            <Head>
                <title>{props.id} | CC Advisory</title>
            </Head>
            <Navbar index={props.index}/>
            <div className="flex justify-center p-8 md:p-10 lg:p-12 xl:p-16">{props.children}</div>
        </div>
    )
}

export default Layout;