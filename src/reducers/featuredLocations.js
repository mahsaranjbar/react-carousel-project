import {
    RETRIEVE_FEATURED
  } from '../actions/Types';
  
const initialState = [];

const featuredLocationReducer = (featuredLocations = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_FEATURED:
            return payload;

        default:
            return featuredLocations;
    }
};

export default featuredLocationReducer;