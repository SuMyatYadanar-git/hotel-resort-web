import React from 'react'
import * as Colors from '../config/color.config'

const MyInput = (props) => {
    const { style, className, value, placeHolder, type, id,height,width } = props
    const defaultStyle = { width: width===undefined?'100%':width, padding: 20, fontSize: 12,height:`${height}`}
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