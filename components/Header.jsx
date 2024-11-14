import Link from 'next/link';
import { Button } from './ui/button';
import { Nav } from './Nav';
import MobileNav from './MobileNav';

export const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white px-5'>
            <div className='contrainer mx-auto flex justify-between items-center'>
                {/* logo */}
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Sharone<span className='text-accent'>.</span>
                    </h1>
                </Link>

                {/* desktop nav & employ me button */}
                <div className="hidden  xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                        <Button>Employ me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;
