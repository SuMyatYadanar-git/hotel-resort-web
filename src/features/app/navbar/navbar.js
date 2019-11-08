import React from 'react'
import { Link } from 'react-router-dom'
import { withMedia } from 'react-media-query-hoc'

import Logo from '../../../assets/icons/logo.png'
import * as RoutePath from '../../../config/route.config'
import { fsc } from '../../../helper/fontControlHelper'

const Navbar = (props) => {
    const { media } = props
    return (
        <div className='container'>
            <div className='d-flex flex-row flex-wrap justify-content-between' style={{ fontSize: fsc(media, 13) }}>
                <span className='flex-column'>
                    <i className='fa fa-map-marker pr-2' />
                    <span className='border-right pr-2'>225 Beach Street, Australian</span>

                    <i className='fa fa-phone px-2' />
                    <span>225 Beach Street, Australian</span>
                </span>

                <span>
                    <a href='#'> <i className='fa fa-facebook pr-3' /></a>
                    <a href='#'><i className='fa fa-twitter pr-3' /></a>
                    <a href='#'><i className='fa fa-instagram pr-3' /></a>
                    <a href='#'><i className='fa fa-youtube pr-3' /></a>
                </span>

            </div>

            <div className='d-flex flex-row justify-content-between bg-light text-dark py-2 px-4'>
                <div style={{ width: 80, height: 60 }}><img src={Logo} alt='Logo' className='w-100 h-100' /></div>
                {media.mobile
                    ? <span style={{ fontSize: 25 }}><i className='fa fa-list' /></span>
                    : <div className='nav nav-link' style={{ fontSize: fsc(media, 20) }}>
                        <Link className='text-decoration-none text-dark pr-4' to={`/${RoutePath.Home}`}>HOME</Link>
                        <Link className='text-decoration-none text-dark pr-4' to={`/${RoutePath.Room}`}>ROOM</Link>
                        <Link className='text-decoration-none text-dark pr-4' to={`/${RoutePath.Restaurant}`}>RESTAURANT</Link>
                        <Link className='text-decoration-none text-dark pr-4' to={`/${RoutePath.Contact}`}>CONTACT</Link>
                    </div>
                }
            </div>


        </div>
    )
}

export default withMedia(Navbar)