import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ImageContext } from '../contexts/ImageContext';
import '../styles/searchBox.scss';

const SearchBox = () => {

  const {handleChange} = React.useContext(ImageContext);

  return (
    <div>
        <form className='search-box-container'>
            <label htmlFor='search-image-query'><span className='label-search'>📷</span></label>
            <input 
                className='input-search' 
                type='search' 
                name='search-image-query' 
                placeholder='Search Images...'
                onChange={handleChange}
            />
            <FontAwesomeIcon className='search-icon' icon={faSearch} size="1x"/>
        </form>
    </div>
  );
}

export default SearchBox;

