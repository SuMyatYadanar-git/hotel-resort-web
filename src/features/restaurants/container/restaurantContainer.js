import React from 'react'

import Breakfast from '../components/breakfast'
import Dinner from '../components/dinner'
import Lunch from '../components/lunch'
import Drink from '../components/drink'
import RestaurantHeader from '../components/restaurantHeader'


const Restaurant = () => {
    return (
        <div className='container-fluid p-0'>
            <RestaurantHeader/>
            <Breakfast />
            <Dinner />
            <Lunch />
            <Drink />
        </div>
    )
}
export default Restaurant