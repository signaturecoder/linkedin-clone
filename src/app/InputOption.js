import React from 'react'
import './InputOption.css'
const InputOption = ({Icon, title, iconColor}) => {
    return (
        <div className="inputOption">
            {Icon && <Icon className="inputOption__icon" style={{color: iconColor}}/> } 
            <h3>{title}</h3>
        </div>
    )
}

export default InputOption
