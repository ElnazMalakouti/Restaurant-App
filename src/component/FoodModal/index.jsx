import './style.css'
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const FoodModal = ({foodId , foodRate , foodName , foodImageLink , foodOrderCounter , foodPrice  , setFoodModalProps , foodCounter , addFoodOrder , removeFoodOrder}) => {
    

    

    return(
    <div className='popUp-fullScreen'>
        <div className={foodId ? 'popUp-container-show' : 'popUp-container-hidden'}>
            <div className='closeBtn-div' onClick={()=>setFoodModalProps("")}>
                <i><><IoMdCloseCircle/></></i>
            </div>
            <img className='foodImg' src={foodImageLink}/>
            <p className='foodName'>{foodName}</p>
            <div className='rateAndPrice'>
                <p>{foodPrice}<span>$</span></p>
                <p className='modalfooFRate'>{foodRate} <i><><AiFillStar/></></i></p>
            </div>
            <div className='countAndTotal'>
                <div className='count-div'>
                    <button onClick={removeFoodOrder}><><FaMinus/></></button>
                    <p>{foodCounter}</p>
                    <button onClick={addFoodOrder}><><FaPlus/></></button>
                </div>
                <p className='totalPrice-p'>Total:{(foodCounter * foodPrice).toFixed(2)}<span>$</span></p>
            </div>
        </div>
    </div>
    )
}

export default FoodModal