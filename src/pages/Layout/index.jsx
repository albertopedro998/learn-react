import { Outlet } from "react-router-dom"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Feedback from "../../components/Feedback"

function Layout(){

    return(
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Feedback />
            <Footer />
        </>
    )
}

export default Layout