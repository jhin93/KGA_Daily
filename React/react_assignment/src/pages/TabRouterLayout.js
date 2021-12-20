import {Outlet, Link} from "react-router-dom";
import "./Layout.css"

const TabRouterLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/archAngel">archAngel</Link>
                    </li>
                    <li>
                        <Link to="/calc">Calc</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}

export default TabRouterLayout;




