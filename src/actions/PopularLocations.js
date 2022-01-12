import {
    RETRIEVE_POPULAR
} from './Types';

const popularData = [
    {
        "id" : "1",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course1",
        "location" : "Sydney"
    },
    {
        "id" : "2",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course2",
        "location" : "Victoria"
    },
    {
        "id" : "3",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course3",
        "location" : "Perth"
    },
    {
        "id" : "4",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course4",
        "location" : "Adelaide"
    },
    {
        "id" : "5",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course5",
        "location" : "Tasmania"
    },
    {
        "id" : "6",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course6",
        "location" : "Gold Coast"
    },
    {
        "id" : "7",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course7",
        "location" : "Sydney"
    },
    {
        "id" : "8",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course8",
        "location" : "Victoria"
    },
    {
        "id" : "9",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course9",
        "location" : "Perth"
    },
    {
        "id" : "10",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course10",
        "location" : "Adelaide"
    },
    {
        "id" : "11",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course11",
        "location" : "Tasmania"
    },
    {
        "id" : "12",        
        "imageUrl" : require('../images/location01.png'),
        "title" : "Boat License Course12",
        "location" : "Gold Coast"
    }
];

export const retrievePopular = () => async (dispatch) => {
    dispatch({
        type : RETRIEVE_POPULAR,
        payload : popularData
    })
}
