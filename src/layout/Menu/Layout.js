import { Link, Outlet } from "react-router-dom";

function Layout() {
    return ( 
        <>
            <div className="menu">
                <Link className="menu__item" to='/Home'>Главная</Link>
                <Link className="menu__item" to='/Taxi'>Дрифт-такси</Link>
                <Link className="menu__item" to='/Time_Attack'>Time Attack</Link>
                <Link className="menu__item" to='/Forza_Karting'>Forza Karting</Link>
            </div>
            
            <div className="page">
                <Outlet/>
            </div>

        </>
     );
}

export default Layout;