import './SearchBar.css';
import LogoSearch from '../assets/logoSearch.png'

function SearchBar(){
    return (
        <section className="Search-section">
            <div className="Search-container">
                <div className='Search-logo'>
                    <img className='LogoSearch' src={LogoSearch} alt="" />
                </div>
                    <input 
                        type="text" 
                        className='Search-text' 
                        placeholder='Recherche' 
                    />
                </div>
        </section>
    )
}

export default SearchBar;
