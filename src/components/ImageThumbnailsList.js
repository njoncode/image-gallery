import React from 'react';

import noImageFound from '../images/no-image-found.jpg';
import {capitalize } from '../utils/helperFunctions'
import { ImageContext } from '../contexts/ImageContext';
import Spinner from './Spinner';
import SearchBox from './SearchBox';
import ImageModal from './ImageModal';

import '../styles/imageThumbnailsList.scss';
import '../styles/noImageFound.scss'

const ImageThumbnailsList = () => {

    const {images, open, handleOpen, selectedImage, setSelectedImage, isLoading, isSearchResultEmpty, isError} = React.useContext(ImageContext);
    
    const handleImageClick = (clickedImage) => {
        console.log('ImageThumbnailsList clickedImage: ', clickedImage);
        setSelectedImage(clickedImage)
        handleOpen();
    };

    console.log('ImageThumbnailsList isSearchResultEmpty: ', isSearchResultEmpty);
    console.log('ImageThumbnailsList images: ', images);
  
    return (
        <>
        {isLoading && !isError && <Spinner />}
        <div>
            {!open && <SearchBox/>}
            {!open && !isLoading && !isSearchResultEmpty
            && (<div className="image-list-container">
                {images && images.length && images.map((image) => {
                    const {id, urls: {raw}, alt_description, user: {name}, likes} =  image ;
                    return (
                        <div className='image-list-contents' key={id} onClick={() => handleImageClick(image)}>
                            <div className='image-thumbnail-container'>
                                <img className='image-thumbnail' src={raw} alt={alt_description}/>
                            </div>
                            <div className='image-details'>
                                <p><span className='image-details-para'>User: </span>{capitalize(name)}</p>
                                <p><span className='image-details-para'>Likes: </span>{likes}</p>
                            </div>
                        </div>
                    )
                })}
            </div>)}
            {images && !images.length && isSearchResultEmpty && <img src={noImageFound} alt="No Results Found" className="no-results-found" />}
        </div>
        {open && <ImageModal selectedImage={selectedImage}/>}
        </>
  );
};

export default ImageThumbnailsList;
