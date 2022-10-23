import './App.css'
import FoodCard from './component/FoodCard'
import Headerimage from '../src/pics/header-img.png'

function App() {
  const foodList = [
    {
      foodRate : 3.9,
      foodName : "Spicy Rote Pasta and Cheese",
      foodOrderCounter : 0,
      foodPrice : 139.01
    },

    {
      foodRate : 4.5,
      foodName : "Cured Salmon",
      foodOrderCounter : 0,
      foodPrice : 29.99
    },

    {
      foodRate : 5,
      foodName : "Poke with Chicken",
      foodOrderCounter : 0,
      foodPrice : 34.45
    },

    {
      foodRate : 2.8,
      foodName : "Macaroni baby with red sause",
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
            <FoodCard/>
            <FoodCard/>
          </div>
        </div>
        <div className='right-panel'>
          shoping empty
        </div>
      </div>

    </div>
  )
}

export default App
