import './App.css'
import FoodCard from './component/FoodCard'
import Headerimage from '../src/pics/header-img.png'
import { MdDone } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';


function App() {
  const foodList = [
    {
      foodRate : 3.9,
      foodName : "Spicy Rote Pasta and Cheese",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter : 0,
      foodPrice : 139.01
    },

    {
      foodRate : 4.5,
      foodName : "Cured Salmon",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter : 0,
      foodPrice : 29.99
    },

    {
      foodRate : 5,
      foodName : "Poke with Chicken",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-3.png',
      foodOrderCounter : 0,
      foodPrice : 34.45
    },

    {
      foodRate : 2.8,
      foodName : "Macaroni baby with red sause",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter : 0,
      foodPrice : 15.99
    },

    {
      foodRate : 3.6,
      foodName : "Stake Beef with special oil",
      foodImageLink : 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter : 0,
      foodPrice : 12.99
    }
  ]

  return (
    <div>
      <header className='header'>
        <div className='headerOveraly'></div>

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
              foodRate={item.foodRate}
              foodName={item.foodName}
              foodImageLink={item.foodImageLink}
              foodOrderCounter={item.foodOrderCounter}
              foodPrice={item.foodPrice}
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

    </div>
  )
}

export default App
