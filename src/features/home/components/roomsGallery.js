import React, { useState } from 'react'

import * as Colors from '../../../config/color.config'
import Line from '../../../assets/image/line.png'
import * as Font from '../../../config/font.config'

const OurRooms = () => {
    const [hover, setHover] = useState(false)
    const _handleHover = (e) => {
        setHover(!hover)
        if (hover === true) {
            document.getElementById(e.target.id).style.transform = 'scale(1)'
        }
        else {
            document.getElementById(e.target.id).style.transform = 'scale(1.2)'
        }
    }
    return (
        <div className='container text-center'>
            <div className='d-flex flex-column align-items-center'>
                <span style={{ fontSize: 35, fontFamily: Font.bodyTitle }}>Our Rooms</span>
                <img className='py-2' src={Line} alt='line' style={{ width: '250px' }} />
                {/* file seprate */}
                <p style={{ color: Colors.bodyText }}>When you host a party or family reunion, the special celebrations let you streng then bonds with</p>
            </div>

            <div className='d-flex flex-row flex-wrap'>
                {RoomInfo.map((v, k) =>
                    <div className='col-lg-4 p-4' style={{ cursor: 'pointer' }} key={k}>
                        <div className='d-flex flex-column bg-light' style={{ transition: '1s' }}>
                            <div className='w-100' style={{ overflow: 'hidden' }} >
                                <img
                                    src={process.env.PUBLIC_URL + `${v.RoomImgUrl}`}
                                    id={v.id}
                                    onMouseLeave={(id) => _handleHover(id)}
                                    onMouseOver={(id) => _handleHover(id)}
                                    className='w-100 d-block'
                                    style={{ margin: '0 auto', transition: '1s' }}
                                    alt='rooms'
                                />
                            </div>
                            <div className='d-flex flex-column py-4'>
                                <span style={{ color: Colors.navbg, fontSize: 25, fontWeight: 'bold', transition: '1s' }}>{v.RoomType}</span>
                                <span style={{ color: Colors.textGold }} >${v.PricePerNight} / PER NIGHT</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default OurRooms

const RoomInfo = [
    { id: 1, RoomType: 'Single Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/DeluxeRoom/Deluxe1.jpg' },
    { id: 2, RoomType: 'Family Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/FamilyRoom/familyRoom1.jpg' },
    { id: 3, RoomType: 'Luxury Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/LuxuryRoom/luxuryRoom1.jpg' },
    { id: 4, RoomType: 'Single Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/StandardRoom/standardRoom1.jpg' },
    { id: 5, RoomType: 'Single Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/StandardRoom/standardRoom1.jpg' },
    { id: 6, RoomType: 'Single Room', PricePerNight: 200, RoomImgUrl: '/images/rooms/StandardRoom/standardRoom1.jpg' },
]