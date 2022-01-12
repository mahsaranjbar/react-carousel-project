import {
    RETRIEVE_FEATURED
} from './Types';

const featuredData = [
    {
        "id" : "1",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Sydney"
    },
    {
        "id" : "2",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Victoria"
    },
    {
        "id" : "3",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Perth"
    },
    {
        "id" : "4",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Adelaide"
    },
    {
        "id" : "5",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Tasmania"
    },
    {
        "id" : "6",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Gold Coast"
    },
    {
        "id" : "7",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Sydney"
    },
    {
        "id" : "8",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Victoria"
    },
    {
        "id" : "9",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Perth"
    },
    {
        "id" : "10",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Adelaide"
    },
    {
        "id" : "11",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Tasmania"
    },
    {
        "id" : "12",        
        "imageUrl" : require('../images/location02.png'),
        "title" : "Kimberley",
        "location" : "Gold Coast"
    }
];

export const retrieveFeatured = () => async (dispatch) => {
    dispatch({
        type : RETRIEVE_FEATURED,
        payload : featuredData
    })
}
