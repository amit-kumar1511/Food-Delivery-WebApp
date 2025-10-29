import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FoodItem/Fooditem'
import { RxDoubleArrowUp } from "react-icons/rx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)
  const [showAll, setShowAll] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  // visibleItems logic
  let visibleItems = []
  if (category === 'All') {
    visibleItems = showAll ? food_list : food_list.slice(0, 4)
  } else {
    visibleItems = food_list.filter(item => item.category === category)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {visibleItems.map((item, index) => (
          <Fooditem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      {/* Button */}
      {category === 'All' && !showAll && (
        <div className='view-all-btn'>
          <button onClick={() => setShowAll(true)}>View All</button>
        </div>
      )}

      {showScroll && (
        <button className='scroll-to-top' onClick={scrollToTop}>
          <RxDoubleArrowUp />
        </button>
      )}
    </div>
  )
}

export default FoodDisplay
