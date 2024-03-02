import '../../SCSS/NavBar.scss';
import logo from './assets/logo.png';

const NavBar = () => {
    return (
        <nav>
            <div className='container'>
                <div className='website-brand-title'>
                    <img className='logo-image' src={logo} alt='logo' />
                </div>
                <p>
                    <span>Blogs</span>
                    <span>Create New Blog</span>
                    <span>Your Blogs</span>
                </p>
            </div>
        </nav>
    );
}

export default NavBar;