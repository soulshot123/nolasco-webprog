import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const AuthLayout = () => {
    return (
        <div className="min-h-screen parchment-bg text-knight-ink">
            <NavBar />
            <main className="flex flex-1 items-center justify-center px-4 pb-20 pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;

