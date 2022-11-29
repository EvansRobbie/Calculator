import React, { useState } from 'react'
import Screen from './Screen'

const Layout = () => {
    let [input, setInput] = useState('0')
    const [result, setResult] = useState('')
    const handleChange =(e) =>{
        const value = e.target.value
        if (value === '='){
            if(input !== ''){
                let response
                try {
                    response = eval(input)
                } catch (error) {
                    setResult('Math Error')
                }
                if(response === undefined){
                    setResult('Math Error')
                }
                else{
                    setInput(response)
                    setResult(input)
                }
            }
        }else if (value === 'C'){
            setInput('0')
            setResult('')
        }else if (value === 'DEL'){
            setInput(input.substring(0,input.length -1))
        }else if(input === '0'){
            setInput(value)
        }
        else{
            setInput(input += value)
        }
       


    }
  return (
    <div className = 'frame'>
        <div className='calculator'>
            <Screen calculate={input} answer = {result}/>
            <h3>Fx Robbie</h3>
            <br/>
            <div className = 'keys'>
            <input type ='button' value={'C'} onClick={handleChange} className= 'button clear' />
            <input type ='button' value={'DEL'} onClick={handleChange} className= 'button clear' />
            <input type ='button' value={'%'} onClick={handleChange} className= 'button operator' />
            <input type ='button' value={'/'} onClick={handleChange} className= 'button operator' />

            <input type ='button' value={'7'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'8'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'9'} onClick={handleChange} className= 'button ' />
            <input type ='button' value={'*'} onClick={handleChange} className= 'button operator' />

            <input type ='button' value={'4'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'5'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'6'} onClick={handleChange} className= 'button ' />
            <input type ='button' value={'-'} onClick={handleChange} className= 'button operator' />

            <input type ='button' value={'1'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'2'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'3'} onClick={handleChange} className= 'button ' />
            <input type ='button' value={'+'} onClick={handleChange} className= 'button operator' />

            <input type ='button' value={'.'} onClick={handleChange} className= 'button' />
            <input type ='button' value={'0'} onClick={handleChange} className= 'button ' />
            <input type ='button' value={'='} onClick={handleChange} className= 'button operator' />
            </div>
        </div>

    </div>
  )
}

export default Layout