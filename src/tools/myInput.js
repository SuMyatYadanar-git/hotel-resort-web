import React from 'react'
import * as Colors from '../config/color.config'

const MyInput = (props) => {
    const { style, className, value, placeHolder, type, id } = props
    const defaultStyle = { width: '100%', padding: 20, fontSize: 12}
    const userStyle = style === undefined ? {} : style
    return (
        <input
            id={id}
            style={{ ...defaultStyle, ...userStyle, boxShadow: 'none',outline:'none',border:`1px solid ${Colors.navbg}`,borderRadius:0}}
            placeholder={placeHolder}
            className={`form-control ${className}`}
            onFocus={(e) => document.getElementById(id).style.border = `2px solid ${Colors.textGold}` }
            type={type === undefined ? 'text' : `${type}`}
            value={value} />
    )
}

export default MyInput