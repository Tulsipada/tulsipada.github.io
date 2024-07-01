import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, Blog, About, Skills, Education, Experience, Contacts, Projects, Services, Testimonials } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {/* <Achievement /> */}
            <Services />
            <Testimonials />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
