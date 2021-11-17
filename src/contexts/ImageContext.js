import React from "react";
import PropTypes from 'prop-types';

import { fetchImageThubmnails, searchImages } from '../utils/api';

export const ImageContext = React.createContext();

export const ImageContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = React.useState(true);
     const [isError, setIsError] = React.useState(false);
    const [isSearchResultEmpty, setIsSearchResultEmpty] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [searchImageQuery, setSearchImageQuery] = React.useState(null);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setSearchImageQuery(e.target.value);
    };


      React.useEffect(() => {
        if(searchImageQuery) {
            searchImages(searchImageQuery)
                .then(res => {
                    console.log('process.env.REACT_APP_ACCESS_KEY: ', process.env.REACT_APP_ACCESS_KEY);
                    setImages(res.data.results);
                    setIsLoading(false);
                    setIsSearchResultEmpty(false);
                    if(!images.length) {
                        setIsSearchResultEmpty(true);    
                    }
                })
                .catch(err => {
                    console.log('Error Caught ImageContextProvider: searchImages: ', err)
                    setIsError(true);
                })
        } else fetchImageThubmnails()
          .then(res => {
              setImages(res.data);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000)
          })
          .catch(err => {
              console.log('Error Caught ImageContextProvider: fetchImageThubmnails: ', err)
              setIsError(true);
            })
      }, [searchImageQuery]);

    return (
        <ImageContext.Provider
            value={{images, open, handleOpen, handleClose, selectedImage, setSelectedImage, handleChange, searchImageQuery, setSearchImageQuery, isLoading, isSearchResultEmpty, isError}}
        >
            {children}
        </ImageContext.Provider>
    );
};


ImageContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};