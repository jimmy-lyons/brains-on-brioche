import React, { useState } from "react";
import { getMealData } from '../actions/fetchMeals.js'
import { useDispatch, useSelector } from 'react-redux';



const Input = () => {

  const userFridge = useSelector((state) => state.user.fridge)

  const [searchData, setSearchData] = useState({
    ingredients: ''
  })

  console.log(userFridge)

  // const mealsUrl = 'http://localhost:4000/meals/search';

  // const clear = () => {
  //   // setCurrentId(0);
  //   setSearchData({ ingredients: '' });
  // };

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    //this is what prevents the page re-rendering  
    dispatch(getMealData(userFridge.join(",")));
  };

  return (
    <div>
      {/* <h1 className="input--header">What's in your fridge?</h1> */}

      
        <button className="what-for-dinner-button" onClick={handleSubmit}>What's for Dinner?</button>
      
    </div>
    
  );
}

export default Input;