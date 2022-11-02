import './style.css'

import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const OrdredFoodCart = ({foodName , count , foodPrice , addFoodOrder , subFoodOrder , removeFoodOrder , orderCart}) => {
    return(
        <div className='ordredFoodCart--container'>

            <div className='ordredFoodCart--child'>

                <p className='ordredFoodCart--foodName'>{foodName}</p>
                <button className='ordredFoodCart--btn__remove' onClick={removeFoodOrder}><><IoMdCloseCircle/></></button>

            </div>


            <div className='ordredFoodCart--child'>

                <div className='addORsub-count'>
                    <button className='count-btn' onClick={subFoodOrder}><><FaMinus/></></button>
                    <p className='foodCount'>{count}</p>
                    <button className='count-btn' onClick={addFoodOrder}><><FaPlus/></></button>
                </div>

                <p className='total'>{(count * foodPrice).toFixed(2)} <span>$</span></p>
            </div>
        </div>
    )
}

export default OrdredFoodCart