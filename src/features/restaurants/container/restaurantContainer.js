import React from 'react'

import Breakfast from '../components/breakfast'
import Dinner from '../components/dinner'
import Lunch from '../components/lunch'
import Drink from '../components/drink'


const Restaurant = () => {
    return (
        <div className='container-fluid'>
            <h1>Restaurant</h1>
            <Breakfast />
            <Dinner />
            <Lunch />
            <Drink />
        </div>
    )
}
export default Restaurant