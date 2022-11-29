import React from 'react'

const OutputRow = ({value, style}) => {
  return (
    <div >
        <input value={value} className ='screen' readOnly style={style}/>
    </div>
  )
}

export default OutputRow