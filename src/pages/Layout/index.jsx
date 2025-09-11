import { Outlet } from "react-router-dom"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/Navbar"

function Layout(){

    return(
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default Layout