import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
