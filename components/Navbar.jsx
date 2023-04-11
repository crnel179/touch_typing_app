import Link from 'next/link';

function Navbar() {
    return (
        <nav>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>Navbar</h1>
                </div>
                <div className={styles.links}>
                    <Link href='/'>Home</Link>
                    <Link href='#about'>About</Link>
                    <Link href='#course'>Course</Link>
                    <Link href='#reviews'>Reviews</Link>
                    <Link href='#contact'>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
