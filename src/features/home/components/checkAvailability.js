import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import originalMoment from 'moment'
import { extendMoment } from 'moment-range'

import MyDatePicker from '../../../tools/myDatePicker'
import MyDropDown from '../../../tools/myDropDown'
import MyButton from '../../../tools/myButton'
import * as Colors from '../../../config/color.config'
import * as RoutePath from '../../../config/route.config'

const AvailabilityCheck = props => {
    const moment = extendMoment(originalMoment)
    const today = moment()
    const [isOpen, setIsOpen] = useState(false)

    const [value, setValue] = useState(moment.range(today.clone().subtract(7, 'days'), today.clone()))
    const endDate = value.end.format("DD-MMM-YYYY")
    const startDate = value.start.format("DD-MMM-YYYY")

    const _handleSelect = (value) => {
        setValue(value)
        _handleToggle()
    }
    const _handleToggle = () => { setIsOpen(!isOpen) }

    return (
        <div className='text-left' style={{ color: Colors.textGold }}>
            <div className='d-flex flex-row flex-wrap justify-content-md-between justify-content-center'>
                <div className='flex-fill m-1' >
                    <span >HOTEL</span>
                    <div style={{ height: 60, lineHeight: 4.2 }}><MyDropDown /></div>
                </div>
                <div className='flex-fill m-1' >
                    <span>ARRIVAL DATE</span>
                    <MyDatePicker Date={startDate} HandleSelect={_handleSelect} value={value} HandleToggle={_handleToggle} IsOpen={isOpen} />
                </div>
                <div className='flex-fill m-1' >
                    <span>DEPATURE DATE</span>
                    <MyDatePicker Date={endDate} HandleSelect={_handleSelect} value={value}/>
                </div>
                <div className='flex-fill m-1' >
                    <span>HOTEL</span>
                    <div style={{ height: 60, lineHeight:4.2 }}><MyDropDown /></div>
                </div>
                <div className='flex-fill m-1 align-self-end' >
                  <Link to={`/${RoutePath.checkavailability}`} ><MyButton style={{ height: 60 }} text={'Check Availability'} /></Link>
                </div>
            </div>

        </div>

    )
}

export default AvailabilityCheck