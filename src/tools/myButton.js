import React, { useState } from 'react'
import * as Colors from '../config/color.config'

const MyButton = (props) => {
    const [isHover, setIsHover] = useState(false)
    const _handleHover = () => { setIsHover(!isHover) }


    const { text, height, onClick, style, className, fontSize, type, Icon } = props
    const defaultStyle = {
        background: isHover ? Colors.textwhite : Colors.textGold,
        height: `${height === undefined ? '100%' : height}`,
         width: '100%',
        color: isHover ? Colors.textGold : Colors.textwhite,
        boxShadow: 'none',
        fontSize: `${fontSize}`,
        type: `${type === undefined ? 'submit' : `${type}`}`,
        border: `2px solid ${Colors.textGold}`,
        outline: 'none',
        padding: 10,
    }
    const userStyle = style === undefined ? {} : style
    return (
        <div>
            <button
                className={`btn ${className}}`}
                style={{ ...defaultStyle, ...userStyle }}
                onClick={onClick}
                onMouseOver={_handleHover}
                onMouseLeave={_handleHover}>
                {text}
                <div className='float-right'>
                  {Icon === undefined ? null
                    : <span>
                        <i className={`${Icon}`} />
                    </span>}  
                </div>
                

            </button>

        </div>

    )
}
export default MyButton