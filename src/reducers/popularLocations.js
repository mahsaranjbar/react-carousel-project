import {
    RETRIEVE_POPULAR
  } from '../actions/Types';
  
const initialState = [];

const popularLocationReducer = (popularLocations = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_POPULAR:
            return payload;

        default:
            return popularLocations;
    }
};

export default popularLocationReducer;