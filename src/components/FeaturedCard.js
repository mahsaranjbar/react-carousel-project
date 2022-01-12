import '../../src/styles/featuredCard.scss'
import { IoLocationSharp } from 'react-icons/io5';

function FeaturedCard(props) {
    const{
        id,
        imageUrl,
        title,
        location
    } = props.location;

    return(        
        <div className="featuredCard">            
            <div className="col-24">            
                <div className="featuredCard__item">
                    
                    <img src={imageUrl} />
                    
                    <div className="featuredCard__item__bottom">
                        <div className="featuredCard__item__bottom__title">
                            {title}
                        </div>
                        <div className="featuredCard__item__bottom__location">
                            <i className="icon-time">
                            <IoLocationSharp/>
                            </i>
                            <i style={{marginLeft : "5px"}}>{location}</i>
                        </div>
                        <div className="mt-4"></div>
                    </div>                   
                </div>        
            </div>
        </div>
    )

}

export default FeaturedCard;