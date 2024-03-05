import '../../SCSS/SearchBar.scss';
import img from './assets/search-outline.svg';

const SearchBar = () => {
    return (
        <section className='searchBar'>
            <div className='searchBar-Container'>
                <div className='btn-text-group'>
                    <button className='search-btn'><img src={img} alt='search-icon' className='search-img' /></button>
                    <input type='text' className='input-text' placeholder="Search Artist,Author,Novels..." />
                </div>
            </div>
        </section>
    );
}

export default SearchBar;