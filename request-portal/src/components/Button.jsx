import React from 'react'

const Button = ({text, icon, onClick, className}) => {
  return (
    <div>
        <button onClick={onClick} className={`submit shadow-md btn bg-blue-500 hover:bg-blue-700 rounded font-bold px-4 py-2 ${className}`}>
            <span className={`flex items-center shadow-none`}>{icon} 
              <p>{text}</p>
            </span>
        </button>
    </div>
  )
}

export default Button