import React from 'react'


const Card = ({bg = 'bg-gray-100',children}) => {  {/* children prop(built-in) is used for nested content*/}
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  )
}

export default Card
