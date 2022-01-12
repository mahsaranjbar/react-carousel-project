import Carousel, { NextButton, PreviousButton } from 'nuka-carousel';
import '../../src/styles/popular.scss'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePopular } from "../actions/PopularLocations";
import PopularCard from './PopularCard';

const Popular = (props) => {

    const popularLocations = useSelector(state => state.popularLocations);
    const [searchResults, setSearchResults] = useState([]);
    let result;
    let filter = props.filter;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrievePopular());            
    }, []);    

    useEffect(() => {      
        if (filter != "") {
            result = popularLocations.filter(location =>
                location.title.toLowerCase().includes(filter)
            );
            setSearchResults(result);
        }
        else {
            setSearchResults([...popularLocations]);
        }
        
    }, [filter]);

    return(
        <>            
            <div className="row">
                <div className="col-24"> 
                    <div className="popular__header">Popular around you</div>

                    <div className="popular__carousel">
                        <Carousel
                        slideIndex={0}
                        slidesToShow={3.6}
                        cellSpacing={25}  
                        //scrollMode={'page'}
                        //slideListMargin={20}
                        //slidesToScroll={10}
                        //transitionMode={'fade'}
                        //withoutControls={false}
                        //wrapAround={true}                    
                        >                            
                           {
                            (filter == "") ?
                            popularLocations &&
                            popularLocations.map((location) => (
                                <PopularCard 
                                    location = {location}
                                    key={location.id}/>))
                            :
                            searchResults &&
                            searchResults.map((location) => (
                                <PopularCard 
                                    location = {location}
                                    key={location.id}/>
                            ))} 
                        </Carousel>
                    </div>                                  
                </div>
            </div>            
          
        </>
    )
}

export default Popular;