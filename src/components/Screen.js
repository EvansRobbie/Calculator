import React from 'react'
import OutputRow from './OutputRow'

const Screen = ({calculate, answer}) => {
  return (
    <div>
        <OutputRow value ={calculate} style ={{fontSize:'1.3em', borderRadius:' 20px 20px 0 0'}}/>
        <OutputRow value ={answer}style ={{fontSize:'1.3em', borderRadius:' 0 0 20px 20px'}}/>
    </div>
  )
}

export default Screen