import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
    return (
        <div className="min-h-screen parchment-bg text-knight-ink">
            <NavBar />
            <main className="pb-20 pt-24">
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;