 import React from "react"
 import {Link} from 'gatsby'

 import Head from '../components/head'

import Layout from '../components/layout'

 const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
             <h1>Hello</h1>
             <h2> I'm Ronald, a full-stach developer living in Nashville.</h2> 

             {/* <p>Need a developer? <a href="/contact">Contact me</a> </p> */}

             {/* This is the correct way to link pages */}
             <p> Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
 } 

export default IndexPage
