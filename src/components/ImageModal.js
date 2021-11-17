import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import '../styles/imageThumbnailsList.scss';
import '../styles/imageModal.scss';
import {capitalize} from '../utils/helperFunctions'
import { ImageContext } from '../contexts/ImageContext';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const ImageModal = ({selectedImage}) => {

  const { open, handleClose} = React.useContext(ImageContext);

  const {urls: {raw}, alt_description, user: {name, social: {instagram_username, twitter_username} }, likes} =  selectedImage;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <Button id='btn-cancel' onClick={handleClose}>X</Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedImage && <div className="image-list-container" >
                <div className='image-list-contents' id='modal-content'>
                    <img className='image' src={raw} alt={alt_description}/>
                    <div className='image-details'>
                        <p><FontAwesomeIcon className='social-icons' icon={faUser} size="1.5x"/>{capitalize(name)}</p>
                        <p><FontAwesomeIcon className='social-icons likes' icon={faHeart} size="1.5x"/>{likes}</p>
                        {instagram_username && <p><FontAwesomeIcon className='social-icons' icon={faInstagram} size="1.5x"/>{instagram_username}</p>}
                       {twitter_username && <p><FontAwesomeIcon className='social-icons twitter' icon={faTwitter} size="1.5x" />{twitter_username}</p>}
                        
                    </div>
                </div>
            </div>}
          </Typography>
        </Box>
    </Modal>
    </div>
  );
};

ImageModal.propTypes = {
  selectedImage: PropTypes.object.isRequired,
};

export default ImageModal;


