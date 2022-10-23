import './style.css'

const FoodCard = ({foodRate , foodName , FoodPrice , foodOrderCounter}) => {
    return(
        <div className="foodCard">
            <div className='foodCard-leftDiv'>
                <p className='foodRate'>3.9</p>
                <p>Spicy Rote Pasta and Cheese</p>
            </div>
            <div className='foodCard-rightDiv'>
                <img className='foodImage' src='https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png'/>
                <div className='foodOrderCounter'>0</div>
                <p className='foodPrice'><span>$</span> 139.01</p>
            </div>
        </div>
    )
}

export default FoodCard