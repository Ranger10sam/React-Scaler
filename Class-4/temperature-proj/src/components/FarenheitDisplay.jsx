import React from 'react'

const FarenheitDisplay = ({temp}) => {
  
    let t = (temp*9) / 5 + 32
    return (
      <div>FarenheitDisplay
          <p>{t}°F</p>
      </div>
    )
}

export default FarenheitDisplay