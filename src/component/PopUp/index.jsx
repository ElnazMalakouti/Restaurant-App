import './style.css'
import { IoMdCloseCircle } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';

const PopUp = ({foodRate , foodName , foodImageLink , foodPrice}) => {
    return(
        <div className='popUp-container'>
            <div className='closeBtn-div'>
                <i><><IoMdCloseCircle/></></i>
            </div>
            <img className='foodImg' src='https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png'/>
            <p className='foodName'>Cured Salmon</p>
            <div className='rateAndPrice'>
                <p>29.99<span>$</span></p>
                <p>4.5 <i><><AiFillStar/></></i></p>
            </div>
            <div className='countAndTotal'>
                <div className='count-div'>
                    <button><><FaMinus/></></button>
                    <p>0</p>
                    <button><><FaPlus/></></button>
                </div>
                <p>Total:0.00<span>$</span></p>
            </div>
        </div>
    )
}

export default PopUp