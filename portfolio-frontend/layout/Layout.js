import Head from 'next/head'
import React from 'react'

import { Navbar, Footer } from '../components'



const Layout = ({ children }) => {
  return (
    <div className=' bg-black'>
        <Head>
            <title>Daniel Kopilevich</title>
        </Head>
        <header >
            <Navbar />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout