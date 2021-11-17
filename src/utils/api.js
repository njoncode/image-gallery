import axios from 'axios';

export const fetchImageThubmnails = () => {
    return axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        .then(res => res)
        .catch(err => console.error(err))
};

export const searchImages = (query) => {
    return axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        .then(res => res)
        .catch(err => console.error(err))
};


// export const searchImages = (page, query) => {
//     return axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=OSY5bXA97dn6KKf95i2Td7iNdR0mmHuxReYmqtmBYUI`)
//         .then(res => res.data)
//         .catch(err => console.error(err))
// };


