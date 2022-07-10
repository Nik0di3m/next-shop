import React, { ReactNode } from 'react'
import Header from '../Header/Header'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header logo="/vercel.svg" />
            <main>{children}</main>
            <footer>footer</footer>
        </>
    )
}

export default Layout
