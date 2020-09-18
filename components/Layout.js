import Navbar from './Navbar.js'
import Head from 'next/head'

function Layout (props) {
    return(
        <div>
            <Head>
                <title>CC Planner</title>
            </Head>
            <Navbar />
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;