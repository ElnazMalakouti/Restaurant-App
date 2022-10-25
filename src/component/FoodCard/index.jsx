import './style.css'
import { AiFillStar } from 'react-icons/ai';

const FoodCard = ({foodRate , foodName , foodImageLink , foodOrderCounter , foodPrice}) => {
    return(
        <div className="foodCard">
            <div className='foodCard-leftDiv'>
                <p className='foodRate'>{foodRate} <i><><AiFillStar/></></i></p>
                <p>{foodName}</p>
            </div>
            <div className='foodCard-rightDiv'>
                <img className='foodImage' src={foodImageLink}/>
                <div className='foodOrderCounter'>{foodOrderCounter}</div>
                <p className='foodPrice'><span>$</span> {foodPrice} </p>
            </div>
        </div>
    )
}

export default FoodCard