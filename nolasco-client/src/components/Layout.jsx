import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="min-h-screen parchment-bg text-knight-ink">
            <NavBar />
            <main className="pb-20 pt-24 flex-1">
                <Outlet/>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
