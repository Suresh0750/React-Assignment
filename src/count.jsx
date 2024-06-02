
import React,{useState} from "react"
import PropTypes from 'prop-types'
// import svg from '/reset.svg'

function CountNum(){

    const style = {
        cursor : 'pointer'
    }
    const [value,valFunc] = useState(0)

    const [inc,incFun] = useState()
    const [dec, decFun] = useState()

    const updateInc = ()=>{
        valFunc(value+1)
    }
    const updateDec = ()=>{
        valFunc(value-1 !=-1 ? (value-1) : 0)
    }
    return (
        <div className="countDiv">
            <div className="insideDiv">
                value : {value}
            </div>
            <div className="insideDiv insideFlex">
                <button style={style} onClick={updateInc}>➕</button>
                <button style={style} onClick={updateDec}>➖</button>
            </div>
        </div>
    )
}





export default CountNum


