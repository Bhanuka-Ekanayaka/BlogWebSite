import '../../SCSS/NavBar.scss';
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div className='container-navbar'>
                <div className='website-brand-title'>
                    <img className='logo-image' src={logo} alt='logo' />Blogs
                </div>
                <p>
                    <Link to='/'>Blogs</Link>
                    <Link to='/create/new-blog'>Create New Blog</Link>
                    <Link to='/blogs/user'>Your Blogs</Link>
                </p>
            </div>
        </nav>
    );
}

export default NavBar;