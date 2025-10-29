import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import React, { useContext } from 'react'; 

const FoodDisplay = ({ category, searchTerm = "" }) => {  // 👈 accept searchTerm
  const { food_list } = useContext(StoreContext);

  const filteredList = food_list.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.length > 0 ? (
          filteredList.map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-results">No matching dishes found 😢</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
