import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Version from "../Sidebar/Version"

function Home({ children }) {
    return (
        <>
            <div className="lg:flex justify-between px-10 my-2">
                <div>
                    <div>
                        <Sidebar/>
                    </div>
                </div>
                <div className="Border border-2 lg:ml-10  mt-5"></div>
                <div className="flex w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Home