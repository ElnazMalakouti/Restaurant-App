import './style.css'
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const FoodModal = ({foodId , foodRate , foodName , foodImageLink , foodOrderCounter , foodPrice , foodModalProps , setFoodModalProps}) => {
    return(
    <div className='popUp-fullScreen'>
        <div className={foodModalProps ? 'popUp-container-show' : 'popUp-container-hidden'}>
            <div className='closeBtn-div' onClick={()=>setFoodModalProps("")}>
                <i><><IoMdCloseCircle/></></i>
            </div>
            <img className='foodImg' src={foodImageLink}/>
            <p className='foodName'>{foodName}</p>
            <div className='rateAndPrice'>
                <p>{foodPrice}<span>$</span></p>
                <p>{foodRate} <i><><AiFillStar/></></i></p>
            </div>
            <div className='countAndTotal'>
                <div className='count-div'>
                    <button><><FaMinus/></></button>
                    <p>{foodOrderCounter}</p>
                    <button><><FaPlus/></></button>
                </div>
                <p>Total:0.00<span>$</span></p>
            </div>
        </div>
    </div>
    )
}

export default FoodModal