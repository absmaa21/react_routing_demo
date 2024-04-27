import React from 'react';
import './App.css';
import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Impressum from "./pages/Impressum";
import MenuItem from "./components/MenuItem";
import MenuPanel from "./components/MenuPanel";
import Drawer from "./components/Drawer";
import FriendsScreen from "./pages/FriendsScreen";
import AddFriend from "./pages/AddFriend";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="impressum" element={<Impressum/>}/>
                <Route path="friends" element={<FriendsScreen/>} />
                <Route path="friends/add" element={<AddFriend/>} />
                <Route path="*" element={<NoPage/>}/>
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <>
            <nav className={"nav bg-dark"}>
                <ul className={"navbar bg-white list-unstyled gap-2 px-2 w-100 mb-1"}>
                    <li className={"nav-item"}>
                        <MenuItem title={"Home"} path={"/"}/>
                    </li>
                    <li className={"nav-item"}>
                        <MenuItem title={"Impressum"} path={"impressum"}/>
                    </li>
                </ul>
            </nav>

            <div className={"row m-0"}>
                <Drawer title={"Tasks"}>
                    <MenuPanel title={"Friends"} collapsed={true}>
                        <MenuItem title={"Show"} path={"friends"} useHoverEffect/>
                        <MenuItem title={"Add"} path={"friends/add"} useHoverEffect/>
                    </MenuPanel>
                </Drawer>

                <div className={"col"}>
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default App;
