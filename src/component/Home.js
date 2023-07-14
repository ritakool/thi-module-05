import Footer from "./page/Footer";
import Header from "./page/Header";
import Navibar from "./page/Navibar";
import {Link, Outlet} from "react-router-dom";

export default function Home() {
    return (
        <>
            <Header/>
            <Navibar></Navibar>
            <Link to={'/list'}>List tour</Link>||<Link to={'/create'}>Create</Link>
            <hr/>
            <Outlet></Outlet>
            <hr/>
            <Footer/>
        </>
    )
}