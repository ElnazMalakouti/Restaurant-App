import './style.css'
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const FoodModal = ({foodId , foodRate , foodName , foodImageLink , foodOrderCounter , foodPrice  , setFoodModalProps}) => {
    const [foodCounter , setFoodCounter] = useState(0)
    const [foodTotalprice , setFoodTotalPrice] = useState(0)

    const totalSumPriceOperation = () => {
        var tempCounter = foodCounter
        tempCounter += 1
        var totalPrice = tempCounter * foodPrice
        setFoodTotalPrice(totalPrice)
        setFoodCounter(tempCounter)
    }
    const totalMinusPriceOperation = () => {
        var tempCounter = foodCounter
        if(tempCounter === 0){
            setFoodTotalPrice(0)
            setFoodCounter(0)
        }else{
            tempCounter -= 1
            var totalPrice = tempCounter * foodPrice
            setFoodTotalPrice(totalPrice)
            setFoodCounter(tempCounter)
        }
        
    }

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
                    <button onClick={()=>totalMinusPriceOperation()}><><FaMinus/></></button>
                    <p>{foodCounter}</p>
                    <button onClick={()=>totalSumPriceOperation()}><><FaPlus/></></button>
                </div>
                <p className='totalPrice-p'>Total:{foodTotalprice}<span>$</span></p>
            </div>
        </div>
    </div>
    )
}

export default FoodModal