import Navbar from './Navbar.js'
import Head from 'next/head'

function Layout (props) {
    return(
        <div>
            <Head>
                <title>{props.id} | CC Advisory</title>
            </Head>
            <Navbar index={props.index}/>
            <div className="flex justify-center p-4 md:p-6 lg:p-8 xl:p-10">{props.children}</div>
        </div>
    )
}

export default Layout;