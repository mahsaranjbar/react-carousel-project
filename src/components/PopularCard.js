import '../../src/styles/popularCard.scss'
import { IoLocationSharp } from 'react-icons/io5';

function PopularCard(props) {

    const{
        id,
        imageUrl,
        title,
        location
    } = props.location;

    return(
        
        <div className="popularCard">
            <div className="col-24">            
                <div className="popularCard__item">
                    
                    <img src={imageUrl} />
                    
                    <div className="popularCard__item__bottom">
                        <div className="popularCard__item__bottom__title">
                            {title} 
                        </div>

                        <div className="popularCard__item__bottom__location">
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

export default PopularCard;