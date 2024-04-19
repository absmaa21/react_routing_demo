import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Impressum from "./components/Impressum";
import MenuItem from "./components/MenuItem";
import MenuPanel from "./components/MenuPanel";
import Drawer from "./components/Drawer";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="impressum" element={<Impressum/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <>
            <nav className={"nav"}>
                <ul className={"navbar list-unstyled gap-2 px-2 bg-dark w-100"}>
                    <li className={"nav-item"}>
                        <MenuItem title={"Home"} path={"/"}/>
                    </li>
                    <li className={"nav-item"}>
                        <MenuItem title={"Impressum"} path={"/impressum"}/>
                    </li>
                </ul>
            </nav>

            <div className={"row m-0"}>
                <Drawer title={"Tasks"}>
                    <MenuPanel title={"Friends"} collapsed={true}>
                        <MenuItem title={"Home"} path={"/"} useHoverEffect/>
                        <MenuItem title={"Impressum"} path={"/impressum"} useHoverEffect/>
                    </MenuPanel>
                </Drawer>

                <div className={"col bg-dark-subtle"}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;
