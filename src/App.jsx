import './App.css'
import FoodCard from './component/FoodCard'
import Headerimage from '../src/pics/header-img.png'
import { MdDone } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import FoodModal from './component/FoodModal';


function App() {
  const foodList = [
    {
      foodId : 1 ,
      foodRate : 3.9,
      foodName : "Spicy Rote Pasta and Cheese",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter : 0,
      foodPrice : 139.01
    },

    {
      foodId : 2 ,
      foodRate : 4.5,
      foodName : "Cured Salmon",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter : 0,
      foodPrice : 29.99
    },

    {
      foodId : 3 ,
      foodRate : 5,
      foodName : "Poke with Chicken",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-3.png',
      foodOrderCounter : 0,
      foodPrice : 34.45
    },

    {
      foodId : 4 ,
      foodRate : 2.8,
      foodName : "Macaroni baby with red sause",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter : 0,
      foodPrice : 15.99
    },

    {
      foodId : 5 ,
      foodRate : 3.6,
      foodName : "Stake Beef with special oil",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter : 0,
      foodPrice : 12.99
    }
  ]

  const [foodModalProps , setFoodModalProps] = useState("")

  const foodCardClickHandler = (id) => {
    const clickedFood = foodList.find(item => item.foodId === id)
    const tempFoodModalProps = {
      foodId : clickedFood.foodId,
      foodName : clickedFood.foodName,
      foodRate : clickedFood.foodRate,
      foodImageLink : clickedFood.foodImageLink,
      foodOrderCounter : clickedFood.foodOrderCounter,
      foodPrice : clickedFood.foodPrice
    }
    setFoodModalProps(tempFoodModalProps)

  }

  return (
    <div>
      <header className='header'>
        {/* <div className='headerOveraly'></div> */}

        <div className='header-container'>
          <div className='eatHealthyText'>Eat Healthy</div>
          <div className='headerImg'>
            <img className='headerImg' src={Headerimage}/>
          </div>
          <div className='lifeHealthyText'>Life Healthy</div>
        </div>
        

      </header>

      <div className='main'>
        <div className='left-panel'>
          <div className='foodCard-Container'>
          {
            foodList.map(item => {
              return <FoodCard 
              foodId={item.foodId}
              foodRate={item.foodRate}
              foodName={item.foodName}
              foodImageLink={item.foodImageLink}
              foodOrderCounter={item.foodOrderCounter}
              foodPrice={item.foodPrice}
              foodModalProps={foodModalProps}
              setFoodModalProps={setFoodModalProps}
              onClickHandler={foodCardClickHandler}
              />
            })
          }
          </div>
        </div>
        <div className='right-panel'>
          <div className='shoppingCart'><i><FaShoppingCart/></i>Your shopping cart is empty!</div>
          <div className='placeOrder-div'>
            <p className='discountLable'>Discount Code?</p>
            <div className='discountCodeInput-div'>
              <input className='discountCodeInput' placeholder='code'/>
              <button className='discountCodeInput-btn'><><MdDone/></></button>
            </div>
            <div className='details'>
              <p>Price: 0.00$ </p>
              <p>Taxes: 0.00$ </p>
              <p>Discount: 0.00$ </p>
            </div>
            <p className='totalPrice'>Total: <span>0.00$</span></p>
            <button className='placeOrder-btn'>Place Order</button>
          </div>
        </div>
      </div>


      {Boolean(foodModalProps) && <FoodModal {...foodModalProps} setFoodModalProps={setFoodModalProps}/>}
    </div>
  )
}

export default App
