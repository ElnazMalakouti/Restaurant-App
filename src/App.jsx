import './App.css'
import FoodCard from './component/FoodCard'
import Headerimage from '../src/pics/header-img.png'
import { MdDone } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import FoodModal from './component/FoodModal';
import OrdredFoodCart from './component/OrdredFoodCart';
import { useEffect } from 'react';



function App() {

  const foodList = [
    {
      foodId: 1,
      foodRate: 3.9,
      foodName: "Spicy Rote Pasta and Cheese",
      foodImageLink: 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter: 0,
      foodPrice: 139.01
    },

    {
      foodId: 2,
      foodRate: 4.5,
      foodName: "Cured Salmon",
      foodImageLink: 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter: 0,
      foodPrice: 29.99
    },

    {
      foodId: 3,
      foodRate: 5,
      foodName: "Poke with Chicken",
      foodImageLink: 'https://mahdimajdian.github.io/Resturant-App/assets/plate-3.png',
      foodOrderCounter: 0,
      foodPrice: 34.45
    },

    {
      foodId: 4,
      foodRate: 2.8,
      foodName: "Macaroni baby with red sause",
      foodImageLink: 'https://mahdimajdian.github.io/Resturant-App/assets/plate-1.png',
      foodOrderCounter: 0,
      foodPrice: 15.99
    },

    {
      foodId: 5,
      foodRate: 3.6,
      foodName: "Stake Beef with special oil",
      foodImageLink: 'https://mahdimajdian.github.io/Resturant-App/assets/plate-2.png',
      foodOrderCounter: 0,
      foodPrice: 12.99
    }
  ]

  const [foodModalProps, setFoodModalProps] = useState("")

  const [sumPrice, setSumPrice] = useState(0)


  const [orderCart, setOrderCart] = useState([])



  // const [discountCode, setDiscountCode] = useState({
  //   discountCodeInputVal: "",
  //   discountPercent: 0
  // })

  const [discountCodeInputVal , setDiscountCodeInputVal] = useState("")
  const [discountPercent , setDiscountPercent] = useState(0)



  const discount = [
    {
      code: "Golden",
      percent: 80
    },
    {
      code: "Silver",
      percent: 50
    },
    {
      code: "Boronze",
      percent: 20
    }
  ]


  const calculateDiscountPercent = () => {
    setDiscountPercent(
      discount.find(item => item.code === discountCodeInputVal)?.percent
    )
  }



  const addFoodOrder = (id) => {
    const temp = orderCart.find(item => item.id === id)

    if (temp) {
      setOrderCart(orderCart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1
          }
        } else {
          return item
        }
      }))
    } else {
      const newFoodOrder = {
        id: id,
        count: 1
      }
      setOrderCart([...orderCart, newFoodOrder])
    }
  }


  const removeFoodOrder = (id, fullRemove) => {
    const temp = orderCart.find(item => item.id === id)

    if (temp) {

      if (temp.count > 1 && !fullRemove) {
        setOrderCart(orderCart.map(item => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1
            }
          } else {
            return item
          }
        }))
      } else {
        setOrderCart(orderCart.filter(item => item.id !== id))
      }

    }


  }


  useEffect(() => {
    setSumPrice(orderCart.reduce((sum, current) => {
      const temp = foodList.find(item => item.foodId === current.id)
      if (temp) {
        const price = temp.foodPrice * current.count
        return sum + price
      }
      return sum
    }, 0))
  }, [orderCart])




  const foodCardClickHandler = (id) => {
    const clickedFood = foodList.find(item => item.foodId === id)
    const tempFoodModalProps = {
      foodId: clickedFood.foodId,
      foodName: clickedFood.foodName,
      foodRate: clickedFood.foodRate,
      foodImageLink: clickedFood.foodImageLink,
      foodOrderCounter: clickedFood.foodOrderCounter,
      foodPrice: clickedFood.foodPrice
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
            <img className='headerImg' src={Headerimage} />
          </div>
          <div className='lifeHealthyText'>Life Healthy</div>
        </div>


      </header>

      <div className='main'>
        <div className='left-panel'>
          <div className='foodCard-Container'>
            {
              foodList.map(item => {
                const tempFood = orderCart.find(food => food.id === item.foodId)
                return <FoodCard
                  foodId={item.foodId}
                  foodRate={item.foodRate}
                  foodName={item.foodName}
                  foodImageLink={item.foodImageLink}
                  foodOrderCounter={tempFood?.count ?? 0}
                  foodPrice={item.foodPrice}
                  foodModalProps={foodModalProps}
                  setFoodModalProps={setFoodModalProps}
                  onClickHandler={foodCardClickHandler}
                />
              })
            }
          </div>
        </div>


              {console.log(discountCodeInputVal)}
              {console.log(discountPercent)}              

        <div className='right-panel'>

          <div className='shoppingCart'>


            {orderCart.length > 0 ?
              orderCart.map(item => {
                const tempFood = foodList.find(food => food.foodId === item.id)
                return <OrdredFoodCart
                  count={item.count}
                  foodName={tempFood.foodName}
                  foodPrice={tempFood.foodPrice}
                  removeFoodOrder={() => removeFoodOrder(item.id, true)}
                  addFoodOrder={() => addFoodOrder(item.id)}
                  subFoodOrder={() => removeFoodOrder(item.id)}
                />
              })
              :
              <p className='emptyShopingCart'><i><FaShoppingCart /></i>Shoping cart is empty!</p>
            }


          </div>

          <div className='placeOrder-div'>
            <p className='discountLable'>Discount Code?</p>
            <div className='discountCodeInput-div'>
              <input className='discountCodeInput' placeholder='code' value={discountCodeInputVal} onChange={e => setDiscountCodeInputVal(e.target.value)} />
              <button className='discountCodeInput-btn' onClick={calculateDiscountPercent}><><MdDone /></></button>
            </div>


            <div className='details'>
              <p>
                Price:
                {sumPrice.toFixed(2)}
                $
              </p>
              <p>Taxes: {(sumPrice * 9 / 100).toFixed(2)}$ </p>
              <p>Discount:
                {((discountPercent * sumPrice) / 100).toFixed(2)}
                $
              </p>
            </div>

            <p className='totalPrice'>Total: <span> {(((sumPrice + (sumPrice * 9 / 100)))-((discountPercent * sumPrice) / 100)).toFixed(2)} $</span></p>
            <button className='placeOrder-btn'>Place Order</button>

          </div>

        </div>
      </div>


      {Boolean(foodModalProps) &&
        <FoodModal {...foodModalProps}
          setFoodModalProps={setFoodModalProps}
          foodCounter={orderCart.find(item => item.id === foodModalProps.foodId)?.count ?? 0}
          addFoodOrder={() => addFoodOrder(foodModalProps.foodId)}
          removeFoodOrder={() => removeFoodOrder(foodModalProps.foodId)}
        />}
    </div>
  )
}

export default App

