import '../../src/styles/featured.scss'

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveFeatured } from "../actions/FeaturedLocations";
import FeaturedCard from './FeaturedCard';

const Featured = () => {

    const featuredLocations = useSelector(state => state.featuredLocations);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrieveFeatured());
    }, []);    

    return(
        <>            
            <div className="row">
                <div className="col-24"> 
                    <div className="featured__header">Featured</div>
                    {featuredLocations &&
                    featuredLocations.map((location) => (
                        <FeaturedCard 
                            location = {location}
                            key={location.id}/>
                    ))} 
                </div>                                                 
            </div>           
        </>
    )
}

export default Featured;